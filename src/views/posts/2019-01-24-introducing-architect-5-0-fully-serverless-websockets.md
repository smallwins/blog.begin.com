---
title: 'Introducing Architect 5.0: fully serverless WebSockets'
image: 'post-assets/arc44.jpg'
category: uncategorized
description: Realtime serverless compute is here! e’re thrilled to announce Architect 5.0 (Catalope), with full API Gateway WebSocket integration.
author: 'Brian Leroux'
avi: 'brian.jpg'
readtime: '5 mins'
published: 'January 24, 2019'
---


![arc44](post-assets/arc44.jpg)
<small>Photo by John Barkiple</small>

## We’re thrilled to announce Architect 5.0 (Catalope), with full API Gateway WebSocket integration. We can’t wait to share what we learned, current limitations, and our excitement for future serverless WebSockets support unlocks.

This article will:

- [Answer your burning questions about serverless WebSockets on AWS ](/2019-01-24-introducing-architect-5-0-fully-serverless-websockets)🔥
- [Show you how to build serverless WebSockets](/2019-01-24-introducing-architect-5-0-fully-serverless-websockets) with [JSF Architect](https://arc.codes/)

## Serverless WebSocket FAQ 🔌

### So what is a serverless WebSocket?

API Gateway, which marshals client connections for Lambda cloud functions, can creating endpoints with two protocols: `https`, and as of a few weeks ago, `wss`. This means WebSockets can now be an event source for Lambda. In other words, you can now add WebSockets to your application without running, maintaining, and operating servers/containers/VMs.

Architect provides endpoints pre-configured with Lambda handler functions deployed and ready to iterate; complete with local development and isolated staging and production environments.

## When and why would someone want to use a serverless WebSocket?

- Your app needs real time push of data; this includes (but is not limited to) web browsers. ([Many things](https://docs.aws.amazon.com/iot/latest/developerguide/protocols.html) speak the `wss` protocol!)
- You desire a stateless runtime execution model for your app layer; your app receives WebSocket events, processes them, possibly communicates back to socket clients by posting through an HTTP API, and **then terminates execution**
- You want **nothing to do with maintaining**, patching, or running WebSocket server resources
- You **desire usage-based billing** and want to only pay for resources in use; horizontal scaling should be transparent with **no pre-provisioning** of nodes/clusters/instances/VMs/containers in order to operate WebSocket-enabled infra

## What are the current limitations of serverless WebSockets? (As of January, 2019)

- 10,000 requests per second (can be increased)
- 500 new connections per second
- 128 KB message payload size
- 2 hour connection duration (of course, one can reconnect)
- 10 minute idle timeout

## How much does an API Gateway WebSocket API cost anyhow? 💸

The AWS free tier is very generous:

- 1M API calls
- 1M messages
- 750,000 connection minutes

After that its $3.50 per million calls. It’s worth noting that DynamoDB and Lambda have additional cost thresholds (and similarly generous free tiers).

## Building serverless WebSockets with Architect 5.0 (Catalope)

### Get started

Good news, getting started with serverless WebSockets on Architect doesn’t require an AWS account! First, let’s install Architect and touch a .arc file:

```bash
mkdir wsproj
cd wsproj
npm init --yes
npm i @architect/architect
touch .arc
```

Add the sections below to your `app.arc` file:

```arc
@app
mywsapp
@ws
# no further config required!
@http
get /
```

## Work locally

Architect apps work locally, and that includes full WebSocket support. Being able to preview locally, test headlessly, and deploy to identical staging and production environments is critical to both stable systems and well-rested developers.

Below we walk through a reduced-case app to demo setting up a socket and the stateless posting/receiving of messages.

To initiate the connection, we will render HTML on the `get /` route. It is probably worth mentioning this is demo code. How you arrive at an HTML string is totally up to you. Templating libraries are available to the Node runtime, many transpilers, or even just be lazy and `fs.readFile` a file straight out. Don’t forget the `type`! 🙇🏽‍♂️

```js
let arc = require("@architect/functions");
let static = arc.http.helpers.static;
let getURL = require("./get-web-socket-url");

/**
 * renders the html app chrome
 */
exports.handler = async function http(req) {
  return {
    statusCode: 200,
    headers: { "content-type": "text/html; charset=utf8" },
    body: `<!doctype html>
<html>
<body>
<h1>Web sockets echo server demo</h1>
<main>Loading...</main>
<input id=message type=text placeholder="Enter message" autofocus>
<script>
window.WS_URL = '${getURL()}'
</script>
<script type=module src=${static("/index.mjs")}></script>
</body>
</html>`,
  };
};
```

[View source on GitHub](https://github.com/arc-repos/arc-example-ws/blob/master/src/http/get-index/index.js)

> Notice above that we hardcode the WebSocket URL in the global window.WS_URL. The getURL function encapsulates the logic for returning the appropriate local, staging, and production URLs. Web Socket (wss://) endpoints are not the same as HTTP (https://) endpoints!

Start the sandbox by running `npx sandbox` and open `http://localhost:3333`.

The browser JavaScript lives in /public/index.mjs. Again, you can arrive at web browser code however you want. For this example wrote boring old web browser JavaScript.

```js
// get the web socket url from the backend
let url = window.WS_URL

// all the DOM nodes this script will mutate
let main = document.getElementsByTagName('main')[0]
let msg = document.getElementById('message')

// setup the web socket
let ws = new WebSocket(url)
ws.onopen = open
ws.onclose = close
ws.onmessage = message
ws.onerror = console.log

// connect to the web socket
function open() {
  let ts = new Date(Date.now()).toISOString()
  main.innerHTML = `<p><b><code>${ts} - opened</code></b></p>`
}

// report a closed web socket connection
function close() {
  main.innerHTML = 'Closed <a href=/>reload</a>'
}

// write a message into main
function message(e) {
  let msg = JSON.parse(e.data)
  main.innerHTML += `<p><code>${msg.text}</code></p>`
}

// sends messages to the lambda
msg.addEventListener('keyup', function(e) {
  if (e.key == 'Enter') {
    let text = e.target.value // get the text
    e.target.value = ''       // clear the text
    ws.send(JSON.stringify({text}))
  }
})
```

[View source on GitHub](https://github.com/arc-repos/arc-example-ws/blob/master/public/index.mjs)

When the web socket is opened, the `main` element is updated with a timestamp and the string ‘opened’. Subsequent messages received are appended to `main`. That’s it for receiving messages.

To send messages, the `msg` text input element listens for the enter key and sends a JSON encoded string to the` src/ws/ws-default` Lambda:

```js
let arc = require('@architect/functions')

/**
 * append a timestamp and echo the message back to the connectionId
 */
exports.handler = async function ws(event) {

  console.log('ws-default called with', event)

  let timestamp = new Date().toISOString()
  let connectionId = event.requestContext.connectionId
  let message = JSON.parse(event.body)
  let text = `${timestamp} - Echoing ${message.text}`

  await arc.ws.send({
    id: connectionId,
    payload: {text}
  })

  return {statusCode: 200}
}
```

[View source on GitHub](https://github.com/arc-repos/arc-example-ws/blob/master/src/ws/ws-default/index.js)

The `message` variable holds the the parsed value of the string sent from the web browser client. The `text` variable appends a timestamp, and then the Lambda immediately calls `arc.ws(event)send` to send the message back to the original `connectionId`.

Running `npx sandbox` also kicks up `ws://localhost:3333` and ensures `src/ws/*` Lambda functions are invoked appropriately. This is a completely stateless execution model for a long lived real time app. (Weird!)

## Deploying to AWS

- Generate corresponding AWS infra by running `npx create`.
- You’ll want to make note of the generated URLs for staging and production and modify `src/http/get-index/get-web-socket-url.js`
- Add a means to serve the `index.mjs` file, by either creating S3 buckets with `@static`, or create an `@http` function to serve it…serverlessly ✨
- Deploy local changes to staging by running `npx deploy`
- When you’re ready, ship to production: `npx deploy --production`

## Notes

- WebSocket security is its own art and we will be publishing further ideas and guidance on how to Web Socket safely 🧨
- [Begin Data](https://blog.begin.com/introducing-begin-data-dynamodb-made-ridiculously-easy-688a3d9ff392) is very helpful for managing clients’ `connectionId` 🎉

## Next Steps

- ✏️ Sign up for the [Begin.com](https://begin.com/) beta
- 🌟 [Star Architect on GitHub](https://github.com/arc-repos/architect)
- [Try out the demo app locally (no AWS required!)](https://github.com/arc-repos/arc-example-ws)
- 💓 Build something cool and [tell us about it on Twitter](https://twitter.com/begin)!

![arc45](post-assets/arc45.png)

<small>The fearsome Catalope!</small>

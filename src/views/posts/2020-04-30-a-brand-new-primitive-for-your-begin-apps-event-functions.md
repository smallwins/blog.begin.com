---
title: A brand new primitive for your Begin apps:event functions!
image: 'image.png' 
category: uncategorized
description: Today we’re introducing an entirely new primitive to Begin apps:event functions (@events)!
author: 'Ryan Block'
avi: 'ryan.png'
readtime: '4 mins'
published: 'April 30, 2020'
---


# A brand new primitive for your Begin apps: event functions!

![arc14](arc14.jpg)
<small>Photo by Traf</small>

Begin already gives you the most advanced set of serverless tools and application primitives in its class:

- [Static assets](https://docs.begin.com/en/getting-started/static-assets) for publishing any kind of web asset or page
- [HTTP functions](https://docs.begin.com/en/http-functions/api-reference) (@http), enabling full server-side rendering
- [Begin Data](https://docs.begin.com/en/data/begin-data), a super fast and simple way to persist and access app data.

Today we’re introducing **an entirely new primitive to Begin apps: event functions (@events)!**

## Try out Begin events functions right now

Hit this button to deploy an event functions example app to Begin in 30 seconds:

![Deploy to begin](deploy-to-begin.png)

## Event functions: what are they, and how do they work?

Asynchronous tasks are a very common requirement in most modern applications. For example: say someone signs up for your newsletter.

You don’t want your user to wait around for your application to respond while it makes API calls to your mailing list service.

Instead, what you probably want is to `publish` a JSON payload to a dedicated, asynchronous `subscribing event listener` — this is commonly known as the pub / sub (or publish / subscribe) model.

And now you can instantly create these new application events with Begin!

## Put an event on it

Adding an entire pub / sub message bus to your app may sound complex, but it’s remarkably straightforward in Begin:

### 1. Add an event to your .arc file

Add the following (example) lines to the .arc file in the root of your project:

```arc
@events
newsletter-add
```

### 2. Create an event handler to subscribe to newsletter-add

To tidy up the incoming event payload, we suggest running your event functions through our runtime helper, **Architect Functions:** `cd src/events/newsletter-add && echo {} > package.json && npm i @architect/functions`

Then create your event handler:

```js
// src/events/newsletter-add/index.js
let arc = require('@architect/functions')
async function newsletterAdd (event) {
  // Do some asynchronous stuff with your event payload here
  // ... such as calling to a newsletter API
  return
}
exports.handler = arc.events.subscribe(newsletterAdd)
```

### 3. Publish a new event to newsletter-add:

```js
// src/http/post-newsletter/index.js
let arc = require('@architect/functions')
exports.handler = async function handler (req) {
  let { email } = req.body
  // Quickly fire off an event to be completed asynchronously
  await arc.events.publish({
    name: 'newsletter-add',
    payload: { email }
  })
  // Then respond to your user immediately
  return {
    statusCode: 200
  }
}

```

That’s it, you’re done! Now you have an infinitely scalable pub / sub message bus at your disposal, meaning your application can respond quickly to user requests, and handle complex background tasks asynchronously.

Our goal at Begin is to unlock the full power of modern application architectures with minimal effort and complexity. With Begin event functions, the potential capabilities of your apps just grew enormously — we can’t wait to see what you’ll build!

## Next steps

- Deploy an example app with Begin events in 15 seconds (no credit card required):

![Deploy to begin](deploy-to-begin.png)

- [Try out another Begin tutorial, like a full CRUD app with Begin Data!](https://docs.begin.com/en/guides/crud-app)
- 🌟 Check out (and star!) Begin’s open core [OpenJS Architect](https://github.com/architect/architect) on GitHub
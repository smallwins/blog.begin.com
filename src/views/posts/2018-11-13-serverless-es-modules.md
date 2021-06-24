---
title: Serverless ES Modules
image: 'image.png' 
category: uncategorized
description: Frontend patterns with Architect serverless framework
author: 'Kristofer Joseph'
avi: 'kj.png'
readtime: '3 mins'
published: 'November 13, 2018'
---


# Serverless ES Modules

![arc51](arc51.jpg)
<small>Photo by Johny Goerend</small>

The vast majority of [browsers in use today support ES Modules](https://caniuse.com/#feat=es6-module), but until recently it’s been difficult to use modules in your project. Before widespread browser support, modules required a compilation step via a tool like Webpack (or Browserify, or Gulp, etc.) in order to convert them into something the browser could use.

But now you can use ES Modules in the browser without any extra overhead, making them the perfect companion to the serverless stack.

## Architect enables you to serve ES Modules to the browser via local workflows and from Lambda cloud functions.

This post will walk you through how to get started working with standards based JavaScript modules in an Architect serverless project.

> We’ll build on concepts from [serverless frontend patterns with Architect Views](https://blog.begin.com/serverless-front-end-patterns-with-architect-views-cf4748aa1ec7), so you may find it helpful to [check that out first](https://blog.begin.com/serverless-front-end-patterns-with-architect-views-cf4748aa1ec7).

1. Make a new Architect project

```bash
mkdir arc-esm
cd arc-esm
npm init --yes
npm i @architect/architect
```

Then create a `.arc` file in the root of your project:

```arc
@app
arc-esm
@http
get /js/:module
```

> `get /js/:module` is an example of a parameterized route. Hitting the url `/js/mycode.mjs` will pass `mycode.mjs` as `req.params.module` to your Lambda function handler.

Next, generate your app locally:

```bash
npx create --local
mkdir src/shared
mkdir src/views
```

Here’s what Architect project will look like on your local filesystem:

```
arc-esm
├── public/
├── src
│   ├── http
│   │   └── get-js-000module/
│   ├── shared/
│   └── views/
└── .arc
```

2. Add your index page to `src/public`

Create `src/public/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Architect ES Modules</title>
</head>
<body>
  <h1>Architect</h1>
  <div id="js-message"></div>
  <!-- ES MODULE 👇🏾 -->
  <script type="module" src="/js/main.mjs" crossorigin></script>
</body>
</html>
```

3. Add a view module

Create `src/views/hello.mjs`

```js
export default function Hello () {
  console.log('Why, hello there.')
  let message = document.getElementById('js-message')
  message.innerHTML = 'You are now rocking with ES Modules.'
}
```

> Tip: code in `src/views` is automatically shared to `HTTP GET` routes

4. Add a main entry point script

Create `src/views/main.mjs`

```js
import Hello from './hello.mjs'
Hello()
```

>Tip: having a main ES Module that imports all the scripts needed for a page allows you to load the rest of your modules in parallel. Modules are also cached in the browser so subsequent requests for the same module will not impact app performance.

4. Edit your Lambda function to return requested modules

Update `src/http/get-js-000module/index.js`

```js
const fs = require('fs')
const join = require('path').join
exports.handler = async function http(req) {
  let module = req.params.module
  let filePath = join(__dirname, 'node_modules', '@architect', 'views', module)
  let exists = fs.existsSync(filePath)
  if (exists) {
    let file = fs.readFileSync(filePath).toString()
    return {
      type: 'text/javascript; charset=utf8',
      body: file
    }
  } else {
    return {
      status: 404,
      type: 'text/html; charset=utf8',
      body: `${module} not found`
    }
  }
}
```

> Notice the response `Content-Type` of `text/javascript`, which is required by the browser to load ES Modules

5. Test it out in your local Architect sandbox

```bash
npx sandbox
```

You should see console output showing you that your module route has been mounted, as well as the local URL:

```bash
get /js/:module ....................... get-js-000module
Started HTTP "server" @  http://localhost:3333
```

> Alternatively, you can also add `"start": "npx sandbox"` to your `package.json` scripts and run your local sandbox server with npm start

[View the complete example project on GitHub](https://github.com/arc-repos/arc-example-es-modules)

-- @dam💕

---
title: Serverless Deno + React with server-side rendering on Begin
image: 'image.png' 
category: uncategorized
description: In this post we’ll look at an example app deployed on Begin with CI/CD.
author: 'Paul Chin Jr'
avi: 'paul.jpg'
readtime: '3 mins'
published: 'May 14, 2020'
---


![arc11](post-assets/arc11.jpg)
<small>Photo by Maria Oswalt on Unsplash</small>

[Deno](https://deno.land/) is a next-generation JavaScript runtime that features a built-in TypeScript compiler and code bundler, allowing developers to create applications without Webpack, Babel, or Rollup. Oh, and we can run Deno in serverless functions! Combining these results in a much cleaner codebase for server-side rendered React.js applications.

In this post we’ll look at an example app deployed on [Begin](http://begin.com/) with CI/CD.

## Prerequisites

You can install Deno in a few different ways. I chose to install it with `brew install deno`, but you can [check their docs](https://github.com/denoland/deno_install) for other methods.

## Try out a Deno + React app right now

Hit this button to deploy a **Deno React app** to Begin in 30 seconds (no credit card required):

![Deploy to begin](deploy-to-begin.png)

After deploying to Begin, you’ll have a new repo. Let’s clone it and take a closer look:

```bash
git clone https://github.com/{username}/{repo-name}.git
cd {repo-name}
npm install
```

## File structure

Begin uses the [OpenJS Architect](https://arc.codes/) project to help us structure our serverless applications and deploy them with infrastructure as code. The power of deterministic deployments directly to serverless backends comes from the `app.arc` file, so let’s open it up and take a look.

```arc
# .arc file
# your app's namespace
@app
deno-ssr
# the source folder of your static bundle output
@static
folder dist
# declaration of routes, which are individual http functions
@http
get /
```

You’ll also see a directory for `src/http/get-index` which contains all the code that gets executed from a user request to the root of your application.

What’s noticeably missing is a `rollup.config.js` or a `tsconfig.json` because Deno, the runtime, will compile and bundle the code for us. To use Deno in Begin, make sure there’s a `src/http/get-index/.arc-config` file that contains:

```arc
@aws
runtime deno
```

Begin will take care of the rest!

## Inside the app

Let’s start with `src/browser.tsx`, this file is the entry point for our client-side JavaScript that executes once all the DOM content is loaded.

```js
// src/browser.tsx
import { React, ReactDOM } from 'https://unpkg.com/es-react@16.8.60/index.js'
import { App } from './http/get-index/app.tsx'
window.addEventListener('DOMContentLoaded', () => {
  //@ts-ignore
  let el = window.document.getElementById('app')
  ReactDOM.hydrate(<App/>, el)
})
```

Because Deno can work with ES modules, we can use the `import` syntax and only load parts of the package we need from an URL. That’s pretty nifty — and efficient!

Next, let’s look at the `src/http/get-index/index.ts` file for our serverless function.

```js
// src/http/get-index/index.ts
import { render } from './render.tsx'
export async function handler() {
  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: await render()
  }
}
```

This file will generate the final response from our app and emit an HTML string to the client.

So what’s in the `src/http/get-index/render.tsx` file?

```js
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';
import { React } from "https://unpkg.com/es-react";
import { App } from './app.tsx';
export async function render() {
  let body = ReactDOMServer.renderToString(<App/>);
  return `<!DOCTYPE html>
<html>
...
<body>
  ...
  <div id=app>${body}</div>
  <script type="module" src=/_static/browser.js></script>
  ...
</body>
</html>
`;
}
```

This is the render function that gives us server-side rendering. It takes in a component, `<App/>` , and wraps it in an HTML document with a `<script>` tag to load the client-side bundle.

Now we can get to the beating heart of our app logic!

```js
// src/http/get-index/app.tsx
import React, { Component } from "https://unpkg.com/es-react";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      p: any;
    }
  }
}
type Props = {};
type State = {
  time: Date;
};
export class App extends Component<Props, State> {
  state = {
    time: new Date(),
  };
componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }
tick() {
    //@ts-ignore
    this.setState({
      time: new Date(),
    });
  }
render() {
    //@ts-ignore
    return <p>The current time is {this.state.time.toLocaleTimeString()}</p>;
  }
}
```

Our app is now a real-time clock that executes on the client to update the DOM every second with the current time.

![arc12](post-assets/arc12.jpg)
<small>Photo by Cara Fuller on Unsplash</small>

## Local development

If you’ve made it this far and wondered how to get this running locally, just run `npm start` from the command line. This start script will compile, bundle, and serve your app with `@architect/sandbox`. Sandbox is a complete development server that emulates API Gateway, Lambda functions, and much more.

[Find out more about setting up Begin apps.](https://docs.begin.com/en/getting-started/introduction#getting-set-up)

## Set up CI/CD

You’re already done! Every Begin app builds, tests, and deploys your app to `staging` each time you push a commit to `master`. When you’re ready for `production`, you can hit the “`Deploy to Production`” button from the Begin console ( or `git tag` a release).

## Next Steps

- Deploy a **Deno + React SSR example app** to Begin in 30 seconds (no credit card required):

![Deploy to begin](deploy-to-begin.png)

- [Try out another Begin tutorial, like a full CRUD app with Begin Data!](https://docs.begin.com/en/guides/crud-app)
- 🌟 Check out (and star!) Begin’s open core [OpenJS Architect](https://github.com/architect/architect) on GitHub
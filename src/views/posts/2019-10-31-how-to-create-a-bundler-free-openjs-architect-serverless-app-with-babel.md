---
title: How to create a bundler-free OpenJS Architect serverless app with Babel
image: 'image.png' 
category: uncategorized
description: Author serverless AWS Lambda functions with next-generation JS, and without using bundlers
author: 'Brian Leroux'
avi: 'brian.jpg'
readtime: '3 mins'
published: 'October 31, 2019'
---

![arc25](post-assets/arc25.jpg)

In this article we’ll set up an **OpenJS Architect** project that uses Babel to compile code for AWS Lambda, but without adding a bundler or additional external dependencies. Folks looking for the most minimal serverless setup for a modern JS build step, this is article for you!

Other articles in this series you may be interested in:

- [How to create an Architect app with Babel and Rollup](https://blog.begin.com/how-to-create-an-openjs-architect-serverless-app-with-babel-dfe7f3554076)
- [How to create an Architect app with TypeScript](https://blog.begin.com/how-to-create-an-openjs-architect-serverless-app-with-typescript-d8549102f73c)

---

Let’s get started! First:

```bash
npm init @architect ./babelapp
```

The Architect init script generates a new, single Lambda function project. Jump into the generated app and rename the source code folder. We’ll compile `lib` to `src` in a future step.

Now let’s do some things you can’t (yet) do: ES Modules in Node, and [optional chaining](https://github.com/tc39/proposal-optional-chaining)! Modify `src/lib/get-index/index.js` like so:

```js
export async function handler(req) {
  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: `<pre>req?.queryStringParameters?.foo: ${req?.queryStringParameters?.foo}</pre>`
  }
}
```

[View source](https://github.com/brianleroux/arc-example-babel-basic/blob/master/lib/http/get-index/index.js)

## Install Babel

From the root of this app, let’s install the minimal dependencies required:

```bash
npm i @babel/cli 
npm i @babel/core
npm i @babel/plugin-proposal-optional-chaining
npm i @babel/preset-env
```

## Configure Babel

Next, from the root create `babel.config.js`

```js
module.exports = function(api) {
  api.cache(false)
  return {
    presets: [[
      "@babel/preset-env",
      {targets: {node: true}, modules: 'cjs'}
    ]],
    plugins: [[
      "@babel/plugin-proposal-optional-chaining"
    ]]
  }
}
```

[View source](https://github.com/brianleroux/arc-example-babel-basic/blob/master/babel.config.js)

## Configure npm scripts

Add the classic npm start and `npm run build` commands, and set up `npm run build` to compile `lib` to `src`.

```json
{
  "name": "arc-example-babel-basic",
  "version": "1.0.0",
  "scripts": {
    "build": "npx babel ./lib -d ./src --copy-files --include-dotfiles",
    "start": "npm run build && npx arc sandbox",
    "deploy": "npm run build && npx arc deploy"
  },
  "dependencies": {
    "@architect/architect": "^6.0.21",
    "@babel/cli": "^7.6.4",
    "@babel/core": "^7.6.4",
    "@babel/plugin-proposal-optional-chaining": "^7.6.0",
    "@babel/preset-env": "^7.6.3"
  }
}
```

[View source](https://github.com/brianleroux/arc-example-babel-basic/blob/master/package.json)

## Set up CI/CD

![arc29](post-assets/arc29.png)

Now that everything is working locally we can set up [Begin](https://begin.com/) to deploy our code from GitHub whenever we commit. Login to Begin with your GitHub account, click `New app`, and scroll to the big `Import app` button. (My first build was completed in 12.541 seconds!)

You can use the GitHub repo [brianleroux/arc-example-babel-basic](https://github.com/brianleroux/arc-example-babel-basic) to get started.

## That’s it!

Now you’re up and running with Babel on serverless without any extra dependencies. Here’s an ES module utilizing optional chaining in current Node + Lambda:

![arc30](post-assets/arc30.png)

You can find the [full source code for this tutorial here](https://github.com/brianleroux/arc-example-babel-basic).

Special thank you to [@jveres](https://github.com/jveres/) in the Architect community Slack for cooking up this direction! 🚀

## Next steps

- Sign up for [Begin.com](https://begin.com/), score your username, and make an app!
- Star [architect/architect on GitHub!](https://github.com/architect/architect) 🌟

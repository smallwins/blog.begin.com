---
title: Serverless frontend patterns with Architect Views
image: 'image.png' 
category: uncategorized
description: Retrieve data from any static site with Architect
author: 'Kristofer Joseph'
avi: 'kj.png'
readtime: '3 mins'
published: 'October 29, 2018'
---


![arc54](post-assets/arc54.jpg)
<small>Photo by Val Vesa</small>

[Architect](https://arc.codes/) projects can now use the `src/views` directory, which automatically shares code to all — or just some — of your project’s `@http` `GET` functions.

This might seem like a small change, but it opens the door for a multitude of common frontend patterns, such as sharing view components for the server side render of PWAs.

## Try it out

Create a new Architect project:

```bash
mkdir arc-views
cd arc-views
npm init --yes
npm i @architect/architect
```

Create this `app.arc` file in the root of your project:

```arc
@app
arc-views
@http
get /
```

Generate your demo app locally:

```bash
npx create --local
mkdir src/views
mkdir src/shared
```

Here’s what your Architect project will look like:

```
arc-views
├── public/
├── src
│   ├── http
│   │   └── get-index/
│   ├── shared/
│   └── views/
└── .arc
```

Now let’s add a view. Create `src/views/layout.js`:

```js
module.exports = function Layout (props) {
  props = props || {}
  let heading = props.heading || 'Architect views!'
  return `
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <title>Architect example</title>
</head>
<body>
 <h1>${heading}</h1>
</body>
</html>
`
}
```

Your new `layout.js` will be copied to `src/http/get-index/node_modules/@architect/views/layout.js`

Here’s how to require it in your Lambda: `let Layout = require('@architect/views/layout')`

Update `src/http/get-index/index.js` to use your new layout:

```js
let Layout = require('@architect/views/layout')
exports.handler = async function http (request) {
  return {
    type: 'text/html; charset=utf8',
    body: Layout()
  }
}
```

> Bonus points if you added your own heading to the layout with:
`body: Layout({heading: 'MY AWESOME HEADING!'})`

Now start your local Architect sandbox server:

```bash
npx sandbox
```

Follow the terminal output and navigate to http://localhost:3333 to view your work.

That’s it! A few commands, two files, and you’re up and running with Architect Views.

## The `@views` pragma

By default, `src/views` gets copied to the `node_modules` directory of every `@http` `GET` function, because those are the functions most likely to return `HTML`.

> But what if you don’t want to share views to all http get routes?

That’s what the `@views` pragma in your `.arc` file is for.

Update your `.arc` file to this:

```arc
@app
arc-views
@http
get /
get /about
get /css/:stylesheet
@views
get /
get /about
```

Run create to generate the new Lambda function stubs:

```bash
npx create --local
mkdir src/views
```

Now when you run your sandbox server your views will only be copied to `node_modules/@architect/views` in your `get-index` and `get-about` functions, leaving your `get-css-000stylesheet` function as is.

## In conclusion

Architect views helps you share view specific code between Lambda functions. We can’t wait to see what you build!

[View the complete example project on GitHub](https://github.com/arc-repos/arc-examples-views)

-- @dam 💕

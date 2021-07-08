---
title: Serverless app testing with TAP on Begin
image: 'post-assets/arc23.png' 
category: uncategorized
description: In this post we’ll demonstrate the basics of testing with TAP on a serverless app in Begin; the example app in this post will achieve the same results as our article about testing with Jest.
author: 'Paul Chin Jr'
avi: 'paul.jpg'
readtime: '3 mins'
published: 'March 09, 2020'
---


![arc23](post-assets/arc23.png)
<small>Testing with TAP is pretty easy!</small>

[Node-Tap (part of the TAP family)](https://node-tap.org/) is a mature, powerful, and lightweight testing framework that help you write highly maintainable applications, and help ensure that new code will be less likely to cause regressions.

In this post we’ll demonstrate the basics of testing with TAP on a serverless app in [Begin](https://begin.com/); the example app in this post will achieve the same results as our [article about testing with Jest](https://blog.begin.com/testing-serverless-apps-with-jest-on-begin-1408e1811e68).

## Try out testing with TAP right now

Hit this button to deploy a new Node.js + Node-Tap example project to Begin in 15 seconds:

![Deploy to begin](deploy-to-begin.png)

## Testing your libraries

Testing is a crucial best practice, and it’s important to know that things will continue working as fixes, enhancements, and new features are being worked on.

Let’s start building our test suite by making sure our local dev environment–Sandbox–is up and running for our tests to run against:

```js
// test/get-index-test.js
let tiny = require(‘tiny-json-http’) // A light JSON/HTTP client
let tap = require(‘tap’)
let sandbox = require(‘@architect/sandbox’)
let data = require(‘@begin/data’)
tap.test(‘sandbox.start’, async t => {
  await sandbox.start()
  tap.pass()
})
tap.test(‘end’, async t => {
  sandbox.end()
  t.pass()
})
```

## Testing the `GET /` route

This app has a single route that responds to a GET request at the root. Let's make a request and make sure we get a successful response. If the request fails, the test will fail and give an error.

```js
// test/get-index-test.js
...
tap.test('get /', async t => {
  let url = 'http://localhost:3333' // this is the url we expect sandbox to serve
  await tiny.get({url})
})
...
```

## Testing `@begin/data`

[Begin Data](https://docs.begin.com/en/data/begin-data) is a helpful client library for interacting with DynamoDB. When you start Sandbox, a local in-memory version of DynamoDB starts, making it perfect for running data tests against.

The next two test cases will use Begin Data’s `data.set` method to create a table called tmp, then it will use the `data.get` method to make sure that table was created.

```js
// test/get-index-test.js

// test that you can write data with @begin/data library 
tap.test('data.set', async t => {
  let result = await data.set({table: 'tmp'})
  t.ok(result.table === 'tmp')
  console.log(result)
})
// test that you can read data with @begin/data library 
tap.test('data.get', async t => {
  let result = await data.get({table: 'tmp'})
  t.ok(result.length == 1)
  console.log(result)
})
```

## Check out the test results

Pushing your code to GitHub will automatically run your test suite (and deploy your code to the `staging` environment). View the results of your latest build’s test output in the Begin Activity view:


![arc21](post-assets/arc22.png)

<small>Say ‘Hi’ to Ship It Squirrel for me.</small>

## Taking it further

Tests are key to helping ensure maximal system stability and developer velocity (which is why they’re a tentpole of the Begin build system, and run with every build). When written well, tests can be like a gift to your future self and collaborators.

The TAP testing example may be a good starting for your next project!

Check out more examples of what you can build on Begin with our open source guide at https://learn.begin.com.

## Next Steps

- Deploy an AVA example app to Begin in 15 seconds:

![Deploy to begin](deploy-to-begin.png)

- [Try out another Begin tutorial, like a full CRUD app with Begin Data!](https://docs.begin.com/en/guides/crud-app)
- 🌟 Check out (and star!) Begin’s open core [OpenJS Architect](https://github.com/architect/architect) on GitHub
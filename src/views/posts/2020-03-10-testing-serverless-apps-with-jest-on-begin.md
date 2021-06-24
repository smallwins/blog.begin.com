---
title: Serverless app testing with Jest on Begin
image: 'image.png' 
category: uncategorized
description: In this post we’ll demonstrate the basics of testing with Jest on a serverless app in Begin; the example app in this post will achieve the same results as our article about testing with Tap.
author: 'Paul Chin Jr'
avi: 'paul.jpg'
readtime: '3 mins'
published: 'March 10, 2020'
---

# Serverless app testing with Jest on Begin

![arc22](arc22.png)

Jest is a super popular and very robust JavaScript testing library. As you likely know, investing in your testing will help you write highly maintainable applications, and help ensure that new code will be less likely to cause regressions.

In this post we’ll demonstrate the basics of testing with Jest on a serverless app in [Begin](https://begin.com/); the example app in this post will achieve the same results as our [article about testing with Tap](https://blog.begin.com/testing-your-serverless-app-on-begin-with-tap-54f39714d3bd).

## Try out testing with Jest right now

Hit this button to deploy a new Node.js + Jest example project to Begin in 15 seconds:

![Deploy to begin](deploy-to-begin.png)

## Testing the libraries

Using Jest’s setup and teardown methods, we will instantiate `@architect/sandbox`, a local dev environment. Sandbox lets developers work locally by emulating the behavior of API Gateway, Lambda functions, and DynamoDB.

```js
// test/get-index.test.js
let tiny = require('tiny-json-http')
let data = require('@begin/data')
let sandbox = require('@architect/sandbox')
beforeAll(async () => {
  await sandbox.start()
})
afterAll(async () => {
  await sandbox.end()
})
```

Checking your code with small tests for necessary dependencies will give you confidence that future issues can be tracked down faster.

## Testing the `GET /` route

The first test case makes sure that the application can send a `GET` request to the project index without any errors. The / route is handled by the Lambda found at `src/http/get-index/index.js`

```js
// test/get-index.test.js
...
test('get /', async () => {
  let url = 'http://localhost:3333'
  await tiny.get({ url })
})
...
```

## Testing `@begin/data`

The next two test cases will use Begin Data’s `data.set` method to create a table called tmp, then it will use the `data.get` method to make sure that table was created.

```js
// test/get-index.test.js
...
test('data.set', async () => {
  let result = await data.set({table: 'tmp'})
  expect(result.table).toBe('tmp')
  console.log(result)
})
test('data.get', async () => {
  let result = await data.get({table: 'tmp'}
  expect(result.length).toBe(1)
  console.log(result)
})
...
```

[Begin Data](https://docs.begin.com/en/data/begin-data) is a helpful client library for interacting with DynamoDB. When you start Sandbox, a local in-memory version of DynamoDB starts, making it perfect for running data tests against.

## Automate testing with your deploys

Pushing your code to GitHub will automatically run your test suite (and deploy your code to the `staging` environment). View the results of your latest build’s test output in the Begin Activity view:

![arc21](arc22.png)

<small>Say ‘Hi’ to Ship It Squirrel for me.</small>

## Next Steps

- Deploy an AVA example app to Begin in 15 seconds:

![Deploy to begin](deploy-to-begin.png)

- [Try out another Begin tutorial, like a full CRUD app with Begin Data!](https://docs.begin.com/en/guides/crud-app)
- 🌟 Check out (and star!) Begin’s open core [OpenJS Architect](https://github.com/architect/architect) on GitHub
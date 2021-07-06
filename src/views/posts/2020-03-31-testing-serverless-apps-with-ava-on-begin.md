---
title: Testing serverless apps with AVA on Begin
image: 'image.png' 
category: uncategorized
description: This post will give an overview of testing with AVA on a serverless app in Begin. You can also check out our other articles on TAP, Jest, and Mocha.
author: 'Paul Chin Jr'
avi: 'paul.jpg'
readtime: '4 mins'
published: 'March 31, 2020'
---

![arc16](post-assets/arc16.png)

[AVA](http://avajs.dev/) is a testing framework that aims to make your tests and results as concise as possible. The docs are straightforward and illustrate their philosophy towards building a productive test suite. One interesting feature is that AVA output is formatted to show code excerpts where your tests fail. We’ll see an example of that [later on](https://blog.begin.com/testing-serverless-apps-with-ava-on-begin-d0cfc8844df7#8e0e).

This post will give an overview of testing with AVA on a serverless app in [Begin](http://www.begin.com/). You can also check out our other articles on [TAP](https://blog.begin.com/testing-your-serverless-app-on-begin-with-tap-54f39714d3bd), [Jest](https://blog.begin.com/testing-serverless-apps-with-jest-on-begin-1408e1811e68), and [Mocha](https://blog.begin.com/testing-serverless-apps-with-mocha-on-begin-8318f03e6311).

## Try out a Begin app with AVA right now

Hit this button to deploy a new Node.js + AVA example project to Begin in 15 seconds:

![Deploy to begin](deploy-to-begin.png)

## Testing the libraries

First we need to register hooks to start and stop `@architect/sandbox` (a local dev environment that lets developers work locally by emulating the behavior of API Gateway, Lambda functions, and DynamoDB), along with the necessary dependencies to execute your tests.

```js
// test/get-index-test.js
let sandbox = require('@architect/sandbox')
let data = require('@begin/data')
let tiny = require('tiny-json-http')
let test = require('ava')
test.before(async () => {
  await sandbox.start({ quiet: true })
})
test.after(async () => {
  await sandbox.end()
})
```

## Testing the `GET /` route

Our example app has one Lambda function which handles requests being made to the index (root) route. You can see the code in `src/http/get-index/index.js`: it receives a request object and returns an HTML string in the response body.

Let’s do a simple integration test and ensure the existence of a response body after a GET request is received:

```js
// test/get-index-test.js
...
test('get /', async t => {
  let url = 'http://localhost:3333'
  let result = await tiny.get({url})
  t.true(!!result.body)
})
...
```

## Testing `@begin/data`

Even though this example does not implement [Begin Data](https://docs.begin.com/en/data/begin-data), having this test case is useful if you’re interested in learning how the Begin Data API works. We’ll test `data.set()` and `data.get()` to write and read some data to the local in-memory database running in Sandbox. This type of ephemeral environment is perfect for running fast tests without compromising the rest of your build steps.

```js
// test/get-index-test.js
...
test('@begin/data', async t => {
  let tmp = await data.set({table: 'tmp'})
  t.is(tmp.table, 'tmp')
  let result = await data.get({table: 'tmp'})
  t.is(result.length, 1)
  console.log(result)
})
...
```

## Review any errors

AVA has an interesting feature with its test output which shows code excerpts and diffs between expected and actual values. This actually helped me while creating this very example app: I misspelled a variable name, and not only did the test fail, it showed me the difference. Using tools like linters and test runners saves time and frustration during development.

![arc17](post-assets/arc17.png)

<small>Modern debugging is often an exercise in spell check.</small>

## Automate testing with every deploys

Now it’s time to really see all your hard work pay off. Pushing your code to GitHub will automatically run your test suite (and deploy your code to the `staging` environment). View the results of your latest build’s test output in the Begin Activity view:

![arc16](post-assets/arc16.png)

<small>Great Success!</small>

## Tests are neither good or bad

I encourage folks not to focus on whether your tests are “good” or “bad”, or whether you’re using the right tool (whatever that is). Instead, I encourage you to write productive tests. Think through the parts of your application that are mission critical and author your tests to ensure the reliable operation (and integration) of those functions. Productive tests are ones that catch regressions, evaluate expected behavior, and become part of software documentation.

We think tests are so cool that every single deploy on Begin automatically runs your tests as a given, even on the [free tier (where you can make up to 5 apps!)](http://www.begin.com/).

## Next Steps

- Deploy an AVA example app to Begin in 15 seconds:

![Deploy to begin](deploy-to-begin.png)

- [Try out another Begin tutorial, like a full CRUD app with Begin Data!](https://docs.begin.com/en/guides/crud-app)
- 🌟 Check out (and star!) Begin’s open core [OpenJS Architect](https://github.com/architect/architect) on GitHub
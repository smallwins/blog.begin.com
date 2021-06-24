---
title: Testing serverless apps with Mocha on Begin
image: 'image.png' 
category: uncategorized
description: In this post we’ll demonstrate using Babel to implement a great new unreleased JS feature:optional chaining.
author: 'Paul Chin Jr'
avi: 'paul.jpg'
readtime: '3 mins'
published: 'March 11, 2020'
---

# Testing serverless apps with Mocha on Begin

![arc21](arc21.png)

[Mocha](https://mochajs.org/) is a well known testing framework for Node.js. It can support both xUnit and TAP outputs, and developers can choose their favorite assertion library. Mocha’s flexibility and large community still makes it a great choice for testing your Begin apps.

As you likely know, investing in your testing will help you write highly maintainable applications, and help ensure that new code will be less likely to cause regressions.

In this post we’ll demonstrate the basics of testing with Mocha on a serverless app in [Begin](https://begin.com/); the example app in this post will achieve the same results as our articles about testing with [Jest](https://blog.begin.com/testing-serverless-apps-with-jest-on-begin-1408e1811e68) & [TAP](https://blog.begin.com/testing-your-serverless-app-on-begin-with-tap-54f39714d3bd).

## Try out Mocha with Begin right now!

Hit this button to deploy a new Node.js + Mocha example app to Begin in 15 seconds:

![Deploy to begin](deploy-to-begin.png)

## Testing the libraries

If you’ve seen our previous serverless testing examples with [TAP](https://blog.begin.com/testing-your-serverless-app-on-begin-with-tap-54f39714d3bd) and [Jest](https://blog.begin.com/testing-serverless-apps-with-jest-on-begin-1408e1811e68), then this will look very familiar to you. Begin supports any testing framework because we’re committed to helping your team to focus on using tools that work for you.

First, let’s create a hook for Mocha to start and stop `@architect/sandbox` (a local dev environment that lets developers work locally by emulating the behavior of API Gateway, Lambda functions, and DynamoDB), along with the necessary dependencies to execute your tests.

```js
// test/get-index-test.js
let sandbox = require('@architect/sandbox')
let data = require('@begin/data')
let tiny = require('tiny-json-http')
let assert = require('assert')
describe('mocha app', () => {
  before(async () => {
    await sandbox.start({ quiet: true })
  })
  after(async () => {
    await sandbox.end()
  })
  // more tests will go here
}
```

## Testing the `GET /` route

In Mocha, we describe our tests and what it should do. This first test will ensure that a `GET` request to our home page will complete without an error. We now know that our Lambda handler at `src/http/get-index/index.js` is working.

```js
// test/get-index-test.js
...
  describe('@http', function() {
    it('should get /', async () => {
      let url = 'http://localhost:3333'
      let result = await tiny.get({ url })    
    })
  })
...
```

## Testing `@begin/data`

Even though this example does not implement [Begin Data](https://docs.begin.com/en/data/begin-data), having this test case is useful for learning how the API works. We will test `data.set()` and `data.get()` to write and read some data to the local in-memory database running in Sandbox. This type of ephemeral environment is perfect for running fast tests without compromising the rest of your build steps.

```js
// test/get-index-test.js
...
  describe('@begin/data', function() {
    it('data.set', async () => {
      let result = await data.set({table: 'tmp'})
      assert.equal(result.table, 'tmp')
      console.log(result)
    })
    it('data.get', async () => {
      let result = await data.get({table: 'tmp'})
      assert.equal(result.length, 1)
      console.log(result)
    })
  })
...
```

## Automate testing with every deploy

It’s finally time to see your beautiful app in production. Pushing code to GitHub will automatically run the tests defined in your `package.json` (and deploy your code to the `staging` environment). View the results of your latest build’s test output in the Begin Activity view:

![arc21](arc21.png)

<small>Say ‘Hi’ to Ship It Squirrel for me.</small>

## Next Steps

- Deploy an AVA example app to Begin in 15 seconds:

![Deploy to begin](deploy-to-begin.png)

- [Try out another Begin tutorial, like a full CRUD app with Begin Data!](https://docs.begin.com/en/guides/crud-app)
- 🌟 Check out (and star!) Begin’s open core [OpenJS Architect](https://github.com/architect/architect) on GitHub
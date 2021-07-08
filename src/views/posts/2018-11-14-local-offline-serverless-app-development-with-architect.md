---
title: Local, offline serverless app development with Architect
image: 'post-assets/arc50.jpg' 
category: uncategorized
description: Build & deploy serverlessly without sacrificing the local development experience
author: 'Brian Leroux'
avi: 'brian.jpg'
readtime: '3 mins'
published: 'November 14, 2018'
---


![arc50](post-assets/arc50.jpg)
<small>photo by Valeriy Andrushko</small>

> Devs require the ability to preview work before committing it and, perhaps more importantly, the ability to run unit and integration tests as fast as possible. Time is precious, and every iteration counts — extra steps unnecessarily extend the feedback loop and lead time to production. [Architect serverless framework](https://www.npmjs.com/package/@architect/architect) is organized and optimized around these principles.

At a minimum, a development workflow needs to support the following environments: `testing`, `previewing`, `staging`, and `production`.

Each stage in the development process verifies quality, and this in turn helps ensure each release is better than the last. This is how we build momentum with confidence.

More and better iterations increase the odds of both developer satisfaction, and customer happiness. **This is why Architect bakes in these concepts in as first class considerations, especially testing and previewing.**

The Architect sandbox runs your app as a fully local, offline HTTP server, mocking out the tentpoles of the AWS serverless stack: S3, SNS, API Gateway, Lambda, and even DynamoDB. And it runs completely in-memory, so it’s very fast — as it should be!

Both preview and test scenarios are supported:

- Run the sandbox for previewing your app in a browser
- Require the sandbox in your tests and run headlessly

> ✨ This, of course, means you can try out Architect and build a serverless application locally without an AWS account

Let’s take a closer look.

## Previewing

Start a Node project:

```bash
mkdir arc-local
cd arc-local
npm init --yes
npm i @architect/architect
```

Create a file named `app.arc`:

```arc
@app
arc-local
@http
get /
@tables
cats
  catID *String
```

This defines an application with a single root route (`GET /`, which represents a single Lambda function in `src/http/get-index`). This also defines a single database table with a sort key named `catID`.

Generate the code locally by running `npx create local`.

Once it’s finished running, you can preview the code by starting the sandbox (`npx sandbox`). Notice that you don’t need to reload the sandbox to see your changes because Lambdas are freshly invoked every request.

If you’re building JAMstack-style, the sandbox prioritizes content in `/public`, so if `/public/index.html` exists, that will be served ahead of your `GET /` Lambda, and likewise for any other pre-rendered assets.

In this way you can use Architect to rapidly build out your backend API right alongside your frontend architecture while maintaining a clean separation of concerns. 🍫🥜

## Testing

Code quality is a major aspect to finding flow, building momentum, and shipping software. State of the art code quality practices like linting, test coverage, and unit and integration tests are super excellent tools supporting that. Let’s play with some of these superpowers:

```bash
npm i tape tap-spec tiny-json-http
```

Create a directory called tests and add a file named `get-index-test.js` to it.

Next you’ll add some generic setup/teardown tests that starts and stops the sandbox server headlessly.

```js
let arc = require('@architect/architect')   
let data = require('@architect/data')
let tiny = require('tiny-json-http')                                   
let test = require('tape')
let end // save a ref
test('start sandbox', async t=> {                         
  t.plan(1)                         
  end = await arc.sandbox.start()            
  t.ok('started sandbox')                      
})
test('shut down the sandbox', t=> {    
  t.plan(1)
  end()
  t.ok(true, 'shutdown successfully')
})
```

In between these tests we can now talk through the network to check our application:

```js
test('can get /', async t=> {                         
  t.plan(1)                         
  let url = 'http://localhost:3333'                         
  let result = await tiny.get({url})      
  t.ok(result.body, 'got a 200 response')          
  console.log(result.body)
})
```

… and even connect directly to the in-memory database:

```js
test('can list cats', async t=> {                         
  t.plan(1)                         
  let result = await data.cats.scan({})   
  t.ok(result, 'got result')             
  console.log(result)
})
```

## Previewing data with the built-in REPL

One more thing! As noted earlier, if you define DynamoDB tables in `app.arc`, the sandbox will generate local in-memory tables for your Lambda function code to access.

Additionally, by running `npx repl` you can also direct access the in-memory database tables, as well as connect to your live remote `staging` and `production` databases (if you’ve created them at AWS).

## Summary

Building a better web starts with building better web developers. A big part of empowering developers is building powerful tools that help us focus on the challenging but rewarding real work of application delivery instead of futzing with infra cruft, configuration deltas, and dependency hell.

[View the complete example project on GitHub](https://github.com/arc-repos/arc-example-local-crud)

* Not yet supported by sandbox: running scheduled, SQS, and DynamoDB- triggered Lambdas locally (however and we expect to add support soon). Sunrise support for Python is now available, and support for Go, .NET, and Java is coming soon. [Architect is an open source project](https://github.com/arc-repos/), we always appreciate your help and feedback!

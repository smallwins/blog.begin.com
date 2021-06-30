---
title: Architect 7.0:HTTP APIs and even better Sandbox testing!
image: 'image.png' 
category: uncategorized
description: By popular demand:API Gateway HTTP APIs are now the default in Architect serverless apps
author: 'Ryan Block'
avi: 'ryan.png'
readtime: '4 mins'
published: 'September 18, 2020'
---

![arc1](arc1.png)

[OpenJSF Architect](https://arc.codes/) now powers thousands of serverless applications all over the world. Folks continue to tell us they value its focused, direct, stable, lock-in-free approach to building blazing fast modern web apps without ever having to manage a single server.

Today we’re extremely excited to announce Architect 7 (Chupacabra), a major step forward in building serverless web apps and APIs with AWS.

Chupacabra now deploys AWS API Gateway v2.0 (aka `HTTP`) APIs by default, and ships with a rewrite of Architect’s local development environment, Sandbox. The new Sandbox includes full local/offline support for building with `HTTP` APIs, and an even better interface for integrating Architect into your automated testing, from `tape` to `jest` (and everything in between).

## Create your first serverless app in <60 seconds!

Want to give it a go? Here’s the super quickstart, no AWS credentials required:

![arc6](arc6.gif)

First: `npm init @architect ./your-app-name`
Then: `npx arc sandbox`
**That's it!**

## The benefits of HTTP APIs

For most applications most of the time, we now believe HTTP APIs are the right way to ship a serverless app on AWS. Compared to legacy REST APIs, there are some compelling reasons to use (and upgrade) to HTTP:

- HTTP APIs are designed to be lower-latency
- HTTP APIs provision and update significantly faster
- HTTP APIs are far less expensive to operate: as of this writing, they cost ≤$1.00/million requests, compared to REST APIs, which charge $3.50/million requests (plus data transferred)
- HTTP APIs support default stages and routes, meaning we can finally escape the dreaded API Stage Path Part Problem (e.g. /staging in https://{id}.execute-api.{region}.amazonaws.com/staging)
- HTTP APIs are where AWS is now putting the bulk of its API Gateway development effort
- As of September 2020, HTTP APIs now support authorizers (which can be implemented via Architect Macros)

Existing Architect projects can upgrade to HTTP APIs with a single command; learn more in the Architect upgrade guide.

## Enhanced testing with Sandbox

Architect 7 ships with a major upgrade to its local development and testing environment, [Sandbox 2.0](https://github.com/architect/sandbox). Sandbox 2.0’s clean, unified testing interface enables granular controls for starting and stopping various local serverless services, and support for all major JS testing frameworks.

For example, here’s how to integrate Sandbox with two popular test libraries, [Tape](https://github.com/substack/tape) and [Jest](https://jestjs.io/):

## Tape

```js
let sandbox = require('@architect/sandbox')
let test = require('tape)

test('Start the Sandbox', async t => {
  t.plan(1)
  let result = await sandbox.start()
  t.equal(result, 'Sandbox successfully started')
})

test('Tests go here', t => {
  // Make use of various Sandbox resources in your tests...
})

test('Shut down the Sandbox', async t => {
  t.plan(1)
  let result = await sandbox.end()
  t.equal(result, 'Sandbox successfully shut down')
})
```

## Jest

```js
let sandbox = require('@architect/sandbox')
beforeAll(async () => {
  let result = await sandbox.start()
  expect(result).toBe('Sandbox successfully started')
})
afterAll(async () => {
  let result = await sandbox.end()
  expect(result).toBe('Sandbox successfully shut down')
})
test('Tests go here', () => {
  // Make use of various Sandbox resources in your tests...
})
```

## Upgrading from Architect 6.x

Where possible, we’ve taken every possible measure to ensure a seamless upgrade to Architect 7.x from 6.x (Ogopogo) and earlier. Architect 7.x is fully backward compatible, and continues to ship API Gateway REST APIs to existing Architect projects.

Changes to Sandbox may require minor settings updates for local workflows, and its new testing interface does remove support for some obscure, undocumented APIs.

To learn more, please check out our extensive [Architect upgrade guide](https://arc.codes/guides/upgrade).

## Thank you

We couldn’t do this work without the support and feedback of the Architect community, and of the folks at AWS working hard to make the future a little more serverless.

> **More specifically, we’d like to give a shout out to:**
> Akash Peri, Alan Tan, Khozema Ujjainwala, and the entire API 
> Gateway team, Ali Servet Donmez, Andy Buckingham, Carter 
> Rabasa, Fil Maj, Greg Allen, Gregor Martynus, Jordan Harband, Jory Burson, and Kris Borchers.

Since releasing Architect with the OpenJS Foundation, there have been over 390 releases — with many [more to come based on your feedback](https://github.com/architect/architect/issues/new/choose) and [contributions](https://github.com/architect/).

Oh, and don’t forget to join the [Architect conversation in Slack](https://architecture-as-text.slack.com/archives/C6BGT0D08/p1600199636147600)!


![Art by Michael Ramstead](arc2.png)

<small>Art by [Michael Ramstead](https://www.michaelramstead.com/)</small>
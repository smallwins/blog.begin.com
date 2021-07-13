---
title: Begin now ships API Gateway HTTP APIs by default
image: 'post-assets/arc7.jpg' 
category: uncategorized
description: We’re excited to announce that all new Begin apps will now ship with next-generation AWS API Gateway HTTP APIs by default!
author: 'Paul Chin Jr'
avi: 'paul.jpg'
readtime: '3 mins'
published: 'September 23, 2020'
---

![arc7](post-assets/arc7.jpg)
<small>Photo by Victor Lu</small>

## We’re excited to announce that all new Begin apps will now ship with next-generation AWS API Gateway `HTTP` APIs by default!

Significantly streamlined compared to legacy API Gateway `REST` `APIs`,` HTTP APIs` give most users only what they need from an HTTP gateway, while lowering latency, being faster to provision, and being less expensive to operate. And the best part is you start taking advantage of it immediately: all new Begin apps are now provisioned using `HTTP` APIs!

## Try out an `HTTP` API right now

Hit this button to deploy a new personal website app (running on an HTTP API) to Begin in 30 seconds (no credit card required):

<a href="https://begin.com/apps/create?template=https://github.com/pchinjr/fcc-serverless-api"><img class="block m-auto mt3 mb3" src="https://res.cloudinary.com/practicaldev/image/fetch/s--yYw27_-V--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://static.begin.com/deploy-to-begin.svg" alt="Deploy to Begin" loading="lazy"></a>

## Differences between HTTP APIs and REST APIs

`HTTP` APIs feature a new simplified request / response signature that is similar, but not identical to API Gateway `REST` APIs.

Any existing apps using legacy `REST` APIs will continue working as normal, and Begin will continue to support them so long as AWS does (which will probably be roughly forever). New apps are now provisioned with `HTTP` APIs, of course.

One common change that you may need to implement when migrating your `REST` API to `HTTP` is adding statusCode to your Lambda’s response; this was not required with `REST` APIs, and is covered automatically if you make use of `@architect/functions` in your handler.

```js
// GET /echo → src/http/get-echo/index.js
exports.handler = async function http (req) {
  return {
    // Be sure you now include statusCode!
    statusCode: 200,
    headers: { 
      'content-type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(req)
  }
}
```
**Additional payload format resources:**

- Begin docs for Lambda payload formats
- AWS docs for Lambda payload formats
- Summary blog post from AWS about HTTP APIs

## Shipping an `HTTP` API-based app

Because AWS introduced breaking changes to the [request and response](https://docs.begin.com/en/http-functions/api-reference) behavior in HTTP APIs, we’ve opted not to auto-upgrade existing Begin users. That said, if you’d like to take advantage of the new payloads, simply create a new app.

If you’d like to upgrade your existing app from `REST` to `HTTP` APIs, delete the app in the Begin console (Settings > Delete app), and create a new app from the existing repository (New app > Use an existing repo > Select the repo you of the app you just deleted). However, be warned: doing this will change your app’s URLs and erase your domain configuration (if present).

Finally, if you aren’t sure which API type your app uses, click `HTTP Functions` in the Begin console’s left nav, and look for the **API Type** badge.

## Migrating your code to HTTP req/res payloads

If you’d like to migrate your existing code to utilize the new HTTP request / response, the easiest path is to use `@architect/functions`, which has forward (and backward) compat built right in. Here’s an example:

```js
// None of the stuff below would normally work in HTTP APIs!
let arc = require('@architect/functions')
async function handler (req) {
  // HTTP APIs no longer support req.path
  if (req.path === '/hi') {
    // HTTP APIs now require statusCode
    return {
      body: JSON.stringify({ hello: 'there' })
    }
  }
  return {
    body: JSON.stringify({ goodbye: 'friend' })
  }
}
exports.handler = arc.http.async(handler)
```

## Next steps

- Deploy a new personal website to Begin in 30 seconds (no credit card required):

<a href="https://begin.com/apps/create?template=https://github.com/pchinjr/fcc-serverless-api"><img class="block m-auto mt3 mb3" src="https://res.cloudinary.com/practicaldev/image/fetch/s--yYw27_-V--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://static.begin.com/deploy-to-begin.svg" alt="Deploy to Begin" loading="lazy"></a>

- [Try out another Begin tutorial, like a full CRUD app with Begin Data!](https://docs.begin.com/en/guides/crud-app)
- 🌟 Check out (and star!) Begin’s open core [OpenJS Architect](https://github.com/architect/architect) on GitHub
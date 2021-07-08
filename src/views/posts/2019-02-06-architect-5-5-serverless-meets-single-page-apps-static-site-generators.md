---
title: 'Architect 5.5: serverless meets single-page apps & static site generators'
image: 'post-assets/arc39.jpg' 
category: uncategorized
description: Seamless integration of SPAs & static site generators with a super-fast serverless backend
author: 'Brian Leroux'
avi: 'brian.jpg'
readtime: '5 mins'
published: 'February 06, 2019'
---


![arc39](post-assets/arc39.jpg)
<small>Photo by Ahmad Kadhim</small>

We’re extremely excited to announce **Architect 5.5 (Catalope)¹**, bringing seamless in-network, same-domain integration of SPAs, static site generators, and AWS serverless systems like Lambda and DynamoDB.

With Architect 5.5, any developer can easily, seamlessly combine the best of all worlds: a massively scalable trusted backend runtime, with in-network persistence, and statically-rendered frontend-facing assets from Gatsby, Jekyll, and Hugo, to name a few.

---

Architect’s static asset support runs deep. Your project’s `public/ `folder already syncs its assets to the S3 buckets defined in your project manifest. This is sufficient for apps that render themselves “server” side (heh), and load JavaScript as a progressive enhancement.

But now we have a path forward to support current-generation SSR and SPA apps and their tooling— and even better, this approach allows you to mix and match these techniques on a **per URL** basis. Here’s an example of what we mean:

![arc40](post-assets/arc40.png)

In **Architect 5.5**, requests to your app that are not already defined by your Architect project manifest flow through your serverless infrastructure’s HTTP `get /` route, which can now selectively proxy and cache requests to your public website S3 buckets (or 404, as you please).

This model enables intercepting, processing, and caching content from S3 via Lambda. This is pretty powerful stuff! Pre-rendered and dynamic content can now be mixed and matched on a per-route basis. 😈 This also unlocks many possibilities for better runtime tooling formerly only available at authortime.

The following `app.arc` project manifest defines a root HTTP lambda handler and two S3 buckets.

![arc41](post-assets/arc41.png)

<small>JSF Architect can also operate on arc.json or arc.yaml files should you prefer those syntaxes</small>

The index HTTP Lambda will be invoked if there is a request to `get /` or whenever a route is not found. This allows graceful 404 logic, and again, it also allows opting into proxying (and caching) all not found requests to S3 using `@architect/functions` (while simultaneously preserving any other `app.arc` defined routes), like so:

```js
let arc = require('@architect/functions')
exports.handler = arc.proxy.public({spa:true})
```
<small>src/http/get-index/index.js</small>


Setting {spa:true} will ensure no matter what URL folder depth the `public/index.html` file is served. For static site generators that render out full folder structures, you can omit this parameter, or explicitly set `{spa:false}`.

**Any other routes defined in your project will continue to work normally!** Seamlessly combining static frontend assets with dynamic backend HTTP Lambdas complete with durable persistence, session state, database triggers, WebSockets, background tasks, scheduled functions, and more.

Let’s imagine a full serverless REST app:

![arc42](post-assets/arc42.png)

<small>Each line under @http is a different lambda function</small>

Or perhaps a GraphQL endpoint:

```js
```

## What’s the catch?

This approach is not without quirks. API Gateway is currently incapable of serving binary content and text content from one origin so `arc.proxy.public` should only be used for text content like: HTML, CSS, JavaScript, and frens. This is ok because binary content (such as images, audio, video and fonts) are already available via the public website S3 bucket URLs.

Different URLs for different asset types are probably desirably anyhow, as you’d normally want these pointing at a CDN distribution (such as CloudFront).

## How does local development work?

If you’re already familiar with Architect: the same! If you’re not: seamlessly, and fully. Assets in your project `public/` folder are made available at `http://localhost:3333/_static`. (The `/_static` url is also created for the deployed API Gateway.)

## What about performance?

Requests are cached within the Lambda logic and, as such, you’ll see median responses between 70–200ms. Very occasional slower — but still sub-second— coldstarts will still occur. Further performance gains are available by setting the various client-side caching headers, which we plan to explore in the future. ([PRs welcome!](https://github.com/arc-repos/architect))

In practice, single page apps are not reloading often, so sub-second performance should be appropriate for most use cases, and sub-500ms performance for almost all cases. **Additionally, as we have in the past, we remain confident that AWS Lambdas runtime will continue to see coldstart performance improvements!**

## Can I avoid the Lambda invocation?

Yes. Architect also configures https://yourapigateway.com/_static as a direct proxy to S3. The apex (aka calling `get /`) will still cost you one initial Lambda invocation (as it does today).

## Hey… speaking of invocations, how much does this all cost?

Lambda is free for 1 million invocations, after that, $0.20 per million invocations. S3 also costs pennies per gigabyte of storage and transfer (depending on the region and other properties such as transfer acceleration). API Gateway and CloudWatch logs also can incur costs but again have generous free tiers.

So storing and serving a gigabyte of text assets through 10 million Lambda invocation requests should cost well under five bucks a month. Not too shabby!

## Summary

Architect 5.5 (Catalope) fully integrates the JAMstack approach to building SPAs and statically rendered web frontends while seamlessly enabling a trusted backend process with Lambda. We’re especially excited to see what folks build when combining SPAs with the recent additions of [WebSocket Lambdas](https://blog.begin.com/introducing-architect-5-0-fully-serverless-websockets-20bb97673c4e) and [Begin Data](https://blog.begin.com/introducing-begin-data-dynamodb-made-ridiculously-easy-688a3d9ff392).

Stay tuned, we have a lot more in store for 2019! 🐍💎

## Next steps

- ✏️ Try this (and more!) out in the [Begin.com](https://begin.com/) beta
- 🌟 [Star Architect on GitHub](https://github.com/arc-repos/architect)
- [Try out the demo app locally (no AWS required!)²](https://github.com/arc-repos/arc-example-spa)
- 💓 Build something cool and [tell us about it on Twitter](https://twitter.com/begin)!

![arc43](post-assets/arc43.png)

¹ 5.5: a little tribute to one of the greats… the browser that sparked the flame that would become AJAX, SPAs, and so much more: Internet Explorer 5.5! 💓

² Note: if deploying the SPA example: default API Gateway paths break the client-side JS paths unless you set up DNS with @domain

> Special thx to Alex Dilley, Fil Maj, Kristofer Joseph, Ryan Block for feedback on this feature and blog!

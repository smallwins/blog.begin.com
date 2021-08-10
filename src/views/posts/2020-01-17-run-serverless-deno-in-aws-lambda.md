---
title: Run serverless Deno in AWS Lambda
image: 'post-assets/deno.png' 
category: uncategorized
description: Use Begin to build a serverless / FASTstack Deno app!
author: 'Brian Leroux'
avi: 'brian.jpg'
readtime: '3 mins'
published: 'January 17, 2020'
---

![deno](post-assets/deno.png)

> This post was last updated May, 2020 as Deno hit 1.0

JavaScript is the most popular programming language in the world, and [Deno](https://deno.land/) is a very promising new JavaScript runtime with a lot of compelling new capabilities.

[Begin](https://begin.com/) is a serverless / [FASTstack](https://faststack.org/) app platform based on AWS, and it enables frictionless delivery to AWS Lambda. This is like chocolate and peanut butter (or perhaps chocolate and cherries if you have a peanut allergy) — two great tastes that taste great together.

## Try it out right now

Want to skip to the part where you’re building a serverless Deno app? Just hit this button to deploy a new `Hello World!` Deno app to Begin in 15 seconds:

[![deploy-to-begin](deploy-to-begin.png)](https://begin.com/apps/create?template=https://github.com/begin-examples/deno-hello-world)

## Roll your own serverless Deno app (with Begin)

Begin checks each HTTP function for a `.arc-config` file, which is used to configure its corresponding Lambda from the default (Node 12.x) to Deno (latest stable).

```arc
# src/http/get-index/.arc-config
@aws
runtime-deno
```

Your Lambda will now look for a [TypeScript](https://www.typescriptlang.org/) (or plain JS) handler at `src/http/get-index/index.ts`, here’s an example that returns Deno-specific APIs:

```js
export async function handler(req) {
console.log(req)
return (body: JSON.stringify(Deno.versions))
}
```

Thanks to Deno, standard ES modules are natively supported and work as they would work in a web browser. You can import local modules with relative paths:

```js
import render from './render.tsx'
export async function handler() {
    return {
        headers:{'content-type': 'text/html, charset=utf8'},
        body: render(Deno.versions)
    }
}
```

And remotely hosted modules with fully qualified URL paths:

```js
import React from 'https://dev.jspm/to/react'
import ReactDOMServer from 'https://dev.jspm/to/react-dom/server'
import { DenoVersion } from './deno.tsx'

export default function render(version: object) {
    let body = ReactDOMServer.renderToString(<DenoVersion version = {version} />)
    return `<doctype html>
    <html>
    <body>
    <main id=root>${body}</main>
    <script type=module src=/_static/browser.js></script>
    </body>
    </html>`
}
```
<small>Any fully qualified URL to a valid ES module will work!</small>

As you probably noticed, the TypeScript and JSX dialects are also natively supported. Deno is really fun for frontend! Local development is also fully supported with the [@architect/sandbox](https://github.com/architect/sandbox):

![arc85](post-assets/arc85.png)

## Considerations and trackable issues

- Deno is progressing quickly, but know that it’s an early runtime, and remember that (for now) we’re doing this for fun and experimentation.

- We (Begin) run a distribution of very recent versions of Deno built specifically for Lambda; it should be identical to your local Deno, just as Lambda Node.js is identical to your local Node.js.

- An official Deno runtime distribution with [AWS SAR is also apparently underway](https://github.com/hayd/deno-lambda/issues/20); this may eventually become the official AWS Lambda distribution.

- Persistence with [Begin Data](https://docs.begin.com/en/data/begin-data) (`@begin/data`) for Deno is planned: [follow progress here](https://github.com/smallwins/begin-data/issues/31).

- [OpenJS Architect](https://arc.codes/)-style code sharing between Deno Lambdas is planned: [follow progress here](https://github.com/architect/hydrate/issues/76).

## Next steps

- Deploy a simple `Hello World!` Deno app to Begin in 15 seconds. What are you waiting for, anyway?

[![deploy-to-begin](deploy-to-begin.png)](https://begin.com/apps/create?template=https://github.com/begin-examples/deno-hello-world)

- 🌟 Check out (and star!) Begin’s open core [OpenJS Architect on GitHub](https://github.com/architect/architect)
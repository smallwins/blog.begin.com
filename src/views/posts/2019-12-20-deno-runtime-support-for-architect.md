---
title: Serverless Deno support with Architect
image: 'image.png' 
category: uncategorized
description: Experimental next generation JavaScript runtime with first class TypeScript support now in beta
author: 'Brian Leroux'
avi: 'brian.jpg'
readtime: '3 mins'
published: 'December 20, 2019'
---

![deno](post-assets/deno.png)

> This post was last updated May, 2020 as Deno hit 1.0

[Deno](https://deno.land/) is a next-generation JavaScript runtime built in [Rust](https://www.rust-lang.org/) on top of [V8](https://v8.dev/). It employs an interesting least-privilege security model, uses standard ES Modules, sports a standard browser API, and supports TypeScript out of the box. It’s really nice!

## Quickstart

Let’s get started! First, let’s create a new Architect project:

```bash
npm init @architect ./denoapp --runtime deno
```

The init script generates a Lambda function in src/http/get-index/index.ts

```js
import { Context, Event } from 'https://deno.land/x/lambda/mod.ts'

export async function handler(event: Event, context: Context) {
  return {
    statusCode: 200,
    headers: {'content-type': 'text/html; charset=utf8'},
    body: `Welcome to deno ${Deno.version.deno} 🦕`
  };
}
```
[View source](https://github.com/brianleroux/arc-example-deno)

> Notice: we’re using native modules and TypeScript syntax!

## Work locally

Make sure you have [Deno installed locally](https://github.com/denoland/deno_install). Running `npm start` will start the local Sandbox, and automatically use your installed Deno runtime.

## Deploy to AWS

Deploying to AWS with `arc deploy` will work just as expected! 🎉

## That’s it!

Now you’re up and running with serverless Deno. You can find the [full source code for this tutorial here](https://github.com/brianleroux/arc-example-deno).

Bonus: here is a bare metal [SAM version](https://github.com/brianleroux/sam-example-deno) for you to check out.

## Next steps

Deploy a simple Hello World! Deno app to Begin in 15 seconds. What are you waiting for, anyway?

![Deploy to begin](deploy-to-begin.png)

- [Try out another Begin tutorial, like a full CRUD app with Begin Data!](https://docs.begin.com/en/guides/crud-app)
- 🌟 Check out (and star!) Begin’s open core [OpenJS Architect](https://github.com/architect/architect) on GitHub
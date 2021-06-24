---
title: Architect 8.4:say hello to Lambda treeshaking
image: 'image.png' 
category: uncategorized
description: One of the thing that sets OpenJS Architect apart from other serverless tools is its opinion that serverless apps work best when composed of many small, discrete Lambda cloud functions.
author: 'Ryan Block'
avi: 'ryan.png'
readtime: '2 mins'
published: 'December 21, 2020'
---

# Architect 8.4: say hello to Lambda treeshaking

![arc1](arc1.png)

One of the thing that sets OpenJS Architect apart from other serverless tools is its opinion that serverless apps work best when composed of many small, discrete Lambda cloud functions.

This approach offers the greatest coldstart performance, security isolation, deployment speed, and mean time to bug resolution. However, this approach also comes with a minor drawback: the need to manage many Lambdas’ dependencies.
Or at least it used to! Architect 8.4 introduces a new concept we call Lambda Node.js modules treeshaking.

## How Lambda treeshaking works

If you’d like to take advantage of the nearly 1.5 million publicly published Node.js modules, your Architect app may have numerous individual package.json files spread across its various Lambdae. Here’s an example file tree of how such a project might look:

```
/
├─ src/
│  └─ http
│     ├─ get-index
│     │  ├─ index.js
│     │  └─ package.json
│     ├─ post-api
│     │ ├─ index.js
│     │ └─ package.json
│     └─ put-api
│        ├─ index.js
│        └─ package.json
├─ app.arc
└─ package.json
```

Architect 8.4’s Lambda Node.js modules treeshaking now automatically statically analyzes all of your Lambdas’ business logic and manages each of their dependencies from the root. This means:

- You only ever have to install dependencies one time in one place: your root `package.json`

- Similarly, upgrading, removing, or otherwise maintaining dependencies happens in your root as well

- Perhaps our favorite: no more having to keep dozens (or hundreds) of individual package[-lock].json files in your repo

Now the project above looks like this:

```
/
├─ src/
│  └─ http
│     ├─ get-index
│     │  └─ index.js
│     ├─ post-api
│     │  └─ index.js
│     └─ put-api
│        └─ index.js
├─ app.arc
└─ package.json
```

## Get started with Lambda treeshaking

For starters, make sure you’re running Architect 8.4 (`npm i @architect/architect@latest`)!

For new projects, taking advantage of Lambda treeshaking is as simple as adding dependencies to your project’s root package.json file (and require()ing¹ them in your business logic).

For existing projects, any Lambdas that already have their own `package.json` will continue to have their dependencies wholly managed by you, meaning you can choose to mix and match dependency management on a per-Lambda basis.

We think this is a massive step forward in the ergonomics of building cloud function-native applications — we’d love to hear what you think in [Architect’s Slack!](https://architecture-as-text.slack.com/archives/C6BGT0D08/p1600199636147600)

¹ Architect will ship ESM support when Lambda ships Node.js 14 support; dynamic requires are not supported

![Art by Michael Ramstead](arc2.png)

<small>Art by [Michael Ramstead](https://www.michaelramstead.com/)</small>
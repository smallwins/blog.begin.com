---
title: 'Architect 4.3: even faster local offline development, and sunrise support for Python!'
image: 'post-assets/arc48.gif'
category: uncategorized
description: Architect treats local offline development of serverless apps as a first-class concern, and today we’re taking it to the next level.
author: 'Ryan Block'
avatar: 'ryan.png'
readtime: '2 mins'
published: 'November 15, 2018'
---

![arc48](post-assets/arc48.gif)

## [Architect](https://arc.codes/) treats local offline development of serverless apps as a first-class concern, and today we’re taking it to the next level.

[Architect 4.3 (Yeti)](https://www.npmjs.com/package/@architect/architect) includes an all-new version of sandbox (`npx sandbox`) that starts up instantly, instantly loads your local code changes, and best of all, paves the way for multiple runtimes.

## Instant startup

The new Architect sandbox now boots up instantly. In testing, >50 route projects start in under 300ms on a modern laptop. Whether your serverless app has 2 or 200 functions, you’ll never experience lag on account of simply continuing to build out your app.

## Live reloading

In addition to locally mocking cloud functions, Architect sandbox now even more closely emulates the properties of a true serverless stack by loading your latest code with each new request. Yet another small but meaningful performance improvement to make you faster and keep you in flow.

## Sunrise support for Python

We’re also very excited to share that Architect now has sunrise support for Python. In 4.3, you can now provision Python Lambdas, preview and test them headlessly in sandbox, and deploy them to `staging` and `production`.

Future versions will include support for locally generating Hello World boilerplate, and a port of the `arc-functions` helper library.

As you know, [Architect is an open source project](https://github.com/arc-repos/architect/), and we could use your bugs and PRs, Python hackers!

## Try out Architect in 30 seconds

Ready to give serverless a swing? **No AWS account required**, as you’ve probably figured out by now, Architect runs locally and offline!

1. Create a basic Node project:

```bash
mkdir testapp
cd testapp
npm init --yes
```

2. Install Architect:

```bash
npm i @architect/architect
```

3. Create a basic `.arc` file:

```arc
@app
testapp
@http
get /
```

4. Generate your project locally:

```bash
npx create --local
```

5a. [optional] To configure make your `get / route` a Python function, create `src/http/get-index/.arc-config` and add the following to it:

```arc
@aws
runtime python3.6
```

5b. [optional] Now create a new Python function at `src/http/get-index/index.py` that includes a method named handler:

```py
def handler(event, context):
  return {
    'status': 200,
    'type': 'text/html; charset=utf8',
    'body': '<h1>Hello world!</h1>'
  }
```

6. Fire up the Architect sandbox to preview your work:

```bash
npx sandbox
```

![arc49](post-assets/arc49.png)

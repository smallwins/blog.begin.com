---
title: Introducing Slack JS 9.0.0 🎉
image: 'image.png' 
category: uncategorized
description: Slack for JS is a super tiny Slack Web API client for NodeJS and the browser.
author: 'Brian Leroux'
avi: 'brian.jpg'
readtime: '2 mins'
published: 'September 25, 2017'
---

# Introducing Slack JS 9.0.0 🎉

![arc71](arc71.png)

Super stoked to share the latest version of our JS client for the Slack Web API! You can find the [source code here](https://github.com/smallwins/slack) and the [npm distribution here](https://npmjs.com/slack).

## Speed is 🔑

Apps built for Slack by their nature are real time. All facets of speed are critical factors for creating a great user experience. And with performance as our guide I am very pleased to say we support the entire Slack Web API in a **7kb (not gzip’d) payload** that has been solidly tested for all LTS versions of Node and modern evergreen browsers.

Being so tiny means this library loads super fast which makes it perfect for **AWS Lambda** and **browser-based applications** where cold start responsiveness is critical.

## Modern JS 📟💬

Building apps on Slack has matured a tonne since 1.0.0, which shipped in September of 2016. Between evergreen browsers and Node 8.x about to go LTS it was time to open up the interface support for more modern async primitives now that they have suitably matured.

```js

const Slack = require('slack')
const token = process.env.SLACKBOT_TOKEN
const bot = new Slack({token})

let result = await bot.api.test({hello:'world'})

console.log(result)
```
<small>Modern features JS are now well enough supported the library no longer requires a transpile step to publish.</small>

> ⚙ Tip: https://arc.codes sets up a Slack Events API endpoint in minutes on AWS API Gateway and Lambda

## Install 🚀

```bash
npm i slack --save
```

## New shiny 💖

- Code now dynamically generates itself at runtime using `api.json `instead of statically compiling from it
- Async choice: all methods now will return a `Promise` if a Node style `errback` isn’t passed
- `class` based instances can be created where all methods have `token` prebound

Upgrading? Read on! ➡

## Things that stay the same 👯‍♂️

- Code is still generated from the Slack Web API documentation so the method signatures match their published docs precisely
- The original “old school” functional stateless Web API with Node style errback interface remains the same (as it has since 1.0.0!)

## Things being removed 👋

- `web.rtm.client` which wraps the Slack RTM API has been removed; we recommend using the Slack Events API for ingesting real time events
- `web.api.client` has been removed in favor of treating `slack` as a constructor function

## Changes for Contributors 🍄

- This library is largely maintained by [begin.com](https://begin.com/) and [missions.ai Slapp](https://missions.ai/) devs. This release means an 87% decrease in memory footprint for users of this lib! 🏎💨
- The transpile step is gone, so generating is faster because builds are faster, which makes tests faster and the dep tree lighter
- Currently only two dependencies remain: `util.promisify` and `tiny-json-http` and we have the goal to move that number to zero while retaining total API stability

> Thanks to the Slack dev community, and contributors and in particular Angelina Fabbro, spencer kelly, Ryan Block and Mike Brevoort for reviewing the code and this post.
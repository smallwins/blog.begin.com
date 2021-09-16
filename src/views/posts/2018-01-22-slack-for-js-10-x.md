---
title: Slack for JS 10.x! 🔥
image: 'post-assets/arc71.jpg'
category: uncategorized
description: Slack for JS is a super tiny Slack Web API client for NodeJS and the browser.
author: 'Brian Leroux'
avatar: 'brian.jpg'
readtime: '2 mins'
published: 'January 22, 2018'
---

![arc71](post-assets/arc71.jpg)

## [Slack for JS](https://www.npmjs.com/package/slack) is a super tiny Slack Web API client for NodeJS and the browser.

With it, you can make use of the entirety of Slack’s 130+ methods from a single, lightweight library. (It’s also what we use at [Begin](https://begin.com/)!)

Way back in September we [shipped Slack 9.x ](/2017-09-25-introducing-slack-js-9-0-0) which enjoyed many enhancements under a theme of performance. We managed to get the browser payload down to blazing fast 7KB while retaining backwards compatibility for the core API surface.

Along the way, JavaScript has advanced as a language, and so we were also able to offer shiny new API surface for the `class` and `async/await` constructs. 🎉

## Whats New in 10.x! ✨

Since the 9.x release we’ve seen a boost in community interaction and I’m really happy to share a bunch of nice improvements:

- [TypeScript typedefs](https://github.com/smallwins/slack/blob/master/slack.d.ts) based on the generated source
- [Steno is now supported](https://slackapi.github.io/steno/) by using an environment variable `STENO_URL`
- Native support for Electron networking layer `electron.net` which allows for better network authentication proxy support
- Code coverage reporting for the test suite

> Extra special thanks to [Dan Prince](https://twitter.com/_danprince) and [Charlie Hess](https://twitter.com/charlie_hess) for helping on this release; we got here with your help!

## Notable Fixes 🐞

We had a long undiscovered bug in `slack.files.upload` wherein were were sending the payload encoded as `application/x-www-form-urlencoded` instead of `multipart/form-data`. It surprised us we hadn’t seen this one! We managed to fix it while retraining a small payload and backwards compatibility. 😅

Long ago, when denoting rate limiting, Slack used to send a HTTP body: `You are sending too many requests. Please relax.` (Which the author thought was awesome btw.) At some point that changed to HTTP `statusCode 429`, which we now handle as a proper native `Error`. Since this was technically a breaking change we decided to bump the semver major to 10.x.

Also notable in 10.x we managed to triage our way to zero Github issues! 🙀

## Whats Next? 🚀

You tell us! We value quality, speed, and a stable, always backwards compatible API surface. If you think something is broken, missing or even if you just have a rad idea please don’t hesitate to let us know by filing an issue on [Github](https://github.com/smallwins/slack)!

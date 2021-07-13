---
title: 'Architect 8.0: HTTP catchall syntax, @proxy, new HTTP methods, npm 7 compat'
image: 'post-assets/arc1.jpg' 
category: uncategorized
description: More flexible and powerful than ever, with greedy catchall syntax, and legacy server migration with @proxy
author: 'Ryan Block'
avi: 'ryan.png'
readtime: '3 mins'
published: 'October 16, 2020'
---

![arc1](post-assets/arc1.jpg)

## [OpenJSF Architect](https://arc.codes/) powers thousands of real production serverless applications all over the world. We continue to hear how valuable folks find its focused, direct, stable, lock-in-free approach to building blazing fast modern web apps without ever having to manage a single server.

Today we’re announcing Architect 8 (El Chupacabra), which adds the newest Architect pragma, `@proxy`, and makes `@http` routes even more powerful with three new additions!

## Create your first serverless app in <60 seconds!

Want to give it a go? Here’s the super quickstart, no AWS credentials required:

![arc6](post-assets/arc6.gif)

First: `npm init @architect ./your-app-name`
Then: `npx arc sandbox`
**That's it!**

Ok, on to the new stuff.

## Catchall syntax

A powerful new `@http` primitive, catchall syntax (`*`) allows Architect routes to capture all paths. For example, say you want to handle all get requests to your entire RESTful API in a single endpoint. Now with catchall syntax, you can simply define `get /api/*`, and all get requests to `/api/category/123/item/456 or /api/categories` or `/api/sellers/789` will all be sent to your `get /api/*` handler.

You can even pair catchalls with URL params for highly dynamic path matching with some structure, for example: `/:apiVersion/*` This is a very powerful new way to author Architect apps and APIs!

## @proxy

We often hear from the community that something holding them back from building more of their application serverlessly is the need to have clean migration paths for legacy systems. Today we’ve taken a big step forward in improving those workflows with the addition of `@proxy`.

With `@proxy`, any HTTP requests that miss an @http route are automatically forwarded to your existing site or API. For example, say you have an existing API at `https://apiurl/v1`. With `@proxy`, you can run a parallel v2 endpoint from a fresh Architect app like so:

```arc
@http
get /v2/*
post /v2/*
@proxy
production https://apiurl
```

With the above Architect file, your new app will respond to all get and post requests to `/v2/*`, and forward along requests to `/v1` to your existing API.

## New methods: any, head, and options

Architect now supports head and options methods for full customization of asset and CORS responses, as well as the highly flexible any method, which accepts HTTP requests of, well, any method. Try them out like so:

```arc
@http
any /all-methods
head /asset/:filename
options /
```

## Literal `get /`

With the addition of catchall syntax and any method, Architect now defaults to making the `get /` route literal, meaning less confusion for new users getting started, who would see uncaught requests hitting their root handler. Architect 8’s literal `get /` also means potentially less logic and greater performance for what is likely your most important single route.

For existing users upgrading from 7 to 8 that rely on Architect’s previous non-literal `get /` behavior, simply rename your route to `any /*`, and move your `src/http/get-index` folder to `src/http/any-catchall`. That’s it!

## npm 7 support

We’re also expanding support for all Architect function dependencies with full [npm 7](https://blog.npmjs.org/post/631877012766785536/release-v700) support, while retaining full backward compatibility for npm 6 (and earlier), as well as yarn. Go ahead and upgrade to 7, we’ve got you covered!

## Upgrading from Architect 6.x + 7.x

We mentioned above the single change Architect 7 users may need to make to upgrade to 8.x (renaming `get /` to `any /*`), however 6.x (and earlier) users should refer to our comprehensive [Architect upgrade guide](https://arc.codes/guides/upgrade), which identifies which changes, if any, will be needed to upgrade.

## The return of El Chupacabra

Architect fans may recall that our last major release, Architect 7, was named after the one and only Chupacabra. Since Architect 8 is in some ways more like Architect 7.1 (and was only released a few weeks after 7), we weren’t yet ready to let go of our current cryptid, so we’re doubling down with El Chupacabra.

## Thank you

As ever, we must express our gratitude to the Architect community for its feedback and support, as well as to the folks at AWS for the hard work they do to make all our futures a little more serverless.

Don’t forget to join the [Architect conversation in Slack!](https://architecture-as-text.slack.com/archives/C6BGT0D08/p1600199636147600)

![Art by Michael Ramstead](post-assets/arc2.png)

<small>Art by [Michael Ramstead](https://www.michaelramstead.com/)</small>
---
title: 'Architect 4.1: serverless, meet frontend workflows'
image: 'image.png' 
category: uncategorized
description: Last week we released Architect 4 (Yeti), focused on simplicity and speed. Today we’re incredibly stoked to share Architect 4.1, our most frontend friendly release ever.
author: 'Ryan Block'
avi: 'ryan.png'
readtime: '2 mins'
published: 'October 29, 2018'
---


![arc55](post-assets/arc55.jpg)
<small>Photo by Val Vesa</small>

Last week we [released Architect 4 (Yeti)](https://blog.begin.com/introducing-architect-4-0-faster-lighter-simpler-serverless-59f6dc156bf2), focused on simplicity and speed. Today we’re incredibly stoked to share [Architect 4.1](https://arc.codes/), our most frontend friendly release ever.

4.0 introduced the new `public` directory that automatically syncs your static assets to the cloud, making it an ideal companion to your existing frontend build steps.

4.1 unlocks the ability to share frontend code across cloud functions with the [introduction of @views](https://blog.begin.com/architect-4-1-serverless-meet-frontend-workflows-3b3dd457de9#e203), enabling new patterns for dynamic asset delivery and server-side rendering.

Together, we think Architect’s `public` directory and `@views` system is going to change the game for web developers onboarding into the serverless world.

[Jump straight into examples and tutorials of the Architect Views pattern!](https://blog.begin.com/serverless-front-end-patterns-with-architect-views-cf4748aa1ec7)

or
→ [Create a serverless app with Architect in 30s](https://blog.begin.com/architect-4-1-serverless-meet-frontend-workflows-3b3dd457de9#35cd)

## How @views works

In Architect 4.1, your project will now have access to the `src/views` folder. (If you already have a views folder in your repo, don’t worry, Architect won’t mess with it.)

Now, by default, `src/views` (if you create it) will be copied to all your `@http` `GET` functions whenever working locally or deploying your app.

If you’d like to surgically target your views, just add an `@views` section to your `.arc` manifest, and list the specific `@http` functions you’d like `src/views` to copy into.

For example, if you want your views to be available in just `get /webapp`, but not `get /`, simply add the following to your `.arc` manifest:

```arc
@http
get /
get /webapp
@views
get /webapp
```

[Head here for more information and some really sweet examples on how to use @views in Architect 4.1!](https://blog.begin.com/serverless-front-end-patterns-with-architect-views-cf4748aa1ec7)

## Also new in Architect 4.1

- 4.1 enables richer route creation by adding support for dashes, periods, and underscores in static URL parts (e.g. `get /add-to-slack`), so you no longer need to use parameters to enable URLs with those characters.
- JSON and YAML manifest parsing has also been updated to support new `@http` and `@views` pragmas.

## Try out Architect in 30 seconds

Ready to give serverless a swing? No AWS account required, Architect runs locally and offline!

1. Create a vanilla Node project:

```bash
mkdir testapp
cd testapp
npm init --yes
```

2. Install Architect:

```bash
npm i @architect/architect
```

3. Create a basic .arc file:

```arc
@app
testapp
@http
get /
```

4. Generate your project locally:

```bash
npx create --local
mkdir src/shared
mkdir src/views
```

5. Fire up the Architect sandbox to preview your work:

```bash
npx sandbox
```

![arc49](post-assets/arc49.png)
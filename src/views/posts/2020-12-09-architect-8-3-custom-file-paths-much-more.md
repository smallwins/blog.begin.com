---
title: 'Architect 8.3: custom file paths & much more'
image: 'post-assets/arc1.jpg' 
category: uncategorized
description: By popular demand:OpenJS Architect 8.3 (El Chupacabra) now supports custom file paths, custom Lambda templates, a fresh new local (and global) preferences file, and lots more!
author: 'Ryan Block'
avi: 'ryan.png'
readtime: '3 mins'
published: 'December 09, 2020'
---

![arc1](post-assets/arc1.jpg)

## By popular demand: OpenJS Architect 8.3 (El Chupacabra) now supports custom file paths, custom Lambda templates, a fresh new local (and global) preferences file, and lots more!

## Custom file paths

By default, like many frameworks, Architect relies on convention over configuration — meaning you can expect certain things, like the placement of function handlers, to appear in default, deterministic locations.

However, some projects and integrations necessitate more granular configurability. In Architect 8.3, you can express your project in a more verbose format that exposes additional settings, such as a custom handler source directory.

Example:

```arc
# app.arc
@http
# simple - assumes src/http/get-foo/
get /foo
# verbose
/bar
  method get
  src whatever/dir/you/want
```

With this, you can even point two distinct Lambdas at the same code, like so:

```arc
@http
/foo
  method post
  src some/dir
/bar
  method get
  src some/dir
```

This superpower also extends to Architect’s built-in code sharing, as well. Code that Architect would share to all of your functions via `src/shared` and `src/views` is now able to be configured to any path:

```arc
@shared
src shared-code
@views
src frontend
```

## Embed your Architect project in `package.json`

Some folks like to define their Architect projects in JSON with the `arc.json` file — and now Architect can read that definition from within an existing `package.json` file (under an `arc` or `architect` parameter). Check it out:

```json
// package.json (not that you can comment JSON lol)
{
  "name": "your-app",
  "version": "1.0.0",
  "description": "my team's serverless app",
  "dependencies": {
    "@architect/architect": "^8.3.0"
  },
  "arc": {
    "app": "app-name-for-aws",
    "aws": {
      "region": "us-west-1"
    },
    "http": {
      "get": "/",
      "post": "/api"
    }
  }
}
```

For Node.js projects, this can be a nice way to define your application’s dependency and infrastructure manifests combined into a single file.

## New preferences file

Developers on your team may have different preferences or needs for their local environment — for example, testing environment variables, or preferring to enable automatic Lambda handler creation when starting up the Sandbox local dev environment.

To support new configurability, Architect now has a local preferences file (`preferences.arc` or `prefs.arc`) for defining per-user settings for Architect workflows. Additionally, you can also add a global `~/.preferences.arc` or `~/.prefs.arc`, which will automatically resolve against your project-level preferences file (if present).

Learn more about some of the new [preferences available to Architect here(https://arc.codes/reference/preferences)].

## Custom handler templates

Architect automatically generates boilerplate Lambda handler files by running `arc create` (or by adding `@create autocreate true` to your `preferences.arc` file, and then starting Sandbox). Now you can define custom templates for Architect to use by adding an `@create` pragma to your preferences file, like so:

```arc
@create
templates
  http templates/http.js       # files can be inside your project
  events ~/arc-stuff/events.py # ... or elsewhere on your computer
```

## Thank you

A hearty thanks to everyone in the Architect community who tested the beta releases of Architect 8.3 — without your help, we would not have the level of stability in our releases that we do.

Don’t forget to join the [Architect conversation in Slack!](https://architecture-as-text.slack.com/archives/C6BGT0D08/p1600199636147600)

![Art by Michael Ramstead](post-assets/arc2.png)

<small>Art by [Michael Ramstead](https://www.michaelramstead.com/)</small>
---
title: 'Architect 8.3: custom file paths & much more'
image: 'post-assets/arc3.jpg' 
category: uncategorized
description: By popular demand:OpenJS Architect 8.3 (El Chupacabra) now supports custom file paths, custom Lambda templates, a fresh new local (and global) preferences file, and lots more!
author: 'Paul Chin Jr'
avi: 'paul.jpg'
readtime: '4 mins'
published: 'November 16, 2020'
---

![arc3](post-assets/arc3.jpg)
<small>Photo by NOAA on Unsplash</small>

## C.R.E.A.M — Cache rules everything around me

As web developers, we interact directly with the application layer through HTTP. Reducing your application to requests and responses is a useful technique to model your architecture. Your application can have multiple routes in both the front and back end. Keeping some requests local will maximize the performance, but can also introduce other problems when requesting assets from a long-lived cache. We want to cache assets as long as possible to reduce network latencies, but we have to make sure users are receiving the latest version. What we’d like is the fastest delivery of the freshest asset we have.

## Fingerprinting

Creating unique filenames will force the cache to update but managing those file names can be cumbersome. Each asset becomes a new file every time you update it. For example: `index.js` becomes `index-somehash123.js` after a saved change. Then it will update again to `index-somehas456.js` after another saved change. This process hashing a filename is known as fingerprinting.

**Let’s start by creating a new Begin app, where we will add an API route that will return the fingerprinted filename of the client-side JavaScript file at runtime!**

<!-- ![Deploy to begin](deploy-to-begin.png) -->

<div class="mb5 mt5" align="center"><a href="https://begin.com/apps/create?template=https://github.com/pchinjr/fcc-serverless-api"><img height="70" src="https://res.cloudinary.com/practicaldev/image/fetch/s--yYw27_-V--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://static.begin.com/deploy-to-begin.svg" alt="Deploy to Begin" loading="lazy"></a></div>


Take a look at the static assets tab in your Begin console and you will see two files that have been uploaded to S3 that correspond to the /public folder in the project.

![arc4](post-assets/arc4.png)

Next, let’s edit `app.arc` by adding `@static fingerprint true` which will fingerprint the files and create an asset manifest, `public/static.json`.

```arc
# app.arc
@app
begin-app
@http
get /
@static
fingerprint true
```

After you push that change to your default branch, Begin will create a new build. Now take another look at the Static Assets tab. Your app is configured to serve the latest asset from a long-lived cache. Your S3 bucket will have `background-fingerprint123.jpg`, but your client-side code will still recognize `background.jpg`, thanks to `static.json`!

![arc5](post-assets/arc5.png)

Now you know that users will always have the freshest content.

Fingerprinting is available on every Begin app with just one line of code in the `app.arc` file. Begin will keep track of your static assets for you and configure the redirects behind the scenes so your local development experience will still be seamless.

## Runtime helpers for static assets

`@architect/functions` is also updated to include a helper method for calling filenames at runtime inside your Lambda functions. Let’s continue using our example above to see this helper in action. We’re going to inspect the `get-index` handler that returns the main contents of our page.

```js
// src/http/get-index/index.js
const Main = require('@architect/views/main.js')
const arc = require('@architect/functions')
// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'Your Name', // ←  Start by adding your name!
    title: 'My personal site!',
    occupation: 'Artist & Photographer',
    location: 'West Glacier, MT',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
     /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: 'your@email.com',
    twitter: 'yourTwitter',
    linkedin: 'your-linkedin-name',
    instagram: 'yourInsta',
    facebook: 'your-facebook-name',
     /**
     * Layout
     */
    photographer: 'Ivana Cajina',
    service: 'Unsplash',
    credit: 'https://unsplash.com/@von_co',
    // Applying arc.static for a runtime lookup of filename from S3
    image: arc.static('background.jpg', {stagePath: false})
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })
return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}
```

`arc.static` is a helpful method that returns a URI path to your static asset file based on a lookup from `static.json`.

![arc6](post-assets/arc6.png)

`background.jpg` is now `background-c580ddd102.jpg` and we can let `arc.static()` keep track of the full file reference for you!

## Next Steps

- Deploy a new Personal Website to Begin in 30 seconds (no credit card required):

<div class="mb5 mt5" align="center"><a href="https://begin.com/apps/create?template=https://github.com/pchinjr/fcc-serverless-api"><img height="70" src="https://res.cloudinary.com/practicaldev/image/fetch/s--yYw27_-V--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://static.begin.com/deploy-to-begin.svg" alt="Deploy to Begin" loading="lazy"></a></div>

- [Try out another Begin tutorial, like a full CRUD app with Begin Data!](https://docs.begin.com/en/guides/crud-app)
- 🌟 Check out (and star!) Begin’s open core [OpenJS Architect on GitHub](https://github.com/architect/architect)
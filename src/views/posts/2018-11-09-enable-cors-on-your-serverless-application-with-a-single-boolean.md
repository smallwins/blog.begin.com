---
title: Enable CORS on your serverless application with a single boolean
image: 'post-assets/arc53.jpg' 
category: uncategorized
description: Retrieve data from any static site with Architect. CORS is often painful to implement. But with Architect we’ve made it significantly nicer to work with. Now you can build an API and retrieve your data from any static website.
author: 'Brian Leroux'
avi: 'brian.jpg'
readtime: '3 mins'
published: 'November 09, 2018'
---


![arc53](post-assets/arc53.jpg)
<small>photo by Rye Jessen</small>

> Previous versions of this post referred to using CORS in a now out of date version of Architect; however, we have preserved forwards compatibility in our runtime helper library [@architect/functions](https://www.npmjs.com/package/@architect/functions), and updated this post.

CORS is often painful to implement. But with Architect we’ve made it significantly nicer to work with. Now you can build an API and retrieve your data from any static website.

Let’s give it a whirl.

First, create a simple project on GitHub with a single `index.html` file:

```html
<b>hi from github pages!</b>
```

Click on **Settings → GitHub Pages** and set the source to the master branch you just pushed. That’ll take a second to build, so let’s set up the API!

We’ll build an Architect project in the same repo (why not):

```bash
touch .arc
npm init --yes
npm i @architect/architect
```

Edit the `.arc` manifest:

And now run `npx create` to generate an API endpoint, and edit the function handler in `src/http/get-index` like so:

```js
let arc = require('@architect/functions')
async function http(req) {
  return {
    cors: true,
    body: JSON.stringify({ hello: 'world' })
  }
}
exports.handler = arc.http.async(http)
```

That’s it. CORS has been reduced to a boolean! Deploy your Lambda with `npx deploy` (and note the deployment URL).

We’ll now return to our GitHub Pages code in `index.html` and add a little bit of client-side JS goodness:

```html
<b>hi from github pages!</b> 
<script type=module>
                       
async function main() {                          
  let url = `${your deployment URL here}`                         
  let req = await fetch(url)                         
  let json = await req.json()                             
  console.log(json)                       
}                       
main()                       
</script>
```

Deploy the frontend by checking in the code and hop on over to your GitHub Pages URL to preview your handy work. Cross-Origin Resource Sharing! Neat.

This means we can build our frontend application using the modern frontend development tools you’re accustomed to, while leveraging all of the serverless AWS power from a completely separate domain. All without having to resort to setting up DNS. **JAMstack devs rejoice!** 🚀

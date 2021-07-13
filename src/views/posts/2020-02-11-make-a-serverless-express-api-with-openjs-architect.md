---
title: Make a serverless Express API with OpenJS Architect
image: 'post-assets/arc25.jpg' 
category: uncategorized
description: Migrate your existing Express API or make use of your existing Express middleware in a serverless app
author: 'Brian Leroux'
avi: 'brian.jpg'
readtime: '2 mins'
published: 'February 11, 2020'
---


![arc25](post-assets/arc25.jpg)
<small>Photo by Fikri Rasyid</small>

## It’s finally possible to transition your Express apps to a fully serverless architecture with just a few lines of code.

Hit this button to deploy a `Hello World!` app that uses Architect’s new Express migration middleware; it’ll take about 15 seconds:

<a href="https://begin.com/apps/create?template=https://github.com/pchinjr/fcc-serverless-api"><img class="block m-auto mt3 mb3" src="https://res.cloudinary.com/practicaldev/image/fetch/s--yYw27_-V--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://static.begin.com/deploy-to-begin.svg" alt="Deploy to Begin" loading="lazy"></a>

Or follow these steps to try it yourself from scratch! Node.js is required, but an AWS account is not.

1. Create a new Architect app:

```bash
npm init @architect ./myexpress
```

2. Add dependencies:

```bash
cd myexpress/src/http/get-index
npm init --yes
npm i express @architect/functions
```

3. Express yourself 💅🏾

```js
// src/http/get-index/index.js
let arc = require('@architect/functions')
let express = require('express')
let app = express()
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/cool', (req, res)=> res.send('very cool'))
exports.handler = arc.http.express(app)
```

4. Start the local server withnpm start and enjoy!

> ⚠️ Note: Bundling an entire app with a web server in a Lambda function will result in poor performance if the entire function’s payload (including dependencies) exceeds 5MB.

## Next Steps

Pretty neat, right? If you didn’t do it already, try it for yourself in 15 seconds: click the button below to deploy a Hello World! app that uses Architect’s new Express migration middleware:

<a href="https://begin.com/apps/create?template=https://github.com/pchinjr/fcc-serverless-api"><img class="block m-auto mt3 mb3" src="https://res.cloudinary.com/practicaldev/image/fetch/s--yYw27_-V--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://static.begin.com/deploy-to-begin.svg" alt="Deploy to Begin" loading="lazy"></a>

- [Try out another Begin tutorial, like a full CRUD app with Begin Data!](https://docs.begin.com/en/guides/crud-app)
- 🌟 Check out (and star!) Begin’s open core [OpenJS Architect](https://github.com/architect/architect) on GitHub
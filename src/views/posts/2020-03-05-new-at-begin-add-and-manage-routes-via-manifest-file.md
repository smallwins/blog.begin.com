---
title: 'New at Begin: add and manage routes via manifest file'
image: 'image.png' 
category: uncategorized
description: We’ve got some pretty big news for how you build apps on Begin:it’s finally possible to add and remove your app’s routes entirely via manifest file.
author: 'Brian Leroux'
avi: 'brian.jpg'
readtime: '3 mins'
published: 'March 05, 2020'
---

![arc24](post-assets/arc24.png)

We’ve got some pretty big news for how you build apps on Begin: **it’s finally possible to add and remove your app’s routes entirely via manifest file.**

This crucial best practice for building modern applications is commonly known as infrastructure-as-code, and it’s a key enabler of iteration speed.

Our goal at Begin is to make you — and your apps — massively faster. A key ingredient in maximizing developer velocity is minimizing any friction related to iteration speed. Faster iteration equals faster developers.

## Try it out right now

Hit this button to deploy a new CRUD app to Begin in 15 seconds. From there you’ll be able to add to its three existing routes:

![Deploy to begin](deploy-to-begin.png)

## How it works

Infrastructure-as-code is the practice of provisioning and maintaining cloud infrastructure using a declarative manifest file. It’s like `package.json`, except for cloud resources like API Gateway, Lambda, and DynamoDB (all of which Begin apps use).

By checking in your Begin app’s project manifest (`app.arc`) file with your code, you can ensure you have exactly the cloud resources your code depends on. This is crucial for ensuring reproducibility and improving iteration speed.

Let’s take a look at it in practice. Here’s the `app.arc` file from the example CRUD app mentioned above:

```arc
@app
begin-app
@http
get  /todos
post /todos
post /todos/delete
```

In addition to serving a static `index.html` file at the root of your app, this manifest creates the cloud infrastructure for the above three defined routes as follows:

- `get /todos` uses your handler code in `src/http/get-todos/index.js` to service GETs `{your}.begin.app/todos`
- `post /todos` uses your handler code in `src/http/post-todos/index.js` to service POSTs to `{your}.begin.app/todos`
- `post /todos/delete` uses your handler code in `src/http/post-todos-delete/index.js` to service POSTS to `{your}.begin.app/todos/delete`

## Create a new route in five easy steps

Ready to give it a go?

1. Head to your app’s repo folder
2. Open the `app.arc` file in your root
3. Find (or add) the `@http` pragma, and on a new line, add a route (such as `get /foo` or `post /api/:itemID`)
4. Start the local dev environment (`npm start`) to generate any new HTTP Function handlers
5. Push your changes!

Your new route(s) will instantly activate in `staging`. Then deploy to `production` to see them there, too.

> If your app’s existing `app.arc` file has a commented warning about not editing it, go ahead and remove that – it's time to start editing that file!

## Next Steps

- Deploy an AVA example app to Begin in 15 seconds:

![Deploy to begin](deploy-to-begin.png)

- [Try out another Begin tutorial, like a full CRUD app with Begin Data!](https://docs.begin.com/en/guides/crud-app)
- 🌟 Check out (and star!) Begin’s open core [OpenJS Architect](https://github.com/architect/architect) on GitHub
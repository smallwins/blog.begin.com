---
title: 'Introducing Begin Data: DynamoDB made ridiculously easy!'
image: 'post-assets/arc44.jpg' 
category: uncategorized
description: Fast, scalable cloud function-based apps need fast, scalable cloud function-capable persistence.
author: 'Brian Leroux'
avi: 'brian.jpg'
readtime: '5 mins'
published: 'January 22, 2019'
---


![arc44](post-assets/arc44.jpg)
<small>Photo by John Barkiple</small>

Fast, scalable cloud function-based apps need fast, scalable cloud function-capable persistence.

AWS DynamoDB is a great solution for serverless data, but working with it can be quite intimidating! [Begin Data](https://docs.begin.com/en/data/begin-data) is a super tiny wrapper for DynamoDB that makes it incredibly easy to get started using it for your application’s key/value and document persistence.

Begin Data’s core API has three simple methods: `get`, `set`, and `destroy` for reading, writing, and removing JSON documents by the properties `{table, key}`.

And because Begin Data is just a lightweight wrapper on top of DynamoDB, it enjoys single digit millisecond latency, at-rest data encryption, and storage capacity that is on-demand with auto-scaling availability.

It’s a perfect fit for many serverless applications! [The code is open source under the Apache 2 License on GitHub](https://github.com/smallwins/begin-data). Read on for examples of usage.

## RESTful CRUD example code 🐈✨

Below is an example RESTful API built with Architect @http Functions. A production implementation would include authentication and parameter validation middleware, which we’ll leave as an exercise to the reader. For our purposes we want to show you how to read and write data!

This Lambda reads a table of JSON documents named `cats`. If there are none it returns `[]` .

```js
let data = require('@begin/data')
// GET /api/cats

exports.handler = async function http(req) {
    let cats = await data.get({table: 'cats'})
    return {
        type: 'application/json',
        body: JSON.stringify(cats)
    }
}
```

`data.set` will create a key if one is not supplied.

```js
let data = require('@begin/data')
// POST /api/cats

exports.handler = async function http(req) {
    let result = await data.set({
        table: 'cats',
        cat: req.body,
        })
    return {
        status: 201,
        type: 'application/json',
        location: `/api/cats/${result.key}`,
        body: JSON.stringify(result.cat)
    }
}
```

Updating a document by key.

```js
let data = require('@begin/data')
// PATCH /api/cats/:key

exports.handler = async function http(req) {
    let result = await data.set({
        table: 'cats',
        key: req.params.key,
        cat: req.body,
        })
    return {
        status: 204,
        location: `/api/cats/${result.key}`,
    }
}
```

Or `destroy` a document by key.

```js
let data = require('@begin/data')
// DELETE /api/cats/:key

exports.handler = async function http(req) {
    await data.destroy({
        table: 'cats',
        key: req.params.key,
        })
    return {
        {status: 204}
    }
}
```

> While out of scope for this article it is worth noting that exposing data via a GraphQL endpoint is also completely possible with an Architect @http Lambda functions. You still have to write the schemas, but Begin Data could definitely help with the resolvers.

## More about generated keys

Begin Data automatically will generate a `key` if you did not supply one. The generated IDs are guaranteed unique to the table, and URL-friendly.

```js
// JS stores UNIX EPOCH in milliseconds
// so we convert it to seconds

let hour = (Date.now()+(60*60*1000))/1000

let resetPassword = await data.set({
    table: 'reset-password-tokens',
    email: req.body.email,
    ttl: hour.toFixed(),
})

console.log(resetPassword)
// logs:
//
// {
//  table: 'reset-password-tokens',
//  key:  'zxcvcxvxf'
//  email: 'sutro@brian.io,
//  ttl: 14578937,
// }
```
<small>All documents have a table and key; if no key is supplied one is generated</small>

### Time to live ⏳

You can expire documents by supplying a ttl property with a UNIX epoch value in seconds of when you want the document to be deleted. This is super handy for tasks like expiring tokens.

Data that scales to zero is a notable characteristic of both serverless compute and databases.

### Batch operations

You can batch operations by passing an `Array` of `{table, key}` Objects.

Save multiple JSON documents at once.

```js
await data.set([
    {table: 'users', name, email, phone, password},
    {table: 'verify-email-token', ttl, email},
    {table: 'verify-phone-sms', ttl, phone},
])
```

Or, destroy multiple documents at once!

```js
await data.destroy([
    {table: 'users', key:otp},
    {table: 'docs', key:docID},
])
```

### Keep score

Begin Data has a few extra helpers for counting the number of documents in a table with count({table}) and atomic increment incr and decrement decr.

Perfect for games! 👾

### Local quickstart

You can try out Begin Data completely locally with Architect. [Check out the Begin Data Example Quickstart code here.](https://github.com/smallwins/begin-data-example-quickstart)

## Wait… how much does Dynamo cost?

Database costs are (rightfully) a common concern. Fortunately, DynamoDB’s free tier should be more than enough to prove your app concept. While it isn’t free, it is pretty reasonable:

- First 25 GB stored per month: free
- $1.25 per million 1KB writes
- $0.25 per million reads

> As an aside, my favorite response to this question is, “When it comes to securing, sharding, and scaling your database… how much does it cost to hire a DBA?”

## Summary

[Begin Data](https://docs.begin.com/en/data/begin-data) makes it easy to persist and read key/value JSON document data quickly. Bonus features like time-to-live, and counters make it perfect for many serverless persistence use cases.

If you outgrow the simple `get`, `set` and `delete` API, the path to upgrading to full DynamoDB, or even another storage solution, is clear. 🌅

## Next steps

- ✏️ Sign up for the [Begin.com](https://begin.com/) beta
- ⭐️ [Star Begin Data on GitHub](https://github.com/smallwins/begin-data)
- 🌟 [Star Architect on GitHub](https://github.com/arc-repos/architect)
- 💓 Build something cool and [tell us about it on Twitter](https://twitter.com/begin)!
---
title: Build an infinitely scalable* Slack app in 5 minutes
image: 'image.png' 
category: uncategorized
description: Everyone’s favorite work messaging app — Slack — offers a powerful, open platform for developing rich applications in an increasingly important venue:where teams work and communicate together online.
author: 'Brian Leroux'
avi: 'brian.jpg'
readtime: '7 mins'
published: 'February 07, 2018'
---


# Build an infinitely scalable* Slack app in 5 minutes

![arc64](arc64.png)
<small>Image courtesy gas2</small>

Everyone’s favorite work messaging app — Slack — offers a powerful, open platform for developing rich applications in an increasingly important venue: where teams work and communicate together online. (This is why we started Begin!)

Amazon Web Services pioneered the relatively new concept — serverless application infrastructure — with their cloud functions product AWS Lambda.

Together these two platforms make for a delicious combination. Building software for Slack is an entirely web API-based endeavor, and Lambda makes for a superbly fast and flexible runtime for web services.

Ready to start delivering applications directly into the hub of the enterprise, using a new suite of technologies that enables you to focus solely on your application logic, without lengthy deploy times and little concern for scaling?

Let’s hit it!

> This series of posts will walk through building for Slack with [Architect](https://arc.codes/), a framework for provisioning and managing serverless infrastructure we built for [Begin](https://begin.com/).

1. [Stand up your infra and configure a new Slack app](https://medium.com/p/972789924f3f) (this post!)
2. Installing Slack apps with **Add to Slack** (coming soon!)
3. Building super fast buttons and interactions inside of Slack
4. Listening for Slack events

## Prerequisites ✨

Before we get started make sure you have the following boxes checked:

- You have an active AWS account (with permissions for using Lambda, API Gateway, and DynamoDB)
- You’ve added your AWS credentials in `~/.aws/credentials` or `C:\Users\USER_NAME\.aws\credentials`
- You have an active Slack team (with permissions to build and install applications)
- [NodeJS is installed](https://nodejs.org/en/download/) on your machine
- The title was a total lie this will probably take you more than 5 minutes (the first time: once you know your way around these tools it really will only be 5 mins! I promise.)

You can learn more about getting setup at https://arc.codes/quickstart/setup

## Step 1: Provisioning Your Serverless Infrastructure

If you know the right levers to pull, it’s not too difficult to set up Lambda behind API Gateway (Amazon’s service for building APIs) and DynamoDB (Amazon’s massively scalable schemaless database service), but using Architect makes the whole endeavor completely painless.

### A. Create your project

So, let’s get started by initializing a vanilla NodeJS project in a terminal:

```bash
mkdir myproject
cd myproject
npm init -y
npm install @architect/workflows --save-dev
touch .arc
```

Then edit `package.json` to configure the following `npm run` commands:

```json
// package.json

  "scripts": {
    "create": "AWS_PROFILE=xxx AWS_REGION=xxx arc-create",
    "deploy": "AWS_PROFILE=xxx AWS_REGION=xxx arc-deploy",
  }
```

> Note: make sure you replace `xxx` values for `AWS_PROFILE` and `AWS_REGION` above with your AWS credentials and preferred deployment region (eg `us-west-1`).

We’ll use those `npm run` commands in a moment. But first we need to setup the AWS configuration manifest: `.arc`

RC files are [an ancient UNIX convention](http://www.catb.org/jargon/html/R/rc-file.html) for executable config files. That hidden `.arc` file we just created is a terse declarative markup language for defining cloud infrastructure agnostic of vendor arcana.

`.arc` syntax is quick to learn. Comments start with a `#`. Everything else defines infra. Edit the `.arc` file you created to read like this:

```arc
# this is an .arc file!
@app
hellobot
@html
get /        # displays Add to Slack
get /install # saves a bot token and redirects back to /
get /signin  # saves a user token and redirects back to /
@slack
bot          # sets up slack api urls
```

Here’s how this works:

- `@app` defines an app namespace “hellobot” — all generated infra will be prefixed with this name
- `@html` defines three `text/html` routes for:

1. `/` — Your homepage
2. `/install` — Your “Add to Slack” page, and…
3. `/signin` — Your “Sign in with Slack” page

- All the route handlers are — you guessed it! — Lambda functions.
- `@slack` defines an app named “bot” and sets up endpoints for some of Slack’s HTTP endpoints, such as Slack Events, Actions, Options and Slash commands. (And yes, these are also more Lambda functions.)

All told, from an Amazon Web Services perspective, this .arc file defines 14 Lambdas functions (7 for `staging` and 7 for `production`). These are all exposed as HTTP endpoints using API Gateway.

### B. Provision your application

Provision the app by running `npm run create` and within a few minutes everything is ready to go (but not yet public).

Subsequent deployments to your shiny new serverless infrastructure happens via `npm run deploy`, and completes within seconds.

### Pause: Woah! What Just Happened? 😲

Yes, there are many reasons to be excited about using Lambda functions to build Slack apps:

- **Isolation**. Lambda functions are completely isolated little compute sandboxes. Tiny slices of an application. Each part working together but independently. This isolation creates very resilient apps that are much easier to lock down and secure.
- **Availability**. Amazon takes care scaling of Lambda functions, so you don’t have to sweat about things load balancing and container management. Instead, you get to focus solely on your application business logic and end user experience without worrying about servers, security patches, runtime dependency upgrades, zero downtime deploys, etc.
- **Iteration speed**. To be able to provision in minutes and deploy in seconds is unparalleled iteration speed. More iterations means more opportunities to get your app right. Faster iterations also means quicker bug resolution time, which means higher quality apps, and happier customers.
- **Affordability**. Also worth mentioning: if your humble app gets executed 10 million times within a monthly billing period, you will have to pay Amazon approximately $1 USD. Lambda is very affordable!

tl;dr: cloud functions shed the server metaphor by combining a natural syntax construct with smallest possible unit of compute infrastructure. This yields apps that are by default: more resilient, secure, faster, and reliable, at a lower cost.

### FYI: Your new, generated HTTP Endpoints

Conveniently, Architect provisions both `staging` and `production` environments. For now let’s set up your app using just the `staging` environment.

You can find the URLs by navigating to API Gateway in the AWS Console, selecting the API you are interested in, selecting “Stages” and expanding the tree.

For reference, the generated routes will be something like these:

![arc65](arc65.png)

<small>Staging and Production isolation means you setup two separate Slack apps. Seems a bit painful at first but as you iterate on your app you will find it is worth it.</small>

*In a future installment we’ll walk through configuring DNS so you have pretty URLs! 💕*

## Step 2: Create & configure your application in Slack

Now we need to create and configure your Slack application with these newly generated endpoints, and set up its permissions.

Navigate to https://api.slack.com and click on **“Your Apps” → “Create New App”.**

![arc66](arc66.png)

Once you’ve created your app, then navigate to “**Slash Command**” in the left column, and click the “**Create New Command**” button.

The **Request URL** value should be your `/staging/bot/slash` path from the routes you just generated (so it should look something like https://xxx.execute-api.us-west-1.amazonaws.com/staging/bot/slash).

![arc67](arc67.png)

To help make initial testing easier, you can install the app to your personal Slack workspace by navigating to **“Basic Information”** and clicking **“Install App to Workspace”**. (In a future post we’ll properly wire up the production install process with **Add to Slack**.)

![arc68](arc68.png)

## Step 3: Write a bit of code! ⌨

### A. Slash command code

Back in your local project modify `src/slack/bot-slash/index.js` to read:

```js
exports.handler = function slash(event, context, callback) {
  callback(null, {
    text: 'Hello!',
    attachments: [{
      text: 'Click the button',
      fallback: 'Click the button',
      callback_id: 'clicky',
      color: '#eheheh',
      actions: [{
        name: 'hello',
        text: 'hello',
        type: 'button',
        value: 'eh'
      }]
    }]
  })
}
```
[View Source](https://gist.github.com/brianleroux/4f1fb767dcab4f045ad2c082a6b15192)

Next, deploy the changes to `staging` by running `npm run deploy`. A full deployment (with zero downtime!) should complete within just a few seconds.

Now go test the app in Slack!

![arc69](arc69.png)

### B. Action handler code

Ok, time to make that button actually do something. Go back to the app configuration and select “**Interactive Components**”, then click “**Enable Interactive Components**”.

Set the **Request URL** to your `/staging/bot/actions` path. Don’t forget to hit “**Save changes**”!

![arc70](arc70.png)

Back in your local project, `src/slack/bot-actions/index.js` should read:

```js
exports.handler = function actions(event, context, callback) {
    console.log(JSON.stringify(event, null, 2))
    callback(null, {text: "Hii from button press"})
}
```

The default button response is just a hardcoded value (for now). [You can get very elaborate with buttons!](https://api.slack.com/interactive-messages#responding)

## Summary

Nice work! You’re running a fully serverless Slack app on AWS! (And you didn’t even have to spend hours provisioning servers, setting up databases, and connecting everything together.)

In our next installment we’ll implement the Slack app installation flow with the Add to Slack button.

### Going further

- Read part 2 (coming soon!)
- [View this example project’s source code on Github](https://github.com/smallwins/super-fast-slack-buttons)
- Run through the steps above to setup the production version of your app!

### * Theoretically!

---
title: The real reason frameworks get adopted
image: 'image.png' 
category: uncategorized
description: It’s all about the capabilities of new users
author: 'MRB'
avi: 'mrb.jpg'
readtime: '4 mins'
published: 'December 03, 2018'
---


![arc46](post-assets/arc46.jpg)
<small>Photo by Dan Gold</small>

Sitting down to write a serverless application in 2018 feels a lot like it did to write a greenfield web application in the pre-Rails and Django times. Before the titanic Ruby and Python frameworks were de rigeur, things were slow, messy, and there were no conventions to speak of.

Looking back now, it’s hard to believe that people wrote web applications without a framework. And that’s the thing: compared to today, they largely didn’t.

The reason that Rails and Django have been so broadly adopted isn’t because it made writing web apps so much easier for people who were already writing them, it’s because they opened the door for so many new people to add writing web apps to their arsenal of skills. Users are attracted to frameworks that enable a wide swath of new technology at once. This is how frameworks gain wide adoption.

That pre-framework milieu of creating web applications felt a lot like what it feels like to develop and deploy a serverless application today. Even within a single cloud like AWS, there are way too many configuration options, services to stitch together, accounts to create, credit cards to enter, etc.

The complexity of XML Java config has been replaced with gigantic sentient CloudFormation YAML files which, once capable of describing themselves, may actually pose a threat to humanity. The cloud can be an intimidating place, and getting started with cutting edge tech like Lambda and DynamoDB just isn’t easy enough — or at least it wasn’t.

![arc47](post-assets/arc47.png)

Begin is a serverless application platform that allows beginners and experts alike to deploy fully functional, production ready, secure, and scalable FaaS-based applications in under a minute. Begin is composed of three major elements:

- The Architect serverless framework, an opinionated, language-agnostic serverless application framework obsessed with usability and patterns
- The Begin frontend, which is mission control for your in-development and in-production applications
- The Begin backend, which depoys, configures, and operates your serverless applications on top of AWS services

When combined, you have a full-stack platform for developing, deploying, and scaling serverless applications that can provide the “gap-jumping” abilities that Django and Rails did for web applications because it focuses on one cloud, it was extracted from a serious serverless application, and it is very opinionated in the areas that count.

By focusing on the capabilities of the most advanced public cloud for serverless applications, AWS, Begin is capable of leveraging all of the tech that, when combined, make for the most on-demand and scalable application deployment platform available anywhere.

While the Architect framework and the Begin applications themselves are written in a modular, extendable way that will make adopting other clouds an option in the future, the fact remains that as of 2018, only AWS has the combined capabilities necessary to currently deploy performance intensive complex serverless applications.

At Begin, we have first hand knowledge of the capabilities of AWS and the limitations of other clouds. That’s because we were writing a complex, scalable, serverless-first application when we unknowingly began writing Begin.

```js
// This function is everything you need to build a Lambda-based app with Begin
exports.handler = async function http(req) {
  return {
    type: 'text/html; charset=utf8',
    body: `<h1 class="center-text">Hello world!</h1>`
  }
}
```

Much like the origins of Rails can be found in the Ruby application that made up the original Basecamp codebase, the origins of Begin can be found in a serverless realtime chat application platform that we started building in 2016. As we built out that original product, we began to realize the framework was bigger than the product itself — and extracted [Architect](https://arc.codes/).

After donating the framework to the [JS Foundation](https://js.foundation/), we built Begin on top of it as a serverless application platform. The current Begin frontend and backend helps erase so many of the complexities inherent in deploying serverless applications on AWS — and that’s because it’s opinionated.

If I had to guess why Rails and Django got so popular, and what made it possible for these kinds of frameworks to enable so many people to make applications that they weren’t making before, I’d say that it’s because of all of the decisions they don’t force you to make.

> It’s all because of the decisions frameworks don’t force you to make.

This became known as being “opinionated” back in the early days of Rails, which has philosophical roots in Martin Fowler and co’s [Patterns of Enterprise Application Architecture](https://martinfowler.com/eaaCatalog/) book.

Patterns are helpful because they prevent duplicated effort and they make sure things get done the right way–in other words, patterns are opinionated. The Rails authors used these principles when they extracted Rails from Basecamp, letting the framework make hundreds of small, unimportant decisions for you, in addition to a small set of well thought-out important ones.

While not having to choose a filename here or a class name there may seem unimportant, all of these decisions add up and have a real drag on development time. It’s my belief that Begin has a real shot at gaining widespread adoption because knowing how to produce the correct YAML incantation to configure an API Gateway should not be a prerequisite for deploying a serverless HTTP API endpoint.

```arc
@app
my-app

@http
get    /
get    /login
get    /oauth
get    /api
get    /api/items
get    /api/:item
post   /api/:item
put    /api/:item
patch  /api/:item
delete /api/:item

@events
process-items
```

<small>An example of a fully serverless, cloud-function app based on Architect</small>

While the opportunity presented by serverless applications is huge, the complexity of writing, deploying, and scaling applications on AWS from scratch is unapproachable for beginners, and still far too complex for the tastes of seasoned veterans. Begin aims to help a generation of programmers bridge the gap to serverless applications.

A focus on AWS, the experience of extracting from a real world application, and the attention on usability and opinionated sensible defaults means that Begin is miles ahead. And besides, it’s just plain fun to use — [sign up for the beta and give it a shot!](https://begin.com/) We’d love to know what you think.

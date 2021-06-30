---
title: The cloud lock-in myth:opting out of servers, and opting into de facto standards
image: 'image.png' 
category: uncategorized
description: The forecast is cloudy; with zero chance of servers
author: 'Brian Leroux'
avi: 'brian.jpg'
readtime: '9 mins'
published: 'October 08, 2019'
---


![arc33](arc33.jpg)
<small>Photo by Sam Schooler</small>

Practically all future compute workloads will run on cloud vendor infra. This is hardly a controversial statement in late 2019. But where we are in this lengthy transition, and how it will unfold, is still heavily debated, as are the considerations behind deciding on cloud vendors, and services. The flashpoint of this debate is, as ever, anxiety around lock-in — a scary and nebulous concept that strikes fear into the hearts of devs and CTOs alike.

But as it turns out, in the modern cloud era, concern over lock-in is something of a red herring. We’ll take a closer look at why this is the case by examining the evolution of cloud compute through to its logical conclusion: the cloud function.

## A (very) brief history of infra lock-in

In the early days we’d buy the boxes and racks, rent bandwidth from large internet service providers, and host our own applications. Standing up a new site was an extremely costly endeavor, and could take months of planning and purchasing before a single line of code ever went live. And good luck scaling that.

Eventually, after much hand-wringing over to the sizeable upfront investment already made, we cleared out the ‘server room’ and leased capacity in an air conditioned cage in someone else’s pristine data center. Boring unit economics strongly favored renting or leasing — after all, this equipment and space is difficult to maintain and expensive to replace. As consumer internet speeds increased, lower latency to the backbone was also increasingly necessary — plus, there’s safety in numbers. This was the proto-cloud.

Then virtualization enabled us to rent virtual machines in much the same manner, meaning you no longer needed to rent physical gear. From the perspective of your application code it was all the same thing, but from the perspective of the hosting vendor, now everything could now be tweaked and configured within software: memory, CPU, instance count, and, most importantly: time.

In few industries is the old adage that **time is money** felt more acutely than in software. The progression of continually breaking down hosting into increasingly smaller slices of time and responsibility have gone hand in hand with declining costs, faster networks, better security, and reduced risk. And these have been the primary drivers to the cloud; **despite the ever present fear of lock-in, with each transition, we’ve decreased risk and cost, while increasing speed and security.**

> Economies of scale occurs when more units of a good or service can be produced on a larger scale with (on average) fewer input costs. — Investopedia

## A new standard: renting time in millisecond slices

Somewhere along the way it became possible to rent just the time the computer was running, separately from the bandwidth that computer used, or the persistent storage of the data it required. This development enabled us to explicitly measure and optimize every facet of the software we create.

This is a critical observation because the evolution and capability of compute has always been a function of production economics. While building early internet connected apps running increasingly huge workloads, we, the industry, learned that stateless compute can be scaled horizontally and thus somewhat predictably. But we wouldn’t want unexpected traffic to take down our infrastructure, and thus still needed to over-provision our resources in case of unpredictable usage spikes. **Again, in every measurable dimension, time is money.**

And to that end, way back in 2014, Amazon pioneered a revolutionary new approach to the cloud infra billing model, by providing an elastically scalable compute service that only billed for what it used, not for all the time it sits idle. This product, AWS Lambda, ushered in the advent of the cloud function: a class of infra that enables devs to focus on pure business logic in the most primitive and natural programming construct of all: a plain function.

## The natural evolution of cloud computing

Most mainstream programming language runtimes have loose concepts of a server — but not uniformly. These concepts are often heavily augmented by an astounding amount of supporting cast software dependencies which, by definition, are also liabilities. However, every mainstream programming language runtime has roughly the same concept of a function: an algebraic tool that maps n inputs to an output. The smallest unit of compute and the logical conclusion to subdividing cloud infra resources, functions are the foundation of the next cloud compute execution paradigm.

Said plainly: authoring cloud functions equates to a massive reduction in baggage. Less baggage than traditional metal racks, less baggage than virtual machines, and less baggage than containers. Other cloud vendors eventually agreed to this streamlined execution model and billing concept: **Azure Functions** announced general availability in 2016 and **Google Cloud Functions** in July of 2018.

Time of course being money, at the time of this writing the cost of a Lambda cloud function’s execution is roughly $0.000002 per 100ms increment, or $2 per million invocations. **This subdivision of resources and abstraction of unnecessary complexity is all just the natural evolution of cloud computing.**

While perhaps cloud functions started the conversation begrudgingly called “serverless”, don’t let the terminology distract from the fact that paying for compute in 100ms increments is now absolutely a viable option for every new and existing computing project today on every major cloud player. (And soon enough, calling an application “serverless” will eventually sound as baroque as calling your phone “wireless”.)

*Cloud functions and their revolutionary billing model are not the only driver of so-called serverless architectures, but it is a crucial one to understand.*

## De facto standards & paper specs

In the world of internet connected software it’s common to think of standards — especially web standards — as a cohesive atomic unit. But in practice there are multiple consortium bodies that publish many paper specifications, just as there are many independent implementations of varying compliance to those specs. (And a significant number of official paper specifications out there are never implemented!)

Likewise, there are many **de facto standards**, which represent that which has informally achieved a dominant position by public acceptance. Internet Explorer’s famous (and nearly two decades old) XMLHttpRequest is a very good example of a de facto standard — bewildering spelling and all.

![arc34](arc34.png)

It’s important to differentiate between specs and standards. Specs are valuable, and may signal stability. But specs that precede an implementation usually fail because of the classic software discovery conundrum: something will be missed, and the consequences may make implementation terrible or impossible (see: soap/ws-* and XML-RPC).

Specs without adoption (or worse: without implementation) have a much higher risk of abandonment — which is a fatal form of instability. On the other hand, strong adoption calcifies interfaces and tends to lead to more hardened and stable ecosystems.

Mobile computing has been around almost as long as the modern internet, but it really came into the mainstream with the launch of the iPhone in 2007. Apple may have reinvented the market overnight, but Google, Microsoft, Palm, Sony Ericsson, Nokia, and Blackberry were all credible competition, with deep coffers and decades of experience. Many efforts sought to standardize mobile application development– a few implementations were attempted, though none exist today. But the web remains, alongside the duopoly of walled gardens that are iOS and Android. Why? **Because our industry most frequently coalesces around de facto standards, and de facto standards grow organically from use.**

## Circular dependencies

History does not repeat itself, but it does rhyme — and cloud computing has many similar characteristics to the web and mobile computing revolutions. There are many vendors, each working on many paper specs, each with many private implementations with varying degrees of compliance with de facto standards, such as cloning and re-cloning the S3 API.

Between Azure, Alibaba, Tencent, Baidu, IBM, Oracle, and GCP (to name a few), it’s unclear which non-AWS vendors will choose to sustain the extremely expensive ongoing investment necessary to build, operate, and maintain public cloud infrastructure. Perhaps most importantly, we don’t know who gets to play the role of Blackberry (or worse, Palm) in this cycle.

If the personal computing, first/second wave internet computing, and mobile computing revolutions are of any indication, things will get ugly. There will be consolidation, which is a nice way of saying some of these vendors are going away — and the workloads running on them will be shut down. The only certainty — which even its competitors will not argue — is that AWS is and has been for quite some time in the incumbent position, setting the de facto standards service after service, API after API.

## Join or die

![arc35](arc35.jpg)

When (re)evaluating your stack, consider whether the competitive landscape affords you the luxury of not using the best technology available today. Do you want to compete against companies in your space that are equipped with faster lead times to production, greater developer focus on business logic, and affordable elastic scalability?

One common objection is to raise the specter of lock-in. *If you build on $CLOUD_VENDOR, then you can’t move your workloads! They’ll break you.* They’ll raise prices. Other folks far smarter than myself [have thoroughly explained why this is not a very rigorous or realistic argument.](https://martinfowler.com/articles/oss-lockin.html)

To their credit, AWS has also been aware of these potential customer objections for quite some time. As in the rest of technology, prices tend only to drop within AWS; unlike their competition, however, Amazon’s APIs seldom change, and they rarely shut down services — even the zombies. API stability is an incredibly important facet to this conversation, and not something all other cloud vendors have yet internalized. Said another way: **AWS rarely provides its customers cause to evaluate switching.**

It can make sense to avoid AWS if you’re a business that competes directly — or even indirectly — with Amazon. However it makes much less sense as an individual and presumably self-interested career software developer. **Your time is money too**. *And most organizations you’ll come into contact with will be, or already are, AWS customers*.

Investing in AWS proficiency is decidedly not risky.

## Coping strategy

Discussing AWS’s seemingly inevitable market dominance and enormous complexity sometimes brings up feelings of anxiety and dread. It’s a vast, often intractable, and always growing beast suite of services. The good news is that while there are hundreds of services, you can subset to the minimal number appropriate for a given app workload.

For example, almost any type of hyperscale-capable web application, site, or API can be composed with just eight services, none of which require a shell or experience scaling: DynamoDB (data), API Gateway (HTTP), Lambda (compute), S3 (asset storage), ACM (SSL), Route53 (DNS), CloudFront (CDN).

>It’s fun to collect stickers for the laptop, just keep in mind, the goal of a business application is to create as much value as possible, with as little complexity as possible, in as little time as possible. Sometimes devs will dogpile solutions which in turn creates new problems and apps fall into a vicious cycle. Less code, configuration, and complexity is always desirable. Give yourself permission to refactor!

Such iteration speed is nice and so is the operational outcome. These are mature services that have been battle hardened by trillions of requests hammering Amazon’s racks day after day, year after year, and they enable you to build completely free from patching boxes and managing instances or pods.

And **that** is the point! I prefer they do all the boring work and leave the fun parts for me. Distilling an application architecture down to it’s most terse and pure business logic possible, unencumbered by operational complexity, while remaining free to speak open web protocols like HTTPS and WSS. Running on a de facto standard of serverless technology.

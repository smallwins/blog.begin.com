---
title: How to build a better bot
image: 'image.png' 
category: uncategorized
description: The bots have landed. And as is usually the case, some early products shipped that could have used some more time in the oven. Personally, I’ve yet to use a bot that’s really impressed me.
author: 'Ryan Block'
avi: 'ryan.png'
readtime: '8 mins'
published: 'April 19, 2017'
---

![arc72](post-assets/arc72.gif)

The bots have landed. And as is usually the case, some early products shipped that could have [used some](https://twitter.com/trekforever/status/720668368496230400) [more time](https://twitter.com/kifleswing/status/719973868040011776) [in the oven](https://twitter.com/spencerchen/status/721920593797382145). Personally, I’ve yet to use a bot that’s really impressed me.

But we’ve all seen this movie before. Bumpy starts and rough edges in early days are to be expected. Fortunately, there’s a time-tested, proven way to get it right.

Keep building better products.

So let’s talk about what building a great bot actually means.

**What have we learned about building humane software in the last decade, and how can we apply those learnings?**

As you may know, I’m building a bot company called [Begin](https://begin.com/). It’s insanely fun, but the challenges are many. We’re building lots of new technology to do stuff we used to get for free.

Every new human computer interface paradigm faces significant early headwinds. But there’s at least one reason why bots have been around for decades in various incarnations, yet never really gone mainstream as consumer products.

It’s hard to build software that talks to humans the way humans talk to humans.

Like, really hard.

Designing rich, complex conversational interactions presents an entirely new set of challenges. The tools definitely aren’t fully baked yet, and the few primitives we have are still more academic than battle-hardened.

![arc73](post-assets/arc73.gif)

What’s worse, when bot interactions go awry, they can be frustrating in a way that app errors just aren’t. There’s something deeply, irrationally frustrating about not being understood by a piece of technology whose first and most important job is to parse what you’re saying. It’s enough to make some people want to throw their devices across the room.

That potential for frustration is relatively new, and not to be underestimated.

But here’s the good news: all of the fundamental lessons you’ve learned about good product design? They still apply. Every last one of them.

Clarity, brevity, direction, momentum, decision guidance, usefulness, attention to detail, doing fewer things better, and above all else, empathy: these are still the key ingredients to crafting great bot experiences.

The patterns and best practices we’re already used to employing — from wireframing interactions, to prototyping, to iterating obsessively, to getting your product in front of users to see how it breaks — are every bit as relevant in bot creation.¹

In fact, if one pays close attention to their first principles, they’ll undoubtedly discover that designing conversational interactions is remarkably similar to that of designing graphically driven interactions. (I also happen to have written an [entire post that deep-dives into conversational interaction design](https://medium.com/@ryan/conversational-interaction-design-constructing-context-b21e2341334f), which I humbly suggest reading if you’re thinking about building bots.)

Bots may be new(ish), but humans, and the cultural contexts they bring to the table, the metaphors they understand, and the way they interact with machines, haven’t changed a lick.

The tools may change, the details of implementation may be new, and now you may find yourself in need of a good copywriter. But if you care about making a great experience for your users and consider yourself a student of the craft, you’ve already got the fundamentals you need.²

## “Bots” != “Conversational”, “AI”

Without getting into the wheel-spinning of over-defining an early space (I’ll leave that to others), let’s embrace the idea that not all bots are conversational, strictly speaking. Let me explain.

Most bots will be available in mediums where humans communicate with each other, yes. And most of those contexts will be conversational — which is another way of saying they’ll be messaging apps.

> Here’s a bot that really just does not want to talk to you.

![arc74](post-assets/arc74.png)

But that doesn’t mean your bot has to actually hold a conversation. CNN’s Facebook bot is a great early example of this. Here’s a bot that really just does not want to talk to you.

What it does want to do, however, is tell about the news. And you know what? That’s great. Not only is this a completely valid direction, it’s a highly effective use of a bot as a means of clutter-cutting. The CNN bot knows what its job is: making timely, curated information available in a way that fits into an intimate, realtime context.

In my last post about bots I talked about [the need to keep users and bots aligned](https://medium.com/@ryan/conversational-interaction-design-constructing-context-b21e2341334f), and CNN’s bot is an early standout in large part because it does such a good job at maintaining alignment.

Not unlike the old trope that a product should always do less than the people who make it think it should, the same is true for bots. It’s okay for your bot to do less, and it’s definitely ok for your bot to be dumb. And the less a bot actually does, the dumber it should probably act.

Which is to say, you should never let your bot’s witty repartee write a check that your software’s abilities can’t cash in full.

Anyone making a bot will find the right balance for their product, but what’s important is for anyone building bots to be intellectually honest with themselves up front, because ultimately that intellectual honesty will be reflected in how smooth (or not) it is for people to interact with their bots.

## A trip to the Robot Store

![arc75](post-assets/arc75.png)

One metaphor I’ve been known to trot out with the Beginners is *taking a trip to the Robot Store*. Imagine there’s a bright, shiny, beautiful, store with shelves lined with hundreds of different robots, designed and lovingly built by dozens of companies from all over the world.

You’ve got all kinds of choices: a kitchen-cleaning robot that does the dishes, a weather robot that monitors local weather patterns and tells you what to expect, a travel robot that drives your car, or helps you book travel plans. Go ahead and pick out a robot to bring home with you.

Once you get it home, how would you want and expect that bot talk and interact with you in your personal space? Is it appropriate for this robot to speak, even if not spoken to? Is it ok for it to activate and start roaming around the house without your permission? When engaged, should the robot chatter incessantly, or should it be terse?

The answer to these questions may vary, but inviting a software helper into your messaging chat app isn’t really any different from a physical helper into your personal space. The rules are the same.

To make a great bot, we have to start by stripping away the artifice and focusing on doing something really well — no more and no less.

## What makes a good bot good?

Software, as most folks know it today, operates at human scale. Input and output are more or less paired and synchronous, and the value you get out of your software is roughly equivalent to the effort you put into learning it and using it.

But part of what makes a bot a bot is that it is (or can be) autonomous, which means it can augment human behavior on a potentially exponential scale. And as a function of messaging interfaces’ severely constrained context, bots have no choice but to present lightweight, high-impact output.

This is why the best bots will be value-adders.

Being a value-adder means taking a minimal amount of input or direction, and adding unique value to it beyond the basic functions of computers (i.e. storage, retrieval, processing, transit, etc.).

A good bot will store and retrieve information in a timely, frictionless way, like any other software. A great bot will help relieve some kind of stress, or save a meaningful amount of time for a human.

Which is also to say that if you’re building a bot that some may say would work better as an app, they may be right. I’m of the opinion that apps aren’t going anywhere (nor the web).

But unlike apps, the potential value a good bot can deliver its users will be far greater than the amount of work that goes into initiating it or sending that bot on its way.

A worthy bot will also anticipate the needs of its user, and try to meet them with minimal friction. A network of bots tied to your identity should behave like an high functioning team of support staff working tirelessly behind the scenes to make your life easier in any way possible.

## Are we there yet?

Bots have been around along time, and sometimes I get asked: why now? What’s changed? (As you might expect, this came up a lot while fundraising.)

The next great technology is always built on the matured, commoditized technologies that preceded it. Bots are no different.

Every building block required to make a great bot piggybacks on important, recent trends: advancements in machine learning and natural language processing; fast, scalable cloud computing; a huge ecosystem of APIs to talk to; and robust adoption of presence, messaging, and the notification layer.

The good news is whether you’re bot-curious or actually out there building a bot of your own, the raw materials are finally here.

That doesn’t mean it’ll be easy or fast to make something great, but nothing worth making ever is.

## tl;dr

- Bots are super hard to build. But that’s no excuse for a frustrating user experience.
- All the lessons we learned about creating humane software over the last ten years still applies to building bots.
- ... especially that old chestnut about doing fewer things better. Bots need to walk before they run.
- Conversation is not a necessary feature of bots. Minimize artifice, focus on adding value.
- The autonomous augmentation of human behavior, and the ability to relieve pain points or save time is where bots will be truly differentiated.
- This whole bot thing is happening now because the right technological ingredients are finally in place. But that doesn’t mean it must happen. Anyone making bots is going to have to get out there and earn it.

¹ Also, a really good post on [bot-building tactics here](https://medium.com/@andknf/3-tools-for-building-bots-that-people-won-t-tell-to-fuck-off-584889eaf6b9)!

² Oh and guess what, more good news: your bot lives in the cloud, not on the device, so when it screws up — and it will screw up — you can push updates immediately. No need to wait for weeks for bug fixes to clear the app store review queue! Pay attention to how people are using your bot, and adjust. Constantly.

Thanks to [Phil Libin](https://twitter.com/plibin), [Ryan Freitas](https://twitter.com/ryanchris), [Angelina Fabbro](https://twitter.com/hopefulcyborg), [Amber Costley](https://twitter.com/amberdawn), [MSG](https://twitter.com/msg), [Van Miranda](https://twitter.com/van_miranda), [Ryan Hoover](https://twitter.com/rrhoover), and [Veronica Belmont](https://twitter.com/veronica) for reading early drafts of this!
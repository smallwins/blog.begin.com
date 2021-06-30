---
title: Conversational interaction design:constructing context
image: 'image.png' 
category: uncategorized
description: Recently I wrote about interface visibility — the presence and degree of friction in interface design and human computer interaction — and the idea that it exists distinctly from specific interface paradigms.
author: 'Ryan Block'
avi: 'ryan.png'
readtime: '7 mins'
published: 'March 30, 2016'
---

![arc77](arc76.png)

Recently I wrote about interface visibility — the presence and degree of friction in interface design and human computer interaction — and [the idea that it exists distinctly from specific interface paradigms](https://medium.com/@ryan/bots-messaging-and-the-interface-visibility-scale-c77ce56f1401).

Since then I’ve been itching to revisit and dig a little deeper into the nuts and bolts of conversational interaction design, specifically the way context plays a key role in the construction of meaning in user experiences that leverage natural language (especially those of the invisible variety).

The space is still super early, but in my (admittedly brief) time designing bot interactions, I’ve noticed a few key patterns that have shaped my own mental model for constructing seamless conversational interactions.

![arc77](arc77.png)

## Initiation

Every conversation begins somewhere. Hi. Hello!

In conversational interfaces, who initiates each new conversational interaction — and their intent — is key to establishing the tone and expectations of everything that follows.

When the bot initiates, it’s significantly easier to establish the direction and flow of conversation, thereby increasing the likelihood of producing a better, and more focused experience. It’s a little like dancing — when a bot grabs your hand, it’s probably best to just follow its lead.

Unfortunately, a bot can’t always initiate — and that’s where things can get very tricky very quickly. When a human initiates a conversational interaction with a piece of software, achieving a positive result can often seem like something of a crap shoot.

Is it any wonder why? Humans are unpredictable! Capricious! The moment a human is driving the conversation, your software really begins to rely on the user’s awareness of the bot’s domain knowledge.

And the broader your bot’s intended domain knowledge — which is another way of saying the more advanced your bot’s intelligence — the harder it’s going to be to consistently nail interactions with your users.

## Domain

Bots are, of course, software. And software still contains finite functionality (at least in 2016!). When that functionality is manifested conversationally, it takes the shape of [domain knowledge](https://en.wikipedia.org/wiki/Domain_knowledge) (or what we’ll call domain for short). Think: what can I talk to this bot about? (Can I even talk to this bot?)

I like to imagine that bots are a kind of guest we invite to our spaces. They live in our [Slack teams](http://howdy.ai/), [in our homes](https://amazon.com/echo), and [in our phones](http://www.apple.com/ios/siri/).

We tend to invite these guests in because we have some expectation for how they might make that space, physical or virtual, a little better. Those expectations are often roughly equivalent to bot’s domain.¹

<iframe width="560" height="315" src="https://www.youtube.com/embed/3ht-ZyJOV2k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Unlike graphical interfaces that have visually apparent functionality (and abide by the constraints of those visual representations), even highly focused conversational products are often still fundamentally open-ended.

From the first moment of interaction, a user will begins to form ideas about a bot’s capabilities and boundaries, whether consciously or not, and from these conclusions arises an understanding of the bot’s domain.

And since there are no built in constraints to stop your user from pinging your Slackbot to do something it’s incapable of doing, communicating a bot’s domain will be essential to onboarding.

If interaction design is inextricably tied to setting and meeting user expectations, then conversational interaction design relies on clear, well-defined, well-understood domain.

## Alignment

“Hi there!”
“Hey!”
“So what’s the weather going to be like today?”
“How should I know? I’m a Twitter bot.”
Ultimately, what we’re after in our user-bot interactions is alignment. Users and bots on the same page all the way, knowing how to talk to one another, knowing how to interact with one another, able to be confused for besties in a buddy cop movie.

Alignment is established when your user’s expectations for interactions are able to be met by a bot’s ability to process input and present meaningful output. That alignment is shaped — but can also be entirely defined — by initiation and domain.

If the user’s initiation is misunderstood by the bot, it may fail to deliver.² If your bot’s initiation is off, you may not receive the desired response (or you may even fail to elicit any response at all). You’re out of alignment.

If the domain isn’t clear or understood, and a user asks your bot something it doesn’t understand or can’t find an answer for, you’ve just wasted someone’s time and eroded their confidence in the bot. You’re out of alignment.

Getting and keeping users aligned with bots presents a new set of design challenges that we’re only just starting to research and understand. And like any bug in any app, falling out of alignment from time to time won’t necessarily result in immediate abandonment.

Given the state of natural language processing / understanding, and artificial intelligence in 2016, pretty much everybody gets it wrong — even the best and brightest of them. But let’s also not make excuses for ourselves, either. The further and more frequently out of alignment users and bots become, the worse and more frustrating a bot experience becomes.

When it comes to interactions with bot, alignment should be the highest-order user experience objective.

## Achieving alignment

![arc78](arc78.jpg)

I’d wager there’s a whole other post, maybe even a book, in user-bot alignment. But it’s still very early days, so let’s just set the table for now.

In no particular order, here are a few things I’ve come to look for when evaluating or designing bot user experiences:

### How narrow is the bot’s domain?

Generally speaking, most teams should consider narrowing the breadth of their bot’s domain. How narrow can you make it? Only the most well capitalized, advanced teams with the institutional patience to overcome myriad challenges still inherent in building general-purpose bots will overcome broad domain.

For everybody else, the narrower the domain, the better. The less a bot does — and the better it does whatever it is it’s supposed to do — the easier it will be to communicate domain, and the better the experience will be. Be known for doing something well.

### Is the bot’s domain clear and well understood?

Users should know exactly what a bot’s purpose is, and how to make use of it. And if it turns out they don’t, that bot should properly onboard new users when the time is right, and seek to realign.

In group chat contexts like Slack, where relatively few people may be installing things, you can’t assume that everyone present in chat knows what every bot is, why it’s there, and what it’s supposed to do. Don’t assume anyone is patient enough to endlessly poke and prod a bot to find out everything it can do — while it’s still early days, expect the novelty to wear out sooner than you think.

### Can the bot initiate?

Most products are designed to be used, which is another way of saying they’re often either in a state of waiting for someone to come use them, or in the process of trying to entice someone to use them. Bots, however, can be present and proactive in all kinds of entirely new ways, which unlocks a lot of possibilities.

Of course, what no one wants is to be constantly bugged by bots. So while there are challenges in building conversational systems that behave proactively without veering into the realm of becoming obnoxious, finding ways to drive the conversation is still a great means of keeping interactions focused and aligned.

If you just can’t initiate, another possibility might be utilizing a strongly leading prompt, or limiting input options — but those only work when you have a modicum of control over the medium of interaction.

### Can humans help?

Even if you can keep your bot’s domain narrow, there’s still a lot that bots just aren’t equipped to handle. These are hard problems for software, which is why it’s a hell of a lot easier (if far more challenging to scale) to keep your user-initiated, broad-domain bot aligned by interfacing some meatbags behind the scenes. Just ask Facebook’s M team, Operator, Butler, and many others: some bots still need the human touch.

## Wrap-up

I’d love to hear from you! What did I miss? How can the interaction model I’ve sketched out here be improved?

Despite having had Siri in our iPhones for a few years now, I feel like the bot space is still more or less in year zero. Just about everything related to bot interaction design is still very much in flight, and the people building bots (myself included) seem to be figuring it out as we go. Speaking of which:

### I’m building bot stuff!

Hopefully it doesn’t come as any surprise, but I’m working with some wonderful people on a new thing called [Begin](https://begin.com/) that heavily leverages bots and conversational interfaces. Want to see what it is? [Drop your email here](https://begin.com/) and we’ll let you know! (0% chance of spam.)

¹ This metaphor extends to non-conversational applications as well — but graphical interfaces aren’t open ended. You can’t well ask your camera app for the weather.

² This may be one of the key long-term, fundamental issues with slash command adoption. In the bot world, it seems that there’s a high degree of reverse-proportionality in ease of use vs. ease to build.

Thanks to [Phil Libin](https://twitter.com/plibin), [Ryan Freitas](https://twitter.com/ryanchris), [Angelina Fabbro](https://twitter.com/hopefulcyborg), [Amber Costley](https://twitter.com/amberdawn), [MSG](https://twitter.com/msg), [Van Miranda](https://twitter.com/van_miranda), [Ryan Hoover](https://twitter.com/rrhoover), and [Veronica Belmont](https://twitter.com/veronica) for reading early drafts of this!

![arc79](arc79.png)

---
title: How to rename your ‘master’ branch to ‘main’ (or something else)
image: 'post-assets/arc8.jpg' 
category: uncategorized
description: Terms like master-slave carry powerful implications of racial supremacy and oppression, and have no place in our lexicon. Efforts across our industry are rightfully underway to retire such references to the dustbin of history, where they belong.
author: 'Ryan Block'
avi: 'ryan.png'
readtime: '3 mins'
published: 'July 15, 2020'
---


![arc8](post-assets/arc8.jpg)
<small>Photo by Carly Reeves</small>

## Terms like master-slave carry powerful implications of racial supremacy and oppression, and have no place in our lexicon. Efforts [across our industry](https://tools.ietf.org/id/draft-knodel-terminology-00.html#rfc.section.1) are [rightfully underway](https://mysqlhighavailability.com/mysql-terminology-updates/) to retire such references to the dustbin of history, where they belong.

Although Git and GitHub still name branches `master` by default (for now), moving your repos away from the `master` branch name is relatively easy. In this guide we’ll rename it main (or you can choose whatever you prefer). Some other ideas that have been bandied about include: `default`, `dev`, `devel`, `primary`, `prod`, `release`, and `trunk`.

## Checklist

First, make sure you’ve gone over the following checklist to ensure you won’t be introducing any tricky side-effects:

- Check to ensure any apps or services you have connected to your repo don’t depend on `master`; if so, prepare to reconfigure them to use `main`

- Make sure to let any collaborators on your repo know that you’ll be changing `master` to `main`, as they’ll have to make some (simple) local changes once it’s done

- Optional, but it’s smart to clean up any outstanding pull requests to `master`; merge them if possible (or at least be prepared to set them to your new destination branch)

- Always good hygiene: have a good backup of your repo and any work that’s not checked in, just in case

## Let’s go

Ok, let’s change that branch with git’s move flag (which is really more like a copy than a move, per se):

- First, run: `git branch -m master main`
- When ready, run: `git push -u origin main`

Then head to repository on GitHub and:

- Go to Settings > Branches
- Change the default branch from `master` to `main`
- Click `Update`
- That’s it!

![arc9](post-assets/arc9.png)

Future collaborators will automatically be on `main`; existing contributors may have a small amount of work to do to get set up, namely:

- First: git fetch
- Then: `git checkout -b main origin/main`
- Optionally (to tidy up their local git): git remote update origin — prune
- In some cases it may also be necessary to run: `git remote set-head origin main`

Finally, only after you’ve migrated any dependent systems, your team has moved over locally, and you’re sure you’re ready to tidy up, delete the old `master` branch with: `git push -d origin master`

## Next Steps

- Want to try out a fresh new personal website (and make it run on `main`)? Start one on Begin in 30 seconds (no credit card required):

<a href="https://begin.com/apps/create?template=https://github.com/pchinjr/fcc-serverless-api"><img class="block m-auto mt3 mb3" src="https://res.cloudinary.com/practicaldev/image/fetch/s--yYw27_-V--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://static.begin.com/deploy-to-begin.svg" alt="Deploy to Begin" loading="lazy"></a>

- 🌟 Check out (and star!) Begin’s open core [OpenJS Architect](https://github.com/architect/architect) on GitHub

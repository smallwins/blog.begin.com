---
title: Testing in Deno:the basics
image: 'post-assets/arc13.jpg' 
category: uncategorized
description: Deno is a next-generation JavaScript runtime that makes testing a first class capability. In this guide we’ll show you how to use Deno to write an automated test suite. In part 2 we will setup Begin.com for CI/CD and module publishing.
author: 'Brian Leroux'
avi: 'brian.jpg'
readtime: '4 mins'
published: 'May 13, 2020'
---


![arc13](post-assets/arc13.jpg)
<small>Photo by Blanca Paloma Sánchez</small>

## Deno is a next-generation JavaScript runtime that makes testing a first class capability. In this guide we’ll show you how to use Deno to write an automated test suite. In part 2 we will setup Begin.com for CI/CD and module publishing.

First thing’s first: make sure you go [install Deno 1.x from Deno.land](https://deno.land/)! 🦕

## Deno ‘hello world’

It is good to stretch your muscles before exercising. The same is true of testing. `Hello world!` is a perfect first test case:

```bash
mkdir -p deno-testing
cd deno-testing
echo "console.log('hi', Deno.version)" > mod.ts
deno run mod.ts
```

> Deno prefers module entry files to be named `mod.ts`

## A brief word on code formatting

While not strictly related to testing, having a standard code format enforced by first-class runtime tooling makes everyone's lives easier. deno fmt may help free you and your team from [Parkinson’s law of triviality](https://en.wikipedia.org/wiki/Law_of_triviality).

## Test runner

Deno has a built-in test runner `deno test` which, by default, recursively looks for files `{*_,}test.{js,ts,jsx,tsx}` starting in the current working directory. And, hells yes, you can use JSX in your tests with zero additional tooling.

`deno test` can be invoked with an optional path to lookup tests if you prefer to keep them in a separate directory from the source. (The choice is yours.)

## Test authoring

Before we can run any tests we must first write a test. To warm-up, we’ll author the simplest thing that could possibly work.

I like to start with an ‘env’ test that imports the module I’m testing and tests for its existence. It’s a silly, painfully obvious exercise to get started. Writing the first test is a lot like placing down the first stone in a path you’re about to build.

There are only two files for now. `mod.ts` has a plain Lambda function signature:

```js
// mod.ts
export async function handler(req: object) {
  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
}
```

And then we’ll test for the existence of the module we’re planning to test:

```js
// mod.test.ts
import { handler } from "./mod.ts";
Deno.test("env", () => {
  if (!handler) {
    throw Error("missing module");
  }
});
```

Run deno test, and you should get something like this:

```bash
deno test
Compile file:///deno-testing/.deno.test.ts
running 2 tests
test the whole truth ... ok (3ms)
test env ... ok (1ms)
test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (4ms)
```

The tests pass! Endorphin hit, bias confirmed, Pavlov's bell rings. Let’s learn about **assertions**!

Assertions are first class constructs for testing the truthiness of things. There are two important assertions to understand: assert and equal.

`assert` expects a boolean value and throws if the value is `false`.

`equal` does deep-equality checking and returns a boolean value.

Let’s create a new file called `assertions.test.ts`:

```js
// assertions.test.ts
import { assert, equal } from "https://deno.land/std/testing/asserts.ts";
Deno.test('the whole truth', () => {
  assert(1 === 1)
})
Deno.test('and nothing but the truth', () => {
  equal(1, 1)
})
```

Give it a whirl, and you should see another positive test result:

```bash
deno test
Compile file:///deno-testing/.deno.test.ts
running 2 tests
test the whole truth ... ok (2ms)
test and nothing but the truth ... ok (1ms)
test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (3ms)
```

Nice! This is pretty powerful stuff — believe it or not, what you just did represents the fundamentals of most testing.

> [https://deno.land/std/testing/](https://deno.land/std/testing)

## Wrapping up

Now you know how to set up a test in Deno, how to assert the truthiness of values within your tests, and how to run those tests. This is almost everything you need to know to write some pretty advanced and comprehensive unit and integration tests for your new Deno app or modules.

Speaking of modules, Deno has first-class support for plain ECMAScript modules, which means the Deno’s module system supports both relative paths and fully qualified URL paths for `import`.

We can use [Begin](https://begin.com/) to run our test suite automatically every time we push code to GitHub — and better still, we can use Begin to publish our modules to the web so other people can reuse our work.

Join us tomorrow for part 2: **Setting up CI/CD for Deno with Begin**

## Next steps

- Ready to make your first Deno app on AWS? Deploy a simple Deno `Hello World!` to Begin in 15 seconds. No credit card required!


<a href="https://begin.com/apps/create?template=https://github.com/pchinjr/fcc-serverless-api"><img class="block m-auto mt3 mb3" src="https://res.cloudinary.com/practicaldev/image/fetch/s--yYw27_-V--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://static.begin.com/deploy-to-begin.svg" alt="Deploy to Begin" loading="lazy"></a>

- [Try out another Begin tutorial, like a full CRUD app with Begin Data!](https://docs.begin.com/en/guides/crud-app)
- 🌟 Check out (and star!) Begin’s open core [OpenJS Architect](https://github.com/architect/architect) on GitHub
// redirect Medium urls to blog.begin.com
let redirects = {
  // 2016
  '/conversational-interaction-design-constructing-context-b21e2341334f': '/2016-03-30-conversational-interaction-design-constructing-context',
  '/how-to-make-a-better-bot-c038626fd401': '/2016-04-19-how-to-make-a-better-bot',

  // 2017
  '/introducing-slack-js-9-0-0-c425a63cc479': '/2017-09-25-introducing-slack-js-9-0-0',


  // 2018
  '/2018-01-22-slack-for-js-10-x': '/2018-01-22-slack-for-js-10-x',
  '/build-an-infinitely-scalable-slack-app-in-5-minutes-972789924f3f': '/2018-02-07-build-an-infinitely-scalable-slack-app-in-5-minutes',
  '/build-an-infinitely-scalable-slack-app-part-2-prepping-for-distribution-in-the-slack-app-9183af539449': '/2018-02-16-build-an-infinitely-scalable-slack-app-part-2-prepping-for-distribution-in-the-slack-app',
  '/lets-begin-4c4f8e268be9': '/2018-03-06-lets-begin',
  '/sunsetting-begin-and-a-new-beginning-9bb2cb867ac4': '/2018-04-26-sunsetting-begin-and-a-new-beginning',
  '/introducing-architect-4-0-faster-lighter-simpler-serverless-59f6dc156bf2': '/2018-10-23-introducing-architect-4-0-faster-lighter-simpler-serverless',
  '/architect-4-1-serverless-meet-frontend-workflows-3b3dd457de9': '/2018-10-29-architect-4-1-serverless-meet-frontend-workflows',
  '/serverless-front-end-patterns-with-architect-views-cf4748aa1ec7': '/2018-10-29-serverless-front-end-patterns-with-architect-views',
  '/enable-cors-on-your-serverless-application-with-a-single-boolean-e784fc061b22': '/2018-11-09-enable-cors-on-your-serverless-application-with-a-single-boolean',
  '/the-begin-master-plan-ff3ce53e9cc9': '/2018-11-09-the-begin-master-plan',
  '/serverless-es-modules-1e9bd5e15086': '/2018-11-13-serverless-es-modules',
  '/local-offline-serverless-app-development-with-architect-6e7aa9af2c4f': '/2018-11-14-local-offline-serverless-app-development-with-architect',
  '/architect-4-3-even-faster-local-offline-development-and-sunrise-support-for-python-842dab85e210': '/2018-11-15-architect-4-3-even-faster-local-offline-development-and-sunrise-support-for-python',
  '/the-real-reason-frameworks-get-adopted-1a6893051686': '/2018-12-03-the-real-reason-frameworks-get-adopted',

  // 2019
  '/introducing-begin-data-dynamodb-made-ridiculously-easy-688a3d9ff392': '/2019-01-22-introducing-begin-data-dynamodb-made-ridiculously-easy',
  '/introducing-architect-5-0-fully-serverless-websockets-20bb97673c4e': '/2019-01-24-introducing-architect-5-0-fully-serverless-websockets',
  '/architect-5-5-serverless-meets-single-page-apps-static-site-generators-a364ee7033e7': '/2019-02-06-architect-5-5-serverless-meets-single-page-apps-static-site-generators',
  '/architect-6-0-ruby-python-and-cloudformation-9a171e166258': '/2019-09-29-architect-6-0-ruby-python-and-cloudformation',
  '/the-cloud-lock-in-myth-opting-out-of-servers-and-opting-into-de-facto-standards-1b169b642024': '/2019-10-08-the-cloud-lock-in-myth-opting-out-of-servers-and-opting-into-de-facto-standards',
  '/how-to-create-an-openjs-architect-serverless-app-with-babel-dfe7f3554076': '/2019-10-29-how-to-create-an-openjs-architect-serverless-app-with-babel',
  '//how-to-create-a-bundler-free-openjs-architect-serverless-app-with-babel-dc6907859835': '/2019-10-31-how-to-create-a-bundler-free-openjs-architect-serverless-app-with-babel',
  '/how-to-create-an-openjs-architect-serverless-app-with-typescript-d8549102f73c': '/2019-10-31-how-to-create-an-openjs-architect-serverless-app-with-typescript',
  '/deno-runtime-support-for-architect-805fcbaa82c3': '/',

  // 2020
  '/deno-runtime-support-for-architect-805fcbaa82c3': '/2019-12-20-deno-runtime-support-for-architect',
  '/run-serverless-deno-in-aws-lambda-1014dc8696a2': '/2020-01-17-run-serverless-deno-in-aws-lambda',
  '/make-a-serverless-express-api-with-openjs-architect-cab7a279762b': '/2020-02-11-make-a-serverless-express-api-with-openjs-architect',
  '/new-at-begin-add-and-manage-routes-via-manifest-file-24ced2e65a3': '/2020-03-05-new-at-begin-add-and-manage-routes-via-manifest-file',
  '/testing-your-serverless-app-on-begin-with-tap-54f39714d3bd': '/2020-03-09-testing-your-serverless-app-on-begin-with-tap',
  '/testing-serverless-apps-with-jest-on-begin-1408e1811e68': '/2020-03-10-testing-serverless-apps-with-jest-on-begin',
  '/testing-serverless-apps-with-mocha-on-begin-8318f03e6311': '/2020-03-11-testing-serverless-apps-with-mocha-on-begin',
  '/transpiling-javascript-with-babel-on-begin-ff3845afcbb6': '/2020-03-30-transpiling-javascript-with-babel-on-begin',
  '/testing-serverless-apps-with-ava-on-begin-d0cfc8844df7': '/2020-03-31-testing-serverless-apps-with-ava-on-begin',
  '/a-new-view-for-begin-data-4b4668da789d': '/2020-04-22-a-new-view-for-begin-data',
  '/a-brand-new-primitive-for-your-begin-apps-event-functions-9cdfd2bb3dcb': '/2020-04-30-a-brand-new-primitive-for-your-begin-apps-event-functions',
  '/testing-in-deno-the-basics-943916d85224': '/2020-05-13-testing-in-deno-the-basics',
  '/serverless-deno-react-with-server-side-rendering-on-begin-3e183de16e0': '/2020-05-14-serverless-deno-react-with-server-side-rendering-on-begin',
  '/begin-now-supports-renaming-default-github-branches-6d76ece06048': '/2020-07-15-begin-now-supports-renaming-default-github-branches',
  '/how-to-rename-your-master-branch-to-main-or-something-else-d55a04f456c0': '/2020-07-15-how-to-rename-your-master-branch-to-main-or-something-else',
  '/architect-7-0-http-apis-and-even-better-sandbox-testing-c84df06cd443': '/2020-09-18-architect-7-0-http-apis-and-even-better-sandbox-testing',
  '/begin-now-ships-api-gateway-http-apis-by-default-490eebfbefa6': '/2020-09-23-begin-now-ships-api-gateway-http-apis-by-default',
  '/architect-8-0-http-catchall-syntax-proxy-new-http-methods-npm-7-compat-86fcb71be49b': '/2020-10-16-architect-8-0-http-catchall-syntax-proxy-new-http-methods-npm-7-compat',
  '/the-fastest-request-is-the-one-you-never-make-96b442722': '/2020-11-16-the-fastest-request-is-the-one-you-never-make',
  '/architect-8-3-custom-file-paths-much-more-a51def83817e': '/2020-12-09-architect-8-3-custom-file-paths-much-more',
  '/architect-8-4-say-hello-to-lambda-treeshaking-898bf5008c70': '/2020-12-21-architect-8-4-say-hello-to-lambda-treeshaking'
}

// eslint-disable-next-line
  module.exports = async function redirect (req) {

  let isGet = req.requestContext.http.method.toLowerCase() === 'get'
  let isPath = Object.keys(redirects).includes(req.requestContext.http.path)
  if (isGet && isPath) {

    return {
      statusCode: 301,
      headers: {
        location: redirects[req.requestContext.http.path]
      }
    }
  }
}

// if isget is true and ispath is true then we redirect to path of redirects

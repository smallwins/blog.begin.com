// redirect Medium urls to blog.begin.com
let redirects = {
    // 2016
    '/': '/conversational-interaction-design-constructing-context-b21e2341334f',
    '/': '/how-to-make-a-better-bot-c038626fd401',
  
    // 2017
    '/': '/introducing-slack-js-9-0-0-c425a63cc479',
 
  
    // 2018
    '/': '/build-an-infinitely-scalable-slack-app-in-5-minutes-972789924f3f)',
    '/': '/build-an-infinitely-scalable-slack-app-part-2-prepping-for-distribution-in-the-slack-app-9183af539449',
    '/': '/sunsetting-begin-and-a-new-beginning-9bb2cb867ac4',
    '/': '/introducing-architect-4-0-faster-lighter-simpler-serverless-59f6dc156bf2',
    '/': '/enable-cors-on-your-serverless-application-with-a-single-boolean-e784fc061b22',
    '/': '/the-begin-master-plan-ff3ce53e9cc9',
    '/': '/serverless-es-modules-1e9bd5e15086',
    '/': '/local-offline-serverless-app-development-with-architect-6e7aa9af2c4f',
    '/': '/the-real-reason-frameworks-get-adopted-1a6893051686',
  
    // 2019
    '/': '/introducing-begin-data-dynamodb-made-ridiculously-easy-688a3d9ff392',
    '/': '/introducing-architect-5-0-fully-serverless-websockets-20bb97673c4e',
    '/': '/architect-5-5-serverless-meets-single-page-apps-static-site-generators-a364ee7033e7',
    '/': '/architect-6-0-ruby-python-and-cloudformation-9a171e166258',
    '/': '/the-cloud-lock-in-myth-opting-out-of-servers-and-opting-into-de-facto-standards-1b169b642024',
    '/': '/how-to-create-an-openjs-architect-serverless-app-with-babel-dfe7f3554076',
    '/': '/how-to-create-a-bundler-free-openjs-architect-serverless-app-with-babel-dc6907859835',
    '/': '/how-to-create-an-openjs-architect-serverless-app-with-typescript-d8549102f73c)',
    '/': '/deno-runtime-support-for-architect-805fcbaa82c3',
  
    // 2020
    '/': '/run-serverless-deno-in-aws-lambda-1014dc8696a2',
    '/': '/make-a-serverless-express-api-with-openjs-architect-cab7a279762b',
    '/': '/testing-serverless-apps-with-jest-on-begin-1408e1811e68',
    '/': '/testing-serverless-apps-with-mocha-on-begin-8318f03e6311',
    '/': '/testing-in-deno-the-basics-943916d85224',
    '/': '/serverless-deno-react-with-server-side-rendering-on-begin-3e183de16e0',
    '/': '/architect-7-0-http-apis-and-even-better-sandbox-testing-c84df06cd443',
    '/': '/architect-8-0-http-catchall-syntax-proxy-new-http-methods-npm-7-compat-86fcb71be49b',
    '/': '/architect-8-4-say-hello-to-lambda-treeshaking-898bf5008c70',
  
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
let { http } = require('@architect/functions')

// middleware to preserve old urls
async function redirect(req) {
  // return{req}
  if (req.requestContext.http.method.toLowerCase() === 'get' && req.requestContext.http.path === '/') {
    return {
      statusCode: 303,
      headers: {
        location: '/'
      }
    }
  }
}

// middleware proxy s3 assets
let asap = http.proxy({
  spa: false,
})

exports.handler = http.async(redirect, asap)

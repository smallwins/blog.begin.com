let fs = require('fs')
require = require('esm')(module) // eslint-disable-line
const main =require('@architect/views/modules/pages/main.js').default
const BlogCard = require('../../views/modules/components/blog-card.js')

const Html = require('@architect/views/modules/document/html.js').default
const posts = fs.readdirSync(path.join('node_modules', '@architect', 'views', 'posts'))


// console.log("Index: ", posts)
exports.handler = async function index(req) {
 
  // let children = main({children: 'Shawn'})
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: Html({
      children: main({children: `BlogCard`})
    })
  }
}

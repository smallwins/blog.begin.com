let fs = require('fs')
require = require('esm')(module) // eslint-disable-line
const main = require('@architect/views/modules/pages/main.js').default
// const BlogCard = require('../../views/modules/components/blog-card.js')

const Html = require('@architect/views/modules/document/html.js').default
const posts = fs.readdirSync(path.join('node_modules', '@architect', 'views', 'posts'))

// test if post are being rendered through blogcard

exports.handler = async function index(req) {
 
  let blogCard = `
  <div class="postsGrid">${ posts.map(post => `
    <div class="postCard">
      <a href=/posts/${post.replace(".md", "")}>${post}</a>
      <p>${post.title}</p>
      <p>${post.description}</p>
    </div>`).join('')}
  </div>
  `
  

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: Html({
      children: main({children: blogCard})
    })
  }
}

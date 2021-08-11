let { join } = require('path')
let { readdirSync } = require('fs')
let render = require('./render')
let base = join('node_modules', '@architect', 'views', 'posts')
let posts = readdirSync(base).map(post => post.replace('.md', ''))

// eslint-disable-next-line
module.exports = async function blog (req) {
  let post = req.rawPath.substr(1)
  if (posts.includes(post)) {
    return render(post)
  }
}

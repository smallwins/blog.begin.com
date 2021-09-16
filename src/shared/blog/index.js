const { join } = require('path')
const { readdirSync } = require('fs')
const render = require('./render')
const base = join('node_modules', '@architect', 'views', 'posts')
const posts = readdirSync(base)
  .map(post => post.replace('.md', ''))

// eslint-disable-next-line
module.exports = async function blog (req) {
  const post = req.rawPath.substr(1)
  if (posts.includes(post)) {
    return render(post)
  }
}

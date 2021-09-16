require = require('esm')(module) // eslint-disable-line
const { static } = require('@architect/functions')
const arcStatic = href => static(href, { stagePath: false })
const path = require('path')
const { readdirSync, readFileSync } = require('fs')
const md = require('@architect/shared/blog/md')
const Html = require('@architect/views/modules/document/html.js').default
const layout = require('@architect/views/modules/layouts/layout.js').default
const Card = require('@architect/views/modules/components/blog-card').default
const base = path.join('node_modules', '@architect', 'views', 'posts')

const posts = readdirSync(base)

function render (path) {
  const file = readFileSync(`${base}/${path}`, 'utf8')
  md.render(file)
  return md.meta
}

function getCardData (path) {
  const frontmatter = render(path)
  frontmatter.image = arcStatic(frontmatter.image)
  frontmatter.avatar = arcStatic(frontmatter.avatar)
  return {
    href: `posts/${path}`,
    frontmatter
  }
}

const cards = posts
  .map(path => getCardData(path))
  .sort((a, b) => (a.post < b.post ? 1 : -1))
  .map(o => Card(o))
  .join('')

// eslint-disable-next-line
exports.handler = async function index () {
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: Html({
      children: layout({
        children: cards
      }),
      styles: [
        arcStatic('/css/styles.css'),
        arcStatic('/css/index.css'),
        arcStatic('/css/syntax.css')
      ],
      scripts: [
        arcStatic('/index.js')
      ],
    })
  }
}

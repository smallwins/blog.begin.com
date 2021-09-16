// eslint-disable-next-line
require = require('esm')(module)
const path = require('path')
const { readFileSync } = require('fs')
const md = require('@architect/shared/blog/md')
const { static } = require('@architect/functions')
const arcStatic = href => static(href, { stagePath: false })

const Html = require('@architect/views/modules/document/html.js').default
const layout = require('@architect/views/modules/layouts/posts-layout.js').default
const base = path.join('node_modules', '@architect', 'views', 'posts')

// eslint-disable-next-line
module.exports = async function blog (req) {
  const pathParameters = req.pathParameters || {}
  const path = pathParameters.post
  const post = md.render(readFileSync(`${base}/${path}`, 'utf8'))
  const frontmatter = md.meta
  frontmatter.image = arcStatic(frontmatter.image)
  frontmatter.avatar = arcStatic(frontmatter.avatar)

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: Html({
      children: layout({
        children: post,
        ...frontmatter
      }),
      styles: [
        arcStatic('/css/styles.css'),
        arcStatic('/css/index.css'),
        arcStatic('/css/syntax.css')
      ],
      scripts: [
        arcStatic('/index.js')
      ]
    })
  }
}

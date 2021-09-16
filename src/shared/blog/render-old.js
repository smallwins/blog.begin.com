require = require('esm')(module) // eslint-disable-line
const path = require('path')
const util = require('util')
const fs = require('fs')
const Markdown = require('markdown-it')
const markdownClass = require('@toycode/markdown-it-class')
const markdownAnchor = require('markdown-it-anchor')
const markdownArcStatic = require('markdown-it-arc-static-img')
const meta = require('markdown-it-meta')
const classMapping = require('./markdown-class-mappings')
const hljs = require('highlight.js')
const { escapeHtml } = Markdown().utils
const highlight = require('./highlighter')
  .bind(null, hljs, escapeHtml)
const arcGrammar = require('./arc-grammar')
hljs.registerLanguage('arc', arcGrammar)
const readFile = util.promisify(fs.readFile)
const Html = require('@architect/views/modules/document/html.js').default
const postsLayout = require('@architect/views/modules/layouts/posts-layout.js').default
const cache = {} // cheap warm cache

module.exports = async function render (doc) {
  let filePath = path.join(
    __dirname,
    '..',
    'node_modules',
    '@architect',
    'views',
    'posts',
    `${doc}.md`
  )

  let file
  try {
    if (!cache[filePath])
      cache[filePath] = await readFile(filePath, 'utf8')
    file = cache[filePath]
  }
  catch (err) {
    // TODO: Load next doc in section
    console.error(err)
    return {
      statusCode: 404,
      body: err.message
    }
  }

  const md = Markdown({
    highlight,
    linkify: true,
    html: true,
    typographer: true
  })
    .use(markdownClass, classMapping)
    .use(markdownAnchor, {
      permalinkSymbol: ' '
    })
    .use(markdownArcStatic)
    .use(meta)

  const children = md.render(file)
  const frontmatter = md.meta
  const {
    category,
    description,
    title,
    image,
    avatar,
    author,
    published
  } = frontmatter

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: Html({
      children: postsLayout({
        category,
        description,
        title,
        author,
        published,
        children,
        image,
        avatar
      }),
      frontmatter,
      scripts: [
        '/index.js',
      ],
    })
  }
}

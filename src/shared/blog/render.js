require = require('esm')(module) // eslint-disable-line
const path = require('path')
const util = require('util')
const fs = require('fs')
const readFile = fs.readFile
const Markdown = require('markdown-it')
const markdownClass = require('@toycode/markdown-it-class')
const markdownAnchor = require('markdown-it-anchor')
const markdownArcStatic = require('markdown-it-arc-static-img')
const meta = require('markdown-it-meta')
const classMapping = require('@architect/shared/blog/markdown-class-mappings')
const hljs = require('highlight.js')
const { escapeHtml } = Markdown().utils
const highlight = require('@architect/shared/blog/highlighter')
  .bind(null, hljs, escapeHtml)
const arcGrammar = require('@architect/shared/blog/arc-grammar')
hljs.registerLanguage('arc', arcGrammar)
// const readFile = util.promisify(fs.readFile)
const Html = require('@architect/views/modules/document/html.js').default
const postsLayout = require('@architect/views/modules/layouts/posts-layout.js').default
const cache = {} // cheap warm cache
const mdOpts = {
  highlight,
  linkify: true,
  html: true,
  typographer: true
}
const md = Markdown(mdOpts)
  .use(markdownClass, classMapping)
  .use(markdownAnchor, {
    permalinkSymbol: ' '
  })
  .use(markdownArcStatic)
  .use(meta)


module.exports = async function render (doc) {
  const filePath = path.join(
    __dirname,
    '..',
    'views',
    'posts',
    `${doc}.md`
  )

  /*
  let file
  try {
    if (!cache[filePath])
      cache[filePath] = await readFile(filePath, 'utf8')
    file = cache[filePath]
  }
  catch (err) {
    console.error(err)
    return {
      statusCode: 404,
      body: err.message
    }
  }
  */

  readFile(
    filePath,
    { encoding: 'utf8' },
    function (err, file) {
      if (err) {
        console.error(err)
        return {
          statusCode: 404,
          body: err.message
        }
      }
      const post = md.render(file)
      const frontmatter = md.meta

      console.log('POST: ', post)

      return {
        post,
        frontmatter
      }
    }
  )
}

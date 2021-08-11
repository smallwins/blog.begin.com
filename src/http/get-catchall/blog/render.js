require = require('esm')(module) // eslint-disable-line
const path = require('path')
const util = require('util')
const fs = require('fs')
const Markdown = require('markdown-it')
const markdownClass = require('@toycode/markdown-it-class')
const markdownAnchor = require('markdown-it-anchor')
const frontmatterParser = require('markdown-it-front-matter')
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
const arcStaticImg = require('markdown-it-arc-static-img')
const md = require('markdown-it')()
  .use(arcStaticImg)
const imgMD = '![My Image](myimage.jpg)'
const result = md.render(imgMD)

const yaml = require('js-yaml')
const EDIT_DOCS = `edit/main/src/views/docs/`
const cache = {} // cheap warm cache
const arc = require('@architect/functions')


module.exports = async function render (docName) {
  let doc = `${docName}`

  let activePath = path.join(
    'posts',
    docName
  )

  let active = `/${activePath}`

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

  // Declare in outer scope for use later... sorry
  let frontmatter = ''
  const md = Markdown({
    highlight,
    linkify: true,
    html: true,
    typography: true
  })
    .use(markdownClass, classMapping)
    .use(markdownAnchor, {
      permalinkSymbol: ' '
    })
    .use(frontmatterParser, function (str) {
      frontmatter = yaml.load(str)
    })
    .use(arcStaticImg)
  const children = md.render(file)

  const { category, description, title, image, avi, author, published } = frontmatter

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: Html({ children: postsLayout({ category, description, title, image: arc.static(image), avi: arc.static(avi), author, published, children }),
      scripts: [
        '/index.js',
      ],
    }),

  }
}

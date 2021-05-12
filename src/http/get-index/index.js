let fs = require('fs')
const path = require('path')
const util = require('util')
require = require('esm')(module) // eslint-disable-line
const main = require('@architect/views/modules/pages/main.js').default
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
const yaml = require('js-yaml')
const EDIT_DOCS = `edit/main/src/views/docs/`
const cache = {} // cheap warm cache
const arc = require('@architect/functions')
const base = path.join('node_modules', '@architect', 'views', 'posts')
const posts = fs.readdirSync(base)


const createCard = (function readFrontMatter() {
    let results = [];

    for(let post of posts) {
        let raw = fs.readFileSync(path.join(base, post)).toString()
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
        const children = md.render(raw)
        results.push({post, frontmatter})
    }
    return results
})()

exports.handler = async function index(req) {

  let blogCard = `
  <div class="grid-lg col-3 gap1">${createCard.map(card => `
  <div class="postCard bg-p0 radius1 mb-1">
    <div height="100">
      <img class="object-fill  radius-br-none radius-bl-none" src=${card.frontmatter.image} alt="postIMG" height="200"/>
    </div>
    <div class="p1">
      <h3><a class="no-underline-lg text-g10 text-h6" href=/posts/${card.post.replace(".md", "")}>${card.frontmatter.title}</a></h3>
      <p>${card.frontmatter.description}</p>
      <img class="radius-pill" src=${card.frontmatter.avi} alt="avi" height="50"/>
      <small>${card.frontmatter.author}</small>
      <span><small>${card.frontmatter.readtime}</small></span>
    </div>
    </div>`).join('')}
  </div>
  `
  
  let headline = `
  <div class="mb3 text-center">
    <h1 class="font-black text4">The Beginners Blog</h1>
    <h2>Back to the basics</h2>
  </div>
  `

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: Html({
      children: main({children: `
        ${headline}
        ${blogCard}
      `
      })
    })
  }
}

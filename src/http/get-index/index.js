let fs = require('fs')
const path = require('path')
const util = require('util')
require = require('esm')(module) // eslint-disable-line
const main = require('@architect/views/modules/pages/main.js').default
// const BlogCard = require('../../views/modules/components/blog-card.js')
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

const meta = (function readFrontMatter() {
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
        results.push(frontmatter)

    }
    return results
   
})()


exports.handler = async function index(req) {

  console.log('meta: ', meta.title)

  // <a href=/posts/${post.replace(".md", "")}>${`<p>${meta.map(met => `<p>${met.title}</p>`).join('')}</p>`}</a>
 
  let blogCard = `
  <div class="postsGrid">${meta.map(met => `
    <div class="postCard">
      <img src=${met.image} alt="postIMG" height="100"/>
     
      <p>${met.title}</p>
      <p>${met.description}</p>
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

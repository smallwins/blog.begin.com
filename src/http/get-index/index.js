let fs = require('fs')
const path = require('path')
const util = require('util')
require = require('esm')(module) // eslint-disable-line

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
const layout = require('@architect/views/modules/layouts/layout.js').default
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
  createCard.sort((a, b) => (a.post < b.post ? 1 : -1))

  let blogCard = `
  <div class="grid-lg col-3 gap1">${createCard.map(card => `
    <div class="
      mb0
      bg-p1
      b-p18
      radius1
      shadow-card
      object-contain
      transform-scale-hover
      transform-scale-active
      transition-transform
      relative
      ">
      <a class="no-underline-lg no-underline" href="/posts/${card.post.replace(".md", "")}">
      <div class="
        pt3
        pb3
        pr1
        pl1
        topCorners
        background-size-cover
        transition-transform
        transition-background-x
        guides-item-bg-h
        h-gradient
        "
        style="background-image:url(${arc.static(card.frontmatter.image)})">
        </div>
        
        <div class="p1 flex flex-col">  
        <div>
          <h3 class="text-p5 mb1">${`${card.frontmatter.title}`.slice(0,57)}</h3>
          <p class="text-g8 mb2">${`${card.frontmatter.description}`.slice(0,90) + `<small class="text-p5"> [...]</small>`}</p>
        </div>
          <div class="flex flex-grow-0 justify-between">
            <div>
              <img class="radius-pill" src=${card.frontmatter.avi} alt="avi" height="40"/>
              <p class="text-p5 text-1">${card.frontmatter.author}</p>
            </div>
            <div class="self-end">
              <p class="text-g4 text-1">${card.frontmatter.readtime}</p>
            </div>
          </div>
        </div></a>
    </div>`).join('')}
  </div>
  `
  
  // let featuredPost = `
  // <div class="
  // mb0
  // bg-p1
  // b-p18
  // radius1
  // shadow-card
  // object-contain
  // transform-scale-hover
  // transform-scale-active
  // transition-transform
  // ">
  //   <a class="no-underline-lg no-underline" href="/posts/${card.post.replace(".md", "")}">
  //   <div class="
  //     pt3
  //     pb3
  //     pr1
  //     pl1
  //     topCorners
  //     background-size-cover
  //     transition-transform
  //     transition-background-x"
  //     guides-item-bg-h
  //     h-gradient
  //     style="background-image:url(${arc.static(card.frontmatter.image)})">
  //     <h3 class="text-p1">${card.frontmatter.title}</h3>
  //   </div> 
  // </div>
  // `

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: Html({
      children: layout({children: `
       
        ${blogCard}
      `
      })
    })
  }
}

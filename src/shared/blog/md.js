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
const mdOpts = {
  highlight,
  linkify: true,
  html: true,
  typographer: true
}
module.exports = Markdown(mdOpts)
  .use(markdownClass, classMapping)
  .use(markdownAnchor, {
    permalinkSymbol: ' '
  })
  .use(markdownArcStatic)
  .use(meta)

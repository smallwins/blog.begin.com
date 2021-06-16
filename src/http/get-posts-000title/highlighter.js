import copytoclip from './copytoclip.js'

module.exports = function (hljs, escapeHtml, str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return `<pre class="hljs boxshadow radius2 mb0 mb1-lg"><div class="flex justify-end"><button id="copy-button"
      class="
        pt-4
        pr1
        pb-4
        pl1
        border0
        border-solid
        radius0
        bg-p3
        bg-h0
        bg-a1
        text-g0
        text-h1
        font-semibold
        cursor-pointer
      ">Copy</button></div><span id="copy-success">Code copied! :)</span><code id="code">${hljs.highlight(str,{language: "vbscript", ignoreIllegals: true}).value}</code></pre>`
    }
    catch (err) {
      console.error(err)
    }
  }

  return `<pre class="hljs mb0 boxshadow radius2 mb1-lg"><div class="flex justify-end"><button id="pkg-share"
  class="
    pt-4
    pr1
    pb-4
    pl1
    border0
    border-solid
    radius0
    bg-p1
    bg-h0
    bg-a1
    text-g0
    text-1
    font-semibold
    cursor-pointer
  ">Copy</button></div><span id="copy-success">Code copied! :)</span><code>${escapeHtml(str)}</code></pre>`
}

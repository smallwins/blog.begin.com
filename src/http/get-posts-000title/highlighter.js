// const copytoclip = require('./copytoclip')
 
module.exports = function (hljs, escapeHtml, str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return `<div class=""><pre class="hljs radius2 mb0 mb1-lg"><div class="flex justify-end"><button id="pkg-share"
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
      ">Copy</button></div><code>${hljs.highlight(str,{language: "vbscript", ignoreIllegals: true}).value}</code></pre></div>`
    }
    catch (err) {
      console.error(err)
    }
  }

  return `<pre class="hljs mb0 mb1-lg"><code>${escapeHtml(str)}</code></pre>`
}

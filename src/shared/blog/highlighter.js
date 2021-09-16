
module.exports = function (hljs, escapeHtml, str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return `<pre class="hljs radius1 pb1 pt1 mb3 mt3"><div class="hidden">${Buffer.from(str).toString("base64")}</div><button
      class="
        copy-button
        block 
        ml-auto
        pt-1
        pr1
        pb-1
        pl1
        border0
        border-solid
        radius1
        bg-p3
        bg-h0
        bg-a1
        text-g0
        text-h1
        font-semibold
        cursor-pointer
      ">Copy</button>${hljs.highlight(str,{language: "vbscript", ignoreIllegals: true}).value}</pre>`
    }
    catch (err) {
      console.error(err)
    }
  }

  return `<pre class="hljs radius1 pb1 pt1 mb3 mt3"><div class="hidden">${Buffer.from(str).toString("base64")}</div><button
  class="
    copy-button
    block 
    ml-auto
    pt-4
    pr1
    pb-4
    pl1
    border0
    border-solid
    radius1
    bg-p3
    bg-h0
    bg-a1
    text-g0
    text-h1
    font-semibold
    cursor-pointer
  ">Copy</button></span>${escapeHtml(str)}</pre>`
}

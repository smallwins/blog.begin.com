
module.exports = function (hljs, escapeHtml, str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return `<div class="relative"><button
      class="
        copy-button
        
        items-end
        absolute
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
      ">Copy</button><div class="hidden">${Buffer.from(str).toString("base64")}</div><pre class="hljs radius1 pb1 pt1 mb3 mt3">${hljs.highlight(str,{language: "vbscript", ignoreIllegals: true}).value}</pre><span class="copy-success">Code copied! :)</span></div>`
    }
    catch (err) {
      console.error(err)
    }
  }

  return `<div class="relative"><button
  class="
    copy-button
    absolute
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
  ">Copy</button><div class="hidden">${Buffer.from(str).toString("base64")}</div><pre class="hljs radius1 pb1 pt1 mb3 mt3"></span>${escapeHtml(str)}</pre><span class="copy-success">Code copied! :)</div>`
}

/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  let main = document
    .getElementById('main')

  // Show percentage of page read on desktop
  let bar = document.querySelector('.indicator')
  let isDesktop = window.innerWidth > 768

  if (isDesktop) {
  // If we want this to work on mobile
  // we need to add a second function
  // for handling window.onscroll
    let el = main
    bar.style.width = getScrollPercent(el)
    el.onscroll = setReadPercent.bind(null, el)
  }

  function setReadPercent (el) {
    bar.style.width = `${getScrollPercent(el)}%`
  }

  function getScrollPercent (el) {
    let body = document.body
    let scrollTop = 'scrollTop'
    let scrollHeight = 'scrollHeight'
    let currentTop = el[scrollTop] || body[scrollTop]
    let currentHeight = (el[scrollHeight] || body[scrollHeight]) - body.clientHeight
    return Math.floor((currentTop / currentHeight) * 100)
  }

  // Hamburger Menu
  const hamburger = document.getElementById('hamburger')
  const navUL = document.getElementById('nav-ul')

  hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show')
  })

  // Copy-Paste function for code blocks
  const copyButton = document.querySelectorAll('.copy-button')

  for (let e of copyButton) {

    e.addEventListener('click', (evt) => {
      let parent = evt.target.parentElement
      let code = parent.querySelector('div.hidden').textContent
      parent.querySelector('.copy-button').innerText = 'Copied!'


      navigator.clipboard.writeText(atob(code)).then(
        () => {
          setTimeout(() => {
            parent.querySelector('.copy-button').innerText = 'Copy'
          }, 2000)
        },
        () => {
        }
      )
    })
  }
})



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

    function setReadPercent(el) {
      bar.style.width = `${getScrollPercent(el)}%`
    }

    function getScrollPercent(el) {
      let body = document.body
      let scrollTop = 'scrollTop'
      let scrollHeight = 'scrollHeight'
      let currentTop = el[scrollTop] || body[scrollTop]
      let currentHeight = (el[scrollHeight] || body[scrollHeight]) - body.clientHeight
      return Math.floor((currentTop / currentHeight) * 100)
    }

    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navUL = document.getElementById('nav-ul');
  
    hamburger.addEventListener('click', () => {
      navUL.classList.toggle('show');
    })

    // Copy-Paste function for code blocks
   
      
      // const code = document.getElementById('code');
      const copyButton = document.querySelectorAll('.copy-button');
      const copySuccess = document.querySelectorAll('.copy-success');

      
      console.log(copyButton)
      console.log(copySuccess)

      for (let e of copyButton) {
        console.log(e)
        e.style.display = "block"
        e.addEventListener('click', (evt) => {
          let parent = evt.target.parentElement
          let code = parent.querySelector("div.hidden").textContent
          let success = parent.querySelector(".copy-success")
          success.style.display = "block"
          console.log(atob(code))
          navigator.clipboard.writeText(atob(code)).then(
            () => {
              copySuccess
              // setTimeout(() => {
              //   copySuccess
              // }, 2500);
            },
            () => {
              console.log('Error writing to the clipboard');
            }
          );
        })
      }
    })


      // console.log(code)
    
    //   const copyTextHandler = () => {
    //     const text = codeBlock.innerText;
    
    //     //   second version - Clipboard API
    //     navigator.clipboard.writeText(text).then(
    //       () => {
    //         copySuccess.classList.add('show-message');
    //         setTimeout(() => {
    //           copySuccess.classList.remove('show-message');
    //         }, 2500);
    //       },
    //       () => {
    //         console.log('Error writing to the clipboard');
    //       }
    //     );
    //   };
    
    //   copyButton.addEventListener('click', copyTextHandler);
    // }
    

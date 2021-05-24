import Logo from '../components/logo.js'
import Icon from '../components/icon.js'
import GithubLink from '../components/github-link.js'
import SlackLink from '../components/slack-link.js'

export default function postsLayout (props = {}) {

  let children = props.children || ""
  let image = props.image || ""
    return `
    <div
    class="
      
    "
  >
    <header
      class="
        pt-1
        pr2
        pb0
        pl2
        sticky
        relative-lg
        flex
        items-center
        justify-between
        top0
        bg-p5
        text-g0
      "
    >
      <a
        aria-label="Begin Blog"
        href="/"
        class="
          text-g0
          text-h0
          text-a2
          cursor-pointer
        "
      >
        ${Logo({ classes: 'logo' })}
      </a>
      <div
        class="
          flex
          items-center
          justify-between
        "
      >
       
        <small><a class="text-p6 text-h0" href="https://begin.com"><-- back to begin</a></small>
        <button
          aria-label="Menu"
          id="menu-button"
          class="
            ml0
            bg-unset
            text-g0
            text-h0
            text-a2
            hidden-lg
            cursor-pointer
          "
        >
          ${Icon({ href: 'hamburger', classes: 'icon fill-current' })}
        </button>
      </div>
      <div class="indicator bg-image0 absolute right0 bottom0 left0"></div>
    </header>
    
    <main
      id="main"
      class="
        h-full
        p3
        overflow-auto
      "
    >
      <div
        class="
          max-width-content
          m-auto
        "
      >
        <h1
          class="
            mb1
            font-semibold
            text2
          "
        >
        </h1>
        <img src=${image} alt='blogimg' height="500"/>
        ${children}
        
      </div>
    </main>
    <footer class="bg-p5 text-g0 text-center p2">
        <p>© 2021 Beginner Corp | Made with 💖 in San Francisco</p>
    </footer>
  </div>
    `
  }
  
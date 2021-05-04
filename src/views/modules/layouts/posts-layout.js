import Logo from '../components/logo.js'
import Icon from '../components/icon.js'
import GithubLink from '../components/github-link.js'
import SlackLink from '../components/slack-link.js'
// import BlogCard from '../components/blog-card.js'

export default function postsLayout (props = {}) {

  let children = props.children || ""
    return `
    <div
    class="
      h-full-lg
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
        ${SlackLink()}
        ${GithubLink({ classes: 'ml-2' })}
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
        ${children}
        
      </div>
    </main>
  </div>
    `
  }
  
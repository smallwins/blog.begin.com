import Head from './head.js'
import Symbols from './symbols.js'
import Script from './script.js'
import State from './state.js'
import Logo from '../components/logo.js'
import Icon from '../components/icon.js'
// import Sidebar from '../components/sidebar.js'
import GithubLink from '../components/github-link.js'
import SlackLink from '../components/slack-link.js'
import BlogCard from '../components/blogCard.js'


export default function HTML (props = {}) {
  let {
    lang = 'en',
    scripts = '',
    state = {},
    thirdparty = '',
    title = ''
  } = props
  let scriptTags = scripts &&
    Array.isArray(props.scripts)
    ? scripts.map(src => Script({ src })).join('')
    : Script(scripts)
  let stateTag = state &&
      State(state) || ''

  return `
<!DOCTYPE html>
<html lang="${lang}" class="h-full">
${Head(props)}
${Symbols}
<body
  class="
    h-full
    font-sans
    overflow-hidden-lg
  "
>
  <div
    class="
      h-full-lg
      grid-lg
      two-column
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
        bg-g9
        col-start-1
        col-end-3
        text-g0
      "
    >
      <a
        aria-label="OpenJS Architect"
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
        col-start-1
        col-end-3
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
          ${title}
        </h1>
        ${BlogCard(props)}
        
      </div>
    </main>
  </div>
  ${stateTag}
  ${scriptTags}
  ${thirdparty}
</body>
</html>
`
}

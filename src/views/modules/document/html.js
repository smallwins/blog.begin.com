import Head from './head.js'
import Symbols from './symbols.js'
import Script from './script.js'
import State from './state.js'
// import Logo from '../components/logo.js'
// import Icon from '../components/icon.js'
// // import Sidebar from '../components/sidebar.js'
// import GithubLink from '../components/github-link.js'
// import SlackLink from '../components/slack-link.js'
// import BlogCard from '../components/blog-card.js'


export default function HTML (props = {}) {
  let {
    lang = 'en',
    scripts = '',
    state = {},
    thirdparty = '',
    title = '',
    children = ''
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
    font-face
    
  "
>
  ${children}
  ${stateTag}
  ${scriptTags}
  ${thirdparty}
</body>
</html>
`
}

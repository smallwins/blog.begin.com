import Head from './head.js'
import Symbols from './symbols.js'
import Script from './script.js'
import State from './state.js'


export default function HTML (props = {}) {
  let {
    lang = 'en',
    scripts = '',
    state = {},
    thirdparty = '',
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
<html lang="${lang}" class="h-full overflow-hidden">
${Head(props)}
${Symbols}
<body
  class="
    font-face
    h-full
    overflow-hidden
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

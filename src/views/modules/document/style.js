export default function Style (state = {}) {
  const { href = '' } = state
  return `
<link
  rel="stylesheet"
  type="text/css"
  href="${href}"
>
`
}

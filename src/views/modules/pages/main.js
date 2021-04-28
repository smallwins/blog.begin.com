import postsLayout from '../layouts/posts-layout.js'

export default function Main (props = {}) {
  
  let children = props.children || ""
  
return `
  ${postsLayout({children})}
   `
  
}

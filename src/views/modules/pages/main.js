import postsLayout from '../layouts/posts-layout.js'

export default function Main (props) {
  
  let children = props.children || ""
  console.log(children)
  
  return `
    ${postsLayout({children})}
   `
  
}

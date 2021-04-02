

export default function BlogCard (props = {}) {
  console.log(props.posts)
  
  return `
<div>
  <div class="postsGrid">${ props.posts.map(post => `
    <div class="postCard">
      <div class="postIMG"><img src=''/></div>
      <p><a href=/posts/${post}>${post}</a></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>`).join('') }
  </div>
</div>
  `
}

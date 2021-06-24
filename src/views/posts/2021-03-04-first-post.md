---
title: Bundling is an anti pattern ultimate guide
image: 'image.png' 
category: uncategorized
description: Architect is an open source project and we want YOUR help!
author: 'Ryan Block'
avi: 'ryan.png'
readtime: '4 mins'
published: 'March 04, 2021'
---

# First post

## This is the first post (Sub-Header(H2)) 

**The standard Lorem Ipsum passage, used since the 1500s**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

- Nulla eleifend diam rutrum, tempor risus quis, molestie orci.
- Nullam lobortis felis in vestibulum porttitor.
- Nullam et turpis id elit efficitur imperdiet ac at velit.
- Donec ac mauris id risus facilisis dapibus at maximus erat.
- Sed eu lacus ac dui molestie tincidunt.
- Etiam finibus purus at gravida venenatis.

```js
let blogCard = `
  <div class="grid-lg col-3 gap1">${createCard.map(card => `
  <div class="postCard bg-p0 p1 radius1 mb-1">
  <img src=${card.frontmatter.image} alt="postIMG" height="100"/>
      <h3><a class="no-underline-lg text-g10 text-h6" href=/posts/${card.post.replace(".md", "")}>${card.frontmatter.title}</a></h3>
      <p>${card.frontmatter.description}</p>
    </div>`).join('')}
  </div>
  `
```
# Begin blog

🌤 📝 The Begin blog: how (and why) we make what we make at Begin

- blog.begin.com/
- https://github.com/beginner-corp/blog.begin.com

## Styles

Much of the layout for this blog was taken from the [Architect docs](https://arc.codes/docs/en/guides/get-started/quickstart) while the styling was taken from the [Begin docs](https://docs.begin.com/).

- CSS Utility classes can be found in `/public/css/styles.css`

- Custom styling can be found in `/public/css/index.css`

- Syntax highlighting styles can be found in `/public/css/syntax.css`

## Posts

- Blog posts can be found in `/src/views/posts`
- Images for blog posts can be found in `/public/post-assets`

## Posts from Medium 

<https://www.dropbox.com/scl/fi/2jjifa23fbgb1weqiagr2/blog.begin.com-archive-(2016-2020).paper?dl=0&rlkey=grqlz82zr2mxe2yuppi25ol0k>


---

Getting rid of posts in URL

- Move get post handler logic into get-catchall logic
- `Get post` index handler should be renamed to post middleware
- `Get catchall`: Run post middleware after redirects
- 
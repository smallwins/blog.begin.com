export default function BlogCard (state = {}) {
  const { href, frontmatter } = state
  const {
    author,
    avatar,
    description,
    image,
    readtime,
    title
  } = frontmatter
  const desc = description.slice(0, 90)

  return `
<div
  class="
    mb0-lg
    mb4
    bg-p1
    b-p18
    radius1
    shadow-card
    object-contain
    transform-scale-hover
    transform-scale-active
    transition-transform
    relative
  "
>
  <a
    class="no-underline-lg no-underline"
    href="/${href}"
  >
    <img
      src="${image}"
      alt="${title}"
    />
    <div class="p1 flex flex-col">
      <div>
        <h3 class="text-p5 mb1">
          ${title}
        </h3>
        <p class="text-g8 mb2">
          ${desc}<small class="text-p5">[...]</small>
        </p>
      </div>
      <div
        class="
          flex
          flex-grow-0
          justify-between
        "
      >
        <div>
          <img
            class="radius-pill"
            src="${avatar}"
            alt="avatar"
            height="40"
          >
          <p class="text-p5 text-1">
            ${author}
          </p>
        </div>
        <div class="self-end">
          <p class="text-g4 text-1">
            ${readtime}
          </p>
        </div>
      </div>
    </div>
  </a>
</div>
`
}

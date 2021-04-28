import postsLayout from '../src/views/modules/layouts/posts-layout.js'
import test from 'tape'
import strip from './helpers/strip.js'

test('Assert that Index is pulling posts', t => {

  t.equal(strip(actual), strip(expected), "Posts layout is delivering content")
  t.end()
})

test('Assert that Index is pulling posts', t => {

  let expected = '<div>content</div>'
  let children = "content"
  let actual = postsLayout({children})
  
t.equal(strip(actual), strip(expected), "Index is pulling posts")
t.end()
})

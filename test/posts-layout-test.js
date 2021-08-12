import postsLayout from '../src/views/modules/layouts/posts-layout.js'
import test from 'tape'

test('Check if Posts layout exists', t => {

  t.ok(postsLayout, "Posts layout exists")
  t.end()
})

test('Check if Posts Layout is rendering', t => {

  let actual = postsLayout()
  t.ok(actual, "Posts layout is rendering")
  t.end()
})

test('Assert that Posts Layout is rendering children  ', t => {
    
    let children = "Begin is OTW"
    let actual = postsLayout({children})

  t.ok( /Begin is OTW/.test(actual), "Posts layout is rendering children" )
  t.end()
})




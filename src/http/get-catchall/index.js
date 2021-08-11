let { http } = require('@architect/functions')
let asap = require('@architect/asap')()
let redirect = require('./redirect')
let blog = require('./blog')

exports.handler = http.async(redirect, blog, asap)

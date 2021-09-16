const { http } = require('@architect/functions')
const redirect = require('./redirect')
const blog = require('./blog')

exports.handler = http.async(redirect, blog)

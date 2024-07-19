const express= require('express')
const {create, posts} = require('../controller/postController')
const route= express.Router()

route.post('/create', create)
route.get('/posts', posts)

module.exports= route
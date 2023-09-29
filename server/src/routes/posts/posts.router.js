const express = require('express')
const {httpGetAllPost,httpGetOnePost,httpAddNewPost,httpUpdatePost,httpDeleteOnePost} = require('./posts.controller')

const postsRouter = express.Router()

postsRouter.get('/',httpGetAllPost)
postsRouter.get('/:postTitle',httpGetOnePost)
postsRouter.post('/',httpAddNewPost)
postsRouter.put('/:id',httpUpdatePost)
postsRouter.delete('/:postTitle',httpDeleteOnePost)


module.exports = postsRouter


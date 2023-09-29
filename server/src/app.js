const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')
const postsRouter = require('./routes/posts/posts.router');





app.use(express.json());

app.use(cors())
app.use('/posts',postsRouter);


app.get('/',(req,res)=>{
    
    res.send('hello')  
})


module.exports = app;

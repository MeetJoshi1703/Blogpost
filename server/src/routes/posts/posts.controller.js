const {getAllPosts,getOnePost,addNewPost,updatePost,deleteOnePost} = require('../../models/posts.model')

const httpGetAllPost =async (req,res)=>{
    try {
        const posts = getAllPosts();
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(404).json("error getting all posts");
    }
}

const httpGetOnePost = (req,res)=>{
    const postTitle= decodeURIComponent(req.params.postTitle)
    
    try {
        const post = getOnePost(postTitle);
        return res.json(post)    
    } catch (error) {
        console.log(error);
        return
    }
    
}

const httpAddNewPost = (req,res)=>{
    const post = req.body
    const addedPost = addNewPost(post)
    return res.json(addedPost)
}

const httpUpdatePost = (req,res)=>{
        const post = req.body
        const id = decodeURIComponent(req.params.id)
        
        
        try {
            const updatedPost = updatePost(id,post)
            
            return res.json(updatedPost);

        } catch (error) {
            console.log(error);           
            return 
        }

}

const httpDeleteOnePost = async (req,res)=>{
    const postTitle = decodeURIComponent(req.params.postTitle)

    try {
        const deletedPost = deleteOnePost(postTitle)
        return res.status(200).json(deletedPost);
    } catch (error) {
        console.log(error);
        return;
    }
}

module.exports ={
    httpGetAllPost,
    httpGetOnePost,
    httpAddNewPost,
    httpUpdatePost,
    httpDeleteOnePost,
}

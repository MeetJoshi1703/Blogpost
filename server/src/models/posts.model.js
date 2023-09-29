const posts = [
    {
        id:1,
        postTitle:"Blockchain Technology",
        postContent:"Blockchain technology has emerged as a game-changer in supply chain management. Its decentralized and immutable ledger allows for end-to-end visibility of products as they move through the supply chain. Each transaction or transfer of goods is recorded in a secure and transparent manner, reducing the risk of fraud and errors. This revolutionary technology not only enhances accountability but also enables faster and more efficient processes. With applications spanning from tracking the origin of food products to verifying the authenticity of luxury items, blockchain is reshaping how we manage and optimize supply chains in the 21st century."
    },
    {
        id:2,
        postTitle:"The Science of Deep Learning",
        postContent:"Deep learning, a subset of machine learning, delves into the intricate workings of artificial neural networks inspired by the human brain. At its core are layers of interconnected nodes, or neurons, that process data hierarchically, enabling machines to recognize complex patterns. Through backpropagation and gradient descent, neural networks learn from vast datasets, making them adept at tasks like image and speech recognition, natural language processing, and even autonomous driving. These networks are reshaping industries, from healthcare to finance, and their evolving architectures continue to push the boundaries of AI, promising exciting breakthroughs in the future of technology."
    }
]

const getAllPosts=()=>{

    return posts;

}

const getOnePost=(title)=>{

    const post = posts.find(post=>post.postTitle == title)

    if(post){
        return post
    }
    else{
        return false
    }
}

const addNewPost=(newPost)=>{

    const {postTitle,postContent} = newPost
    let id = posts.length + 1
    const post = {
        id : id,
        postTitle:postTitle,
        postContent:postContent
    }

    posts.push(post);

    return post;
}

function updatePost(id, updatedPost) {
    
    id = parseInt(id)
    const postIndex = posts.findIndex(post => post.id === id);
    
    if (postIndex === -1) {
      throw new Error('Post not found');
    }
  
    // Update the existing post with the new data
    posts[postIndex] = {
        id: id,
        postTitle: updatedPost.postTitle,
        postContent: updatedPost.postContent,
    };
  
    return posts[postIndex];
  }


const deleteOnePost=(title)=>{

    const index = posts.findIndex(post=>post.postTitle==title)

    const deletedPost = posts.splice(index,1)

    return  deletedPost
}

module.exports={
    getAllPosts,
    getOnePost,
    addNewPost,
    updatePost,
    deleteOnePost
}
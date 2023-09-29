import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';


const Post = ({ postTitle, postContent, deletePost }) => {
  

  const handleDelete=async ()=>{
    deletePost(postTitle)
    
  }



  return (
    <div>
        <Wrapper>
            <div className="post">
            <h1>{postTitle}</h1>
            <p>{postContent.slice(0,119) + "..."}</p>
              <div className='btns'>
              <NavLink to={`/post/${postTitle}`}>
                <button>See More</button>
              </NavLink>
              <button onClick={handleDelete}>Delete</button>
              </div>
            </div>
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.section`
    max-width: 80%;
    border: 1px solid blue;
    border-radius: 16px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #F5F5F5;
    padding: 2rem;
   margin: 2rem auto;



    .btns{
      display: flex;
      justify-content: space-between;
    }
    button{
      height: 2rem;
      border-radius: 16px;
      border:1px solid #8d9db6;
      padding: 0.5rem;
      background-color: transparent;
    }
    button:hover{
      cursor: pointer;
    }
`

export default Post
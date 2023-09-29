import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PostInd = () => {
    const [post, setPost] = useState({});
    const {postTitle} = useParams();

    const navigate=useNavigate();
    
    

    const getOnePost =async ()=>{
      try {
        const response = await fetch(`http://localhost:8000/posts/${postTitle}`);
  
        if (response.ok) {
          const data = await response.json();
          setPost(data);

        } else {

          console.error('Failed to fetch posts');
        }
      } catch (error) {
      
        console.error('Network error:', error);
      }
  
    }
    
    const handleEditClick=()=>{
      navigate('/compose',{
        state:post
      })
    }
    
    useEffect(() => {
        getOnePost();
      }, []);


  return (
    <Wrapper>
      <div>
        <h1>{post.postTitle}</h1>
        <p>{post.postContent}</p>
        <div className='btns'>
        <Link to='/'>
        <button>go back</button>
        </Link>
        <button onClick={handleEditClick}>Edit Post</button>
        </div>         
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  padding: 2rem;
  min-height: 70vh;

  .btns{
    display: flex;
    flex-direction: row;
    gap: 1rem; 
  }

  button{
      height: 2rem;
      min-width: 5rem;
      border-radius: 16px;
      border:1px solid #8d9db6;
      padding: 0.5rem;
      background-color: transparent;
      
    }
    button:hover{
      cursor: pointer;
    }
`







export default PostInd
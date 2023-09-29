import React,{useEffect,useState} from 'react'
import Post from '../components/Post';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Compose from './Compose';

const Home = () => {

  const [posts, setPosts] = useState([]);


  const getAllPosts =async ()=>{
    try {
      const response = await fetch("http://localhost:8000/posts");

      if (response.ok) {
        const data = await response.json();
        setPosts(data);

      } else {  
    
        console.error('Failed to fetch posts');
      }
    } catch (error) {
    
      console.error('Network error:', error);
    }

  }

  const deletePost = async (title)=>{
    try {
      const response = await fetch(`http://localhost:8000/posts/${title}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        
      } else {
        console.error('Failed to delete post');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  }
  const handleComposeClick = ()=>{
    <BrowserRouter>
      <Routes>
        <Route path='/compose' element={<Compose />} />
      </Routes>
    </BrowserRouter>
  }

  useEffect(() => {
    getAllPosts(); // Call the function
  }, [posts]);

  return (
    <>
      <Wrapper>
        <div className='home'>
          <h1>Home</h1>
          <p>Welcome to our blog where you can find interesting articles and insights on various topics.</p>
          <Link to="/compose">
            <button onClick={handleComposeClick} className='compose'>Compose</button>
          </Link>
          {posts.map((post) => (
            <Post key={post.id} {...post} deletePost={() => deletePost(post.postTitle)} />
          ))}
        </div>
       </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  min-height: 70vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  
  

  .compose{
    
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    line-height: 1;
    border-radius: 500px;
    
    
    border: 1px solid transparent;
    letter-spacing: 2px;
    min-width: 160px;
    text-transform: uppercase;
    white-space: normal;
    
    text-align: center;
    padding: 16px 14px 18px;
    color: #616467;
    box-shadow: inset 0 0 0 2px #616467;
    background-color: transparent;
    height: 48px;
    
                   
                
  }
`
  
  
  
export default Home
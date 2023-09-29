import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';

const Compose = () => {
    const location = useLocation();
    const navigate = useNavigate()
    console.log();
    const [method,setMethod] = useState(true)
    const [formData, setFormData] = useState({
      postTitle: '',
      postContent: '',
    });
    
   
    useEffect(() => {
      if (location.state) {
        setMethod(false)
        setFormData({
          postTitle: location.state.postTitle,
          postContent: location.state.postContent,
        });
      } else {
        setFormData({
          postTitle: '',
          postContent: '',
        });
      }
    }, [location.state]);
   

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
     if(method){
      try {
        const response = await fetch('http://localhost:8000/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          // Redirect to the Home page after a successful post
          navigate('/')
        } else {
          console.error('Failed to post the blog');
        }
      } catch (error) {
        console.error('Network error:', error);
        }
      }else{
        try {
          
          const response = await fetch(`http://localhost:8000/posts/${location.state.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            // Redirect to the Home page after a successful post
            navigate('/')
          } else {
            console.error('Failed to post the blog');
          }
        } catch (error) {
          console.error('Network error:', error);
          }
      }
      
     }
    
      
      
  
    return (
      <Wrapper>
      <div>
        <h1>Compose Blog Post</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="postTitle">Post Title</label>
            <input
              type="text"
              id="postTitle"
              name="postTitle"
              value={formData.postTitle}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="postContent">Post Content</label>
            <textarea
            rows={10}
            cols={60}
              id="postContent"
              name="postContent"
              value={formData.postContent}
              onChange={handleChange}
              required
            />
          </div>
            {method?<button type="submit">Post Blog</button>:<button type="submit">Edit</button>}
            
        </form>
      </div>
      </Wrapper>
    );
  };


  const Wrapper = styled.section`
    min-height: 70vh;
    max-width: 50%;
    display: flex;
    justify-content: center;
    border-radius: 16px;
    padding: 2rem;
    margin: 2rem auto;
    border: 1px solid black;

    input,textarea{
      min-width: 100%;
      font-family: inherit;
      margin: 1rem 0;
      padding: 0.6rem;
    }
    label{
      font-weight: 500;
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


export default Compose
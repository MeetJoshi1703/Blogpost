import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <div>
        <h1>About</h1>
        <p>Welcome to our blog, where curiosity meets knowledge and creativity fuels inspiration. We are a passionate team of writers and tech enthusiasts dedicated to sharing insightful articles that dive deep into the ever-evolving world of technology, web development, and design. Our mission is to empower learners and creators, from beginners seeking guidance to seasoned professionals looking for innovative ideas. Join us on this exciting journey as we unravel the latest trends, offer expert tips, and foster a vibrant community of like-minded individuals. Together, let's explore the limitless possibilities of the digital realm</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 2rem;
  height: 71vh;
  max-width: 80%;
  margin: auto;
  
`

export default About
import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <div>
        <h1>Contact</h1>
        <p>Feel free to get in touch with me:
          I'm always open to new connections and conversations. Whether you have questions, feedback, or just want to say hello, don't hesitate to reach out. Let's connect and explore the possibilities!</p>
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

export default Contact
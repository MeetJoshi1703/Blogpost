import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <div>
        Made with no love from meet joshi
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
  
  display: flex;
  align-items: center;
  background-color: rgba(12,12,13,0.1);
  height: 10vh;
  position: sticky;
  display: flex;
  justify-content: center;
`



export default Footer
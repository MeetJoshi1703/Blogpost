import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <header style={headerStyle}>
        <div style={titleStyle}>My Blog</div>
        <nav style={navStyle}>
          <ul style={listStyle}>
          
            <li style={listItemStyle}><a href="/">Home</a></li>
            <li style={listItemStyle}><a href="/about">About</a></li>
            <li style={listItemStyle}><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  a{
    text-decoration: none;
    color: black;  
  }
  
`

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(12,12,13,0.1)',
    color: 'black',
    padding: '10px 20px',
  };
  
  const titleStyle = {
    fontSize: '24px',
  };
  
  const navStyle = {
    marginLeft: 'auto',
  };
  
  const listStyle = {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
  };
  
  const listItemStyle = {
    margin: '0 10px',
  };
  
export default Header
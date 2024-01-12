import React from 'react';
import { CommunitiesContainer } from './Navbar.styled';
function Communities() {
  return (
    <CommunitiesContainer>
      <i className="fa-solid fa-house"></i>
      <div id='cmty-name' >Home</div>
      <i className="fa-solid fa-angle-down"></i>
    </CommunitiesContainer>
  )
}

export default Communities;
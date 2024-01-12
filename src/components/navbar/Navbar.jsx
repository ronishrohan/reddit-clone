import React from 'react'
import { NavbarContainer } from './Navbar.styled'
import Logo from './Logo'
import Communities from './Communities'
function Navbar() {
  return (
    <NavbarContainer>
        <Logo></Logo>
        <Communities></Communities>
    </NavbarContainer>
  )
}

export default Navbar
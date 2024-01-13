import React from 'react'
import { NavbarContainer } from './Navbar.styled'
import Logo from './Logo'
import Communities from './Communities'
import Actions from './Actions'
import Search from './Search'


function Navbar() {
  return (
    <NavbarContainer>
        <Logo></Logo>
        <Communities></Communities>
        <Search></Search>
        <Actions></Actions>
    </NavbarContainer>
  )
}

export default Navbar;
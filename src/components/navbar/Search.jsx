import React from 'react'
import { SearchContainer } from './navbar.styled'

function Search() {
  return (
    <SearchContainer>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type='text' placeholder='Search Reddit'></input>
    </SearchContainer>
  )
}

export default Search
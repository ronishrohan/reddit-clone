import React, { useEffect } from 'react'
import { ProfileContainer, UsernameContainer } from './Navbar.styled'
import { useContext } from 'react'
import { LoginContext } from '../../store/login-context'
function Profile() {
  let login = useContext(LoginContext);
  return (
    <ProfileContainer>
      <i className="fa-solid fa-circle-user"></i>
      <UsernameContainer>
        <div>{login.username}</div>
        <div>
          <i className="fa-solid fa-dharmachakra"></i>
          <div></div>
        </div>
      </UsernameContainer>
      <i className="fa-solid fa-angle-down"></i>
    </ProfileContainer>
  )
}

export default Profile
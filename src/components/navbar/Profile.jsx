import React from 'react'
import { ProfileContainer, UsernameContainer } from './Navbar.styled'
function Profile() {
  return (
    <ProfileContainer>
      <i className="fa-solid fa-circle-user"></i>
      <UsernameContainer>
        <div>ronish</div>
        <div>
          <i className="fa-solid fa-dharmachakra"></i>
          <div>3.0k karma</div>
        </div>
      </UsernameContainer>
      <i className="fa-solid fa-angle-down"></i>
    </ProfileContainer>
  )
}

export default Profile
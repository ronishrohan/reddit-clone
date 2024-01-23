import React, { useEffect, useState } from "react";
import {
  ProfileContainer,
  UsernameContainer,
  Logout,
  ProfileDropdownContainer,
} from "./Navbar.styled";
import { useContext } from "react";
import { LoginContext } from "../../store/login-context";
import {useNavigate} from 'react-router-dom';
function Profile() {
  let navigate = useNavigate();
  let [isOpen, setOpen] = useState(false);
  function toggleOpen() {
    setOpen(prev => !prev);
  }
  
  let login = useContext(LoginContext);
  function handleLogout(){
    window.localStorage.removeItem("token");
    login.handleLogout();
    navigate("/")
  }
  return (
    <ProfileContainer onClick={() => toggleOpen()} isopen={isOpen.toString()}>
      <i className="fa-solid fa-circle-user"></i>
      <UsernameContainer>
        <div>{login.username}</div>
        <div>
          <i className="fa-solid fa-dharmachakra"></i>
          <div></div>
        </div>
      </UsernameContainer>
      <i id="drop" className="fa-solid fa-angle-down"></i>
      {isOpen ? (
        <ProfileDropdownContainer>
          <Logout onClick={() => handleLogout()} >Log out</Logout>
        </ProfileDropdownContainer>
      ) : null}
    </ProfileContainer>
  );
}

export default Profile;

import React from "react";
import { LogoContainer } from "./Navbar.styled";
import { RedditLogo, RedditLogoText } from "../../resources/resources";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <LogoContainer>
      <Link to="/">
      <div>{RedditLogo}</div>
      <div id="reddit-logo-text" >{RedditLogoText}</div>
      </Link>
      
    </LogoContainer>
  );
}

export default Logo;

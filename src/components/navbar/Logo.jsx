import React from "react";
import { LogoContainer } from "./Navbar.styled";
import { RedditLogo, RedditLogoText } from "../../resources/resources";
function Logo() {
  return (
    <LogoContainer>
      <a href="#">
      <div>{RedditLogo}</div>
      <div id="reddit-logo-text" >{RedditLogoText}</div>
      </a>
      
    </LogoContainer>
  );
}

export default Logo;

import React from "react";
import { LogoContainer } from "./Navbar.styled";
import { RedditLogo, RedditLogoText } from "../../resources/resources";
function Logo() {
  return (
    <LogoContainer>
      <div>{RedditLogo}</div>
      <div id="reddit-logo-text" >{RedditLogoText}</div>
    </LogoContainer>
  );
}

export default Logo;

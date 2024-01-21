import React from "react";
import { LogoContainer } from "./Navbar.styled";
import { RedditLogo, RedditLogoText } from "../../resources/resources";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "../../store/posts-context";
function Logo() {
  const posts = useContext(PostsContext)
  return (
    <LogoContainer>
      <Link to="/" onClick={() => {
        posts.updateFetchID();
      }}>
      <div>{RedditLogo}</div>
      <div id="reddit-logo-text" >{RedditLogoText}</div>
      </Link>
      
    </LogoContainer>
  );
}

export default Logo;

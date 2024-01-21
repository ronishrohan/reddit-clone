import React from "react";
import {
  PostPageHeader,
  HeaderContainer,
  HeaderVoteButton,
  HeaderTitle,
  HeaderClose,
  HeaderTypeIcon
} from "./Main.styled";
import { useNavigate } from "react-router-dom";


function Header({ post, votes }) {
  const navigate = useNavigate();
  return (
    <PostPageHeader>
        
      <HeaderContainer>
        <HeaderTypeIcon>
            {post.post_type === "1" && <i className="fa-regular fa-note-sticky"></i>}
            {post.post_type === "2" && <i className="fa-regular fa-image"></i>}
            {post.post_type === "3" && <i className="fa-solid fa-link"></i>}
        </HeaderTypeIcon>
        <HeaderTitle>{post.title}</HeaderTitle>
        <HeaderClose onClick={() => navigate("/")}>
          <i className="fa-solid fa-xmark"></i>
          <div>Close</div>
        </HeaderClose>
      </HeaderContainer>
    </PostPageHeader>
  );
}

export default Header;

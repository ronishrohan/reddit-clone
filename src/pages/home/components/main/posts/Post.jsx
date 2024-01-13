import React from "react";
import { PostContainer, VoteButton } from "../Main.styled";

function Post() {
  return (
    <PostContainer>
      <div id="dark-side">
        <div>
          <VoteButton>
            <i className="fa-solid fa-up-long"></i>
          </VoteButton>
          <div>614</div>
          <VoteButton>
            <i className="fa-solid fa-down-long"></i>
          </VoteButton>
        </div>
      </div>
      <div>post goes here hopefully</div>
    </PostContainer>
  );
}

export default Post;

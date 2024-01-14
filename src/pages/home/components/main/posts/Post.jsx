import React from "react";
import { PostContainer, VoteButton } from "../Main.styled";

function Post({ post, others }) {
  const date = new Date(post.createdAt);
  console.log(date);
  return (
    <PostContainer {...others}>
      <div id="dark-side">
        <div>
          <VoteButton>
            <i className="fa-solid fa-up-long"></i>
          </VoteButton>
          <div>{post.upvotes}</div>
          <VoteButton>
            <i className="fa-solid fa-down-long"></i>
          </VoteButton>
        </div>
      </div>
      <div id="post-container">
        <div id="post-header">
          <i className="fa-solid fa-globe"></i>
          <div id="post-subreddit">{post.subreddit}</div>
          <div id="post-dot"></div>
          <div id="post-by">
            Posted by {post.createdBy} on {date.toDateString()}
          </div>
        </div>
        <div id="post-title">{post.title}</div>
        <div id="post-content-container">
          <div id="post-content" >{post.content}</div>
          <div id="post-content-shadow"></div>
        </div>
      </div>
    </PostContainer>
  );
}

export default Post;

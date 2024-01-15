/* eslint-disable react/prop-types */
import React from "react";
import {
  formatDateTime,
  formatUpvotes,
} from "../../../../../utils/formatUtils";
import {
  PostContainer,
  VoteButton,
  PostFooter,
  PostFooterButton,
  PostLink,
  PostContent,
} from "../Main.styled";
import { updateVotes } from "../../../../../utils/postUtils";

function Post({ post, others }) {
  function handleVote(type) {
    let data = {
      type: Number(type),
      slug: post.slug,
      subreddit: post.subreddit,
      createdBy: post.createdBy,
      
    }
    updateVotes(data);
  }
  return (
    <PostContainer {...others}>
      <div id="dark-side">
        <div>
          <VoteButton onClick={() => handleVote(1)}>
            <i className="fa-solid fa-up-long"></i>
          </VoteButton>
          <div>{formatUpvotes(post.upvotes)}</div>
          <VoteButton onClick={() => handleVote(-1)}>
            <i className="fa-solid fa-down-long"></i>
          </VoteButton>
        </div>
      </div>
      <div>
        <div id="post-container">
          <div id="post-header">
            <i className="fa-solid fa-globe"></i>
            <div id="post-subreddit">{post.subreddit}</div>
            <div id="post-dot"></div>
            <div id="post-by">
              Posted by {post.createdBy} {formatDateTime(post.createdAt)}
            </div>
          </div>
          <div id="post-title">{post.title}</div>
          <div id="post-content-container">
            {post.post_type == 1 && (
              <PostContent id="post-content">{post.content}</PostContent>
            )}
            {post.post_type == 3 && (
              <PostLink href={post.content} id="post-content">
                {post.content}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </PostLink>
            )}
            <div id="post-content-shadow"></div>
          </div>
        </div>
        <PostFooter>
          <PostFooterButton>
            <i className="fa-regular fa-message"></i>
            <div>{post.commentsLength} Comments</div>
          </PostFooterButton>
          <PostFooterButton>
            <i className="fa-solid fa-share"></i>
            <div>Share</div>
          </PostFooterButton>
        </PostFooter>
      </div>
    </PostContainer>
  );
}

export default Post;

import React from "react";
import {
  PostContainer,
  VoteButton,
  PostFooter,
  PostFooterButton,
  PostLink,
  PostContent
} from "../Main.styled";

function Post({ post, others }) {
  function getDateFormat() {
    const date = new Date(post.createdAt);
    const dateToday = new Date();

    let seconds = (dateToday - date) / 1000;
    const time = {
      seconds: Math.floor(seconds),
      minutes: Math.floor(seconds / 60),
      hours: Math.floor(seconds / 60 / 60),
      days: Math.floor(seconds / 60 / 60 / 24),
      months: Math.floor(seconds / 60 / 60 / 24 / 30),
      years: Math.floor(seconds / 60 / 60 / 24 / 30 / 12),
    };
    if(time.seconds < 60){
      return Math.abs(time.seconds) + " seconds ago"
    }
    else if(time.minutes < 60){
      return Math.abs(time.minutes) + " minutes ago"
    }
    else if(time.hours<24){
      return Math.abs(time.hours) + " hours ago"
    }
    else if(time.days<30){
      return Math.abs(time.days) + " days ago"
    }
    else if(time.months<12){
      return Math.abs(time.months) + " months ago"
    }
    else{
      return Math.abs(time.years) + " years ago"
    }
   
  }
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
      <div>
        <div id="post-container">
          <div id="post-header">
            <i className="fa-solid fa-globe"></i>
            <div id="post-subreddit">{post.subreddit}</div>
            <div id="post-dot"></div>
            <div id="post-by">
              Posted by {post.createdBy} {getDateFormat()}
            </div>
          </div>
          <div id="post-title">{post.title}</div>
          <div id="post-content-container">
            {post.post_type == 1 && <PostContent id="post-content">{post.content}</PostContent>}
            {post.post_type == 3 && <PostLink href={post.content} id="post-content">{post.content}<i className="fa-solid fa-arrow-up-right-from-square"></i></PostLink>}
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

/* eslint-disable react/prop-types */
import React, { useState } from "react";
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
  Upvotes,
  PostImage
} from "../../Main.styled";
import { updateVotes } from "../../../../../utils/postUtils";
import { Link } from "react-router-dom";

function Post({ post, others }) {
  let [vote, setVote] = useState(0);
  const voteList = [post.upvotes - 1, post.upvotes, post.upvotes + 1];
  function handleVote(type) {
    let voteDet = type;
    if(type!=0){
      voteDet=type;
    }
    else{
      voteDet = post.upvotes - voteList[vote+1]
      console.log(voteDet)
    }
    let data = {
      type: Number(voteDet),
      slug: post.slug,
      subreddit: post.subreddit,
      createdBy: post.createdBy,
    };

    updateVotes(data);
    
    setVote(type);
  }
  return (
    <PostContainer {...others}>
      <div id="dark-side">
        <div>
          <VoteButton
            onClick={() => (vote === 1 ? handleVote(0) : handleVote(1))}
            vote={vote}
            type={1}
          >
            <i className="fa-solid fa-up-long"></i>
          </VoteButton>
          <Upvotes vote={vote}>{formatUpvotes(voteList[vote+1])}</Upvotes>
          <VoteButton
            onClick={() => (vote === -1 ? handleVote(0) : handleVote(-1))}
            vote={vote}
            type={-1}
          >
            <i className="fa-solid fa-down-long"></i>
          </VoteButton>
        </div>
      </div>
      <div>
        <div id="post-container">
          <div id="post-header">
            <Link to={`/${post.subreddit}`} ><i className="fa-solid fa-globe"></i></Link>
            <Link to={`/${post.subreddit}`} id="post-subreddit">{post.subreddit}</Link>
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
            {post.post_type ==2 && (
              <PostImage>
                <img src={post.image_link} alt="" />
              </PostImage>
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

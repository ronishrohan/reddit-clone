import React from "react";
import {
  PostContentContainer,
  PostContentSidebar,
  HeaderVoteButton,
  PostContent,
  PostTitle,
  PostText,
  PostLink,
  PostImage,
} from "./Main.styled";
import { useState } from "react";
import { updateVotes } from "../../../../utils/postUtils";
import { Link } from "react-router-dom";
import { formatDateTime, formatUpvotes } from "../../../../utils/formatUtils";
function Post({ post }) {
  let [vote, setVote] = useState(0);
  const voteList = [post.upvotes - 1, post.upvotes, post.upvotes + 1];
  function handleVote(type) {
    let voteDet = type;
    if (type != 0) {
      voteDet = type;
    } else {
      voteDet = post.upvotes - voteList[vote + 1];
      console.log(voteDet);
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
    <PostContentContainer>
      <PostContentSidebar>
        <HeaderVoteButton
          onClick={() => (vote === 1 ? handleVote(0) : handleVote(1))}
          vote={vote}
          type={1}
        >
          <i className="fa-solid fa-up-long"></i>
        </HeaderVoteButton>
        <div>{formatUpvotes(voteList[vote + 1])}</div>
        <HeaderVoteButton
          onClick={() => (vote === -1 ? handleVote(0) : handleVote(-1))}
          vote={vote}
          type={-1}
        >
          <i className="fa-solid fa-down-long"></i>
        </HeaderVoteButton>
      </PostContentSidebar>
      <PostContent>
        <div id="post-header">
          <Link to={`/${post.subreddit}`}>
            <i className="fa-solid fa-globe"></i>
          </Link>
          <Link to={`/${post.subreddit}`} id="post-subreddit">
            {post.subreddit}
          </Link>
          <div id="post-dot"></div>
          <div id="post-by">
            Posted by {post.createdBy} {formatDateTime(post.createdAt)}
          </div>
        </div>
        <PostTitle>{post.title}</PostTitle>
        {post.post_type === "1" && <PostText>{post.content}</PostText>}
        {post.post_type === "2" && (
          <PostImage>
            <div>
              <img src={post.image_link} alt="" />
            </div>
          </PostImage>
        )}
        {post.post_type === "3" && <PostLink>{post.content}</PostLink>}
      </PostContent>
    </PostContentContainer>
  );
}

export default Post;

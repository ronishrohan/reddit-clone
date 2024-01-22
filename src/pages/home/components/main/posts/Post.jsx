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
  PostImage,
  ImageContainer,
} from "../../Main.styled";
import { updateVotes } from "../../../../../utils/postUtils";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PopupContext } from "../../../../../components/outer/popup-context";
function Post({ post, others }) {
  let popupData = useContext(PopupContext);
  const navigate = useNavigate();
  let isVideo = false;
  if (post.image_link) {
    isVideo = post.image_link.slice(-3) === "mp4";
  }
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
    <PostContainer {...others}>
      <div id="dark-side">
        <div >
          <VoteButton
            onClick={() => (vote === 1 ? handleVote(0) : handleVote(1))}
            vote={vote}
            type={1}
          >
            <i className="fa-solid fa-up-long"></i>
          </VoteButton>
          <Upvotes vote={vote}>{formatUpvotes(voteList[vote + 1])}</Upvotes>
          <VoteButton
            onClick={() => (vote === -1 ? handleVote(0) : handleVote(-1))}
            vote={vote}
            type={-1}
          >
            <i className="fa-solid fa-down-long"></i>
          </VoteButton>
        </div>
      </div>
      <div onClick={(e) => {
            console.log(e.target, e.currentTarget)
            if(e.target.id ==="post-content-container" || e.target.id === "post-header" || e.target.id === "post-title" || e.target.id === "post-content"){
              navigate(`/${post.subreddit}/${post.createdBy}/${post.slug}`);
            }
          }}  >
        <div
          id="post-container"
          
        >
          <div id="post-header">
            <Link to={`/${post.subreddit}`}>
              <i className="fa-solid fa-globe"></i>
            </Link>
            <Link to={`/${post.subreddit}`} id="post-subreddit">
              {post.subreddit}
            </Link>
            <div id="post-dot"></div>
            <div id="post-by">
              Posted by u/{post.createdBy} {formatDateTime(post.createdAt)}
            </div>
          </div>
          <div id="post-title">
            <Link to={`/${post.subreddit}/${post.createdBy}/${post.slug}`}>
              {post.title}
            </Link>
          </div>
          <div id="post-content-container">
            {post.post_type == 1 && (
              <PostContent id="post-content">{post.content}</PostContent>
            )}
            {post.post_type == 2 && (
              <PostImage>
                <ImageContainer>
                  {isVideo ? (
                    <video controls src={post.image_link} alt="" />
                  ) : (
                    <img
                      onClick={(e) => {
                        if (e.target === e.currentTarget) {
                          navigate(
                            `/${post.subreddit}/${post.createdBy}/${post.slug}`
                          );
                        }
                      }}
                      src={post.image_link}
                      alt=""
                    />
                  )}
                </ImageContainer>
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
          <PostFooterButton onClick={() => {
            
            navigator.clipboard.writeText(`${window.location.host}/#/${post.subreddit}/${post.createdBy}/${post.slug}`)
            popupData.showContent("copied link to clipboard");
            
          }} >
            <i className="fa-solid fa-share"></i>
            <div>Share</div>
          </PostFooterButton>
        </PostFooter>
      </div>
    </PostContainer>
  );
}

export default Post;

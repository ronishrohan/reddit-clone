import { PostsContainer, ActionsCard, PostsHolder } from "../../Main.styled";
import CreatePost from "./CreatePost";
import FilterPosts from "./FilterPosts";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { getPosts } from "../../../../../utils/postUtils";
import { useContext } from "react";
import { PostsContext } from "../../../../../store/posts-context";

function Posts({ subreddit }) {
  let postsData = useContext(PostsContext);
  let posts = postsData.posts;
  let updateSkip = postsData.updateSkip;


  console.log(posts);

  return (
    <PostsContainer>
      <CreatePost sub={subreddit}></CreatePost>
      <FilterPosts></FilterPosts>
      {posts.length !== 1 && posts.map((posts_data, outerIndex) => {
        return (posts_data.length !==0 && 
          <PostsHolder key={outerIndex} >
            {posts_data.map((post, index) => {
              return <Post key={index} post={post}></Post>;
            })}
          </PostsHolder>
        );
      })}
    </PostsContainer>
  );
}

export default Posts;

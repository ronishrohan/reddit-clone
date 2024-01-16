import { PostsContainer, ActionsCard, PostsHolder } from "../../Main.styled";
import CreatePost from "./CreatePost";
import FilterPosts from "./FilterPosts";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { getPosts } from "../../../../../utils/postUtils";
import { useContext } from "react";
import { PostsContext } from "../../../../../store/posts-context";

function Posts() {
  let postsData = useContext(PostsContext);
  let posts = postsData.posts;
  
  
  return (
    <PostsContainer>
      <CreatePost></CreatePost>
      <FilterPosts></FilterPosts>
      <PostsHolder>
        {posts.map((post, index) => {
          return <Post key={index} post={post}></Post>;
        })}
      </PostsHolder>
    </PostsContainer>
  );
}

export default Posts;

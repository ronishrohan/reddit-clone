import { PostsContainer, ActionsCard, PostsHolder } from "../Main.styled";
import CreatePost from "./CreatePost";
import FilterPosts from "./FilterPosts";
import React from "react";
import Post from "./Post";

function Posts() {
  return (
    <PostsContainer>
      <CreatePost></CreatePost>
      <FilterPosts></FilterPosts>
      <PostsHolder>
        <Post></Post>
        <Post></Post>
      </PostsHolder>
    </PostsContainer>
  );
}

export default Posts;

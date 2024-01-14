import { PostsContainer, ActionsCard, PostsHolder } from "../Main.styled";
import CreatePost from "./CreatePost";
import FilterPosts from "./FilterPosts";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { getPosts } from "../../../../../utils/postUtils";

function Posts() {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getPosts();
      setPosts(postsData);
    };

    fetchPosts();
  }, []);
  console.log(posts);
  return (
    <PostsContainer>
      <CreatePost></CreatePost>
      <FilterPosts></FilterPosts>
      <PostsHolder>
        {posts.map((post,index) => {
          return <Post key={index} post={post} ></Post>
        })}
      </PostsHolder>
    </PostsContainer>
  );
}

export default Posts;

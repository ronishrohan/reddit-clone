import React from 'react'
import Main from './components/main/Main'
import { RootContainer } from '../../GlobalStyles'
import {useParams} from "react-router-dom";
import { useContext } from 'react';
import { PostsContext } from '../../store/posts-context';

function Subreddit() {
    let postsData = useContext(PostsContext);
    let {subreddit} = useParams();
    postsData.updateSubreddit(subreddit);
    console.log(subreddit)
  return (
    <RootContainer>
      <Main></Main>
    </RootContainer>
  )
}

export default Subreddit
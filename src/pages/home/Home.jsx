
import Main from './components/main/Main'
import { RootContainer } from '../../GlobalStyles'
import React from 'react'
import { useContext } from 'react'
import { PostsContext } from '../../store/posts-context'
import { useEffect } from 'react'

function Home() {
  let postsData = useContext(PostsContext);
  useEffect(() => {
    postsData.updateSubreddit("");
  }, [])
  return<>
    <RootContainer>
      <Main></Main>
    </RootContainer>
  </>
}

export default Home
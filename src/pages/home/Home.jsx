
import Main from './components/main/Main'
import { RootContainer } from '../../GlobalStyles'
import React from 'react'
import { useContext } from 'react'
import { PostsContext } from '../../store/posts-context'
import { useEffect } from 'react'
import { LoginContext } from '../../store/login-context'
import {useNavigate} from 'react-router-dom';
function Home() {
  let navigate = useNavigate();
  let login = useContext(LoginContext);
  console.log("home")
  let postsData = useContext(PostsContext);
  postsData.updateSubreddit("");
  
  useEffect(() => {
    postsData.updateSubreddit("");
  }, [])
  useEffect(() => {
    if(!login.loggedIn){
      navigate("/login")
    }
  }, [login.loggedIn])
  return<>
    <RootContainer>
      <Main></Main>
    </RootContainer>
  </>
}

export default Home
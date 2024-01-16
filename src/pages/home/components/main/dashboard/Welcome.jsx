import React from 'react'
import { WelcomeCard, Divider, CreateCommunityButton, CreatePostButton } from '../../../../subreddit/components/main/Main.styled'
import { Link } from 'react-router-dom'
function Welcome() {
  return (
    <WelcomeCard>
        <div id='image-bg-welcome' ></div>
        <h1>Hello</h1>
        <span>This is a reddit clone made with react js</span>
        <Divider>
            <div></div>
        </Divider>
        <div id='create-buttons-holder'>
            <CreatePostButton><Link to="/submit" >
            Create Post</Link></CreatePostButton>
            <CreateCommunityButton><Link to="/submit" >
            Create Community</Link></CreateCommunityButton>
        </div>
    </WelcomeCard>
  )
}

export default Welcome
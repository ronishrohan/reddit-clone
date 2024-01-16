import React from 'react'
import { SubredditName } from './Main.styled'
import {useParams} from "react-router-dom"
function SubreditHeader() {
    const params = useParams()
    const name = params.subreddit;
  return (
    <SubredditName>
        <i className="fa-solid fa-globe"></i>
        <div>r/{name}</div>
    </SubredditName>
  )
}

export default SubreditHeader
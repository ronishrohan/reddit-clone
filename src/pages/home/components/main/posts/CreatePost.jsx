import React from 'react'
import { ActionsCard, CreateCardButton } from '../../Main.styled'
import { Link, useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';

function CreatePost({sub}) {
  const subname = sub ? sub : "";
  const navigate = useNavigate();
  return (
    <ActionsCard>
        <i className="fa-solid fa-circle-user"></i>
        <input onClick={() => navigate(`/submit/?mode=1&subreddit=${subname}`)} type="text" placeholder="Create Post" />
        <div>
          <CreateCardButton>
            <Link to={`/submit/?mode=2&subreddit=${subname}`}>
              <i className="fa-regular fa-image"></i>
            </Link>
          </CreateCardButton>
          <CreateCardButton>
            <Link to={`/submit/?mode=3&subreddit=${subname}`}>
              <i className="fa-solid fa-link"></i>
            </Link>
          </CreateCardButton>
        </div>
      </ActionsCard>
  )
}

export default CreatePost
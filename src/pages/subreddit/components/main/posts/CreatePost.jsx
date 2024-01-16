import React from 'react'
import { ActionsCard, CreateCardButton } from '../Main.styled'
import { Link, useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';

function CreatePost() {
  
  const navigate = useNavigate();
  return (
    <ActionsCard>
        <i className="fa-solid fa-circle-user"></i>
        <input onClick={() => navigate("/submit/?mode=1")} type="text" placeholder="Create Post" />
        <div>
          <CreateCardButton>
            <Link to="/submit/?mode=2">
              <i className="fa-regular fa-image"></i>
            </Link>
          </CreateCardButton>
          <CreateCardButton>
            <Link to="/submit/?mode=3">
              <i className="fa-solid fa-link"></i>
            </Link>
          </CreateCardButton>
        </div>
      </ActionsCard>
  )
}

export default CreatePost
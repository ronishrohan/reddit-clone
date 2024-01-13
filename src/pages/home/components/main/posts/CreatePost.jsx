import React from 'react'
import { ActionsCard, CreateCardButton } from '../Main.styled'
import { Link } from 'react-router-dom'

function CreatePost() {
  return (
    <ActionsCard>
        <i className="fa-solid fa-circle-user"></i>
        <input type="text" placeholder="Create Post" />
        <div>
          <CreateCardButton>
            <Link to="/submit">
              <i className="fa-regular fa-image"></i>
            </Link>
          </CreateCardButton>
          <CreateCardButton>
            <Link to="/submit">
              <i className="fa-solid fa-link"></i>
            </Link>
          </CreateCardButton>
        </div>
      </ActionsCard>
  )
}

export default CreatePost
import React from 'react'
import { ActionsContainer, ActionsButton, AdvertiseButton, NotificationBadge} from './navbar.styled'
import Profile from './Profile'
function Actions() {
  return (
    <ActionsContainer>
        <ActionsButton>
          <a href="#">
            <i className="fa-regular fa-circle-up"></i>
          </a>
        </ActionsButton>
        <ActionsButton>
          <a href="#">
            <i className="fa-regular fa-message"></i>
          </a>
        </ActionsButton>
        <ActionsButton>
          <a href="#">
            <i className="fa-regular fa-bell"></i>  
            <NotificationBadge>
              <div>8</div>
            </NotificationBadge>
          </a>
        </ActionsButton>
        <ActionsButton>
          <a href="#">
          <i className="fa-solid fa-plus"></i>
          </a>
        </ActionsButton>
        <AdvertiseButton>
          <a href="#">
            <i className="fa-solid fa-bullhorn"></i>
            <div>Advertise</div>
          </a>
        </AdvertiseButton>
        <Profile></Profile>
    </ActionsContainer>
  )
}

export default Actions
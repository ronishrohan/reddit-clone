import React from "react";
import {
  ActionsContainer,
  ActionsButton,
  AdvertiseButton,
  NotificationBadge,
} from "./Navbar.styled";
import Profile from "./Profile";
import { Link } from "react-router-dom";
function Actions() {
  return (
    <ActionsContainer>
      <ActionsButton>
        <a href="#" style={{ rotate: "45deg" }}>
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
        <Link to="/submit">
          <i className="fa-solid fa-plus"></i>
        </Link>
      </ActionsButton>
      <AdvertiseButton>
        <a href="https://ads.reddit.com/?utm_source=d2x_consumer&utm_name=top_nav_cta">
          <i className="fa-solid fa-bullhorn"></i>
          <div>Advertise</div>
        </a>
      </AdvertiseButton>
      <Profile></Profile>
    </ActionsContainer>
  );
}

export default Actions;

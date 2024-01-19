import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CommunitiesContainer, CommunitiesDropdown } from "./Navbar.styled";
import { useParams } from "react-router-dom";
function Communities() {
  let params = useParams();
  let sub = params.subreddit;
  
  let [isOpen, setOpen] = useState(false);
  let subRef = useRef();
  const navigate = useNavigate();
  function handleChangeSubreddit(e) {
    if (e.keyCode == 13) {
      if (subRef.current.value) {
        navigate(`r/${subRef.current.value}/`);
        setOpen(false);
      } else {
        subRef.current.placeholder = "invalid entry";
        setTimeout(() => {
          subRef.current.placeholder = "something";
        }, 1000);
      }
    }
  }
  function handleOpen() {
    setOpen(true);
  }
  return (
    <>
      <CommunitiesContainer
        onBlur={() => {
          setOpen(false);
        }}
        onClick={() => {
          handleOpen();
        }}
      >
        {sub ? <i className="fa-solid fa-globe" style={{fontSize: "23px"}} ></i> : <i className="fa-solid fa-house"></i>}
        <div id="cmty-name">{sub ? `r/${sub}` : "Home"}</div>
        <i className="fa-solid fa-angle-down" style={{ fontSize: "14px" }}></i>
        {isOpen && (
          <CommunitiesDropdown>
            <div>r/</div>

            <input
              autoFocus
              ref={subRef}
              onKeyDown={(e) => handleChangeSubreddit(e)}
              type="text"
              placeholder="something"
            />
          </CommunitiesDropdown>
        )}
      </CommunitiesContainer>
    </>
  );
}

export default Communities;

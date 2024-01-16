import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CommunitiesContainer, CommunitiesDropdown } from "./Navbar.styled";
function Communities() {
  let [isOpen, setOpen] = useState(false);
  let subRef = useRef();
  const navigate = useNavigate();
  function handleChangeSubreddit(e) {
    if (e.key == "Enter") {
      if (subRef.current.value) {
        navigate(`r/${subRef.current.value}/`);
        setOpen(false);
      }
      else{
        subRef.current.placeholder = "invalid entry"
        setTimeout(() => {
          subRef.current.placeholder = "something"
        }, 1000);
      }
    }
  }
  function handleOpen() {
    setOpen(true);
    setTimeout(() => {
      subRef.current.focus();
    }, 10);
  }
  return (
    <>
      <CommunitiesContainer
        onBlur={() => {
          setOpen(false);
        }}
        onClick={() => handleOpen()}
      >
        <i className="fa-solid fa-house"></i>
        <div id="cmty-name">Home</div>
        <i className="fa-solid fa-angle-down" style={{fontSize: "14px"}} ></i>
        {isOpen && (
          <CommunitiesDropdown>
            <div>r/</div>

            <input
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

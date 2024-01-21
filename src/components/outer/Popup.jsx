import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { PopupContainer, PopupContent } from "./Main.styled";
import { useContext } from "react";
import { PopupContext } from "./popup-context";
function Popup({ content, show }) {
  let popupData = useContext(PopupContext);
  useEffect(()=>{
    if(show){
        var int = setInterval(() => {
            popupData.hideContent();
        }, 2000);
    }
    return () =>{
        clearInterval(int)
    }
  }, [show])
  return createPortal(
    <PopupContainer>
      {show && <PopupContent>{content}</PopupContent>}
    </PopupContainer>,
    document.getElementById("popup")
  );
}

export default Popup;

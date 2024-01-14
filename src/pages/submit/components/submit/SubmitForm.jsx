import React, { useState } from "react";
import {
  SubmitOption,
  OptionsContainer,
  SubredditInput,
  SubmitFormContainer,
  SubmitFormHolder,
  SubmitTitleInput,
  SubmitTextInput,
  SubmitButton
} from "../Main.styled";
function SubmitForm() {
  let [mode, setMode] = useState(1);
  return (
    <SubmitFormHolder>
      <SubredditInput placeholder="Enter community name here"></SubredditInput>
      <SubmitFormContainer>
        <OptionsContainer>
          <SubmitOption isActive={mode === 1} onClick={() => setMode(1)}>
            <i className="fa-solid fa-note-sticky"></i>
            <div>Post</div>
          </SubmitOption>
          <SubmitOption isActive={mode === 2} onClick={() => setMode(2)}>
            <i className="fa-regular fa-image"></i>
            <div>Image</div>
          </SubmitOption>
          <SubmitOption isActive={mode === 3} onClick={() => setMode(3)}>
            <i className="fa-solid fa-link"></i>
            <div>Link</div>
          </SubmitOption>
        </OptionsContainer>
        <SubmitTitleInput placeholder="Title" ></SubmitTitleInput>
        <SubmitTextInput placeholder="Text" ></SubmitTextInput>
        <SubmitButton>Post</SubmitButton>

      </SubmitFormContainer>
    </SubmitFormHolder>
  );
}

export default SubmitForm;

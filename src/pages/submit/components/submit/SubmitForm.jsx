import React, { useRef, useState } from "react";
import {
  SubmitOption,
  OptionsContainer,
  SubredditInput,
  SubmitFormContainer,
  SubmitFormHolder,
  SubmitTitleInput,
  SubmitTextInput,
  SubmitButton,
} from "../Main.styled";
import { createPost } from "../../../../utils/postUtils";
import { useNavigate } from "react-router-dom";

function SubmitForm() {
  let navigate = useNavigate();
  let [mode, setMode] = useState(1);
  let subreddit = useRef("");
  let title = useRef("");
  let content = useRef("");
  async function handleCreatePost(e) {
    e.preventDefault(true);
    console.log(title.current.value);
    let data = {
      title: title.current.value,
      content: content.current.value,
      subreddit: subreddit.current.value,
      createdBy: window.localStorage.getItem("name"),
    };
    navigate("/");
    await createPost(data);
    
  }
  return (
    <SubmitFormHolder
      onSubmit={(e) => {
        handleCreatePost(e);
      }}
    >
      <SubredditInput
        ref={subreddit}
        placeholder="Enter community name here"
        required
      ></SubredditInput>
      <SubmitFormContainer>
        <OptionsContainer>
          <SubmitOption
            active={(mode === 1).toString()}
            onClick={() => setMode(1)}
          >
            <i className="fa-solid fa-note-sticky"></i>
            <div>Post</div>
          </SubmitOption>
          <SubmitOption
            active={(mode === 2).toString()}
            onClick={() => setMode(2)}
          >
            <i className="fa-regular fa-image"></i>
            <div>Image</div>
          </SubmitOption>
          <SubmitOption
            active={(mode === 3).toString()}
            onClick={() => setMode(3)}
          >
            <i className="fa-solid fa-link"></i>
            <div>Link</div>
          </SubmitOption>
        </OptionsContainer>
        <SubmitTitleInput
          ref={title}
          placeholder="Title"
          required
        ></SubmitTitleInput>
        <SubmitTextInput
          ref={content}
          placeholder="Text"
          required
        ></SubmitTextInput>
        <SubmitButton>Post</SubmitButton>
      </SubmitFormContainer>
    </SubmitFormHolder>
  );
}

export default SubmitForm;

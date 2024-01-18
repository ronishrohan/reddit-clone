import React, { useEffect, useRef, useState, useContext } from "react";
import SubmitImage from "./SubmitImage";
import {
  SubmitOption,
  OptionsContainer,
  SubredditInput,
  SubmitFormContainer,
  SubmitFormHolder,
  SubmitTitleInput,
  SubmitTextInput,
  SubmitButton,
  SubmitLinkInput,
} from "../Main.styled";
import { createPost } from "../../../../utils/postUtils";
import { useNavigate, useSearchParams } from "react-router-dom";

import { PostsContext } from "../../../../store/posts-context";

function SubmitForm() {
  let [imgUrl, setUrl] = useState("");
  let postsData = useContext(PostsContext);
  
  const [searchParams, setSearchParams] = useSearchParams();
  let subname = searchParams.get("subreddit")
  const [inputValue, setInputValue] = useState(subname);
  let navigate = useNavigate();
  let [mode, setMode] = useState(searchParams.get("mode"));
  if (!mode) {
    setMode("1");
  }
  let subreddit = useRef("");
  let title = useRef("");
  let content = useRef("");
  function handleUrl(url) {
    setUrl(url);
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  async function handleCreatePost(e) {
    e.preventDefault();
    if (e.nativeEvent.submitter.name === "submit-button") {
      let slug = title.current.value.replace(/ /g, "-");
      e.preventDefault(true);
      console.log(title.current.value);
      let data = {
        title: title.current.value,
        content: mode === "2" ? "" : content.current.value,
        subreddit: "r/" + subreddit.current.value,
        createdBy: window.localStorage.getItem("name"),
        slug: slug,
        post_type: mode,
        image_link: imgUrl,
      };
      navigate("/");
      await createPost(data);
      setTimeout(() => {
        postsData.updateFetchID();
      }, 500);
    }
  }
  
  return (
    <SubmitFormHolder
      onSubmit={(e) => {
        handleCreatePost(e);
      }}
    >
      <SubredditInput
        onChange={(e)=> handleInputChange(e)}
        value={inputValue}
        ref={subreddit}
        placeholder="Enter community name here"
        required
      ></SubredditInput>
      <span>r/</span>
      <SubmitFormContainer>
        <OptionsContainer>
          <SubmitOption
            active={(mode === "1").toString()}
            onClick={() => setMode("1")}
          >
            <i className="fa-solid fa-note-sticky"></i>
            <div>Post</div>
          </SubmitOption>
          <SubmitOption
            active={(mode === "2").toString()}
            onClick={() => setMode("2")}
          >
            <i className="fa-regular fa-image"></i>
            <div>Media</div>
          </SubmitOption>
          <SubmitOption
            active={(mode === "3").toString()}
            onClick={() => setMode("3")}
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
        {mode === "1" && (
          <SubmitTextInput
            ref={content}
            type="text"
            placeholder="Text"
            required
          ></SubmitTextInput>
        )}
        {mode === "2" && <SubmitImage updateUrl={handleUrl}></SubmitImage>}
        {mode === "3" && (
          <SubmitLinkInput
            ref={content}
            type="url"
            placeholder="Link"
            required
          ></SubmitLinkInput>
        )}
        <SubmitButton name="submit-button">Post</SubmitButton>
      </SubmitFormContainer>
    </SubmitFormHolder>
  );
}

export default SubmitForm;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  PostPageContainer,
  PostContainer,
  PostPageHeader,
  PostBodyContainer,
  HeaderContainer,
  HeaderVoteButton,
  HeaderTitle,
} from "./Main.styled";
import Header from "./Header";
import Post from "./Post";

import { getPost } from "../../../../utils/postUtils";
function Main() {
  const navigate = useNavigate();
  let [post, setPost] = useState({});
  useEffect(() => {
    async function getData() {
      const post_data = await getPost(sub, user, slug);
      setPost(post_data);
    }
    getData();
    console.log(post);
  }, []);

  const params = useParams();
  const sub = params.subreddit;
  const user = params.username;
  const slug = params.postslug;

  return (
    <>
      <PostPageContainer
        id="test"
        name="post-page-container"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            navigate("/");
          }
        }}
      >
        <PostContainer>
          <Header post={post}></Header>
          <PostBodyContainer>
            <Post post={post}></Post>
          </PostBodyContainer>
        </PostContainer>
      </PostPageContainer>
    </>
  );
}

export default Main;

import { MainContainer, SubredditContainer } from "./Main.styled";
import Dashboard from "./dashboard/Dashboard";
import React from "react";
import SubreditHeader from "./SubreditHeader";
import {useParams} from "react-router-dom";

function Main() {
  const params = useParams();
  const sub = params.subreddit;
  return (
    <>
      <SubredditContainer>
        <SubreditHeader></SubreditHeader>
      </SubredditContainer>
      <MainContainer>
        <Dashboard></Dashboard>
      </MainContainer>
    </>
  );
}

export default Main;

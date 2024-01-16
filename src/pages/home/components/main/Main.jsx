import { MainContainer } from "../Main.styled";
import Posts from "./posts/Posts";
import Dashboard from "./dashboard/Dashboard";
import React from 'react'


function Main() {
  return (
    <MainContainer>
        <Posts></Posts>
        <Dashboard></Dashboard>
        
    </MainContainer>
  )
}

export default Main
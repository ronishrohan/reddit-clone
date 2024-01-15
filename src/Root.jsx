import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useState, useEffect } from "react";
import { PostsProvider } from "./store/posts-context";


let name = window.localStorage.getItem("name");
if (!name) {
  name = "guest"
  window.localStorage.setItem("name", name);
}

function Root() {
  
  return (
    <>
    <PostsProvider>
      <Navbar></Navbar>
      <Outlet></Outlet>

    </PostsProvider>
    </>
  );
}

export default Root;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

let name = window.localStorage.getItem("name")
if(!name){
  name = prompt("enter your name");
  window.localStorage.setItem("name", name)
}

function Root() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default Root;

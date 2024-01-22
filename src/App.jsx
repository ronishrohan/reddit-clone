import React, { useEffect, useState } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home/Home";
import Submit from "./pages/submit/Submit";
import Login from "./pages/login/Login";
import Subreddit from "./pages/subreddit/Subreddit";
import Root from "./Root";
import PostPage from "./pages/postpage/PostPage";
import Popup from "./components/outer/Popup";
import { PopupContext } from "./components/outer/popup-context";
import { useContext } from "react";
import { LoginProivder } from "./store/login-context";
const router = createHashRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "submit",
        element: <Submit></Submit>,
      },
      {
        path: "r/:subreddit",
        children: [
          {
            path: "",
            element: <Subreddit></Subreddit>,
          },
          {
            path: ":username/:postslug",
            element: <PostPage></PostPage>,
          },
        ],
      },
      
    ],
  },
  {
    path: "login",
    element: <Login></Login>
  }
]);

function App() {
    let popupData = useContext(PopupContext);
    let [popup, setPopup] = useState('')
    useEffect(() => {
        setPopup(popupData.content)
    }, [popupData.content])
  return (
    <LoginProivder>
      
        <RouterProvider router={router}></RouterProvider>
        <Popup content={popup} show={popupData.show}></Popup>
      </LoginProivder>
    
  );
}

export default App;

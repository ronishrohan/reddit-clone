import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Submit from "./pages/submit/Submit";
import Subreddit from "./pages/subreddit/Subreddit";
import Root from "./Root";
import PostPage from "./pages/postpage/PostPage";
import Popup from "./components/outer/popup";
import { PopupContext } from "./components/outer/popup-context";
import { useContext } from "react";
const router = createBrowserRouter([
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
]);

function App() {
    let popupData = useContext(PopupContext);
    let [popup, setPopup] = useState('')
    useEffect(() => {
        setPopup(popupData.content)
    }, [popupData.content])
  return (
    <>
      
        <RouterProvider router={router}></RouterProvider>
        <Popup content={popup} show={popupData.show}></Popup>
      </>
    
  );
}

export default App;

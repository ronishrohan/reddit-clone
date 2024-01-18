import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./GlobalStyles.js";
import "./index.css";
import "@fontsource/ibm-plex-sans";
import "@fontsource/noto-sans";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyle></GlobalStyle>
    <App></App>
  </>
);

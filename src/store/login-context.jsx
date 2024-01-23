/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
const LoginContext = createContext();
import { jwtDecode } from "jwt-decode";
const LoginProivder = ({ children }) => {
  let [loggedIn, setLoggedIn] = useState(
    window.localStorage.getItem("token") !== null
  );
  let [username, setUsername] = useState("");

  function updateLoggedIn() {
    console.log("triggered update");
    setLoggedIn(true);
  }
  function handleLogout(){
    setLoggedIn(false);
  }
  useEffect(() => {
    console.log(loggedIn);
    if (loggedIn) {
      const token = window.localStorage.getItem("token");
      const j = jwtDecode(token);
      setUsername(j.username);
    }
  }, [loggedIn]);
  return (
    <LoginContext.Provider value={{ loggedIn, updateLoggedIn, username, handleLogout }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProivder };

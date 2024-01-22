import React, { useState } from "react";
import { LoginPage, LoginContainer, ChangeMode } from "./Main.styled";
import Login from "./login/Login";
import Signup from "./signup/Signup";
function Main() {
  let [mode, setMode] = useState(0);

  return (
    <LoginPage>
      <LoginContainer>
        {mode === 0 ? <Login></Login> : <Signup></Signup>}

        {mode === 0 ? (
          <ChangeMode onClick={() => setMode(1)}>
            New to reddit? Create a account
          </ChangeMode>
        ) : (
          <ChangeMode onClick={() => setMode(0)}>
            Log in to existing account
          </ChangeMode>
        )}
      </LoginContainer>
    </LoginPage>
  );
}

export default Main;

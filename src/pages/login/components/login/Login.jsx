import React, { useRef } from "react";
import {
  FormContainer,
  Mode,
  InputContainer,
  InputBox,
  SubmitButton,
  FormComp,
} from "../Main.styled";
import { useContext } from "react";
import { LoginContext } from "../../../../store/login-context";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../../../utils/postUtils";
function Login() {
    let username = useRef();
    let password = useRef();
  let navigate = useNavigate();
  let login = useContext(LoginContext);
  function handleSubmit(e) {
    e.preventDefault();
    login.updateLoggedIn();
  }
  return (
    <FormComp onSubmit={(e) => handleSubmit(e)}>
      <FormContainer>
        <Mode>Login</Mode>
        <InputContainer>
          <InputBox ref={username} required placeholder="username" type="text"></InputBox>
          <InputBox ref={password} required placeholder="password" type="password"></InputBox>
          <SubmitButton type="submit">Login</SubmitButton>
        </InputContainer>
      </FormContainer>
    </FormComp>
  );
}

export default Login;

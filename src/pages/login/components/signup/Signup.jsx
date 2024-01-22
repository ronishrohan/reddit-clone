import React from "react";
import { useRef, useContext } from "react";
import { LoginContext } from "../../../../store/login-context";
import { createUser } from "../../../../utils/postUtils";
import {
  FormContainer,
  Mode,
  InputContainer,
  InputBox,
  SubmitButton,
  FormComp,
} from "../Main.styled";
import { useNavigate } from "react-router-dom";
function Signup() {
  let username = useRef();
  let password = useRef();
  let navigate = useNavigate();
  let login = useContext(LoginContext);
  function handleSubmit(e) {
    e.preventDefault();
    login.updateLoggedIn();
    createUser({
      username: username.current.value,
      password: password.current.value,
    });
  }
  return (
    <FormComp onSubmit={(e) => handleSubmit(e)} >
      <FormContainer>
        <Mode>Sign up</Mode>
        <InputContainer>
          <InputBox
            ref={username}
            required
            placeholder="username"
            type="text"
          ></InputBox>
          <InputBox
            ref={password}
            required
            placeholder="password"
            type="password"
          ></InputBox>
          <InputBox
            required
            placeholder="confirm password"
            type="password"
          ></InputBox>
          <SubmitButton type="submit">Sign up</SubmitButton>
        </InputContainer>
      </FormContainer>
    </FormComp>
  );
}

export default Signup;

import React from "react";
import { useRef, useContext, useState } from "react";
import { LoginContext } from "../../../../store/login-context";
import { createUser } from "../../../../utils/postUtils";
import { PopupContext } from "../../../../components/outer/popup-context";

import {
  FormContainer,
  Mode,
  InputContainer,
  InputBox,
  SubmitButton,
  FormComp,
  Loading
} from "../Main.styled";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Signup() {
  let [loading, setLoading] = useState(false);
  let popup = useContext(PopupContext);
  let username = useRef();
  let password = useRef();
  let confirm = useRef();
  let navigate = useNavigate();
  let login = useContext(LoginContext);
  async function handleSubmit(e) {
    e.preventDefault();
    
    if (password.current.value !== confirm.current.value) {
      popup.showContent("passwords should be the same");
      password.current.value = "";
      confirm.current.value = "";
      return 0;
    }
    setLoading(true);
    const res = await createUser({
      username: username.current.value,
      password: password.current.value,
    });
    setLoading(false);
    console.log(res);
    if (res.status === "error") {
      popup.showContent("that username already exists");
      username.current.value = "";
    } else if (res.status === "ok") {
      const token = res.user;
      window.localStorage.setItem("token", token);
      login.updateLoggedIn();
      console.log(jwtDecode(token));
      popup.showContent("account created finally, you can login next time");
      navigate("/");
    }
  }
  return (
    <FormComp onSubmit={(e) => handleSubmit(e)}>
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
            ref={confirm}
            required
            placeholder="confirm password"
            type="password"
          ></InputBox>
          <SubmitButton type="submit">{loading ? <Loading><i className="fa-solid fa-circle-notch"></i></Loading> : <div>Sign up</div>}</SubmitButton>
        </InputContainer>
      </FormContainer>
    </FormComp>
  );
}

export default Signup;

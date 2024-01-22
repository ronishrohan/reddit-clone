import React, { useRef, useState } from "react";
import {
  FormContainer,
  Mode,
  InputContainer,
  InputBox,
  SubmitButton,
  FormComp,
  Loading
} from "../Main.styled";
import { useContext } from "react";
import { LoginContext } from "../../../../store/login-context";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../../../utils/postUtils";
import { loginUser } from "../../../../utils/postUtils";
import { PopupContext } from "../../../../components/outer/popup-context";
import { jwtDecode } from "jwt-decode";
function Login() {
  let [loading, setLoading] = useState(false);
  let popup = useContext(PopupContext);
    let username = useRef();
    let password = useRef();
  let navigate = useNavigate();
  let login = useContext(LoginContext);
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const res = await loginUser({
      username: username.current.value,
      password: password.current.value
    });
    
    setLoading(false)
    
    if(res.status === "ok"){
      const token = res.user;
      window.localStorage.setItem("token", token);
      login.updateLoggedIn();
      console.log(jwtDecode(token))
      navigate("/")
      
    }
    else if(res.status === "error"){
      popup.showContent("password or username wrong, try again")
      username.current.value = ""
      password.current.value = ""
    }
    
  }
  return (
    <FormComp onSubmit={(e) => handleSubmit(e)}>
      <FormContainer>
        <Mode>Login</Mode>
        <InputContainer>
          <InputBox ref={username} required placeholder="username" type="text"></InputBox>
          <InputBox ref={password} required placeholder="password" type="password"></InputBox>
          <SubmitButton type="submit">{loading ? <Loading><i className="fa-solid fa-circle-notch"></i></Loading> : <div>Login</div>}</SubmitButton>
        </InputContainer>
      </FormContainer>
    </FormComp>
  );
}

export default Login;

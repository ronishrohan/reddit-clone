import {styled, keyframes} from "styled-components"
import {card_styles, input_hover, input_styles, text_color_bright, text_color} from "../../../resources/resources"

export const LoginPage = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #030303;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const LoginContainer = styled.div`
    position: relative;
    width: 400px;
    height: 500px;
    ${card_styles}
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "IBM Plex Sans";
    color: ${text_color_bright};
`


export const ChangeMode = styled.div`
    position: absolute;
    text-align: center;
    bottom: 0;
    color: orangered;
    cursor: pointer;
    padding: 5px;
    margin: 10px;
    &:hover{
        text-decoration: underline;
    }
`
export const Mode = styled.div`
    font-size: 30px;
    font-weight: 600;
`
export const FormContainer = styled.div`
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    height: 100%;
`

export const FormComp = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    position: relative;
    gap: 20px;
`
export const InputBox = styled.input`
    ${input_styles}
    width: 100%;
    font-size: 16px;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 5px;
    color: ${text_color_bright};
    &:hover{
        ${input_hover}
    }
    &:focus{
        ${input_hover}
    }
`
export const SubmitButton = styled.button`
    cursor: pointer;
    margin-left: auto;
    border-radius: 26px;
    font-size: 16px;
    padding: 26px;
    line-height: 20px;
    width: 150px;
    padding-block: 10px;
    box-sizing: border-box;
    color: ${text_color_bright};
    font-weight: 600;
    background-color: orangered;
    border: none;
    &:hover{
        background-color: #df3b00;
    }
    i{
        text-align: center;
        vertical-align: bottom;
        display: inline-block;
        line-height: 20px;
    }
`
const loadingAnimation = keyframes`
    0% {rotate: 0deg}
    100% {rotate: 360deg}
`

export const Loading = styled.div`
    animation-name: ${loadingAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
`

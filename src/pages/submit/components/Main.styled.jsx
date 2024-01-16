import styled from "styled-components";
import {
  card_bg_color,
  text_color,
  text_color_bright,
  input_styles,
  input_hover,
} from "../../../resources/resources";

export const SubmitContainer = styled.div`
  display: flex;

  margin-top: calc(49px);
  padding: 20px 24px;

  display: flex;
  justify-content: center;

  gap: 24px;
  @media (max-width: 640px) {
    padding: 10px;
  }
`;

export const CreateContainer = styled.div`
  height: 100%;
  width: 750px;
`;

export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 312px;

  @media (max-width: 960px) {
    display: none;
  }
`;
export const SubmitHeader = styled.div`
  div {
    font-weight: 600;
    width: 100%;
    color: ${text_color_bright};
    font-size: 18px;
    font-family: "IBM Plex Sans";
    padding-block: 20px;
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #343536;
  }
`;

export const SubmitFormHolder = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
`;

export const SubredditInput = styled.input`
  width: 300px;
  height: 40px;
  box-sizing: border-box;
  font-family: "IBM Plex Sans";
  padding: 20px;
  padding-left: 35px;
  border-radius: 4px;
  ${input_styles}
  color: ${text_color_bright};
  background-color: ${card_bg_color};
  &:focus {
    ${input_hover}
    + span {
      color: ${text_color_bright};
    }
  }
  & + span {
    border-radius: 5px;
    display: flex;

    justify-content: center;
    align-items: center;
    font-family: "IBM Plex Sans";
    color: ${text_color};
    font-size: 13px;
    position: absolute;
    padding: 12px;
    padding-right: 8px;
    padding-left: 20px;
  }
`;
export const SubmitFormContainer = styled.div`
  overflow: hidden;
  border-radius: 4px;
  height: 100%;
  width: 100%;
  background-color: ${card_bg_color};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
export const SubmitOption = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid #343536;
  border-top: none;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: ${(props) =>
    props.active === "true" ? "2px solid white" : "#343536 solid 1px"};
  &:first-child {
    border-left: none;
  }
  &:last-child {
    border-right: none;
  }
  &:hover {
    background-color: #242425;
  }
  color: ${(props) =>
    props.active === "true" ? text_color_bright : text_color};
  i {
    font-size: 20px;
  }
  div {
    font-family: "IBM Plex Sans";
    line-height: 2px;
    font-size: 14px;
    font-weight: 600;
  }
`;
export const SubmitTitleInput = styled.input`
  height: 40px;
  font-family: "IBM Plex Sans";
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-inline: 16px;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 4px;
  ${input_styles}
  color: ${text_color_bright};
  background-color: ${card_bg_color};
  &:focus {
    ${input_hover}
  }
`;
export const SubmitTextInput = styled.textarea`
  font-family: "IBM Plex Sans";
  display: flex;
  resize: vertical;
  max-height: 180px;

  min-height: 80px;
  font-size: 16px;
  margin-inline: 16px;
  box-sizing: border-box;
  padding: 20px;
  padding-block: 10px;
  border-radius: 4px;
  ${input_styles}
  color: ${text_color_bright};
  background-color: ${card_bg_color};
  &:focus {
    ${input_hover}
  }
`;
export const SubmitLinkInput = styled.input`
  font-family: "IBM Plex Sans";
  display: flex;
  resize: none;

  height: 45px;
  font-size: 16px;
  margin-inline: 16px;
  box-sizing: border-box;
  padding: 20px;
  padding-block: 10px;
  border-radius: 4px;
  ${input_styles}
  color: ${text_color_bright};
  background-color: ${card_bg_color};
  &:focus {
    ${input_hover}
  }
`;
export const SubmitButton = styled.button`
  cursor: pointer;
  width: 65px;
  height: 32px;
  background-color: #d8dbdd;
  &:hover {
    background-color: #c8cbcd;
  }
  border-radius: 36px;
  border: none;
  outline: none;
  margin: 16px;
  margin-left: auto;
  font-family: "Noto Sans";
  font-weight: 800;
`;

export const SubmitImageThumbnail = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-inline: auto;
    width: 300px;
    border-radius: 5px;
  }
  
  div::before {
    content: "image uploaded";
    font-family: "IBM Plex Sans";
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    position: absolute;
    width: 300px;
    height: 20px;
    text-align: center;
    background-color: #000000cc;
    color: ${text_color_bright};
  }
`;
export const SubmitImageButton = styled.button`
  width: 120px;
  height: 50px;
  text-align: center;
  margin-inline: auto;
  cursor: pointer;
  background-color: #d8dbdd;
  &:hover {
    background-color: #c8cbcd;
  }
  border-radius: 36px;
  border: none;

  font-family: "Noto Sans";
  font-weight: 800;
`;

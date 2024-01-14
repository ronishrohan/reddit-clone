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
    padding: 0%;
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

export const SubmitFormHolder = styled.div`
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
  border-radius: 4px;
  ${input_styles}
  color: ${text_color_bright};
  background-color: ${card_bg_color};
  &:hover {
    ${input_hover}
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
    props.isActive ? "2px solid white" : "#343536 solid 1px"};
  &:first-child {
    border-left: none;
  }
  &:last-child {
    border-right: none;
  }
  &:hover {
    background-color: #242425;
  }
  color: ${(props) => (props.isActive ? text_color_bright : text_color)};
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
  &:hover {
    ${input_hover}
  }
`;
export const SubmitTextInput = styled.textarea`
  font-family: "IBM Plex Sans";
  display: flex;
  resize: vertical;
  max-height: 200px;
  min-height: 80px;
  font-size: 16px;
  margin-inline: 16px;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 4px;
  ${input_styles}
  color: ${text_color_bright};
  background-color: ${card_bg_color};
  &:hover {
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

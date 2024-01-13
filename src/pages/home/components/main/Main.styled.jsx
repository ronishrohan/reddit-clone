import styled from "styled-components";
import {
  card_bg_color,
  border_color,
  card_styles,
  input_styles,
  input_hover,
  text_color,
} from "../../../../resources/resources";

export const MainContainer = styled.div`
  display: flex;
  color: ${text_color};
  height: 1500px;
  margin-top: calc(49px);
  padding: 20px 24px;

  display: flex;
  justify-content: center;

  gap: 24px;
  @media (max-width: 640px) {
    padding: 0%;
  }
`;

export const ActionsCard = styled.div`
  margin-bottom: 16px;
  width: 100%;
  height: 58px;
  box-sizing: border-box;
  ${card_styles}
  display: flex;
  align-items: center;
  & > i {
    font-size: 36px;
    margin-inline: 10px;
  }
  input {
    border-radius: 6px;
    ${input_styles}
    height: 36px;
    width: 100%;
    margin-right: 10px;
    padding-inline: 16px;
  }
  input:hover {
    ${input_hover}
  }
  & > div {
    display: flex;
    
  }
`;

export const PostsContainer = styled.div`
  width: 640px;
  height: 100%;
`;
export const DashboardContainer = styled.div`
  width: 312px;
  height: 800px;

  @media (max-width: 960px) {
    display: none;
  }
`;
export const CreateCardButton = styled.div`
    margin-right: 10px;
  height: 36px;
  width: 36px;
  border-radius: 6px;
  &:hover {
    background-color: #29292b;
  }
  &:active {
    background-color: #38393a;
  }
  a {
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: ${text_color};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  i {
    font-size: 18px;
  }
`;

export const FilterContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-inline: 10px;
    width: 100%;

`
export const FilterButton = styled.div`
    font-family: "Noto Sans";
    cursor: pointer;
    border-radius: 36px;
    height: 32px;
    padding-inline: 10px;
    color: ${text_color};
    display: flex;
    justify-content: center;
    gap: 8px;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 2px;
    &:hover{
        background-color: #272729;
    }
    &:active{
        background-color: #353538;
    }
    i{
        font-size: 18px;
    }
`
export const PostContainer = styled.div`
    display: flex;
    cursor: pointer;
    width: 100%;
    height: 150px;
    ${card_styles}
    flex-direction: row;
    overflow: hidden;
    &:hover{
        border-color: #6d6d6d;
    }
    #dark-side{
        background-color: #161617;
        width: 40px;
        height: 100%;
    }
    div{
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    
`
export const PostsHolder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
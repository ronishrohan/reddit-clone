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
    color: #d7dadc;
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
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 312px;
  

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
        display: flex;
        justify-content: center;
        color: #d7dadc;
        text-align: center;
        font-size: 11px;
        letter-spacing: -1px;
        font-family: "Verdana";
        font-weight: 600;
        
        
    }
    #dark-side > div{
      margin-block: 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      
    }
    
    
`
export const PostsHolder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const VoteButton = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  
  i{
    color: ${text_color};
    
    font-size: 20px;
  }
  &:hover > i{
    color: orangered;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background-color: #2a2a2b;
  }

`

export const PremiumContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 90px;
  width: 100%;
  padding: 8px;
  padding-inline: 10px;
  padding-bottom: 8px;
  gap: 8px;
  ${card_styles}
  & > div{
    
    font-size: 24px;
    display: flex;
    gap: 10px;
    i{
      color: orangered;
    }
    div{
      font-family: "IBM Plex Sans";
      font-size: 12px;
      color: #d7dadc;
      display: flex;
      flex-direction: column;
      gap: 2px;
      
    }
  }
`
export const TryNowButton = styled.button`
  cursor: pointer;
  border: none;
  font-family: "Noto Sans";
  border-radius: 36px;
  width: 100%;
  height: 100%;
  background-color: orangered;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  color: white;
  &:hover{
    background-color: #ff5414;
  }
`

export const WelcomeCard = styled.div`
  height: 260px;
  width: 100%;
  overflow: hidden;
  text-align: center;
  ${card_styles}
  font-size: 16px;
  color: #d7dadc;
  h1{
    font-size: 24px;
  }
  span{
    font-size: 14px;
  }
  #image-bg-welcome{
    
    background-image: url("https://images.unsplash.com/photo-1570824104453-508955ab713e?q=80&w=1422&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-size: cover;
    background-position: 0px;
    height: 50px;
    display: flex;
  }
  #create-buttons-holder{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-inline: 16px;
    div{
      border-radius: 36px;
      
      a{
        
        height: 100%;
        width: 100%;
        text-decoration: none;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 36px;
        font-family: "Noto Sans";
        font-weight: 600;
        font-size: 14px;
      }
    }
  }
`
export const Divider = styled.div`
  width: 100%;
  display: flex;
  padding-block: 20px;
  
  div{
    margin-inline: 10px;
    height: 1px;
    width: 100%;
    opacity: 0.3;
    background-color: ${text_color};
  }
`

export const CreatePostButton = styled.div`
  background-color: #d7dadc;
  a{
    color: ${card_bg_color};
  }
  &:hover{
    background-color:#c8cbcd;
  }
`
export const CreateCommunityButton = styled.div`
  border: 1px solid #d7dadc;
  a{
    color: #d7dadc;
  }
  &:hover{
    background-color:#c8cbcd11;
  }
  
`

export const PrivacyPolicyContainer = styled.div`
  height: 200px;
  width: 100%;
  ${card_styles}
  box-sizing: border-box;
  padding-inline: 15px;
  padding-block: 10px;
  font-size: 12px;
  color: #d7dadc;
  display: flex;
  flex-direction: column;
  a{
    text-decoration: none;
    color: #d7dadc;
  }
  #policies{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .policy-links{
    font-family: "Noto Sans";
    display: flex;
    flex-direction: column;
    gap: 5px;
    
  }
  #policy-end{
    margin-top: auto;
  }
`
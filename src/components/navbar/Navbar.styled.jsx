import styled from "styled-components";

const font_color = "d7dadc";

export const NavbarContainer = styled.div`
  color: #${font_color};
  font-family: IBM Plex Sans, sans-serif;
  position: fixed;
  width: 100%;
  height: 49px;
  background-color: #1a1a1b;
  border-bottom: 1px solid #343536;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding-inline: 20px;
  padding-right: 10px;
  box-sizing: border-box;
`;

export const LogoContainer = styled.div`
  a {
    height: 32px;
    display: flex;
    justify-content: center;
    gap: 8px;
  }
  #reddit-logo-text svg {
    height: 22px;
  }
  #reddit-logo-text {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1070px) {
      display: none;
    }
  }
  svg {
    height: 32px;
  }
`;

export const CommunitiesContainer = styled.div`
  cursor: pointer;
  margin-left: 16px;
  font-size: 20px;

  display: flex;
  flex: none;
  align-items: center;
  
  border: 1px solid transparent;
  border-radius: 4px;
  height: 34px;
  box-sizing: border-box;
  #cmty-name {
    -webkit-font-smoothing: antialiased;
    font-weight: 200;
    font-size: 14px;
  }
  &:hover {
    border-color: #343536;
  }
  i {
    margin-inline: 10px;
  }
  i:last-child {
    font-size: 14px;
    
    margin-right: 14px;
    font-weight: 600;
  }
  div{
    width: 190px;
    @media (max-width: 995px) {
      display: none;
    }
  }
`;

export const ProfileContainer = styled.div`
  cursor: pointer;
  margin-left: 10px;
  height: 42px;
  
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  padding-inline: 8px;
  @media (max-width: 1210px){
    height: 32px;
  }
  gap: 5px;
  &:hover {
    border-color: #343536;
  }
  i {
    font-size: 26px;
  }
  i:last-child {
    
    font-size: 14px;
    color: #777777;
    margin-inline: 4px;
  }
`;
export const UsernameContainer = styled.div`
  font-family: IBM Plex Sans;
  display: flex;
  width: 150px;
  flex-direction: column;
  font-size: 12px;
  gap: 2px;

  @media (max-width: 1210px){
    display: none;
  }

  div {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  div i {
    color: orangered;
    font-size: 12px;
  }
  div div {
    color: #afafaf;
  }
`;
export const ActionsContainer = styled.div`
  flex: none;
  
  height: 100%;
  align-items: center;
  display: flex;
  & > div:first-child{
    @media (max-width: 790px) {
      display: none;
    }
  }
`;

export const SearchContainer = styled.div`
  box-sizing: border-box;
  margin-inline: 16px;
  border-radius: 36px;
  border: 1px solid #343536;
  height: 40px;
  width: 100%;
  font-size: 14px;
  color: #777777;
  background-color: #272729;
  display: flex;
  align-items: center;
  padding-inline: 14px;
  i {
    font-size: 18px;
    margin-right: 10px;
  }
  input {
    height: 60%;
    font-family: IBM Plex Sans;
    font-weight: 100;
    outline: none;
    border: none;
    background: none;
    color: white;
    width: 100%;
  }
  input:focus & {
    
  }
  &:hover {
    border-color: white;
    background-color: #1a1a1b;
  }
`;



export const ActionsButton = styled.div`
  color: #${font_color};
  width: 32px;
  height: 32px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  &:hover {
    background-color: #2d2d2e;
  }
  a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  i {
    font-size: 20px;
    color: #${font_color};
  }
`;
export const AdvertiseButton = styled.div`
  width: 110px;
  height: 32px;
  box-sizing: border-box;
  background-color: #303030;
  &:hover {
    background-color: #464748;
  }
  display: flex;
  @media (max-width: 560px) {
    display: none;
  }
  a {
    text-decoration: none;
    color: #bebebe;
    font-size: 14px;
    font-weight: 600;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding-inline: 2px;
  }
  border-radius: 36px;
`;

export const NotificationBadge = styled.div`
  border-radius: 50%;
  
  height: 16px;
  width: 16px;
  border: 2px solid #1a1a1b ;
  background-color: orangered;
  position: absolute;
  transform: translate(12px, -8px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 10px;
  font-weight: 600;
  div{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;

  }
`
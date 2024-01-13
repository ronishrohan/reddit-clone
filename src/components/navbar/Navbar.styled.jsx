import styled from "styled-components";

export const NavbarContainer = styled.div`
  color: #d7dadc;
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
  cursor: pointer;
  height: 32px;
  display: flex;
  justify-content: center;
  gap: 8px;
  #reddit-logo-text svg {
    height: 22px;
  }
  #reddit-logo-text {
    display: flex;
    justify-content: center;
    align-items: center;
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
  width: 270px;
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
    margin-left: auto;
    margin-right: 14px;
    font-weight: 600;
  }
`;

export const ProfileContainer = styled.div`
  cursor: pointer;
  width: 203px;
  height: 42px;
  margin-left: auto;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  padding-inline: 8px;
  &:hover{
    border-color: #343536;
  }
`;
export const ActionsContainer = styled.div`
  flex: none;
  width: 502px;
  height: 100%;
  align-items: center;
  display: flex;
  
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
  i{
    font-size: 18px;
    margin-right: 10px;
  }
  input{
    height: 60%;
    font-family: IBM Plex Sans;
    font-weight: 100;
    outline: none;
    border: none;
    background: none;
    color: white;
  }
  input:focus &{
    background-color: aqua;
  }
  &:hover{
    border-color: white;
    background-color: #1a1a1b;
  }
`

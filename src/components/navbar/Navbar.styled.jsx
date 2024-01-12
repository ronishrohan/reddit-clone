import styled from "styled-components";

export const NavbarContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 49px;
    background-color: #1a1a1b;
    border-bottom: 1px solid #343536;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    padding-inline: 20px;
    box-sizing: border-box;
`

export const LogoContainer = styled.div`
    cursor: pointer;
    height: 32px;
    display: flex;
    justify-content: center;
    gap: 8px;
    #reddit-logo-text svg{
        height: 22px;
    }
    #reddit-logo-text{
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
    svg{
        height: 32px;
    }

`

export const CommunitiesContainer = styled.div`
    cursor: pointer;
    margin-left: 16px;
    font-size: 20px;
    color: #d7dadc;
    display: flex;
    
    align-items: center;
    width: 270px;
    border: 1px solid transparent;
    border-radius: 4px;
    height: 34px;
    box-sizing: border-box;
    #cmty-name{
        -webkit-font-smoothing: antialiased;
        font-weight: 200;
        font-size: 14px;
    }
    &:hover{
        border-color: #343536;
    }
    i{
        margin-inline: 10px;
    }
    i:last-child{
        font-size: 14px;
        margin-left: auto;
        margin-right: 14px;
        font-weight: 600;
    }
`
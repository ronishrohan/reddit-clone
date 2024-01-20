import {
    card_bg_color,
    border_color,
    card_styles,
    input_styles,
    input_hover,
    text_color,
    text_color_bright,
  } from "../../../../resources/resources";
import {styled} from "styled-components";

export const PostPageContainer = styled.div`
    position: absolute;
    margin-top: 49px;
    background-color: #191919;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`
export const PostContainer = styled.div`
    position: relative;
    width: 1200px;
    height: 100%;
    background-color: #030303;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const PostPageHeader = styled.div`
    height: 50px;
    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;
    background-color: #030303;
    position: fixed;
`
export const PostBodyContainer = styled.div`
    margin-top: 85px;
    background-color: #1a1a1b;
    width: 1050px;
    border-radius: 5px;
    height: 100%;
    margin-bottom: 20px;
`
export const HeaderContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
    padding-inline: 75px;
    color: ${text_color_bright};
    font-family: "IBM Plex Sans";
    font-size: 12px;
    font-weight: 600;
    
`
export const HeaderVoteButton = styled.div`
    cursor: pointer;
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-content: center;
    &:hover{
        background-color: ${card_bg_color};
    }
    i{
        font-size: 16px;
        line-height: 28px;
        color: ${text_color};
    }
`
export const HeaderTitle = styled.div`
    font-size: 14px;
    font-weight: 200;
    
`
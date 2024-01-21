import {styled} from "styled-components";
import { text_color_bright, card_styles, text_color } from "../../resources/resources";

export const PopupContainer = styled.div`
    z-index: 2;
    position: fixed;
    bottom: 0;
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    
`
export const PopupContent = styled.div`
    padding: 20px;
    padding-block: 10px;
    ${card_styles}
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${text_color};
    font-weight: 600;
    font-family: "IBM Plex Sans";
    box-shadow: 0 0 10px rgba(0,0,0,0.4);

`
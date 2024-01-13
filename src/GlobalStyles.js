import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        
        
        background-color: #030303;
        margin: 0;
    }

    body::-webkit-scrollbar-thumb{
    border: 2px solid #424242;
    background: #7b7b7b;
    }
    body::-webkit-scrollbar-track{
        background:#424242;
    }
    body::-webkit-scrollbar {
        width: 17px;               /* width of the entire scrollbar */
    }
  
`;

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`;

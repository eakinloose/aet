import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Varela Round', sans-serif;
    }

    html, body{
        overflow-x: hidden;
        color: white;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    .whitespace {
      width: 100%;
      background: #f8f8f7;
      height: 150px;

      @media screen and (max-width: 700px){
         height: 70px;
      }
   }

    
   .cursor {
      width: 35px;
      height: 35px;
      margin: 0;
      padding: 0;
      background-color: #009985;
      border-radius: 50%;
      pointer-events: none;
      position: fixed;
      transform: translate(-50%, -50%);
   }
`;

export default GlobalStyles;

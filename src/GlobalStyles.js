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
`;

export default GlobalStyles;

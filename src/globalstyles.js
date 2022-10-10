import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');

   *,
   *::before,
   *::after {
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
   }
 
   html {
      font-size: 62.5%;
   }

   body {
      margin: 0;
      padding: 0;
      min-height: 100%;
      width: 100%;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      font-size: 1.4rem;
      font-weight: 300;
      letter-spacing: 0.02rem;
      line-height: 2.5rem;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
   }

   a{
      text-decoration: none;
      color: ${({ theme }) => theme.colors?.button};
   }

   button, .button{
    border: 0;
    padding: 0;
    cursor: pointer;
    box-sizing: border-box;
    display: inline-block;
    max-width: 100%;
    text-align: center;
    padding: 1.2rem 2.4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 1.5rem;
    letter-spacing: 0;
    line-height: 1.6rem;
    border-radius: 3px;
    text-transform: capitalize;
    transition: transform 300ms ease-in-out;
    background-color: ${({ theme }) => theme.colors?.button};
    color: ${({ theme }) => theme.colors.white};
   }

   button:hover, .button:hover{
    background-color: ${({ theme }) => theme.colors?.buttonhover};
   }

   input, textarea{
    width: 100%;
    max-width: 560px;
    border: 1px solid grey;
    outline: none;
    font-size: 1.5rem;
    appearance: none;
    border-radius: 0;
    padding: 1.08rem;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors?.grey01};
   }

   input:hover, textarea:hover{
    background-color: ${({ theme }) => theme.colors?.inputhover};
   }

  input::placeholder, textarea::placeholder {
    font-weight: 400;
    opacity: .9;
    font-size: 12px;
    text-transform: capitalize !important;
    color: grey;
  }

  .menu{
     background: black;
     fill-opacity: 1;
     opacity: 0.7;
     color: ${({ theme }) => theme.colors.white};
     width: 50px;
     height: 50px;
     border-radius: 50%;
     display: flex;
     justify-content: center;
     align-items: center;
     position: fixed;
     top: 7rem;
     
   }

   .navcontents{
      display: flex;
      justify-content: space-around;
      position: fixed;
      background: black;
      fill-opacity: 1;
      opacity: 0.7;
      color: ${({ theme }) => theme.colors.white};
      top: 7.2rem;
      left: 6rem;
      width: 90%;
      max-width: 270px;
      border-radius: 50px;
    
    h4, a{
       display: inline;
       margin: 1rem;
       font-weight: 400;
       color: ${({ theme }) => theme.colors.white};
    }
   }

  .side{
    display: flex;
  }
`;

export { GlobalStyles };

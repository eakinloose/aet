import styled from "styled-components";

export const Nav = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 2.6rem 3rem 3.2rem;

   .logo {
      display: flex;
      h2 {
         /* color: #459975; */
         color: #009985;
         margin-top: -0.3rem;
         padding: 0;
      }
      span {
         margin-top: 5px;
         font-size: 11px;
      }
   }

   @media screen and (max-width: 799px) {
      padding: 2rem 0.5rem 2.5rem;
   }
`;

export const NavLinks = styled.div`
   display: flex;
   justify-content: space-between;

   button {
      padding: 5px;
      width: 80px;
      background: transparent;
      color: white;
      border-radius: 5px;
      margin-left: 0.6rem;
      border: 2px solid transparent;
      cursor: pointer;
   }

   button:focus {
      border: 2px solid #459975;
   }
`;

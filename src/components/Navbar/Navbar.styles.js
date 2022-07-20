import styled from "styled-components";

export const Nav = styled.div`
   padding: 4rem 2.5rem;
   background: #ffffff;
   color: #383838;
   font-size: clamp(11px, 2.5vw, 14px);
   /* font-size: 14px; */
   font-weight: 500;

   .nav {
      display: flex;
      justify-content: space-between;
      max-width: 1100px;
      margin: auto;
   }

   h2 {
      margin-top: -15px;
      font-size: clamp(25.5px, 2.5vw, 42px);
      letter-spacing: 4px;
      text-align: center;
      color: black;
   }

   @media screen and (max-width: 799px) {
      padding: 2rem 0.5rem 2.5rem;
   }
`;

export const NavLinks = styled.div`
   a {
      background: transparent;
      border-radius: 5px;
      margin-left: 3rem;
      cursor: pointer;
      color: #bebab3;
   }

   a:hover {
      color: #383838;
   }

   a:focus {
      color: #783838;
   }
`;

import styled from "styled-components";

export const PortfolioWrapper = styled.div`
   width: 100%;
   max-width: 1270px;
   margin: 7rem auto;
   padding: 0 2rem;

   .head {
      width: 70%;
      margin: 2rem auto 8rem;
      text-align: center;
      font-weight: 400;

      h1 {
         text-transform: capitalize;

         span {
            color: ${({ theme }) => theme.colors.button};
         }
      }
   }

   #portfolio-items {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 7rem;
   }

   ul,
   li {
      list-style: none;
      margin: 0;
      padding: 0;
   }

   li {
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
         rgba(0, 0, 0, 0.24) 0px 1px 2px;
      border-radius: 10px 10px 0 0;

      img {
         width: 100%;
         /* filter: brightness(80%); */
         border-radius: 10px 10px 0 0;
         max-width: 500px;
      }

      .details {
         padding: 1rem 1rem;
         margin: 0 1rem;

         p,
         a {
            font-weight: 400;
         }
      }
   }

   @media screen and (max-width: 790px) {
      grid-template-columns: repeat(2, 1fr);
   }

   @media screen and (max-width: 590px) {
      #portfolio-items {
         display: block;
         margin-top: -2rem;
         li {
            margin-bottom: 3rem;
         }
      }
   }
`;

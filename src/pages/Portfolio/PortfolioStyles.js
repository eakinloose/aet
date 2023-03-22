import styled from "styled-components";

export const PortfolioWrapper = styled.div`
   width: 100%;
   max-width: 1270px;
   margin: 7rem auto;
   padding: 0 2rem;

   .head {
      width: 70%;
      margin: 2rem auto 5rem;
      text-align: center;
      font-weight: 400;

      h1 {
         text-transform: capitalize;

         span {
            color: ${({ theme }) => theme.colors.button};
         }
      }
   }

   .left {
      text-align: start;
      margin: 0;
   }

   #projects {
      .projectWrapper {
         display: flex;
         flex-direction: row-reverse;
         justify-content: space-between;
         align-items: center;
         margin-bottom: 5rem;

         @media screen and (max-width: 790px) {
            display: block;
         }

         .textWrapper {
            width: 100%;
            margin-right: 70px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            h1, h2 {
               margin-bottom: 0;
            }

            span {
               display: inline-block;
               line-height: 1.9;
            }

            @media screen and (max-width: 790px) {
               margin-right: 0;
            }
         }

         .imgWrapper {
            width: 100%;
            margin: auto;
            max-width: 550px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            img {
               width: 100%;
               object-fit: cover;
               border-radius: 5px;
            }
         }
      }
   }

   
`;

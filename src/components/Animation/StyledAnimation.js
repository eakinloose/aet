import styled from "styled-components";

export const Wrapper = styled.section`
   background: black;
   height: 1750px;
   color: white !important;

   @media screen and (max-width: 609px) {
      height: 3100px;
   }
`;
export const Container = styled.section`
   width: 90%;
   /* height: 80vh; */
   max-width: 1100px;
   margin: auto;
`;

export const Title = styled.h1`
   font-size: 35px;
   font-size: clamp(25.5px, 2.5vw, 32px);
   letter-spacing: 4px;
   text-align: center;
   color: #009985;
   padding: 30px;
`;

export const Ul = styled.ul`
   display: grid;
   grid-template-columns: repeat(3, 30%);
   justify-content: center;
   margin: auto;
   position: relative;
   top: 60px;
   gap: 100px 50px;

   @media screen and (max-width: 609px) {
      display: block;
   }

   li {
      color: white;
      margin-bottom: 35px;
      padding: 7px;
      font-size: 24px;
      font-size: clamp(20.5px, 2.5vw, 24px);
      text-transform: uppercase;
      span {
         &:hover {
            & ~ div {
               transform: rotate(-5deg) scale(1);
               opacity: 1;
            }
         }
      }

      .small {
         font-size: 14px;
         font-weight: bold;
         text-transform: lowercase;
         margin: 20px 0;
         color: #cd486b;
      }

      p {
         font-size: clamp(13.5px, 2.5vw, 17px);
         margin: 10px 0;
      }

      .img-cont {
         position: absolute;
         width: 380px;
         transform: translateX(100px) scale(0.8);
         opacity: 0;
         transition: 0.6s;

         img {
            border: 2px solid black;
            width: 100%;
            border-radius: 15px;
         }
      }

      .stack {
         display: flex;
         flex-wrap: wrap;
      }

      h4 {
         background: #009985;
         font-size: 11px;
         color: white;
         display: inline;
         margin: 5px 5px 0 0;
         padding: 5px 10px;
         border-radius: 2px;
      }
   }
`;

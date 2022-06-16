import styled from "styled-components";

export const Wrapper = styled.div`
   width: 90%;
   padding: 0.5rem;
   margin: 1rem auto;

   h4 {
      color: white;
      margin: 15px 0;
      font-size: 14px;
   }
   .c {
      color: purple;
      font-size: 15px;
   }

   ul {
      width: 250px;
      li {
         display: flex;
         margin: 3px 0;
         p {
            width: 120px;
            font-size: 14px;
         }
      }
   }

   .wrapper {
      margin: auto;
      width: 92%;
   }

   @media screen and (max-width: 799px) {
      width: 100%;
      p {
         font-size: 13px;
      }
      li {
         font-size: 13px;
      }
   }
`;

export const Card = styled.div`
   /* height: 100px; */
   /* padding: 10%; */
   margin: 5px;

   .img {
      width: 90%;
      background: red;
      height: 170px;
      display: flex;
      padding: 1rem;
      border-radius: 5px;
      box-shadow: 0px 0.2px 4px 0.4px blue;
   }
   
   img {
      margin: auto;
      width: 100%;
      /* height: 40px; */
      /* align-self: center; */
   }
`;

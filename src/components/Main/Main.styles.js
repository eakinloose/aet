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
   .c{
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

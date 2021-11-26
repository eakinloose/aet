import styled from "styled-components";

export const Wrapper = styled.div`
   width: 90%;
   padding: 0.5rem;
   margin: auto;

   h2 {
      width: 60%;
      color: #009985;
      margin-bottom: 1rem;
   }

   p {
      color: white;
      line-height: 1.5;
      font-size: 14px;
      width: 60%;
   }
   span {
      padding-bottom: 2px;
      font-weight: 600;
   }
   .aet {
      color: #009985;
   }
   .github {
      color: grey;
   }
   .instagram {
      color: #cd486b;
   }

   @media screen and (max-width: 799px) {
      width: 100%;

      h2 {
        width: 80%;
      }
      p {
         width: 93%;
         font-size: 13px;
      }
   }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
   width: 100%;
   margin: auto;

   .whitespace {
      width: 100%;
      background: #f8f8f7;
      height: 150px;

      @media screen and (max-width: 700px){
         height: 70px;
      }
   }

   h2 {
      width: 60%;
      color: #009985;
      margin-bottom: 1rem;
   }

   p {
      color: white;
      line-height: 1.5;
      font-size: 19px;
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

export const FlexWrapper = styled.div`
   background: #020202;

`
export const Flex = styled.div`
   max-width: 1040px;
   margin: auto;
   display: flex;
   padding: 10rem 0;

   .firstchild{
      width: 59%;
      display: flex;
      flex-direction: column;
      align-self: center;

   }

   img{
      width: 45%;
   }

   @media screen and (max-width: 909px) {
      padding:15rem 1.5rem;

   }

   @media screen and (max-width: 609px) {
      display: block;
      padding: 4rem 1rem;

      .firstchild, img{
         width: 100%;
      }

      h2, p{
         width: 100%;
         text-align: center;
      }

      p{
         font-size: 15px;
      }
      img{
         margin-top: 5rem;
      }

   }
`;

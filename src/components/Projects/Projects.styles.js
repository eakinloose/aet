import styled from "styled-components";

export const Wrapper = styled.div`
   width: 90%;
   margin: 0.7rem auto;
   color: white;
   padding: 0.5rem;
   p {
      font-size: 14px;
   }
   h4 {
      margin: 5px 0;
   }

   .Eduskowrapper {
      width: 100%;
      background: #173381;
      border-radius: 5px;
      margin: 10px auto;

      div {
         width: 99.05%;
         margin: 0 1%;
         background: rgb(15, 15, 15);
         padding: 0.2rem 1rem 0.5rem;
      }
      img {
         height: 21px;
         margin: 3px 0;
      }

      h5 {
         margin: 5px 0;
         color: grey;
      }
      p {
         font-size: 14px;
         line-height: 1.4;
         margin: 3px 0;
      }
      button {
         padding: 7px;
         width: 80px;
         background: transparent;
         color: white;
         border-radius: 5px;
         border: 2px solid #173381;
         cursor: pointer;
      }
   }

   @media screen and (max-width: 799px) {
      width: 100%;
      p {
         font-size: 13px;
      }

      .wrapper {
         p {
            font-size: 13px;
         }
      }
   }
`;

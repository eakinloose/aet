import styled from "styled-components";

export const Wrapper = styled.div`
   width: 90%;
   margin: 0.7rem auto;
   color: white;
   padding: 0.5rem;
   p {
      font-size: 14px;
   }
   h3 {
      margin: 10px 0 20px;
      text-align:center;
   }

   .projectholder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
   }

   .Eduskowrapper {
      width: 100%;
      background: #173381;
      border-radius: 5px;

      div {
         width: 99.05%;
         height: 100%;
         margin: 0 1%;
         position: relative;
         background: rgb(15, 15, 15);
         padding: 0.2rem 1rem 2.9rem;
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
         width: 100px;
         background: transparent;
         color: white;
         border-radius: 5px;
         border: 2px solid #173381;
         cursor: pointer;
         position: absolute;
         bottom: 10px;
      }
   }

   .oneburnerwrapper,
   .prosperwrapper,
   .storewrapper,
   .fusedwrapper {
      width: 100%;
      background: purple;
      border-radius: 5px;

      div {
         width: 99.05%;
         height: 100%;
         margin: 0 1%;
         position: relative;
         background: rgb(15, 15, 15);
         padding: 0.2rem 1rem 2.9rem;
      }
      img {
         height: 40px;
         margin: 0;
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
         background: transparent;
         color: white;
         border-radius: 5px;
         border: 2px solid purple;
         cursor: pointer;
         position: absolute;
         bottom: 10px;
      }
   }

   .prosperwrapper {
      background: #cd486b;

      img {
         height: 17px;
         margin: 10px 0 0;
      }
      button {
         border: 2px solid #cd486b;
         width: 100px;
      }
   }
   .storewrapper {
      background: white;
      h3 {
         margin-top: 0.8rem;
      }

      button {
         border: 2px solid white;
      }
   }
   .fusedwrapper {
      background: teal;

      img {
         height: 33px;
         margin-top: 1rem;
         margin-bottom: -0.5rem;
      }

      button {
         border: 2px solid teal;
         width: 100px;
      }
   }


   @media screen and (max-width: 1000px) {
      .projectholder {
         display: grid;
         grid-template-columns: repeat(2, 1fr);
         gap: 10px;
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
      .projectholder {
         display: block;
         div {
            margin-bottom: 10px;
         }
      }
   }
`;

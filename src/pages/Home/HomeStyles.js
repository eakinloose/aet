import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1270px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;

  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: auto;
    max-width: 1140px;

    .imgWrapper {
      width: 340px;
      height: 340px;

      img {
        width: 100%;
        border-radius: 50%;
        border: 5px solid ${({ theme }) => theme.colors?.button};
        object-fit: cover;
      }
    }

    .contents {
      width: 60%;

      p {
        font-size: 1.5rem;
        line-height: 2;
        color: grey;
        font-weight: 400;
      }

      .name {
        h1,
        h2,
        h3 {
          color: ${({ theme }) => theme.colors?.button};
        }

        h1 {
          font-size: clamp(1.9rem, 2.1vw, 2.7rem);
        }

        h3 {
          margin-top: 0;
        }
      }

      .btns {
        width: 80%;
        max-width: 320px;
        display: flex;
        justify-content: space-between;

        button {
          /* padding: 1.4rem 4rem; */
          /* border-radius: 30px; */

          .btn {
            display: flex;
            justify-content: space-around;
            align-items: center;

            .trans {
              display: inline-block;
              transform: translateY(-1.5px);
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 790px) {
    padding: 3rem 1.2rem;
    display: block;

    .details {
      display: block;
      width: 100%;

      .imgWrapper {
        margin: auto;
        width: 250px;
        height: 250px;

        img {
        }
      }

      .contents {
        width: 100%;

        p {
          width: 100%;
        }
      }
    }
  }
`;

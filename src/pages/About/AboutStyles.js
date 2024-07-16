import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 100%;
  max-width: 1270px;
  margin: 7rem auto;
  padding: 0 2rem;

  .head {
    width: 70%;
    margin: 2rem auto 8rem;
    text-align: center;

    h1 {
      text-transform: capitalize;

      span {
        color: ${({ theme }) => theme.colors.button};
      }
    }
  }

  .infos {
    .personal-info {
      display: flex;
      width: 90%;
      justify-content: space-between;
      align-items: center;
      margin: 6rem auto 12rem;
    }

    .image-container {
      height: 350px;
      width: 350px;
      border: 5px solid ${({ theme }) => theme.colors.button};

      img {
        width: 100%;
        transform: translate(30px, 30px);
      }
    }

    .ul-cont {
      width: 55%;
    }

    .ul {
      display: flex;
      width: 100%;
      justify-content: space-between;

      ul {
        padding: 0;

        li {
          text-decoration: none;
          margin-bottom: 2.5rem;
          list-style: none;
        }

        h4 {
          font-weight: 400;
          letter-spacing: 1.05px;
          font-size: 1.45rem;
        }
      }
    }
  }

  .skills {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 7rem;
  }

  .col-md-4 {
    margin-top: 3rem;

    .skill-text {
      text-transform: uppercase;
    }

    .chart-bar {
      position: relative;
      display: flex;
      height: 3px;
      width: 100%;
      margin: 1.5rem 0;
      background-color: ${({ theme }) => theme.colors.grey02};

      .item-progress {
        display: inline-block;
        background-color: ${({ theme }) => theme.colors.buttonhover};
        height: 2px;
        width: 0;
        transition: width 2s ease-in-out;
      }

      .percent {
        position: absolute;
        display: flex;
        align-items: center;
        top: -30px; /* Adjust as needed */
        transform: translateX(-100%);
        transition: left 2s ease-in-out;
        color: ${({ theme }) => theme.colors.button};
        font-size: 2.5rem; /* Adjust as needed */
      }
    }
  }

  @media screen and (max-width: 790px) {
    .infos {
      .personal-info {
        display: block;
        width: 90%;
        justify-content: space-between;
        align-items: center;
        margin: 2rem auto 5rem;
      }

      .image-container {
        height: 350px;
        width: 350px;
        border: 5px solid ${({ theme }) => theme.colors.button};
        margin: 0 -20px 9rem;

        img {
          width: 100%;
          transform: translate(30px, 30px);
        }
      }
      grid-template-columns: repeat(2, 1fr);

      .ul {
        display: block;
        margin: 6rem -20px 2rem;
      }

      .ul-cont {
        width: 100%;
      }
    }

    @media screen and (max-width: 590px) {
      .infos {
        .personal-info {
          display: block;
          width: 90%;
          justify-content: space-between;
          align-items: center;
          margin: 2rem auto 5rem;
        }

        .image-container {
          height: 300px;
          width: 300px;
          margin: 0 auto 9rem;
          transform: translatex(-10px);

          img {
            width: 100%;
            transform: translate(30px, 30px);
          }
        }
      }
      .btn-resume {
        width: 100%;
        display: inline-block;
        margin: 1rem auto 0;
        text-align: center;
      }
      .skills {
        display: block;
        margin-top: -2rem;

        .col-md-4 {
          margin-top: 6rem;

          .skill-text {
            text-transform: uppercase;
          }
        }
      }
    }
  }
`;

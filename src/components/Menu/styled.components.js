import styled from "styled-components"

export const MenuComponent = styled.div`
  display: flex;
  height: 75px;
  padding: 16px 140px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0);

  .navigation-component {
    display: flex;
    align-items: center;
    gap: 108px;
    width: 100%;
    box-sizing: border-box;

    .ros-image,
    img {
      width: 138px !important;
      flex-shrink: 0;
    }

    .links {
      display: flex;
      align-items: center;
      gap: 16px;

      .link {
        display: flex;
        height: 44px;
        padding: 8px 16px;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        gap: 4px;
        transition: all 0.3s ease-in-out;
        border-radius: 12px;
        cursor: pointer;
        white-space: nowrap;
        /* box-shadow: -2px -2px 8px 0px rgba(255, 255, 255, 0.4) inset; */
        /* backdrop-filter: blur(5px); */

        a {
          color: #fffdfd;
          font-family: Montserrat;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 0.32px;
          text-decoration: none;
        }

        &:hover {
          background: linear-gradient(
            99deg,
            rgba(255, 255, 255, 0.05) 9.46%,
            rgba(255, 255, 255, 0.3) 90.62%
          );
          box-shadow: -2px -2px 8px 0px rgba(255, 255, 255, 0.4) inset;
          backdrop-filter: blur(5px);
        }
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-left: auto;

      .order-button {
        display: flex;
        height: 44px;
        padding: 8px 16px;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        gap: 4px;
        transition: all 0.3s ease-in-out !important;
        cursor: pointer;
        border-radius: 16px;
        border: 1px solid var(--Orange, #eb670f);
        background: linear-gradient(
          99deg,
          rgba(5, 4, 3, 0.05) 9.46%,
          rgba(5, 4, 3, 0.3) 90.62%
        );
        box-shadow: -2px -2px 8px 0px rgba(255, 255, 255, 0.4) inset;
        backdrop-filter: blur(5px);

        p {
          color: #fffdfd;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 0.32px;
          white-space: nowrap;
        }

        &:hover {
          background: linear-gradient(
            99deg,
            rgba(235, 103, 15, 0.05) 9.46%,
            rgba(235, 103, 15, 0.3) 90.62%
          );
          box-shadow: 2px 2px 8px 0px rgba(255, 255, 255, 0.15) inset;

          @media only screen and (max-width: 1020px) {
            background: linear-gradient(
              99deg,
              rgba(5, 4, 3, 0.05) 9.46%,
              rgba(5, 4, 3, 0.3) 90.62%
            );
            box-shadow: -2px -2px 8px 0px rgba(255, 255, 255, 0.4) inset;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1500px) {
    .navigation-component {
      gap: 20px;
    }
  }

  @media only screen and (max-width: 1320px) {
    padding: 16px;
  }

  @media only screen and (max-width: 1070px) {
    .navigation-component {
      .links {
        gap: 0;
      }
    }
  }

  @media only screen and (max-width: 1020px) {
    .navigation-component {
      .links {
        display: none;
      }
    }
  }
`

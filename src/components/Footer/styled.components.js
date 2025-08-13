import styled from "styled-components"
export const FooterComponent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  .mobile {
    display: none;
  }

  .footer-background {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }

  .footer-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
  }

  .footer-1 {
    padding: 4px 0 32px 0;

    .ros-image {
      img {
        width: 114px;
      }
    }
  }

  .footer-2 {
    padding: 32px 0;
    border-top: none;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 314px;
    }
  }

  .footer-3 {
    padding: 19px 0;
    border-top: none;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 314px;
    }
  }

  a {
    text-decoration: none;
    transition: all 0.15s ease-in-out;

    &:hover {
      color: #ffe8d9;
    }
  }

  .footer-4 {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 40px 0;
    gap: 20px;

    .icons {
      display: inline-flex;
      align-items: center;
      gap: 17px;

      svg {
        &:hover {
          path {
            transition: all 0.15s ease-in-out;
            fill: #a3948b;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1020px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: flex;
    }
  }
`

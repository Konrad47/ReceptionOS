import styled from "styled-components"
import BackgroundImage from "../../../../images/find-out/find-out-background.webp"
import BackgroundImageMobile from "../../../../images/find-out/find-out-background-mobile.webp"

export const FindOutComponent = styled.div`
  overflow: hidden;
  background-size: cover !important;
  background-position: bottom;
  width: 100%;
  background-image: url(${BackgroundImage});
  display: block;
  background-attachment: scroll;
  justify-content: center;

  .mobile {
    display: none;
  }

  .container {
    display: flex;
    gap: 60px;
  }

  .left-container {
    display: flex;
    max-width: 666px;
    padding: 80px 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;

    .top {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      align-self: stretch;
    }

    .middle {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      align-self: stretch;

      .point {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        align-self: stretch;

        svg {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }
      }
    }

    .bottom {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  .right-container {
    display: flex;
    max-width: 373px;
    height: 409px;
    box-sizing: border-box;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 1px solid var(--Border, rgba(253, 240, 231, 0.2));
    background: #261f17;
    margin: auto;

    .top {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .image {
      img {
        height: 60px;
      }
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      flex: 1 0 0;
      align-self: stretch;

      .text-p {
        color: #f5f5f5;
        /* font-family: Inter; */
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;

        b {
          white-space: pre;
        }
      }

      .p-body-medium {
        span {
          white-space: pre;
        }
      }
    }
  }

  @media only screen and (max-width: 1230px) {
    background-image: url(${BackgroundImageMobile});
    padding-top: 32px;

    .mobile {
      display: flex;
    }

    .desktop {
      display: none;
    }

    .container {
      flex-direction: column-reverse;
      gap: 32px;
    }

    .right-container {
      height: unset;
      max-width: 100%;
      .image {
        img {
          height: 48px;
        }
      }

      .text-p {
        font-size: 20px;
      }

      b {
        white-space: nowrap;
      }
    }
  }

  /* @media only screen and (max-width: 1020px) {
  } */
`

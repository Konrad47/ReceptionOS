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

  @media only screen and (max-width: 1230px) {
    background-image: url(${BackgroundImageMobile});
  }
`

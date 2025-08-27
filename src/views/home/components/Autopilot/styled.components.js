import styled from "styled-components"
import AutopilotImage from "../../../../images/autopilot/autopilot-background.webp"

export const AutopilotComponent = styled.div`
  padding-bottom: 40px;
  overflow: hidden;
  background-size: cover !important;
  background-position: center;
  width: 100%;
  background-image: url(${AutopilotImage});
  display: block;
  background-attachment: scroll;
  justify-content: center;

  .container {
    text-align: center;
  }

  .text-container {
    display: flex;
    padding: 60px 16px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 75px auto 0 auto;
    text-align: center;

    h1 {
      width: 600px;
    }

    span {
      padding: 0 135px;
    }

    p {
      width: 411px;
    }
  }

  .phone-circle {
    cursor: pointer;
    width: 315px;
    img {
      width: 315px;
    }
  }

  .gif-section {
    width: 268px;
    height: 260px;
    margin: auto;
    position: relative;
    margin-bottom: 40px;

    video {
      width: 268px;
      height: 260px;
    }
  }

  .data-info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    margin-top: 24px;
  }

  @media only screen and (max-width: 1020px) {
    .text-container {
      padding: 60px 16px 90px 16px;
      h1 {
        width: 100%;
        box-sizing: border-box;
      }

      span {
        padding: 0;
      }

      p {
        width: 100%;
        box-sizing: border-box;
      }
    }

    .phone-circle {
      width: 200px;
      img {
        width: 200px;
      }
    }
  }
`

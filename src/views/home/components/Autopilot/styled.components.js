import styled from "styled-components"
import AutopilotImage from "../../../../images/autopilot/autopilot-background.webp"

export const AutopilotComponent = styled.div`
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
    padding: 60px 16px 30px 16px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 75px auto 0 auto;
    text-align: center;

    h1 {
      width: 600px;
    }

    span {
      color: var(--Orange);
      padding: 0 115px;
    }

    p {
      width: 700px;
    }
  }

  .phone-circle {
    width: 315px;
    img {
      width: 315px;
    }
  }

  @media only screen and (max-width: 1020px) {
    .text-container {
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
  }
`

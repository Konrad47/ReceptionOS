import styled from "styled-components"
import AutopilotImage from "../../../../images/autopilot/autopilot-background.webp"

export const AutopilotComponent = styled.div`
  padding-bottom: 300px;
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

  .phone-wrapper {
    position: relative;
    display: inline-block;
  }

  .tooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 178px;
    box-sizing: border-box;
    margin: auto;
    margin-bottom: -30px;
    opacity: 0;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    border: 1px solid var(--Border, rgba(253, 240, 231, 0.2));
    background: linear-gradient(
      99deg,
      rgba(5, 4, 3, 0.05) 9.46%,
      rgba(5, 4, 3, 0.3) 90.62%
    );
    box-shadow: 2px 2px 8px 0px rgba(255, 255, 255, 0.15) inset;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease-in;
  }

  .phone-circle {
    cursor: pointer;
    width: 315px;
    img {
      width: 315px;
    }
  }

  .phone-wrapper:hover .tooltip {
    opacity: 1;
  }

  .data-info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    opacity: 0.7;
  }

  @media only screen and (max-width: 1020px) {
    .text-container {
      padding: 60px 16px 70px 16px;
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

    .tooltip {
      opacity: 1;
    }
  }
`

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
      color: var(--Orange);
      padding: 0 115px;
    }

    p {
      width: 700px;
    }
  }
`

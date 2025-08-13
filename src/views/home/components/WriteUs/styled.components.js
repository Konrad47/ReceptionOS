import styled from "styled-components"
import BackgroundImage from "../../../../images/writeus/writeus-background.webp"
import BackgroundImageMobile from "../../../../images/writeus/writeus-background_mobile.webp"

export const WriteUsComponent = styled.div`
  padding: 64px 0;
  overflow: hidden;
  background-size: cover !important;
  background-position: bottom;
  width: 100%;
  background-image: url(${BackgroundImage});
  display: block;
  background-attachment: scroll;
  justify-content: center;

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    text-align: center;

    button {
      margin-top: 600px;
    }
  }

  @media only screen and (max-width: 1020px) {
    background-image: none;

    .text-container {
      button {
        margin-top: 20px;
      }
    }
  }
`

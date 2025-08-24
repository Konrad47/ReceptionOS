import styled from "styled-components"
import BackgroundImage from "../../../../images/how/how-background.webp"
import BackgroundImageMobile from "../../../../images/how/how-background_mobile.webp"

export const HowItWorksComponent = styled.div`
  overflow: hidden;
  background-size: contain !important;
  background-repeat: no-repeat;
  background-position: top;
  width: 100%;
  background-image: url(${BackgroundImage});
  display: block;
  background-attachment: scroll;
  justify-content: center;

  .top-tile {
    display: flex;
    margin: 70px auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 16px;
  }

  @media only screen and (max-width: 1020px) {
    background-image: url(${BackgroundImageMobile});
    .top-tile {
      margin: 44px auto;
    }
  }
`

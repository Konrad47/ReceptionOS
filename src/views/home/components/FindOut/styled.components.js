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

  @media only screen and (max-width: 1230px) {
    background-image: url(${BackgroundImageMobile});
  }
`

import styled from "styled-components"
import BackgroundImage from "../../../../images/how/how-background.webp"

export const HowItWorksComponent = styled.div`
  overflow: hidden;
  background-size: cover !important;
  background-position: bottom;
  width: 100%;
  background-image: url(${BackgroundImage});
  display: block;
  background-attachment: scroll;
  justify-content: center;
  height: 300px;
`

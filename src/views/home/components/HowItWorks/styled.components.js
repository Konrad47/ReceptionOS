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
  height: 246px;

  .top-tile {
    display: flex;
    margin: 70px auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 16px;
  }
`

import styled from "styled-components"

export const AIWaveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
    width: 652px;
  }

  .tile-container {
    display: flex;
    gap: 16px;
    /* align-self: stretch; */
    /* flex-wrap: wrap; */
  }

  .text-tile {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
  }

  .p-body-large {
    color: #f5f5f5;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
  }

  .p-body-medium {
    font-size: 18px;
  }

  @media only screen and (max-width: 1020px) {
    .tile-container {
      flex-direction: column;
    }
  }
`

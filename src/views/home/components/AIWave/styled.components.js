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
    box-sizing: border-box;
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

    .p-body-large {
      font-weight: 600;
      line-height: 120%;
    }
  }

  .p-body-medium {
    font-size: 18px;
  }

  @media only screen and (max-width: 1020px) {
    .tile-container {
      flex-direction: column;
    }

    .text-container {
      width: 100%;
    }
  }

  @media only screen and (max-width: 700px) {
    .text-container {
      .p-body-large {
        font-size: 16px;
      }
    }

    .text-tile {
      .p-body-large {
        font-size: 18px;
      }
    }
  }
`

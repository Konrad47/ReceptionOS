import styled from "styled-components"

export const AIWaveContainer = styled.div`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  .text-container {
    display: flex;
    margin: 60px auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 16px;
    max-width: 553px;
  }

  .tile-container {
    display: flex;
    gap: 16px;
    /* align-self: stretch; */
    /* flex-wrap: wrap; */

    .image {
      flex-shrink: 0;
    }
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

  @media only screen and (max-width: 1020px) {
    padding: 40px 0;

    .text-container {
      .p-body-large {
        font-size: 16px;
      }
    }

    .text-tile {
      .p-body-large {
        font-size: 18px;
      }
      .p-body-medium {
        font-size: 16px;
      }
    }

    .ai-wave-tile {
      flex-direction: row;
      gap: 16px !important;
    }

    .tile-container {
      gap: 8px;
      .image {
        width: 32px;
        height: 32px;
        img {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
`

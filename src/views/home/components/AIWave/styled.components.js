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

    p {
      max-width: 553px;
    }
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

  .ai-wave-tile {
    display: flex;
    padding: 32px 48px auto 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    flex: 1 1 0;

    .p-new-model-18 {
      color: #ffe8d9;
    }
  }

  .text-tile {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
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

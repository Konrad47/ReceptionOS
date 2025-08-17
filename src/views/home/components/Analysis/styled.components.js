import styled from "styled-components"

export const AnalysisComponent = styled.div`
  .analysis-container {
    width: 50%;
    box-sizing: border-box;
    margin: auto;
    padding: 40px 0;

    .top-title {
      display: flex;
      max-width: 476px;
      margin: auto;

      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
    }

    .middle-text {
      display: flex;
      max-width: 261px;
      margin: auto;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      padding-top: 48px;

      .inner-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;
        align-self: stretch;
        padding-bottom: 32px;
      }
    }
  }
`

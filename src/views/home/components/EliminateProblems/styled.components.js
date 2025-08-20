import styled from "styled-components"

export const EliminateProblemsComponent = styled.div`
  padding: 60px 0;
  .top-title {
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 16px;
    max-width: 798px;
  }

  .tiles-container {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }

  .tile-container {
    display: flex;
    align-items: flex-start;
    align-self: stretch;
    gap: 24px;
    flex: 1 0 0;
    padding: 24px;
    height: 255px;
    box-sizing: border-box;

    .tile-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 8px;
      flex: 1 0 0;
    }

    .tile-right {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      gap: 8px;
      align-self: stretch;
    }
  }
`

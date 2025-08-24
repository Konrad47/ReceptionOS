import styled from "styled-components"

export const EliminateProblemsComponent = styled.div`
  padding: 60px 0;

  .bottom-rows-top-top {
    margin-bottom: 0;
    margin-left: -1px;
    width: calc(100% + 2px);
  }
  .top-title {
    display: flex;
    margin: auto;
    margin-bottom: 80px;
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

  @media only screen and (max-width: 1020px) {
    padding: 30px 0;

    .tiles-container {
      flex-direction: column;
    }
    .top-title {
      margin-bottom: 30px;
    }
  }
`

export const EPModalContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;

  .video-container {
    display: flex;
    width: 960px;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
    margin: auto;
  }
`

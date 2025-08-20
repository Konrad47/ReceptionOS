import styled from "styled-components"

export const CompareComponent = styled.div`
  .fade-wrap {
    position: relative;
  }

  .fade-wrap .fade {
    position: absolute;
    inset: 0; /* top:0; right:0; bottom:0; left:0 */
    width: 100%;
    pointer-events: none;
    opacity: 0;
    transition: all 0.2s linear;
  }

  .fade-wrap .fade.show {
    pointer-events: auto;
    opacity: 1;
  }

  .fade-1,
  .fade-2 {
    width: calc(50% + 68px);
    box-sizing: border-box;
    margin: auto;
    text-align: center;
  }

  .fade-1 {
    height: 260px;
    border-bottom: none;

    > div {
      margin-top: 79px;
    }
  }

  .fade-2 {
    height: 226px;
    z-index: 2;
    background-color: var(--Black);

    h4 {
      margin-top: 40px;
      margin-bottom: 16px;
    }
  }

  .calendar {
    width: 248px;
    z-index: 1;

    img {
      width: 248px;
    }
  }
`

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
`

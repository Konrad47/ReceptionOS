import styled from "styled-components"

export const CaseStudyComponent = styled.div`
  padding: 30px 0;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    position: relative;
  }

  .case-study-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    max-width: 960px;
    text-align: center;

    p {
      max-width: 614px;
    }
  }
  .apolonia-cs {
    width: 118px;
    img {
      width: 118px;
    }
  }

  .background-cs {
    position: absolute;
    top: 0;
    /* left: 50%; */
    /* transform: translateX(-50%); */
    z-index: -1;
  }
`

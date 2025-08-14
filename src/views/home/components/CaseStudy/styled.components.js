import styled from "styled-components"

export const CaseStudyComponent = styled.div`
  padding: 30px 0;
  position: relative;

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
    top: -80px;
    left: 60px;
    z-index: -1;
  }

  .image-cs-container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 966px;
    /* box-sizing: border-box; */
    padding: 24px;

    .apolonia-image {
      max-width: 966px;
      img {
        max-width: 966px;
      }
    }
  }

  @media only screen and (max-width: 1020px) {
    .case-study-top {
      max-width: 284px;
      p {
        max-width: 279px;
      }
    }

    .background-cs {
      top: 180px;
      left: 15%;
      width: 555px;
    }

    .image-cs-container {
      max-width: 350px;
      padding: 12px;

      .apolonia-image {
        max-width: 350px;
        img {
          max-width: 350px;
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .background-cs {
      top: 160px;
      left: -70px;
      width: 555px;
    }
  }
`

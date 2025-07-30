import styled from "styled-components"
import BackgroundImage from "../../../../images/clinics-problems/clinics-problems-background.webp"
import BackgroundImageMobile from "../../../../images/clinics-problems/clinics-problems-background-mobile.webp"

export const ClinicsProblemsComponent = styled.div`
  /* padding-bottom: 40px; */
  overflow: hidden;
  background-color: #261f17;
  background-size: cover !important;
  /* background-repeat: no-repeat; */
  background-position: bottom;
  width: 100%;
  background-image: url(${BackgroundImage});
  display: block;
  background-attachment: scroll;
  justify-content: center;

  .text-container {
    display: flex;
    width: 571px;
    box-sizing: border-box;
    padding: 80px 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;

    .text-up {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      align-self: stretch;
    }
  }

  @media only screen and (max-width: 1450px) {
    background-position: right;
  }

  @media only screen and (max-width: 1230px) {
    /* background-size: contain !important; */
    /* background-repeat: no-repeat; */
    background-position: bottom;
    background-image: url(${BackgroundImageMobile});

    .text-container {
      width: 100%;
      padding: 40px 0;
      margin-bottom: 80%;
    }
  }

  @media only screen and (max-width: 420px) {
    background-size: contain !important;
    background-repeat: no-repeat;
  }
`

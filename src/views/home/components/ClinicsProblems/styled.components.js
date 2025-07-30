import styled from "styled-components"
import BackgroundImage from "../../../../images/clinics-problems/clinics-problems-background_4x.webp"
import BackgroundImageMobile from "../../../../images/clinics-problems/clinics-problems-background-mobile.webp"

export const ClinicsProblemsComponent = styled.div`
  /* padding-bottom: 40px; */
  overflow: hidden;
  background-size: cover !important;
  background-position: bottom;
  width: 100%;
  background-image: url(${BackgroundImage});
  display: block;
  background-attachment: scroll;
  justify-content: center;

  .text-container {
    display: flex;
    width: 571px;
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
`

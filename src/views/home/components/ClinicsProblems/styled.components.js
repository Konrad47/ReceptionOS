import styled from "styled-components"
import BackgroundImage from "../../../../images/clinics-problems/clinics-problems-background.webp"
import BackgroundImageMobile from "../../../../images/clinics-problems/clinics-problems-background-mobile.webp"

export const ClinicsProblemsComponent = styled.div`
  /* padding-bottom: 40px; */
  overflow: hidden;
  background-size: cover !important;
  background-position: center;
  width: 100%;
  background-image: url(${BackgroundImage});
  display: block;
  background-attachment: scroll;
  justify-content: center;
`

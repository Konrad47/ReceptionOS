import styled from "styled-components"

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    display: grid;
  }

  a div {
    display: flex;
    justify-content: center !important;
  }

  a img {
    margin: auto;
    width: 100% !important;
    height: 80px;
  }

  img {
    max-height: 80px;
    width: 100%;
    object-fit: contain !important;
  }

  a:hover {
    background-color: rgba(255, 255, 255, 0.02);
  }

  .slick-slider {
    padding-right: 0 !important;
  }

  .slick-slider .slick-slide div {
    padding: 0;
  }

  .gatsby-image-wrapper {
    height: 120px;
  }
  .we-work-with-a-wrapper {
    display: flex !important;
    justify-items: center;
    align-items: center;
  }
  .we-work-with-a-wrapper a {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  @media (max-width: 976px) {
    a {
      padding: 0 1.6rem;
    }
  }

  @media (max-width: 568px) {
    a {
      padding: 0 2rem 0 0;
    }
  }
`

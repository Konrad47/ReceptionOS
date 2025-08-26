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
    height: 32px;
  }

  img {
    max-height: 32px;
    width: 100%;
    object-fit: contain !important;
  }

  a:hover {
    /* transition: all 0.3s ease-in !important; */
    /* background-color: rgba(255, 255, 255, 0.02); */
  }

  .slick-slider {
    padding-right: 0 !important;
  }

  .slick-slider .slick-slide div {
    padding: 0;
  }

  .we-work-with-a-wrapper {
    display: flex !important;
    justify-items: center;
    align-items: center;
    height: 44px;
    padding: 6px 22px !important;
  }
  .we-work-with-a-wrapper a {
    /* margin-right: auto !important; */
    /* margin-left: auto !important; */
  }
`

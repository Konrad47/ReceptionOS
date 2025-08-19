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
    /* height: 120px; */
  }

  .slider-tile {
    display: flex !important;
    width: 308px !important;
    flex-direction: column !important;
    align-items: center !important;
    gap: 24px !important;
    margin: auto;

    .slider-person {
      display: flex;
      align-items: center;
      gap: 24px;

      .slider-image {
        display: flex;
        padding-top: 5.5px;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        border-radius: 800px;
        height: 96px;
        width: 77px;
        box-sizing: border-box;
        border: 1.6px solid #302c29;
        background: linear-gradient(
          180deg,
          rgba(23, 23, 23, 0) 0%,
          #171717 100%
        );

        /* position: relative; */

        img {
          /* width: 100%; */
          /* position: absolute; */
          scale: 2.5;
          top: 55px;
        }
      }

      .slider-person-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 4px;
      }
    }
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

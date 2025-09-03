import styled from "styled-components"
import BackgroundImage from "../../../../../images/how-it-works/hiw-background.webp"

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

  .slick-slider {
    padding-right: 0 !important;
  }

  .slick-slider .slick-slide div {
    padding: 0;
  }

  .slider-tile {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    /* gap: 30px !important; */
    margin: auto;
    /* width: 570px; */
    /* height: calc(358px + 128px); */

    .slider-tile-left {
      display: flex;
      flex-direction: column;
    }

    .slider-tile-left-top {
      height: 64px;
      border-right: 1px solid #302c29;
    }

    .text-border {
      height: 340px;
    }

    .text-container {
      display: flex;
      /* width: 278px; */
      flex-direction: column;
      align-items: flex-start;
      vertical-align: middle;
      gap: 18px;
      padding: 0 32px !important;
      margin: auto;
    }

    .slider-tile-right {
      background-size: cover !important;
      background-position: bottom;
      background-image: url(${BackgroundImage});
      background-attachment: scroll;
      display: flex;
      flex-direction: row;

      .video-space-side {
        width: 30px;
        display: flex;
        flex-direction: column;

        .side-1,
        .side-3 {
          height: 64px;
        }

        .side-2 {
          height: 339px;
          border-top: 1px solid #302c29;
          border-bottom: 1px solid #302c29;
        }
      }

      .slider-tile-right-top,
      .slider-tile-right-bottom {
        height: 64px;
        border-top: none;
        border-bottom: none;
      }

      .slider-tile-right-top {
        .left-top,
        .right-top {
          display: none;
        }
      }

      .slider-tile-right-bottom {
        .left-bottom,
        .right-bottom {
          display: none;
        }
      }

      .video-space-middle {
        .slider-video {
          height: 338px;

          video {
            height: 337px;
          }
        }
      }
    }
  }

  .slick-dots {
    bottom: -58px;
    z-index: 2;
    display: flex !important;
    align-items: center;
    padding: 6px;
    gap: 6px;
    border-radius: 500px;
    border: 1px solid #302c29;
    background: #1f140c;
    width: fit-content;
    box-sizing: border-box;
    left: 50%;
    transform: translateX(-50%);
  }

  .slick-dots li {
    margin: 0;
    width: 8px;
    height: 8px;
  }

  .slick-dots li button:before {
    display: none;
  }

  .slick-dots li button {
    width: 8px;
    height: 8px;
    border-radius: 100px;
    opacity: 0.4;
    background: #5b483a;
  }

  .slick-dots .slick-active {
    width: 28px;
  }

  .slick-dots .slick-active button {
    width: 28px;
    background: linear-gradient(
        129deg,
        rgba(231, 98, 32, 0) 35.85%,
        rgba(231, 98, 32, 0.2) 72.26%
      ),
      linear-gradient(
        0deg,
        rgba(230, 105, 40, 0.1) 0%,
        rgba(230, 105, 40, 0.1) 100%
      ),
      linear-gradient(180deg, rgba(13, 7, 2, 0) 0%, rgba(115, 59, 21, 0.2) 100%);
    background-blend-mode: color-dodge, normal, normal;
    box-shadow: 0 0.5px 1px -1px rgba(255, 255, 255, 0.25) inset,
      0 0 3px -1px rgba(255, 255, 255, 0.54) inset;
  }

  @media only screen and (max-width: 1020px) {
    .slick-dots {
      bottom: -38px;
    }
  }

  @media only screen and (max-width: 450px) {
    .slider-tile {
      width: 275px !important;
    }
  }
`

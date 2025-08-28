import styled from "styled-components"

export const LocalVideoSection = styled.div`
  width: 572px;
  height: 340px;
  video {
    object-fit: cover;
    object-position: center;
    position: absolute;
    z-index: 1;
    min-height: 50px;
    width: 570px;
    height: 338px;
    top: 1px;
  }

  @media only screen and (max-width: 650px) {
    width: 352px;
    height: 214px;

    video {
      width: 350px;
      height: 212px;
    }
  }

  @media only screen and (max-width: 400px) {
    width: 322px;
    height: 182px;

    video {
      width: 320px;
      height: 180px;
    }
  }
`

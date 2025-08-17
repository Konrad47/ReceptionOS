import styled, { css } from "styled-components"

export const TileComponent = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: ${props => props.gap || "16px"};
  border-radius: 16px;
  border: 1px solid var(--Border, rgba(253, 240, 231, 0.2));
  background: #261f17;
  flex: 1 1 0;
`

export const SmallSquareOrangeTile = styled.div`
  display: flex;
  width: 44px;
  height: 44px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease-in !important;
  cursor: pointer;
  border-radius: 16px;
  border: 1px solid var(--Border, rgba(253, 240, 231, 0.2));
  background: linear-gradient(
    99deg,
    rgba(235, 103, 15, 0.05) 9.46%,
    rgba(235, 103, 15, 0.3) 90.62%
  );
  box-shadow: 2px 2px 8px 0px rgba(255, 255, 255, 0.15) inset;
  backdrop-filter: blur(5px);

  p {
    align-self: stretch;
    color: var(--Orange, #eb670f);
    text-align: center;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
`

export const SmallSquareOrangeTileSvg = styled(SmallSquareOrangeTile)`
  border-radius: 8px;
  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`
export const SmallSquareTile = styled(SmallSquareOrangeTile)`
  gap: 4px;
  border: 1px solid var(--Border, rgba(253, 240, 231, 0.2));
  background: linear-gradient(
    99deg,
    rgba(5, 4, 3, 0.05) 9.46%,
    rgba(5, 4, 3, 0.3) 90.62%
  );
  box-shadow: -2px -2px 8px 0px rgba(255, 255, 255, 0.4) inset;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease-in-out !important;
  cursor: pointer;

  p {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  &:hover {
    border: 1px solid var(--Border, rgba(253, 240, 231, 0.2));
    background: linear-gradient(
      99deg,
      rgba(255, 255, 255, 0.05) 9.46%,
      rgba(255, 255, 255, 0.3) 90.62%
    );
    box-shadow: -2px -2px 8px 0px rgba(255, 255, 255, 0.4) inset;

    @media only screen and (max-width: 1020px) {
      border: 1px solid var(--Border, rgba(253, 240, 231, 0.2));
      background: linear-gradient(
        99deg,
        rgba(5, 4, 3, 0.05) 9.46%,
        rgba(5, 4, 3, 0.3) 90.62%
      );
      box-shadow: -2px -2px 8px 0px rgba(255, 255, 255, 0.4) inset;
    }
  }
`

export const Subtitle = styled.p`
  color: var(--Orange, #eb670f);

  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  @media only screen and (max-width: 1020px) {
    font-size: 18px;
  }
`

export const ButtonDarkBorder = styled.button`
  color: #fffdfd;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.32px;
  cursor: pointer;

  display: flex;
  height: 44px;
  box-sizing: border-box;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  border: 1px solid var(--Border, rgba(253, 240, 231, 0.2));
  background: linear-gradient(
    99deg,
    rgba(5, 4, 3, 0.05) 9.46%,
    rgba(5, 4, 3, 0.3) 90.62%
  );
  box-shadow: -2px -2px 8px 0 rgba(255, 255, 255, 0.4) inset;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(
      99deg,
      rgba(255, 255, 255, 0.05) 9.46%,
      rgba(255, 255, 255, 0.3) 90.62%
    );
  }

  @media only screen and (max-width: 1020px) {
    &:hover {
      background: linear-gradient(
        99deg,
        rgba(5, 4, 3, 0.05) 9.46%,
        rgba(5, 4, 3, 0.3) 90.62%
      );
    }
  }
`

export const ButtonOrangeBorder = styled(ButtonDarkBorder)`
  border: 1px solid var(--Orange, #eb670f);
  box-shadow: -2px -2px 8px 0 rgba(255, 255, 255, 0.4) inset;

  &:hover {
    background: linear-gradient(
      99deg,
      rgba(235, 103, 15, 0.05) 9.46%,
      rgba(235, 103, 15, 0.3) 90.62%
    );
    box-shadow: 2px 2px 8px 0 rgba(255, 255, 255, 0.15) inset;
  }

  @media only screen and (max-width: 1020px) {
    &:hover {
      background: linear-gradient(
        99deg,
        rgba(5, 4, 3, 0.05) 9.46%,
        rgba(5, 4, 3, 0.3) 90.62%
      );
      box-shadow: -2px -2px 8px 0 rgba(255, 255, 255, 0.4) inset;
    }
  }
`

export const WhiteButton = styled.button`
  color: #242424;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  cursor: pointer;

  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease-in-out;

  /* &:hover {

  @media only screen and (max-width: 1020px) {
    
  }
  } */
`

export const RoundedButtonSvg = styled.button`
  display: flex;
  width: 48px;
  height: 48px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 500px;
  border: none;
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

  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(230, 105, 40, 0.1);
    /* background: linear-gradient(
        129deg,
        rgba(231, 98, 32, 0) 35.85%,
        rgba(231, 98, 32, 0.33) 72.26%
      ),
      linear-gradient(
        0deg,
        rgba(230, 105, 40, 0.2) 0%,
        rgba(230, 105, 40, 0.2) 100%
      ),
      linear-gradient(180deg, rgba(13, 7, 2, 0) 0%, rgba(115, 59, 21, 0.2) 100%);
    background-blend-mode: color-dodge, normal, normal;
    box-shadow: 0 0.5px 1px -1px rgba(255, 255, 255, 0.25) inset,
      0 0 3px -1px rgba(255, 255, 255, 0.54) inset; */
  }

  @media only screen and (max-width: 1020px) {
    &:hover {
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
        linear-gradient(
          180deg,
          rgba(13, 7, 2, 0) 0%,
          rgba(115, 59, 21, 0.2) 100%
        );
      background-blend-mode: color-dodge, normal, normal;
      box-shadow: 0 0.5px 1px -1px rgba(255, 255, 255, 0.25) inset,
        0 0 3px -1px rgba(255, 255, 255, 0.54) inset;
    }
  }
`

export const RoundedButtonSvgDark = styled(RoundedButtonSvg)`
  border: 1px solid #302c29;
  background: linear-gradient(
      90deg,
      rgba(255, 173, 156, 0.07) 0.01%,
      rgba(255, 156, 156, 0.07) 50.01%,
      rgba(255, 169, 156, 0.07) 100%
    ),
    linear-gradient(180deg, rgba(13, 7, 2, 0) 0%, rgba(115, 59, 21, 0.3) 100%),
    #0f0c0a;
`

export const RoundedButtonOrange = styled.button`
  display: inline-flex;
  height: 56px;
  box-sizing: border-box;
  padding: 0 32px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border: none;
  border-radius: 500px;
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

  transition: all 0.3s ease-in-out;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  color: #ffe8d9;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  &:hover {
    background-color: rgba(230, 105, 40, 0.1);
    /* background: linear-gradient(
        129deg,
        rgba(231, 98, 32, 0) 35.85%,
        rgba(231, 98, 32, 0.33) 72.26%
      ),
      linear-gradient(
        0deg,
        rgba(230, 105, 40, 0.2) 0%,
        rgba(230, 105, 40, 0.2) 100%
      ),
      linear-gradient(180deg, rgba(13, 7, 2, 0) 0%, rgba(115, 59, 21, 0.2) 100%);
    background-blend-mode: color-dodge, normal, normal;
    box-shadow: 0 0.5px 1px -1px rgba(255, 255, 255, 0.25) inset,
      0 0 3px -1px rgba(255, 255, 255, 0.54) inset; */
  }

  @media only screen and (max-width: 1020px) {
    &:hover {
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
        linear-gradient(
          180deg,
          rgba(13, 7, 2, 0) 0%,
          rgba(115, 59, 21, 0.2) 100%
        );
      background-blend-mode: color-dodge, normal, normal;
      box-shadow: 0 0.5px 1px -1px rgba(255, 255, 255, 0.25) inset,
        0 0 3px -1px rgba(255, 255, 255, 0.54) inset;
    }
  }
`

export const RoundedInfoTile = styled.div`
  display: flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  background: linear-gradient(
      90deg,
      rgba(255, 173, 156, 0.07) 0.01%,
      rgba(255, 156, 156, 0.07) 50.01%,
      rgba(255, 169, 156, 0.07) 100%
    ),
    linear-gradient(180deg, rgba(13, 7, 2, 0) 0%, rgba(115, 59, 21, 0.3) 100%),
    #0f0c0a;

  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    background: linear-gradient(
      90deg,
      rgba(255, 236, 210, 0.8) 0%,
      rgba(255, 131, 74, 0.8) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  ${props =>
    props.disabled &&
    css`
      background: linear-gradient(
          90deg,
          rgba(255, 173, 156, 0.07) 0.01%,
          rgba(255, 156, 156, 0.07) 50.01%,
          rgba(255, 169, 156, 0.07) 100%
        ),
        rgba(15, 12, 10, 0.2) !important;

      p {
        opacity: 0.5;
      }
    `}
`

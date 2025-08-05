import styled from "styled-components"

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

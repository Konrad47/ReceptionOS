import styled from "styled-components"

export const Tile16 = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 16px;
  border: 1px solid var(--Border, rgba(253, 240, 231, 0.2));
  background: #261f17;
`

export const SmallSquareTile = styled.div`
  display: flex;
  width: 44px;
  height: 44px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
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

export const SmallSquareTileSvg = styled(SmallSquareTile)`
  border-radius: 8px;
  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`

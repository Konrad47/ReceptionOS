import styled from "styled-components"

export const MenuComponent = styled.div`
  display: flex;
  height: 75px;
  padding: 16px 140px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  .navigation-component {
    display: flex;
    align-items: center;
    gap: 108px;

    img {
      width: 138px;
      /* flex-shrink: 0; */
    }

    .links {
      display: flex;
      align-items: center;
      gap: 16px;

      .link {
        display: flex;
        height: 44px;
        padding: 8px 16px;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        gap: 4px;
        /* border-radius: 12px;
        box-shadow: -2px -2px 8px 0px rgba(255, 255, 255, 0.4) inset;
        backdrop-filter: blur(5px); */

        a {
          color: #fffdfd;
          font-family: Montserrat;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 0.32px;
          text-decoration: none;
        }
      }
    }
  }
`

import styled from "styled-components"

export const PriceListComponent = styled.div`
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  .top {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .bottom {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 16px; */

    .pricing-container {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
    }

    .price-tile {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      align-self: stretch;
      gap: 56px;
      flex: 1 0 0;
      padding: 24px;

      .price-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
      }

      .price-bottom {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;

        span {
          font-size: 24px;
          font-weight: 400;
        }
      }

      .list-text {
        color: #a3948b;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 1.2px;
        text-transform: uppercase;
      }

      .price-li {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        align-self: stretch;

        svg {
          flex-shrink: 0;
        }
      }
    }
  }
`

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
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 16px; */

    .pricing-container {
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
    }
  }
`

import styled from "styled-components"

export const FooterComponent = styled.div`
  display: flex;
  padding: 24px 24px 16px 24px;
  align-items: flex-start;
  gap: 24px;
  border-radius: 16px;
  border: 1px solid var(--Border, rgba(253, 240, 231, 0.2));
  background: #261f17;

  .footer-1 {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    flex: 1 0 0;

    .ros-image-small {
      width: 44px !important;
      img {
        width: 44px !important;
        flex-shrink: 0;
      }
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 16px;

      p {
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }

      a {
        color: #f5f5f5;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration: none;
      }
    }
  }

  .footer-2 {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: flex-start;
    gap: 8px;
    flex: 1 0 0;

    .icons {
      display: flex;
      align-items: flex-start;
      gap: 8px;
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`

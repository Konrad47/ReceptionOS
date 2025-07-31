import styled from "styled-components"

export const FooterComponent = styled.div`
  display: flex;
  padding: 24px 24px 16px 24px;
  margin-bottom: 60px;
  align-items: flex-start;
  gap: 24px;
  border-radius: 16px;
  border: 1px solid var(--Border, rgba(253, 240, 231, 0.2));
  background: #261f17;

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
    }
  }

  .footer-2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    flex: 1 0 0;

    .icons {
      display: flex;
      align-items: flex-start;
      gap: 8px;

      a {
        display: flex;
        width: 44px;
        height: 44px;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        border: 1px solid var(--Border, rgba(253, 240, 231, 0.2));
        background: linear-gradient(
          99deg,
          rgba(5, 4, 3, 0.05) 9.46%,
          rgba(5, 4, 3, 0.3) 90.62%
        );
        box-shadow: -2px -2px 8px 0 rgba(255, 255, 255, 0.4) inset;
        backdrop-filter: blur(5px);
        transition: 0.3s all ease-in-out;

        &:hover {
          padding-left: 6px;
          background: linear-gradient(
            99deg,
            rgba(255, 255, 255, 0.05) 9.46%,
            rgba(255, 255, 255, 0.3) 90.62%
          );
        }
      }
    }
  }

  .footer-3 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    flex: 1 0 0;

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      a {
        text-decoration: underline;
      }
    }
  }
`

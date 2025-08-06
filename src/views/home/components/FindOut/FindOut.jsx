import React from "react"
import { FindOutComponent } from "./styled.components"
import { ButtonOrangeBorder, Subtitle, WhiteButton } from "../../../../styled.components"

const FindOut = ({ t }) => {

  return (
    <>
      <FindOutComponent>
        <div className="container">
          <div className="left-container">
            <div className="top">
              <Subtitle>{t`home.FindOut.subtitle`}</Subtitle>
              <h2>{t`home.FindOut.title`}</h2>
            </div>
            <div className="middle">
              {['1', '2', '3'].
                map(key => (
                  <div key={key} className="point">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6947 7.29279C18.8822 7.48031 18.9875 7.73462 18.9875 7.99979C18.9875 8.26495 18.8822 8.51926 18.6947 8.70679L10.6947 16.7068C10.5072 16.8943 10.2529 16.9996 9.98771 16.9996C9.72255 16.9996 9.46824 16.8943 9.28071 16.7068L5.28071 12.7068C5.09855 12.5182 4.99776 12.2656 5.00004 12.0034C5.00232 11.7412 5.10749 11.4904 5.29289 11.305C5.4783 11.1196 5.72911 11.0144 5.99131 11.0121C6.25351 11.0098 6.50611 11.1106 6.69471 11.2928L9.98771 14.5858L17.2807 7.29279C17.4682 7.10532 17.7225 7 17.9877 7C18.2529 7 18.5072 7.10532 18.6947 7.29279Z" fill="#EB670F" />
                    </svg>
                    <p className="p-body-large">{t(`home.FindOut.point${key}`)}</p>
                  </div>
                ))
              }
            </div>
            <div className="bottom">
              <ButtonOrangeBorder>{t(`home.FindOut.button-order`)}</ButtonOrangeBorder>
              <WhiteButton>{t(`home.FindOut.button-price`)}</WhiteButton>
            </div>
          </div>
        </div>
      </FindOutComponent>
    </>
  )
}
export default FindOut

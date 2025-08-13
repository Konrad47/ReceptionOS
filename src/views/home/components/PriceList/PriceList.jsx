import React from "react"
import { PriceListComponent } from "./styled.components"
import { RoundedInfoTile } from "../../../../styled.components"

const PriceList = ({ t }) => {

  return (
    <>
      <div className="container">
        <PriceListComponent>
          <div className="top">
            <RoundedInfoTile>
              <p>{t('home.PriceList.price-list')}</p>
            </RoundedInfoTile>
            <h2>{t('home.PriceList.title')}</h2>
          </div>
        </PriceListComponent>
      </div>
    </>
  )
}
export default PriceList

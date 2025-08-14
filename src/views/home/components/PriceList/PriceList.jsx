import React from "react"
import { PriceListComponent } from "./styled.components"
import { RoundedInfoTile } from "../../../../styled.components"
import { BorderContainer4Rows } from "../../../../components/BorderContainer/BorderContainer4Rows"

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
          <div className="bottom">
            <div className="pricing-container">
              {[{ name: 'Starter', disable: true },
              { name: 'Optimum', disable: true },
              { name: 'Elite', disable: false }
              ].map((item, index) => (
                <BorderContainer4Rows key={index} className="price-tile">
                  <div className="price-top">
                    <RoundedInfoTile>
                      <p>{t(`home.PriceList.${item.name}-info1`)}</p>
                    </RoundedInfoTile>
                    <RoundedInfoTile disabled={item.disable}>
                      <p>{t(`home.PriceList.${item.name}-info2`)}</p>
                    </RoundedInfoTile>
                  </div>
                </BorderContainer4Rows>
              ))
              }
            </div>
          </div>
        </PriceListComponent>
      </div>
    </>
  )
}
export default PriceList

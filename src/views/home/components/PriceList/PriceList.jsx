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
              {[{
                name: 'Starter',
                disable: true,
                listText: false,
                list: ['1', '2', '3', '4']
              },
              {
                name: 'Optimum',
                disable: true,
                listText: true,
                list: ['1', '2', '3', '4']
              },
              {
                name: 'Elite',
                disable: false,
                listText: true,
                list: ['1', '2', '3', '4']
              }
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
                  <div className="price-bottom">
                    <h3>{parseInt(t(`home.PriceList.${item.name}-pricing`))} PLN <span>/ msc</span></h3>
                    {item.listText && (
                      <p className="list-text">{t(`home.PriceList.${item.name}-list-text`)}</p>
                    )}
                    {item.list.
                      map(key => (
                        <div key={key} className="price-li">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M3.33325 10.8333L7.49992 15L16.6666 5" stroke="#FFE8D9" stroke-linejoin="round" />
                          </svg>
                          <p className="p-new-model-16 ">{t(`home.PriceList.${item.name}-li${key}`)}</p>
                        </div>
                      ))
                    }
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

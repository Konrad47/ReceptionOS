import React from "react"
import { HowItWorksComponent } from "./styled.components"
import { BorderContainerNoRowsSides } from "../../../../components/BorderContainer/BorderContainerNoRowsSides"
import { RoundedInfoTile } from "../../../../styled.components"

const HowItWorks = ({ t }) => {

  return (
    <>
      <HowItWorksComponent>
        <div className="container">
          <BorderContainerNoRowsSides>
            <div className="top-tile">
              <RoundedInfoTile>
                <p>{t('home.HowItWorks.how-it-works')}</p>
              </RoundedInfoTile>
              <h3>{t('home.HowItWorks.title')}</h3>
            </div>
          </BorderContainerNoRowsSides>
        </div>
      </HowItWorksComponent>
    </>
  )
}
export default HowItWorks

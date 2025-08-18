import React from "react"
import { PartnersAboutUsComponent } from "./styled.components"
import { BorderContainerBottomRowsSides } from "../../../../components/BorderContainer/BorderContainerBottomRowsSides";
import { RoundedInfoTile } from "../../../../styled.components";

const PartnersAboutUs = ({ t }) => {

  return (
    <>
      <div className="container">
        <PartnersAboutUsComponent>
          <BorderContainerBottomRowsSides className="pau-container">
            <div className="top-title">
              <RoundedInfoTile>
                <p>{t('home.PartnersAboutUs.partners-about-us')}</p>
              </RoundedInfoTile>
              <h4>{t('home.PartnersAboutUs.title')}</h4>
            </div>
          </BorderContainerBottomRowsSides>
        </PartnersAboutUsComponent>
      </div>
    </>
  )
}
export default PartnersAboutUs

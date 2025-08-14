import React from "react"
import { AboutUsComponent } from "./styled.components"
import { RoundedInfoTile } from "../../../../styled.components"
import { Trans } from "react-i18next"

const AboutUs = ({ t }) => {

  return (
    <>
      <div className="container">
        <AboutUsComponent>
          <div className="about-us-top">
            <RoundedInfoTile>
              <p>{t('home.AboutUs.about-us')}</p>
            </RoundedInfoTile>
            <h3>{t('home.AboutUs.title')}</h3>
            <p className="p-new-model-16">
              <Trans
                i18nKey="home.AboutUs.description"
                components={{
                  span: <span></span>
                }}
              />
            </p>
          </div>
        </AboutUsComponent>
      </div>
    </>
  )
}
export default AboutUs

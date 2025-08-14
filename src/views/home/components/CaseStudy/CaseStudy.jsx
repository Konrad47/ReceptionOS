import React from "react"
import { CaseStudyComponent } from "./styled.components"
import { RoundedButtonOrange, RoundedInfoTile } from "../../../../styled.components"
import { StaticImage } from "gatsby-plugin-image"
import { BorderContainer4Rows } from "../../../../components/BorderContainer/BorderContainer4Rows"

const CaseStudy = ({ t }) => {

  return (
    <>
      <CaseStudyComponent>

        <div className="container">
          <StaticImage
            className="background-cs mobile"
            src="../../../../images/case-study/case-study-background_mobile.webp"
            alt="apolonia"
            placeholder="apolonia"
            loading="lazy"
          />
          <StaticImage
            className="background-cs desktop"
            src="../../../../images/case-study/case-study-background.webp"
            alt="apolonia"
            placeholder="apolonia"
            loading="lazy"
          />
          <div className="case-study-top">
            <RoundedInfoTile>
              <p>{t('home.CaseStudy.case-study')}</p>
            </RoundedInfoTile>
            <h2>{t('home.CaseStudy.title')}</h2>
            <p className="p-new-model-16">
              {t('home.CaseStudy.description')}
            </p>
          </div>
          <StaticImage
            className="apolonia-cs"
            src="../../../../images/case-study/apolonia-logo.webp"
            alt="apolonia"
            placeholder="apolonia"
            loading="lazy"
          />
          <BorderContainer4Rows className="image-cs-container">
            <StaticImage
              className="apolonia-image"
              src="../../../../images/case-study/apolonia-image.webp"
              alt="apolonia img"
              placeholder="apolonia img"
              loading="lazy"
            />
          </BorderContainer4Rows>
          <RoundedButtonOrange>
            {t('home.CaseStudy.button')}
          </RoundedButtonOrange>
        </div>
      </CaseStudyComponent>
    </>
  )
}
export default CaseStudy

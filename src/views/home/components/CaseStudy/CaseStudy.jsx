import React from "react"
import { CaseStudyComponent } from "./styled.components"
import { RoundedInfoTile } from "../../../../styled.components"
import { StaticImage } from "gatsby-plugin-image"

const CaseStudy = ({ t }) => {

  return (
    <>
      <CaseStudyComponent>
        <div className="container">
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
        </div>
      </CaseStudyComponent>
    </>
  )
}
export default CaseStudy

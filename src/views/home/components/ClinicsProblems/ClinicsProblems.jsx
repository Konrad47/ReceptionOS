import React from "react"
import { ClinicsProblemsComponent } from "./styled.components"
import { Trans } from 'react-i18next';
import { Subtitle } from "../../../../styled.components";

const ClinicsProblems = ({ t }) => {

  return (
    <>
      <ClinicsProblemsComponent>
        <div className="container">
          <div className="text-container">
            <div className="text-up">
              <Subtitle>{t(`home.ClinicsProblems.subtitle`)}</Subtitle>
              <h2>{t(`home.ClinicsProblems.title`)}</h2>
            </div>
            <p className="p-body-large">
              <Trans
                i18nKey="home.ClinicsProblems.description"
                components={{
                  b: <b></b>
                }}
              />
            </p>
          </div>
        </div>
      </ClinicsProblemsComponent>
    </>
  )
}
export default ClinicsProblems

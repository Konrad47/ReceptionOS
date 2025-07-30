import React from "react"
import { ClinicsProblemsComponent } from "./styled.components"

const ClinicsProblems = ({ t }) => {

  return (
    <>
      <ClinicsProblemsComponent>
        <div className="container">
          <div className="text-container">
            <div className="text-up">
              <h2>{t(`home.ClinicsProblems.title`)}</h2>
            </div>
            <p className="p-body-large">{t(`home.ClinicsProblems.description`)}</p>
          </div>
        </div>
      </ClinicsProblemsComponent>
    </>
  )
}
export default ClinicsProblems

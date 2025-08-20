import React from "react"
import { EliminateProblemsComponent } from "./styled.components"
import { RoundedInfoTile } from "../../../../styled.components"

const EliminateProblems = ({ t }) => {

  return (
    <>
      <div className="container">
        <EliminateProblemsComponent>
          <div className="top-title">
            <RoundedInfoTile>
              <p>{t('home.EliminateProblems.eliminate-problems')}</p>
            </RoundedInfoTile>
            <h3>{t('home.EliminateProblems.title')}</h3>
            <p className="p-new-model-18 ">{t('home.EliminateProblems.description')}</p>
          </div>
        </EliminateProblemsComponent>
      </div>
    </>
  )
}
export default EliminateProblems

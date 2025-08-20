import React from "react"
import { EliminateProblemsComponent } from "./styled.components"
import { RoundedButtonSvg, RoundedInfoTile } from "../../../../styled.components"
import { BorderContainer4Rows } from "../../../../components/BorderContainer/BorderContainer4Rows"

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
            <p className="p-new-model-18">{t('home.EliminateProblems.description')}</p>
          </div>
          <div className="tiles-container">
            {['1', '2', '3']
              .map(key => (
                <BorderContainer4Rows key={key} className="tile-container">
                  <div className="tile-left">
                    <p className="p-new-model-18">{t(`home.EliminateProblems.tile${key}-title`)}</p>
                    <p className="p-new-model-16">{t(`home.EliminateProblems.tile${key}-description`)}</p>
                  </div>
                  <div className="tile-right">
                    <RoundedButtonSvg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M2.92871 9.99995H17.0716M17.0716 9.99995L11.5716 4.5M17.0716 9.99995L11.5716 15.4999" stroke="#FFE8D9" stroke-linejoin="round" />
                      </svg>
                    </RoundedButtonSvg>
                  </div>
                </BorderContainer4Rows>
              ))
            }
          </div>
        </EliminateProblemsComponent>
      </div>
    </>
  )
}
export default EliminateProblems

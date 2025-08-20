import React, { useState } from "react"
import { EliminateProblemsComponent, EPModalContainer } from "./styled.components"
import { RoundedButtonSvg, RoundedInfoTile } from "../../../../styled.components"
import { BorderContainer4Rows } from "../../../../components/BorderContainer/BorderContainer4Rows"
import { BorderContainerBottomRowsTop } from "../../../../components/BorderContainer/BorderContainerBottomRowsTop"
import { BorderContainerTopRowsBottom2 } from "../../../../components/BorderContainer/BorderContainerTopRowsBottom2"
import BaseModal from "../../../../components/BaseModal/BaseModal"

const EliminateProblems = ({ t }) => {
  const [isModal, setIsModal] = useState(false);
  const [childrenContent, setChildrenContent] = useState(<p className="p-new-model-18">1</p>);

  const openModal = (content) => {
    setChildrenContent(content);
    setIsModal(true);
  }

  const Children = () => (
    <EPModalContainer>
      <div className="video-container">
        {childrenContent}
      </div>
    </EPModalContainer>
  )

  const props = {
    children: Children()
  }

  const modalStyles = {
    overlay: {
      zIndex: 103,
      background: 'rgba(0,0,0,0.3)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    content: {
      margin: 'auto',
      padding: '0',
      inset: '0',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      border: "none",
      borderRadius: '0px',
      background: 'transparent',
    }
  }
  return (
    <>
      <BaseModal
        isModal={isModal}
        props={props}
        modalStyles={modalStyles}
      />
      <div className="container">
        <EliminateProblemsComponent>
          <div className="top-title">
            <RoundedInfoTile>
              <p>{t('home.EliminateProblems.eliminate-problems')}</p>
            </RoundedInfoTile>
            <h3>{t('home.EliminateProblems.title')}</h3>
            <p className="p-new-model-18">{t('home.EliminateProblems.description')}</p>
          </div>
          <BorderContainerBottomRowsTop />
          <div className="tiles-container">
            {['1', '2', '3']
              .map(key => (
                <BorderContainer4Rows key={key} className="tile-container">
                  <div className="tile-left">
                    <p style={{ color: '#FFE8D9' }} className="p-new-model-18">{t(`home.EliminateProblems.tile${key}-title`)}</p>
                    <p className="p-new-model-16">{t(`home.EliminateProblems.tile${key}-description`)}</p>
                  </div>
                  <div className="tile-right">
                    <RoundedButtonSvg onClick={() => openModal(<p className="p-new-model-18">{key}</p>)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M2.92871 9.99995H17.0716M17.0716 9.99995L11.5716 4.5M17.0716 9.99995L11.5716 15.4999" stroke="#FFE8D9" stroke-linejoin="round" />
                      </svg>
                    </RoundedButtonSvg>
                  </div>
                </BorderContainer4Rows>
              ))
            }
          </div>
          <BorderContainerTopRowsBottom2 />
        </EliminateProblemsComponent>
      </div>
    </>
  )
}
export default EliminateProblems

import React from "react"
import { WriteUsComponent } from "./styled.components"
import { ButtonDarkBorder } from "../../../../styled.components"

const WriteUs = ({ t }) => {

  return (
    <>
      <div className="container">
        <WriteUsComponent>
          <div className="text-container">
            <h2>{t('home.WriteUs.title')}</h2>
            <p className="p-body-large">{t('home.WriteUs.description')}</p>
          </div>
          <ButtonDarkBorder>{t('home.WriteUs.button')}</ButtonDarkBorder>
        </WriteUsComponent>
      </div>
    </>
  )
}
export default WriteUs

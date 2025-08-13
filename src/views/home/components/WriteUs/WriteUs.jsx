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
            <p className="p-new-model-16">{t('home.WriteUs.description')}</p>
            <ButtonDarkBorder>{t('home.WriteUs.button')}</ButtonDarkBorder>
          </div>
        </WriteUsComponent>
      </div>
    </>
  )
}
export default WriteUs

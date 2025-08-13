import React from "react"
import { WriteUsComponent } from "./styled.components"
import { RoundedButtonOrange } from "../../../../styled.components"

const WriteUs = ({ t }) => {

  return (
    <>
      <div className="container">
        <WriteUsComponent>
          <div className="text-container">
            <h2>{t('home.WriteUs.title')}</h2>
            <p className="p-new-model-16">{t('home.WriteUs.description')}</p>
            <RoundedButtonOrange>{t('home.WriteUs.button')}</RoundedButtonOrange>
          </div>
        </WriteUsComponent>
      </div>
    </>
  )
}
export default WriteUs

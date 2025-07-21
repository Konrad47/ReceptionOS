import React from "react"
import { AIWaveContainer } from "./styled.components"

const AIWave = ({ t }) => {

  return (
    <>
      <div className="container">
        <AIWaveContainer>
          <div className="text-container">
            <h2>{t(`home.AIWave.title`)}</h2>
            <p className="p-body-large">{t(`home.AIWave.description`)}</p>
          </div>
        </AIWaveContainer>
      </div>
    </>
  )
}
export default AIWave

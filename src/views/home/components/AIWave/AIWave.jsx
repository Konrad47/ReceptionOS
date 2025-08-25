import React from "react"
import { AIWaveContainer } from "./styled.components"
import { RoundedInfoTile, TileComponent } from "../../../../styled.components"
import { StaticImage } from "gatsby-plugin-image"

const AIWave = ({ t }) => {

  return (
    <>
      <div className="container">
        <AIWaveContainer>
          <div className="text-container">
            <RoundedInfoTile>
              <p>{t('home.AIWave.ai-wave')}</p>
            </RoundedInfoTile>
            <h2>{t(`home.AIWave.title`)}</h2>
            <p className="p-new-model-18 ">{t(`home.AIWave.description`)}</p>
          </div>
          <div className="tile-container">
            <TileComponent gap="24px" className="ai-wave-tile">
              <StaticImage
                className="image"
                src="../../../../images/aiwave/time.svg"
                alt="image"
                placeholder="image"
                loading="lazy"
              />
              <div className="text-tile">
                <p className="p-body-large">{t(`home.AIWave.tile-title-1`)}</p>
                <p className="p-body-medium">{t(`home.AIWave.tile-description-1`)}</p>
              </div>
            </TileComponent>
            <TileComponent gap="24px" className="ai-wave-tile">
              <StaticImage
                className="image"
                src="../../../../images/aiwave/book.svg"
                alt="image"
                placeholder="image"
                loading="lazy"
              />
              <div className="text-tile">
                <p className="p-body-large">{t(`home.AIWave.tile-title-2`)}</p>
                <p className="p-body-medium">{t(`home.AIWave.tile-description-2`)}</p>
              </div>
            </TileComponent>
            <TileComponent gap="24px" className="ai-wave-tile">
              <StaticImage
                className="image"
                src="../../../../images/aiwave/message.svg"
                alt="image"
                placeholder="image"
                loading="lazy"
              />
              <div className="text-tile">
                <p className="p-body-large">{t(`home.AIWave.tile-title-3`)}</p>
                <p className="p-body-medium">{t(`home.AIWave.tile-description-3`)}</p>
              </div>
            </TileComponent>
            <TileComponent gap="24px" className="ai-wave-tile">
              <StaticImage
                className="image"
                src="../../../../images/aiwave/chart.svg"
                alt="image"
                placeholder="image"
                loading="lazy"
              />
              <div className="text-tile">
                <p className="p-body-large">{t(`home.AIWave.tile-title-4`)}</p>
                <p className="p-body-medium">{t(`home.AIWave.tile-description-4`)}</p>
              </div>
            </TileComponent>
          </div>
        </AIWaveContainer>
      </div>
    </>
  )
}
export default AIWave

import React from "react"
import { HowItWorksComponent, HowItWorksSliderComponent } from "./styled.components"
import { BorderContainerNoRowsSides } from "../../../../components/BorderContainer/BorderContainerNoRowsSides"
import { RoundedInfoTile } from "../../../../styled.components"
import SliderComponent from "./Slider"

import Video1 from '../../../../assets/videos/how/ANIMACJA_KALENDARZ_ALPHA_1.webm';
import Video2 from '../../../../assets/videos/how/ANIMACJA_NOSHOW_1_1.webm';
import Video3 from '../../../../assets/videos/how/ANIMACJA_ROZMOWA_SMS_ALPHA_1_1.webm';
import Video4 from '../../../../assets/videos/how/ANIMACJA_UMOWIONE_ALPHA_1_1.webm';
import Video5 from '../../../../assets/videos/how/KALENDARZ KASOWANIE_1.webm';
const HowItWorks = ({ t }) => {

  const items = [
    {
      title: t('home.HowItWorks.video1-title'),
      description: t('home.HowItWorks.video1-description'),
      link: Video1
    },
    {
      title: t('home.HowItWorks.video2-title'),
      description: t('home.HowItWorks.video2-description'),
      link: Video2
    },
    {
      title: t('home.HowItWorks.video3-title'),
      description: t('home.HowItWorks.video3-description'),
      link: Video3
    },
    {
      title: t('home.HowItWorks.video4-title'),
      description: t('home.HowItWorks.video4-description'),
      link: Video4
    },
    {
      title: t('home.HowItWorks.video5-title'),
      description: t('home.HowItWorks.video5-description'),
      link: Video5
    },
  ]

  return (
    <>
      <HowItWorksComponent>
        <div className="container">
          <BorderContainerNoRowsSides>
            <div className="top-tile">
              <RoundedInfoTile>
                <p>{t('home.HowItWorks.how-it-works')}</p>
              </RoundedInfoTile>
              <h3>{t('home.HowItWorks.title')}</h3>
            </div>
          </BorderContainerNoRowsSides>
        </div>
      </HowItWorksComponent>
      <div className="container">
        {items && <SliderComponent items={items} />}
      </div>
    </>
  )
}
export default HowItWorks

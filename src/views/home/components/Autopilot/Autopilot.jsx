import React from "react"
import { AutopilotComponent } from "./styled.components"
import { Trans } from 'react-i18next';
import { StaticImage } from "gatsby-plugin-image";
import '../../../../images/autopilot/phone_circle.webp'
const Autopilot = ({ t }) => {

  return (
    <>
      <AutopilotComponent>
        <div className="container">
          <div className="text-container">
            <h1>
              <Trans
                i18nKey="home.Autopilot.title"
                components={{
                  span: <span></span>
                }}
              />
            </h1>
            <p className="p-body-large ">{t(`home.Autopilot.description`)}</p>
          </div>
          <StaticImage
            className="phone-circle"
            src='../../../../images/autopilot/phone_circle.webp'
            alt="phone-circle"
            placeholder="phone-circle"
            loading="lazy"
          />
        </div>
      </AutopilotComponent>
    </>
  )
}
export default Autopilot

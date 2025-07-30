import React from "react"
import { AutopilotComponent } from "./styled.components"
import { Trans } from 'react-i18next';
import { StaticImage } from "gatsby-plugin-image";
import OurPartners from "../../../home/components/OurPartners/OurPartners"
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
          <div className="phone-wrapper">
            <div className="tooltip">
              <p className="p-body-medium">{t(`home.Autopilot.tooltip`)}</p>
            </div>
            <StaticImage
              className="phone-circle"
              src="../../../../images/autopilot/phone_circle.webp"
              alt="phone-circle"
              placeholder="phone-circle"
              loading="lazy"
            />
          </div>
          <div className="data-info">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8.33333 10V11.3333M4.33333 14H12.3333C12.687 14 13.0261 13.8595 13.2761 13.6095C13.5262 13.3594 13.6667 13.0203 13.6667 12.6667V8.66667C13.6667 8.31304 13.5262 7.97391 13.2761 7.72386C13.0261 7.47381 12.687 7.33333 12.3333 7.33333H4.33333C3.97971 7.33333 3.64057 7.47381 3.39052 7.72386C3.14048 7.97391 3 8.31304 3 8.66667V12.6667C3 13.0203 3.14048 13.3594 3.39052 13.6095C3.64057 13.8595 3.97971 14 4.33333 14ZM11 7.33333V4.66667C11 3.95942 10.719 3.28115 10.219 2.78105C9.71885 2.28095 9.04058 2 8.33333 2C7.62609 2 6.94781 2.28095 6.44772 2.78105C5.94762 3.28115 5.66667 3.95942 5.66667 4.66667V7.33333H11Z" stroke="#F5F5F5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="p-body-small">{t(`home.Autopilot.data`)}</p>
          </div>
          <OurPartners t={t} />
        </div>
      </AutopilotComponent>
    </>
  )
}
export default Autopilot

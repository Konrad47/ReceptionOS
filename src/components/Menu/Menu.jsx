import React from "react"
import { MenuComponent } from "./styled.components"
import "../../images/menu/ros-image.webp"
import { StaticImage } from "gatsby-plugin-image"
import { RoundedButtonOrange, SmallSquareTile } from "../../styled.components"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
const Menu = ({ t }) => {
  const { language, originalPath } = useI18next()
  // const alternateLanguage = language === 'pl' ? 'en' : 'pl'

  return (
    <>
      <MenuComponent>
        <div className="navigation-component">
          <StaticImage
            className="ros-image"
            src="../../images/menu/ros-image.webp"
            alt="ros-image"
            placeholder="ros-image"
            loading="lazy"
          />
          <div className="buttons">
            {/* <SmallSquareTile as={Link} to={originalPath} language={alternateLanguage}>
              <p>
                {language.toUpperCase()}
              </p>
            </SmallSquareTile> */}
            <RoundedButtonOrange className="order-button">{t(`home.Menu.order-button`)}</RoundedButtonOrange>
          </div>
        </div>
      </MenuComponent>
    </>
  )
}
export default Menu

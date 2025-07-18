import React from "react"
import { MenuComponent } from "./styled.components"
import "../../images/menu/ros-image.webp"
import { StaticImage } from "gatsby-plugin-image"
import { SmallSquareTile } from "../../styled.components"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
const Menu = ({ t }) => {
  const { language, languages, originalPath } = useI18next()
  const alternateLanguage = language === 'pl' ? 'en' : 'pl'

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
          <StaticImage
            className="ros-image-small"
            src="../../images/menu/ros-image-small.webp"
            alt="ros-image"
            placeholder="ros-image"
            loading="lazy"
          />
          <div className="links">
            {['solution', 'story-behind', 'problem', 'testimonials', 'contact'].map(key => (
              <div key={key} className="link">
                <a href={`#${key}`}>{t(`home.Menu.${key}`)}</a>
              </div>
            ))}
          </div>
          <div className="buttons">
            <SmallSquareTile as={Link} to={originalPath} language={alternateLanguage}>
              <p>
                {language.toUpperCase()}
              </p>
            </SmallSquareTile>
            <div className="order-button">
              <p>{t(`home.Menu.order-button`)}</p>
            </div>
          </div>
        </div>
      </MenuComponent>
    </>
  )
}
export default Menu

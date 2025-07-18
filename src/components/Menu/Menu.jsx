import React from "react"
import { MenuComponent } from "./styled.components"
import "../../images/menu/ros-image.webp"
import { StaticImage } from "gatsby-plugin-image"
const Menu = ({ t }) => {
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
          <div className="links">
            <div className="link">
              <a href="#solution">{t(`home.Menu.solution`)}</a>
            </div>
            <div className="link">
              <a href="#story-behind">{t(`home.Menu.story-behind`)}</a>
            </div>
            <div className="link">
              <a href="#problem">{t(`home.Menu.problem`)}</a>
            </div>
            <div className="link">
              <a href="#testimonials">{t(`home.Menu.testimonials`)}</a>
            </div>
            <div className="link">
              <a href="#contact">{t(`home.Menu.contact`)}</a>
            </div>
          </div>
        </div>
      </MenuComponent>
    </>
  )
}
export default Menu

import React from "react"
import { FooterComponent } from "./styled.components"
import { StaticImage } from "gatsby-plugin-image"
const Footer = ({ t }) => {

  return (
    <>
      <div className="container">
        <FooterComponent>
          <div className="footer-1">
            <StaticImage
              className="ros-image-small"
              src="../../images/footer/ros-image-small.webp"
              alt="ros-image"
              placeholder="ros-image"
              loading="lazy"
            />
            <div className="text">
              <p>{t(`home.Footer.contact`)}</p>
              <a href='mailto:contact@receptionos.com'>contact@receptionos.com</a>
            </div>
          </div>

        </FooterComponent>
      </div>
    </>
  )
}
export default Footer

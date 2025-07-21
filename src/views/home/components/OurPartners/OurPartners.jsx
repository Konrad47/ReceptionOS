import React from 'react';
import { OurPartnersContainer } from './styled.components';
import { StaticImage } from 'gatsby-plugin-image';
import SliderComponent from './Slider';

const TrustUsSection = ({ t }) => {

  const items = [
    {
      link: 'https://www.gpw.pl/',
      img: (
        <StaticImage
          className="image"
          src="../../../../images/autopilot/phone_circle.webp"
          alt="image"
          placeholder="none"
          loading="lazy"
        />
      )
    },
    {
      link: 'https://www.gpw.pl/',
      img: (
        <StaticImage
          className="image"
          src="../../../../images/autopilot/phone_circle.webp"
          alt="image"
          placeholder="none"
          loading="lazy"
        />
      )
    },
    {
      link: 'https://www.gpw.pl/',
      img: (
        <StaticImage
          className="image"
          src="../../../../images/autopilot/phone_circle.webp"
          alt="image"
          placeholder="none"
          loading="lazy"
        />
      )
    },
    {
      link: 'https://www.gpw.pl/',
      img: (
        <StaticImage
          className="image"
          src="../../../../images/autopilot/phone_circle.webp"
          alt="image"
          placeholder="none"
          loading="lazy"
        />
      )
    },
    {
      link: 'https://www.gpw.pl/',
      img: (
        <StaticImage
          className="image"
          src="../../../../images/autopilot/phone_circle.webp"
          alt="image"
          placeholder="none"
          loading="lazy"
        />
      )
    },
  ];

  return (
    <>
      <OurPartnersContainer>
        <div className="container">
          <h3 >{t`home.OurPartners.title`}</h3>
          {items && <SliderComponent items={items} />}
        </div>
      </OurPartnersContainer>
    </>
  );
};

export default TrustUsSection;

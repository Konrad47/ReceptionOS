import React from 'react';
import { OurPartnersContainer } from './styled.components';
import { StaticImage } from 'gatsby-plugin-image';
import SliderComponent from './Slider';

const TrustUsSection = ({ t }) => {

  const items = [
    {
      link: '#',
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
      link: '#',
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
      link: '#',
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
      link: '#',
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
      link: '#',
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
        <p>{t`home.OurPartners.title`}</p>
        {items && <SliderComponent items={items} />}
      </OurPartnersContainer>
    </>
  );
};

export default TrustUsSection;

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
        <p className='p-body-medium'>{t`home.OurPartners.title`}</p>
        {items && <SliderComponent items={items} />}
      </OurPartnersContainer>
    </>
  );
};

export default TrustUsSection;

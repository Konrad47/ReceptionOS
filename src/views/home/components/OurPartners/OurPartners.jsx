import React from 'react';
import { OurPartnersContainer } from './styled.components';
import { StaticImage } from 'gatsby-plugin-image';
import SliderComponent from './Slider';

const TrustUsSection = ({ t }) => {

  const items = [
    {
      link: 'https://nowipacjenci.pl/home',
      img: (
        <StaticImage
          className="image"
          src="../../../../images/our-partners/1.webp"
          alt="image"
          placeholder="none"
          loading="lazy"
        />
      )
    },
    {
      link: 'https://dentalway.pl/',
      img: (
        <StaticImage
          className="image"
          src="../../../../images/our-partners/2.webp"
          alt="image"
          placeholder="none"
          loading="lazy"
        />
      )
    },
    {
      link: 'https://numlabs.com/',
      img: (
        <StaticImage
          className="image"
          src="../../../../images/our-partners/3.webp"
          alt="image"
          placeholder="none"
          loading="lazy"
        />
      )
    },
    {
      link: 'https://www.apoloniadental.pl/',
      img: (
        <StaticImage
          className="image"
          src="../../../../images/our-partners/4.webp"
          alt="image"
          placeholder="none"
          loading="lazy"
        />
      )
    },
    {
      link: 'https://www.innovationshub.pl/',
      img: (
        <StaticImage
          className="image"
          src="../../../../images/our-partners/5.webp"
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
        <div className='container'>
          {items && <SliderComponent items={items} />}
        </div>
      </OurPartnersContainer>
    </>
  );
};

export default TrustUsSection;

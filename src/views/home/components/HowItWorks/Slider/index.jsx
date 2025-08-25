import React from 'react';
import Slider from 'react-slick';
import { SliderContainer } from './styled.components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LocalVideo from '../../../../../components/LocalVideo';

const SliderComponent = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3500,
    arrows: false
  };

  const renderItems = items?.map((item, index) => {
    return (
      <div key={index} className="slider-tile">
        <LocalVideo src={item.link} />
      </div>
    );
  });

  return (
    <section>
      <SliderContainer>
        <Slider {...settings}>{renderItems}</Slider>
      </SliderContainer>
    </section>
  );
};

export default SliderComponent;

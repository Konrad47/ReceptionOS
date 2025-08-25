import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { SliderContainer } from './styled.components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LocalVideo from '../../../../../components/LocalVideo';

const SliderComponent = ({ items }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3500,
    arrows: false,
    afterChange: () => {
      handleSlideChange();
    },
  };

  const handleSlideChange = () => {
    const listEl =
      sliderRef.current?.innerSlider?.list || sliderRef.current?.list || null;
    if (!listEl) return;

    const allVideos = listEl.querySelectorAll("video");
    const currentVideo = listEl.querySelector(".slick-current video");

    allVideos.forEach((v) => {
      if (v === currentVideo) {
        v.play().catch((err) => {
          console.error(err)
        });
      } else {
        v.pause();
        v.currentTime = 0;
      }
    });
  };

  useEffect(() => {
    setTimeout(handleSlideChange, 0);
  }, []);

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
        <Slider ref={sliderRef} {...settings}>{renderItems}</Slider>
      </SliderContainer>
    </section>
  );
};

export default SliderComponent;

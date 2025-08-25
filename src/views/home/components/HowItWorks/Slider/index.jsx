import React, { useCallback, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { SliderContainer } from './styled.components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LocalVideo from '../../../../../components/LocalVideo';
import { BorderContainer4Rows } from '../../../../../components/BorderContainer/BorderContainer4Rows';
import { BorderContainerNoRowsVerticalSides } from '../../../../../components/BorderContainer/BorderContainerNoRowsVerticalSides';

const SliderComponent = ({ items }) => {
  const sliderRef = useRef(null);
  const prevVideoRef = useRef(null);
  const prevEndedHandlerRef = useRef(null);

  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // autoplaySpeed: 3500,
    arrows: false,
    afterChange: () => {
      attachEndedToCurrent();
    },
    fade: true,
  };

  const attachEndedToCurrent = useCallback(() => {
    const listEl = sliderRef.current?.innerSlider?.list || sliderRef.current?.list;
    if (!listEl) return;

    const currentVideo = listEl.querySelector(".slick-current video");
    const allVideos = listEl.querySelectorAll("video");

    allVideos.forEach((v) => {
      try {
        if (v !== currentVideo) {
          v.pause();
          v.currentTime = 0;
        }
      } catch (e) {
      }
    });

    if (prevVideoRef.current && prevEndedHandlerRef.current) {
      try {
        prevVideoRef.current.removeEventListener("ended", prevEndedHandlerRef.current);
      } catch (e) { }
      prevVideoRef.current = null;
      prevEndedHandlerRef.current = null;
    }

    if (!currentVideo) return;
    const onEnded = () => {
      try {
        currentVideo.removeEventListener("ended", onEnded);
      } catch (e) { }
      prevVideoRef.current = null;
      prevEndedHandlerRef.current = null;
      sliderRef.current?.slickNext();
    };

    prevVideoRef.current = currentVideo;
    prevEndedHandlerRef.current = onEnded;

    currentVideo.addEventListener("ended", onEnded);
    currentVideo.play().catch(() => {
    });
  }, []);

  useEffect(() => {
    const t = setTimeout(() => attachEndedToCurrent(), 50);
    return () => {
      clearTimeout(t);
      if (prevVideoRef.current && prevEndedHandlerRef.current) {
        try {
          prevVideoRef.current.removeEventListener("ended", prevEndedHandlerRef.current);
        } catch (e) { }
        prevVideoRef.current = null;
        prevEndedHandlerRef.current = null;
      }
    };
  }, []);

  const renderItems = items?.map((item, index) => {
    return (
      <div key={index} className="slider-tile">
        <BorderContainerNoRowsVerticalSides className="text-border" >
          <div className='text-container'>
            <h4>{item.title}</h4>
            <p className='p-new-model-16'>{item.description}</p>
          </div>
        </BorderContainerNoRowsVerticalSides>
        <BorderContainer4Rows>
          <LocalVideo src={item.link} />
        </BorderContainer4Rows>
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

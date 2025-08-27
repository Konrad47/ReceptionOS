import React from 'react';
import { LocalVideoSection } from './styled.components';

const LocalVideo2 = ({ src, className }) => (
  <LocalVideoSection className={className}>
    <video muted playsInline autoPlay loop>
      <source src={src} type="video/webm" />
    </video>
  </LocalVideoSection>
);

export default LocalVideo2;

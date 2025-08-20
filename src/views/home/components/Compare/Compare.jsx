import React, { useState } from "react";
import { CompareComponent } from "./styled.components";
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import { BorderContainer4Rows } from "../../../../components/BorderContainer/BorderContainer4Rows"
import { StaticImage } from "gatsby-plugin-image";

const Compare = ({ t }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <CompareComponent>
        <Button onClick={() => setOpen(!open)} aria-expanded={open}>
          Toggle text
        </Button>

        <div className="fade-wrap">

          <BorderContainer4Rows className="fade-1">
            <Fade in={open} >
              <div id="with" aria-hidden={!open}>
                <StaticImage
                  className="calendar"
                  src="../../../../images/compare/calendar-with.webp"
                  alt="calendar"
                  placeholder="calendar"
                  loading="lazy"
                />
              </div>
            </Fade>
            <Fade in={!open} >
              <div id="without" aria-hidden={open}>
                <StaticImage
                  className="calendar"
                  src="../../../../images/compare/calendar-without.webp"
                  alt="calendar"
                  placeholder="calendar"
                  loading="lazy"
                />
              </div>
            </Fade>
          </BorderContainer4Rows>

          <BorderContainer4Rows className="fade-2">
            <Fade in={open} >
              <div id="with" aria-hidden={!open}>
                <h4>{t('home.Compare.title-with')}</h4>
                <p className="p-new-model-16">{t('home.Compare.description-with')}</p>
              </div>
            </Fade>
            <Fade in={!open} >
              <div id="without" aria-hidden={open}>
                <h4>{t('home.Compare.title-without')}</h4>
                <p className="p-new-model-16">{t('home.Compare.description-without')}</p>
              </div>
            </Fade>
          </BorderContainer4Rows>
        </div>
      </CompareComponent>
    </div >
  );
};
export default Compare;

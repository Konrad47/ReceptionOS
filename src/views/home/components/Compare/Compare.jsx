import React, { useState } from "react";
import { CompareComponent } from "./styled.components";
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';

const Compare = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <CompareComponent>
        <Button onClick={() => setOpen(!open)} aria-expanded={open}>
          Toggle text
        </Button>

        <div className="fade-wrap">
          <Fade in={open} >
            <div id="with" aria-hidden={!open}>
              <p>with</p>
            </div>
          </Fade>

          <Fade in={!open} >
            <div id="without" aria-hidden={open}>
              <p>without</p>
            </div>
          </Fade>
        </div>
      </CompareComponent>
    </div>
  );
};
export default Compare;

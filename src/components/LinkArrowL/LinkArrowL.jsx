/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LinkArrowL = ({
  style,
  buttonTextStyle,
  EXPLOREFeaturesStyle,
  text = "EXPLORE FEATURES",
  arrow = "https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/arrow-4.svg",
  href,
}) => {
  return (
    <div className="link-arrow-l" style={style}>
      <div className="button-text" style={buttonTextStyle}>
        <a
          className="EXPLORE-FEATURES"
          style={EXPLOREFeaturesStyle}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {text}
        </a>
      </div>
      <img className="arrow" alt="Arrow" src={arrow} />
    </div>
  );
};

LinkArrowL.propTypes = {
  text: PropTypes.string,
  arrow: PropTypes.string,
  href: PropTypes.string,
};

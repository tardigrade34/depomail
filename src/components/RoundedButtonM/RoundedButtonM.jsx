/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const RoundedButtonM = ({ style, GETStartedStyle, text = "GET STARTED", href }) => {
  return (
    <div className="rounded-button-m" style={style}>
      <a className="GET-STARTED" style={GETStartedStyle} href={href} rel="noopener noreferrer" target="_blank">
        {text}
      </a>
    </div>
  );
};

RoundedButtonM.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
};

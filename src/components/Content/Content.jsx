/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Content = ({
  style,
  text = "Lorem Ipsum is simply dummy text of the <br/>printing and typesetting industry.",
  text1 = "Look at Our Works",
  ourPortfolioStyle,
  text2 = "Our Portfolio",
}) => {
  return (
    <div className="content" style={style}>
      <div className="title">
        <p className="lorem-ipsum-is">{text}</p>
        <div className="look-at-our-works">{text1}</div>
        <div className="our-portfolio" style={ourPortfolioStyle}>
          {text2}
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};

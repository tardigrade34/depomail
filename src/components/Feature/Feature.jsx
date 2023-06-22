/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconImg11 } from "../IconImg11";
import { RoundedButtonM } from "../RoundedButtonM";
import "./style.css";

export const Feature = ({
  style,
  roundedButtonMRoundedButtonMStyle,
  roundedButtonMGetStartedStyle,
  roundedButtonMText = "READ MORE",
  text = "Talk more about your project",
  text1 = "We help businesses grow fast",
  text2 = "Change the way for business.",
  text3 = "Why Wait ? Start <br/>Your Own Business",
  ourVisionStyle,
  text4 = "Our vision",
  href,
}) => {
  return (
    <div className="feature" style={style}>
      <div className="other-module">
        <img
          className="about-img"
          alt="About img"
          src="https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/about-img-5-1-1@2x.png"
        />
        <div className="info">
          <RoundedButtonM
            GETStartedStyle={roundedButtonMGetStartedStyle}
            href={href}
            style={roundedButtonMRoundedButtonMStyle}
            text={roundedButtonMText}
          />
          <p className="talk-more-about-your">{text}</p>
          <p className="we-help-businesses">{text1}</p>
          <p className="change-the-way-for">{text2}</p>
          <IconImg11
            style={{
              backgroundImage:
                "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/icon-img-5-6@2x.png)",
              height: "16px",
              left: "0",
              position: "absolute",
              top: "103px",
              width: "16px",
            }}
          />
          <IconImg11
            style={{
              backgroundImage:
                "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/icon-img-5-6@2x.png)",
              height: "16px",
              left: "0",
              position: "absolute",
              top: "132px",
              width: "16px",
            }}
          />
          <IconImg11
            style={{
              backgroundImage:
                "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/icon-img-5-6@2x.png)",
              height: "16px",
              left: "0",
              position: "absolute",
              top: "161px",
              width: "16px",
            }}
          />
          <p className="why-wait-start-your">{text3}</p>
          <div className="our-vision" style={ourVisionStyle}>
            {text4}
          </div>
        </div>
      </div>
    </div>
  );
};

Feature.propTypes = {
  roundedButtonMText: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  href: PropTypes.string,
};

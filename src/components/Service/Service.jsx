/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconImg12 } from "../IconImg12";
import { IconImg4 } from "../IconImg4";
import { IconImg5 } from "../IconImg5";
import { IconImg6 } from "../IconImg6";
import { LinkArrowL } from "../LinkArrowL";
import "./style.css";

export const Service = ({
  style,
  linkArrowLLinkArrowLStyle,
  linkArrowLText = "Read More",
  linkArrowLExploreFeaturesStyle,
  linkArrowLArrow = "https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/arrow-8.svg",
  linkArrowLButtonTextStyle,
  text = "Lorem Ipsum is text simply dummy Ipsum text.",
  text1 = "Technology",
  linkArrowLLinkArrowLStyleOverride,
  linkArrowLText1 = "Read More",
  linkArrowLExploreFeaturesStyleOverride,
  linkArrowLImg = "https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/arrow-8.svg",
  linkArrowLButtonTextStyleOverride,
  text2 = "Development",
  override = (
    <IconImg4
      style={{
        left: "30px",
        position: "absolute",
        top: "30px",
      }}
    />
  ),
  linkArrowLDivStyle,
  linkArrowLText2 = "Read More",
  linkArrowLDivStyleOverride,
  linkArrowLArrow1 = "https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/arrow-8.svg",
  linkArrowLExploreFeaturesWrapperStyle,
  text3 = "Design",
  iconImg12IconImgStyle,
  linkArrowLLinkArrowLStyle1,
  linkArrowLText3 = "Read More",
  linkArrowLExploreFeaturesStyle1,
  linkArrowLArrow2 = "https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/arrow-8.svg",
  linkArrowLExploreFeaturesWrapperStyleOverride,
  text4 = "Business",
  override1 = (
    <IconImg6
      style={{
        left: "30px",
        position: "absolute",
        top: "30px",
      }}
    />
  ),
  href,
  href1,
  href2,
  href3,
}) => {
  return (
    <div className="service" style={style}>
      <div className="div-2">
        <div className="column">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <LinkArrowL
                EXPLOREFeaturesStyle={linkArrowLExploreFeaturesStyle}
                arrow={linkArrowLArrow}
                buttonTextStyle={linkArrowLButtonTextStyle}
                href={href}
                style={linkArrowLLinkArrowLStyle}
                text={linkArrowLText}
              />
              <p className="lorem-ipsum-is-text">{text}</p>
              <div className="technology">{text1}</div>
              <IconImg5
                style={{
                  left: "30px",
                  position: "absolute",
                  top: "30px",
                }}
              />
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap">
              <LinkArrowL
                EXPLOREFeaturesStyle={linkArrowLExploreFeaturesStyleOverride}
                arrow={linkArrowLImg}
                buttonTextStyle={linkArrowLButtonTextStyleOverride}
                href={href1}
                style={linkArrowLLinkArrowLStyleOverride}
                text={linkArrowLText1}
              />
              <p className="text-wrapper">{text}</p>
              <div className="development">{text2}</div>
              {override}
            </div>
          </div>
        </div>
        <div className="column-2">
          <div className="column-3">
            <div className="overlap-group-3">
              <LinkArrowL
                EXPLOREFeaturesStyle={linkArrowLDivStyleOverride}
                arrow={linkArrowLArrow1}
                buttonTextStyle={linkArrowLExploreFeaturesWrapperStyle}
                href={href2}
                style={linkArrowLDivStyle}
                text={linkArrowLText2}
              />
              <p className="p">{text}</p>
              <div className="design">{text3}</div>
              <IconImg12 style={iconImg12IconImgStyle} />
            </div>
          </div>
          <div className="column-4">
            <div className="overlap-2">
              <LinkArrowL
                EXPLOREFeaturesStyle={linkArrowLExploreFeaturesStyle1}
                arrow={linkArrowLArrow2}
                buttonTextStyle={linkArrowLExploreFeaturesWrapperStyleOverride}
                href={href3}
                style={linkArrowLLinkArrowLStyle1}
                text={linkArrowLText3}
              />
              <p className="lorem-ipsum-is-text-2">{text}</p>
              <div className="business">{text4}</div>
              {override1}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  linkArrowLText: PropTypes.string,
  linkArrowLArrow: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  linkArrowLText1: PropTypes.string,
  linkArrowLImg: PropTypes.string,
  text2: PropTypes.string,
  linkArrowLText2: PropTypes.string,
  linkArrowLArrow1: PropTypes.string,
  text3: PropTypes.string,
  linkArrowLText3: PropTypes.string,
  linkArrowLArrow2: PropTypes.string,
  text4: PropTypes.string,
  href: PropTypes.string,
  href1: PropTypes.string,
  href2: PropTypes.string,
  href3: PropTypes.string,
};

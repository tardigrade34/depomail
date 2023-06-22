/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Element = ({ style, overlapGroupStyle }) => {
  return (
    <div className="element" style={style}>
      <div className="overlap-group" style={overlapGroupStyle}>
        <img
          className="mask-group"
          alt="Mask group"
          src="https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/mask-group-1@2x.png"
        />
        <img
          className="img"
          alt="Element"
          src="https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/1-49-2.png"
        />
        <img
          className="vector"
          alt="Vector"
          src="https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/vector-1-1.svg"
        />
        <div className="rectangle" />
        <div className="div" />
      </div>
    </div>
  );
};

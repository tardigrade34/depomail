/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const DivWrapper = ({ style }) => {
  return (
    <div
      className="div-wrapper"
      style={{
        ...{
          backgroundImage:
            "url(https://generation-sessions.s3.amazonaws.com/3e0506b0d8dd605426d0b0cc9a083c09/img/icon-13-2@2x.png)",
        },
        ...style,
      }}
    />
  );
};

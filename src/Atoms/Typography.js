import React from "react";

const Typography = ({ text, fontSize, fontWeight, textColor }) => {
  return <p style={{ fontSize, fontWeight, color: textColor }}>{text}</p>;
};

export default Typography;

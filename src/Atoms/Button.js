import React from "react";

const Button = ({
  buttonText,
  height = "24px",
  width = "48px",
  onButtonClick,
  style = {},
  disable = false
}) => {
  return (
    <button
      onClick={onButtonClick}
      height={height}
      width={width}
      style={{ disable, cursor: "pointer", ...style }}
    >
      {buttonText}
    </button>
  );
};

export default Button;

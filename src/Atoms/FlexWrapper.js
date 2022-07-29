import React from "react";

const FlexWrapper = ({
  children,
  flexDirection = "row",
  alignItems = "center",
  justifyContent = "center",
  gap = undefined,
  height = "auto",
  width = "auto",
  style = {},
  margin = undefined
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection,
        alignItems,
        justifyContent,
        gap,
        height,
        width,
        boxSizing: "border-box",
        margin,
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default FlexWrapper;

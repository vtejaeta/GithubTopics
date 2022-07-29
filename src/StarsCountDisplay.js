import React from "react";

import FlexWrapper from "./Atoms/FlexWrapper.js";
import Typography from "./Atoms/Typography.js";

import StarIcon from "./Images/StarIcon.js";

const StarsCountDisplay = ({ starsCount }) => {
  return (
    <FlexWrapper
      flexDirection="row"
      gap="8px"
      style={{
        border: "1px solid #1b1f2426",
        borderRadius: "4px",
        padding: "2px 6px"
      }}
    >
      <StarIcon />
      <Typography text="Stars" fontSize="14px" fontWeight="400" />
      <div
        style={{ height: "12px", width: "1px", border: "1px solid #1b1f2426" }}
      />
      <Typography text={starsCount} fontSize="14px" fontWeight="400" />
    </FlexWrapper>
  );
};

export default StarsCountDisplay;

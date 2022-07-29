import React from "react";

import FlexWrapper from "./Atoms/FlexWrapper";
import Typography from "./Atoms/Typography";

const Header = ({ heading }) => {
  return (
    <FlexWrapper
      flexDirection="row"
      gap="16px"
      alignItems="center"
      justifyContent="center"
    >
      <Typography
        text={heading.toUpperCase()}
        fontSize="32px"
        fontWeight="600"
        textColor="black"
      />
    </FlexWrapper>
  );
};

export default Header;

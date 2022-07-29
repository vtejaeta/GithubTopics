import React, { useState } from "react";

const useScreenHeight = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  React.useEffect(() => {
    window.onresize = () => {
      setScreenHeight(window.innerHeight);
    };
  }, []);

  return screenHeight;
};

export default useScreenHeight;

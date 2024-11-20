import React from "react";

interface ColorProps {
  hexCode: string;
  width: string;
  height: string;
}
const Color: React.FC<ColorProps> = ({ hexCode, width, height }) => {
  return (
    <div style={{ background: hexCode, width: width, height: height }}></div>
  );
};

export default Color;

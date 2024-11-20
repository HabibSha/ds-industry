import React from "react";
// import {Spacing} from "../foundation"

interface ColorProps {
  hexCode: string;
  width: string;
  height: string;
}
const Color: React.FC<ColorProps> = ({ hexCode, width, height }) => {
  return <div style={{ backgroundColor: hexCode, width, height }}></div>;
};

export default Color;

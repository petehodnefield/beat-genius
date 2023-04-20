import React from "react";
import { Icon } from "@iconify/react";
const CircleIconWithFlag = ({
  iconCode,
  iconPosition,
  flagText,
  flagStyle,
}) => {
  return (
    <div className={`circle-icon ${iconPosition}`}>
      <div className="circle-icon__outer-shadow">
        <div className="circle-icon__inner-shadow">
          <Icon className="circle-icon__icon" icon={iconCode} />
          <div className={`circle-icon-flag  ${flagStyle}`}>{flagText}</div>
        </div>
      </div>
    </div>
  );
};

export default CircleIconWithFlag;

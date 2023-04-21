import React from "react";
import { Icon } from "@iconify/react";
const SquareIconWithFlag = ({
  iconCode,
  iconPosition,
  flagText,
  flagStyle,
}) => {
  return (
    <div className={`square-icon ${iconPosition}`}>
      <div className="square-icon__outer-shadow">
        <div className="square-icon__inner-shadow">
          <Icon className="square-icon__icon" icon={iconCode} />
          <div className={`square-icon-flag  ${flagStyle}`}>{flagText}</div>
        </div>
      </div>
    </div>
  );
};

export default SquareIconWithFlag;

import React from "react";
import { Icon } from "@iconify/react";
const CircleIcon = ({ iconCode, iconPosition }) => {
  return (
    <div className={`circle-icon ${iconPosition}`}>
      <div className="circle-icon__outer-shadow">
        <div className="circle-icon__inner-shadow">
          {/* <Icon className="circle-icon__icon" icon={iconCode} /> */}
        </div>
      </div>
    </div>
  );
};

export default CircleIcon;

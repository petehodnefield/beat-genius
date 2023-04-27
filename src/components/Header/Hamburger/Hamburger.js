import React from "react";

const Hamburger = ({ hamOpen, setHamOpen }) => {
  return (
    <div onClick={() => setHamOpen(!hamOpen)} className="hamburger">
      <div className="hamburger-line-wrapper">
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
      </div>
    </div>
  );
};

export default Hamburger;

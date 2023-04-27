import React from "react";

const HamburgerMenu = ({ hamOpen, setHamOpen }) => {
  return (
    <div
      className={`hamburger-menu ${
        hamOpen ? "hamburger-menu--visible" : "hamburger-menu--hidden"
      }`}
    >
      <button onClick={() => setHamOpen(false)}>Close</button>
    </div>
  );
};

export default HamburgerMenu;

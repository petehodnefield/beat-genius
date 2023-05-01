import React, { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import CTA from "./CTA";
import Hamburger from "./Hamburger/Hamburger";

const Header = ({ hamOpen, setHamOpen }) => {
  return (
    <header>
      <Hamburger hamOpen={hamOpen} setHamOpen={setHamOpen} />
      <Logo />
      <Nav />
      <CTA />
    </header>
  );
};

export default Header;

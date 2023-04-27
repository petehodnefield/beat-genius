import React, { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import CTA from "./CTA";
import { Plus_Jakarta_Sans } from "next/font/google";
import Hamburger from "./Hamburger/Hamburger";
const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

const Header = ({ hamOpen, setHamOpen }) => {
  return (
    <header className={pjs.className}>
      <Hamburger hamOpen={hamOpen} setHamOpen={setHamOpen} />
      <Logo />
      <Nav />
      <CTA />
    </header>
  );
};

export default Header;

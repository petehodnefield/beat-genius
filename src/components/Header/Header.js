import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import CTA from "./CTA";
import { Plus_Jakarta_Sans } from "next/font/google";
const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

const Header = () => {
  return (
    <header className={pjs.className}>
      <Logo />
      <Nav />
      <CTA />
    </header>
  );
};

export default Header;

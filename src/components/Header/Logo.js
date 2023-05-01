import React from "react";
import Link from "next/link";
import logo from "../../../public/assets/logo/logo.png";
import Image from "next/image";
const Logo = () => {
  return (
    <Link className="logo" href={"#"}>
      <Image
        className="header__logo"
        src={logo}
        alt="An eight note made out of circles"
      />
      <span className="header__logo-text">BEATGENIUS</span>
    </Link>
  );
};

export default Logo;

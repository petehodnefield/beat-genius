import React from "react";
import Link from "next/link";
const Logo = () => {
  return (
    <span>
      <Link className="header__logo-text" href={"/"}>
        BEATGENIUS
      </Link>
    </span>
  );
};

export default Logo;

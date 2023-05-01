import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <ul className="nav">
      <li className="nav__li">
        <Link className="nav__a" href="#about">
          About us
        </Link>
      </li>
      <li className="nav__li">
        <Link className="nav__a" href="#artist-development">
          Features
        </Link>
      </li>
      <li className="nav__li">
        <Link className="nav__a" href="#testimonials">
          Testimonials
        </Link>
      </li>
      <li className="nav__li">
        <Link className="nav__a" href="#pricing">
          Pricing
        </Link>
      </li>
    </ul>
  );
};

export default Nav;

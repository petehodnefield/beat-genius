import Link from "next/link";
import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Icon } from "@iconify/react";

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

const HamburgerMenu = ({ hamOpen, setHamOpen }) => {
  return (
    <div
      className={`hamburger-menu ${pjs.className} ${
        hamOpen ? "hamburger-menu--visible" : "hamburger-menu--hidden"
      }`}
    >
      <div className="hamburger-menu-close-wrapper">
        <Icon
          className="hamburger-menu__close-icon"
          icon="ph:x"
          onClick={() => setHamOpen(false)}
        />
      </div>

      <ul className="hamburger-menu__ul">
        <li className="hamburger-menu__li">
          <Link className="hamburger-menu__link" href={"#"}>
            About us
          </Link>
        </li>
        <li className="hamburger-menu__li">
          <Link className="hamburger-menu__link" href={"#"}>
            Features
          </Link>
        </li>
        <li className="hamburger-menu__li">
          <Link className="hamburger-menu__link" href={"#"}>
            Testimonials
          </Link>
        </li>
        <li className="hamburger-menu__li">
          <Link className="hamburger-menu__link" href={"#"}>
            Pricing
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;

import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

const HamburgerMenu = ({ hamOpen, setHamOpen }) => {
  return (
    <div
      className={`hamburger-menu ${
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
          <Link
            className="hamburger-menu__link"
            href={"#about"}
            onClick={() => setHamOpen(false)}
          >
            About us
          </Link>
        </li>
        <li className="hamburger-menu__li">
          <Link
            className="hamburger-menu__link"
            href={"#artist-development"}
            onClick={() => setHamOpen(false)}
          >
            Features
          </Link>
        </li>
        <li className="hamburger-menu__li">
          <Link
            className="hamburger-menu__link"
            href={"#testimonials"}
            onClick={() => setHamOpen(false)}
          >
            Testimonials
          </Link>
        </li>
        <li className="hamburger-menu__li">
          <Link
            className="hamburger-menu__link"
            href={"#pricing"}
            onClick={() => setHamOpen(false)}
          >
            Pricing
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;

import Link from "next/link";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  const [confirmMessage, setConfirmMessage] = useState("");

  const currentYear = new Date().getFullYear();
  return (
    <footer className={`footer `}>
      <div className="footer-content-wrapper">
        <div className="footer__column">
          <h3 className="footer__header">BEATGENIUS</h3>
          <Link className="footer__link footer__link--bold" href={"#"}>
            Privacy Policy
          </Link>
          <Link className="footer__link footer__link--bold" href={"#"}>
            Terms of service
          </Link>
          <p className="footer__copyright">© {currentYear} BeatGenius LLC</p>
        </div>
        <div className="footer__column">
          <h4 className="footer__subheader">Navigation</h4>
          <Link className="footer__link" href={"#"}>
            About
          </Link>
          <Link className="footer__link" href={"#"}>
            Features{" "}
          </Link>
          <Link className="footer__link" href={"#"}>
            Testimonials
          </Link>
          <Link className="footer__link" href={"#"}>
            Pricing{" "}
          </Link>
        </div>
        <div className="footer__column footer__column--address">
          <h4 className="footer__subheader">Address</h4>
          <div className="footer-icon-text-wrapper">
            <Icon
              className="footer__icon footer__icon--pin"
              icon="ph:map-pin"
            />
            <p className="footer__text">
              123 Main Street Minneapolis, MN 55414
            </p>
          </div>

          <h4 className="footer__subheader footer__subheader--smgap">
            Contact
          </h4>
          <div className="footer-icon-text-wrapper">
            <Icon
              className="footer__icon footer__icon--mail"
              icon="ic:round-mail"
            />

            <a className="footer__link-mail" href="mailto:mail@beatgenius.com">
              mail@beatgenius.com
            </a>
          </div>
        </div>
        <div className="footer__column">
          <h3 className="footer__subheader">Follow us</h3>
          <div className="footer-social-wrapper">
            <Icon
              className="footer__social footer__social--reg"
              icon="ph:facebook-logo"
            />
            <Icon
              className="footer__social footer__social--reg"
              icon="ph:instagram-logo"
            />
            <Icon
              className="footer__social footer__social--sm"
              icon="ph:youtube-logo"
            />
          </div>
        </div>
        <div className="footer__column footer__column--contact">
          <h4 className="footer__subheader">Join our newsletter</h4>
          <label className="footer__text footer__label" htmlFor="emailInput">
            Email
          </label>
          <div className="footer__input-wrapper">
            <input className="footer__input" type="email" id="emailInput" />
            <div
              onClick={() =>
                setConfirmMessage("Thank you for joining our newsletter!")
              }
              className="footer__input-chevron-wrapper"
            >
              {" "}
              <Icon
                className="footer__input-chevron"
                icon="material-symbols:chevron-right-rounded"
              />
            </div>
          </div>
          {confirmMessage ? (
            <p className="footer__text footer__confirm">{confirmMessage}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

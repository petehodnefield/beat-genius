import React from "react";
import { Icon } from "@iconify/react";
const ThisIsBeatGenius = () => {
  return (
    <div className="about-text-wrapper">
      <h2 className="about__h2">Music Production 2.0</h2>

      <h3 className="about__h3">This is BeatGenius</h3>
      <h4 className="about__h4">
        We are are a collection of platinum producers who have have helped
        thousands of artists find their own sound by tailoring our production
        skills to bring the best out of every artist.
      </h4>
      <div className="about__icons-wrapper">
        <div className="about__icon-container">
          <div className="about__icon-wrapper">
            <Icon className="about__icon " icon="solar:high-quality-linear" />
          </div>
          <h5 className="about__icon-text">High quality</h5>
        </div>
        <div className="about__icon-container">
          <div className="about__icon-wrapper">
            <Icon className="about__icon " icon="ph:person" />
          </div>
          <h5 className="about__icon-text">Tailored to you</h5>
        </div>
        <div className="about__icon-container">
          <div className="about__icon-wrapper">
            <Icon className="about__icon " icon="ph:timer" />
          </div>
          <h5 className="about__icon-text">Fast turnaround</h5>
        </div>
      </div>
    </div>
  );
};

export default ThisIsBeatGenius;

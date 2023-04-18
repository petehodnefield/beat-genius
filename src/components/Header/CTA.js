import React from "react";
import { Icon } from "@iconify/react";

const CTA = () => {
  return (
    <div className="cta">
      <div className="cta__signin-wrapper">
        <Icon icon="ph:person" />
        <span className="cta__text">Sign in</span>
      </div>
      <button className="btn btn--header rounded">Get started</button>
    </div>
  );
};

export default CTA;

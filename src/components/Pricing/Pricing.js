import React from "react";
import PricingText from "./PricingText";
import PricingCards from "./PricingCards";

const Pricing = () => {
  return (
    <section className="pricing-wrapper" id="pricing">
      <PricingText />
      <PricingCards />
    </section>
  );
};

export default Pricing;

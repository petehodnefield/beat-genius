import React from "react";
import PricingText from "./PricingText";
import PricingCards from "./PricingCards";

const Pricing = () => {
  return (
    <section className="pricing-wrapper">
      <PricingText />
      <PricingCards />
    </section>
  );
};

export default Pricing;

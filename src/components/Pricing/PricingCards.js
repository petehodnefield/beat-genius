import React from "react";
import { Icon } from "@iconify/react";
const PricingCards = () => {
  return (
    <div className="pricing-cards-wrapper">
      <div className="pricing-card pricing-card--sm">
        <h3 className="pricing-card__header">Single</h3>
        <h4 className="pricing-card__price">$2,000</h4>
        <p className="pricing-card__text">
          Perfect for artists who already know their sound.
        </p>
        {/* Features wrapper */}
        <div className="pricing-card-features-wrapper">
          {/* Individual feature */}
          <div className="pricing-card-feature-wrapper">
            <div className="pricing-card__icon-bg">
              <Icon className="pricing-card__icon" icon="ph:check" />
            </div>
            <p className="pricing-card__feature-text">60 minute consulation</p>
          </div>
          <div className="pricing-card-feature-wrapper">
            <div className="pricing-card__icon-bg">
              <Icon className="pricing-card__icon" icon="ph:check" />
            </div>
            <p className="pricing-card__feature-text">1 custom beat</p>
          </div>
          <div className="pricing-card-feature-wrapper">
            <div className="pricing-card__icon-bg">
              <Icon className="pricing-card__icon" icon="ph:check" />
            </div>
            <p className="pricing-card__feature-text">3 revisions</p>
          </div>
        </div>
        <button className="btn btn-large btn-blue-faded rounded">
          Choose single plan
        </button>
      </div>
    </div>
  );
};

export default PricingCards;

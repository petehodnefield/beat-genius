import React from "react";
import { Icon } from "@iconify/react";
const PricingCards = () => {
  return (
    <div className="pricing-cards-wrapper">
      {/* Single card */}
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

      {/* EP card - biggest one */}
      <div className="pricing-card pricing-card--lg">
        <div className="pricing-card-best-seller-wrapper">
          <h3 className="pricing-card__header">EP</h3>
          {/* Best seller */}
          <div className="pricing-card__best-seller">🏆 Best seller </div>
        </div>
        <h4 className="pricing-card__price">$6,000</h4>
        <p className="pricing-card__text">
          For the artist starting their next big project.
        </p>
        {/* Features wrapper */}
        <div className="pricing-card-features-wrapper">
          {/* Individual feature */}
          <div className="pricing-card-feature-wrapper">
            <div className="pricing-card__icon-bg">
              <Icon className="pricing-card__icon" icon="ph:check" />
            </div>
            <p className="pricing-card__feature-text">
              2 60 minute consulation
            </p>
          </div>
          <div className="pricing-card-feature-wrapper">
            <div className="pricing-card__icon-bg">
              <Icon className="pricing-card__icon" icon="ph:check" />
            </div>
            <p className="pricing-card__feature-text">4 custom beat</p>
          </div>
          <div className="pricing-card-feature-wrapper">
            <div className="pricing-card__icon-bg">
              <Icon className="pricing-card__icon" icon="ph:check" />
            </div>
            <p className="pricing-card__feature-text">5 revisions</p>
          </div>
        </div>
        <button className="btn btn-large btn-primary rounded pricing-card__btn">
          Choose popular plan
          <Icon
            className="pricing-card__chevron"
            icon="material-symbols:chevron-right-rounded"
          />
        </button>
      </div>

      {/* Single card */}
      <div className="pricing-card pricing-card--sm">
        <h3 className="pricing-card__header">Album</h3>
        <h4 className="pricing-card__price">$20,000+</h4>
        <p className="pricing-card__text">
          For the established artist looking to make hits.{" "}
        </p>
        {/* Features wrapper */}
        <div className="pricing-card-features-wrapper">
          {/* Individual feature */}
          <div className="pricing-card-feature-wrapper">
            <div className="pricing-card__icon-bg">
              <Icon className="pricing-card__icon" icon="ph:check" />
            </div>
            <p className="pricing-card__feature-text">Weekly check-ins</p>
          </div>
          <div className="pricing-card-feature-wrapper">
            <div className="pricing-card__icon-bg">
              <Icon className="pricing-card__icon" icon="ph:check" />
            </div>
            <p className="pricing-card__feature-text">8 custom beats</p>
          </div>
          <div className="pricing-card-feature-wrapper">
            <div className="pricing-card__icon-bg">
              <Icon className="pricing-card__icon" icon="ph:check" />
            </div>
            <p className="pricing-card__feature-text">Unlimited revisions</p>
          </div>
        </div>
        <button className="btn btn-large pricing-card__btn pricing-card__btn--album rounded">
          <Icon icon="ic:round-mail" className="pricing-card__mail" />
          Request an album
        </button>
      </div>
    </div>
  );
};

export default PricingCards;

import React from "react";

const CTASection = () => {
  return (
    <section className="cta-wrapper">
      <h2 className="cta__header">Let BeatGenius help discover your sound!</h2>
      <h3 className="cta__subheader">
        Join 1,000+ artists that have already invested in their music career
        with BeatGenius and are growing their fanbase
      </h3>
      <div className="cta-btn-wrapper">
        <button className="btn btn-large btn-white rounded">Reach out!</button>
        <button className="btn btn-large btn-primary rounded">
          Try the demo
        </button>
      </div>
    </section>
  );
};

export default CTASection;

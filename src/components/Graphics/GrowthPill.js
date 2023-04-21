import React from "react";

const GrowthPill = ({ graphicPosition }) => {
  return (
    <div className={`growth-pill ${graphicPosition}`}>
      <div className="growth-pill__chart">
        <span className="growth-pill__chart-text">+10k</span>
      </div>
      <p className="growth-pill__text">
        New followers <br /> this month
      </p>
    </div>
  );
};

export default GrowthPill;

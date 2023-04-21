import React from "react";

const ListenersGraphic = ({ graphicPosition }) => {
  return (
    <div className={`listeners-graphic ${graphicPosition}`}>
      <div className="listeners-column">
        <h3 className="listeners__text">New listeners</h3>
        <div className="listeners__slider">
          <div className="listeners__slider-inside listeners__slider-inside--green"></div>
        </div>
        <h4 className="listeners__text">
          <span className="listeners__text--green">+5,345</span> (+200%)
        </h4>
      </div>
      <div className="listeners-column">
        <h3 className="listeners__text">Returning</h3>
        <div className="listeners__slider">
          <div className="listeners__slider-inside listeners__slider-inside--blue"></div>
        </div>
        <h4 className="listeners__text">
          <span className="listeners__text--blue">+20,000</span> (+100%)
        </h4>
      </div>
    </div>
  );
};

export default ListenersGraphic;

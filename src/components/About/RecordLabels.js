import React from "react";
import Image from "next/image";
import sony from "../../../public/assets/labels/sony.jpg";
import defjam from "../../../public/assets/labels/defjam.jpg";
import columbia from "../../../public/assets/labels/columbia.png";
import universal from "../../../public/assets/labels/universal.jpg";
import republic from "../../../public/assets/labels/republic.jpg";
const RecordLabels = () => {
  return (
    <div className="about-label-wrapper">
      {" "}
      <h3 className="about__h3 about__label-h3">
        Music production customized for 100+ artists
      </h3>
      <div className="about__label-wrapper">
        <div className="about__label-icon-wrapper">
          <Image className="about__label-icon" src={sony} />
        </div>
        <div className="about__label-icon-wrapper">
          <Image className="about__label-icon" src={defjam} />
        </div>
        <div className="about__label-icon-wrapper">
          <Image className="about__label-icon" src={republic} />
        </div>
        <div className="about__label-icon-wrapper">
          <Image className="about__label-icon" src={columbia} />
        </div>
        <div className="about__label-icon-wrapper">
          <Image className="about__label-icon" src={universal} />
        </div>
      </div>
    </div>
  );
};

export default RecordLabels;

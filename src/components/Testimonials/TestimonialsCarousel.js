import React from "react";
import Image from "next/image";
import ianndior from "../../../public/assets/artists/ianndior.jpg";
const TestimonialsCarousel = () => {
  return (
    <div>
      {/* Individual card */}
      <div className="testimonials-card">
        <div className="testimonials-card-image-wrapper">
          <Image
            className="testimonials-card__image"
            alt="Headshot of the young rapper Iann Dior wearing a white shirt"
            src={ianndior}
          />
        </div>
        <p className="testimonials-card__text">
          “I <span className="testimonials-card__text--bold">owe so much</span>{" "}
          to the team at BeatGenius. They really helped me dial in my signature
          sound.”
        </p>
        {/* Name */}
        <div className="testimonials-card-person-line-wrapper">
          {/* Line */}
          <div className="testimonials-card__line"></div>
          <p className="testimonials-card__person">
            Iann Dior, platinum-selling artist
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;

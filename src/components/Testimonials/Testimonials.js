import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      {/* Gradient background */}
      <div className="testimonials__gradient"></div>
      <div className="testimonials-heading-wrapper">
        <h2 className="testimonials__header">What people say</h2>
        <h3 className="testimonials__subheader">
          Our artists are our top priority. Let's hear what they have to say.
        </h3>
      </div>
      <TestimonialsCarousel />
    </section>
  );
};

export default Testimonials;

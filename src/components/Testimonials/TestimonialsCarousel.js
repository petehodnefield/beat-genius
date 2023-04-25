import React from "react";
import Image from "next/image";
import ianndior from "../../../public/assets/artists/ianndior.jpg";
import dojacat from "../../../public/assets/artists/dojacat.jpg";
import lilbaby from "../../../public/assets/artists/lilbaby.jpg";
import gunna from "../../../public/assets/artists/gunna.jpg";
import liluzi from "../../../public/assets/artists/liluzi.jpg";
import twentyonesavage from "../../../public/assets/artists/21savage.jpg";
const TestimonialsCarousel = () => {
  return (
    <div className="testimonials-carousel">
      {/* Lil Uzi card */}
      <div className="testimonials-card testimonials-card--high">
        <div className="testimonials-card-image-wrapper">
          <Image
            className="testimonials-card__image"
            alt="Headshot of the young rapper Lil Uzi on the red carpet of some awards event."
            src={liluzi}
          />
        </div>
        <p className="testimonials-card__text">
          “BeatGenius helped me{" "}
          <span className="testimonials-card__text--bold">
            reach my potential as an artist.
          </span>
          I don’t know where I’d be without them!”
        </p>
        {/* Name */}
        <div className="testimonials-card-person-line-wrapper">
          {/* Line */}
          <div className="testimonials-card__line"></div>
          <p className="testimonials-card__person">
            Lil Uzi Vert, platinum-selling artist
          </p>
        </div>
      </div>

      {/* Iann Dior card */}
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

      {/* Lilbaby card */}
      <div className="testimonials-card testimonials-card--high">
        <div className="testimonials-card-image-wrapper">
          <Image
            className="testimonials-card__image"
            alt="The rapper lil baby wearing a puffer vest jacket"
            src={lilbaby}
          />
        </div>
        <p className="testimonials-card__text">
          “The producers at BeatGenius are legends!
          <span className="testimonials-card__text--bold">
            The best production in the game
          </span>
          .”
        </p>
        {/* Name */}
        <div className="testimonials-card-person-line-wrapper">
          {/* Line */}
          <div className="testimonials-card__line"></div>
          <p className="testimonials-card__person">
            Lil Baby, platinum-selling artist
          </p>
        </div>
      </div>

      {/* Doja Cat card */}
      <div className="testimonials-card">
        <div className="testimonials-card-image-wrapper">
          <Image
            className="testimonials-card__image"
            alt="Headshot of the rapper Doja Cat wearing a white shirt"
            src={dojacat}
          />
        </div>
        <p className="testimonials-card__text">
          “Before I started working with BeatGenius, I felt lost as an artist.
          <span className="testimonials-card__text--bold">
            Now, I have my own sound
          </span>
          .”
        </p>
        {/* Name */}
        <div className="testimonials-card-person-line-wrapper">
          {/* Line */}
          <div className="testimonials-card__line"></div>
          <p className="testimonials-card__person">
            Doja Cat, platinum-selling artist
          </p>
        </div>
      </div>

      {/* 21 savage card */}
      <div className="testimonials-card testimonials-card--high">
        <div className="testimonials-card-image-wrapper">
          <Image
            className="testimonials-card__image"
            alt="Headshot of the rapper 21 Savage slouching in the woods"
            src={twentyonesavage}
          />
        </div>
        <p className="testimonials-card__text">
          “BeatGenius helped me{" "}
          <span className="testimonials-card__text--bold">
            reach my potential as an artist.
          </span>
          I don’t know where I’d be without them!”
        </p>
        {/* Name */}
        <div className="testimonials-card-person-line-wrapper">
          {/* Line */}
          <div className="testimonials-card__line"></div>
          <p className="testimonials-card__person">
            21 Savage, platinum-selling artist
          </p>
        </div>
      </div>

      {/* Gunna card */}
      <div className="testimonials-card">
        <div className="testimonials-card-image-wrapper">
          <Image
            className="testimonials-card__image"
            alt="The rapper Gunna making a praying pose wearing sunglasses."
            src={gunna}
          />
        </div>
        <p className="testimonials-card__text">
          “BeatGenius is{" "}
          <span className="testimonials-card__text--bold">
            {" "}
            single-handedly responsible for my success
          </span>{" "}
          in the music industry.”
        </p>
        {/* Name */}
        <div className="testimonials-card-person-line-wrapper">
          {/* Line */}
          <div className="testimonials-card__line"></div>
          <p className="testimonials-card__person">
            Gunna, platinum-selling artist
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;

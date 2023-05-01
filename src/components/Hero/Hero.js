import Image from "next/image";
import React from "react";
import djSet from "../../../public/assets/images/dj-set.jpg";
import { Icon } from "@iconify/react";
import CircleIcon from "../Icons/CircleIcon";
import CircleIconWithFlag from "../Icons/CircleIconWithFlag";
import SquareIconWithFlag from "../Icons/SquareIconWithFlag";
import ListenersGraphic from "../Graphics/ListenersGraphic";
import GrowthPill from "../Graphics/GrowthPill";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__text-wrapper">
          <h1 className="hero__h1">
            Music production <br /> personalized to the artist
          </h1>
          <h2 className="hero__h2">
            See how BeatGenius can help craft your own unique sound.
          </h2>
          <div className="hero__btn-wrapper">
            <button className="btn btn-outline btn-large rounded">
              <Icon className="btn-outline--icon" icon="ph:play-fill" />
              Watch video
            </button>
            <button className="btn btn-primary btn-large rounded">
              Try the demo
            </button>
          </div>
        </div>
        <div className="hero-img-wrapper">
          <Image
            className="hero__img"
            src={djSet}
            alt="A DJ set with lots of cables plugged into it."
          />
          <CircleIcon
            iconCode="ph:microphone-stage"
            iconPosition={"circle-icon__microphone"}
          />
          <CircleIcon
            iconCode="ph:guitar"
            iconPosition={"circle-icon__guitar"}
          />
          <CircleIcon
            iconCode="ph:piano-keys"
            iconPosition={"circle-icon__piano"}
          />
          <CircleIconWithFlag
            iconCode="ph:music-notes"
            flagStyle={"circle-icon-flag--outline"}
            flagText="Make hits"
            iconPosition={"circle-icon__make-hits"}
          />
          <SquareIconWithFlag
            flagStyle={"circle-icon-flag--primary"}
            flagText="Network"
            iconCode="ph:share-network"
            iconPosition={"circle-icon__network"}
          />
          <ListenersGraphic graphicPosition="listeners-graphic__hero" />
          <GrowthPill graphicPosition="growth-pill__hero" />
          {/* Blue circles behind image */}
          <div className="hero__bg-shape hero__bg-shape--left"></div>
          <div className="hero__bg-shape hero__bg-shape--right"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

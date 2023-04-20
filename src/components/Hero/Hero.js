import Image from "next/image";
import React from "react";
import djSet from "../../../public/assets/images/dj-set.jpg";
import { Icon } from "@iconify/react";
import CircleIcon from "../Icons/CircleIcon";
import CircleIconWithFlag from "../Icons/CircleIconWithFlag";

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
        <img
          className="hero__img"
          src="https://images.unsplash.com/photo-1594623930572-300a3011d9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
      <CircleIcon iconCode="ph:microphone-stage" />
      <CircleIcon iconCode="ph:guitar" />
      <CircleIcon iconCode="ph:piano-keys" />
      <CircleIconWithFlag
        iconCode="ph:music-notes"
        flagStyle={"circle-icon-flag--outline"}
        flagText="Make hits"
      />
      <CircleIconWithFlag
        flagStyle={"circle-icon-flag--primary"}
        flagText="Network"
        iconCode="ph:share-network"
      />
    </section>
  );
};

export default Hero;

import React from "react";
import Image from "next/image";
import rapper from "../../../public/assets/images/rapper.jpg";
import Link from "next/link";
import { Icon } from "@iconify/react";
const SuccessStories = () => {
  return (
    <section className="success" id="success-stories">
      <div className="success-text-wrapper">
        <h2 className="success__header">Success Stories</h2>

        <h3 className="success__subheader">We love to see you grow</h3>
        <p className="success__text">
          <span className="success__text--bold">BeatGenius</span> prevents
          artists from becoming another type-beat, generic artist. See how are
          artists have used BeatGenius to stand out!
        </p>
      </div>
      {/* Image and article wrapper */}
      <div className="success-image-blog-wrapper">
        {/* Image */}
        <div className="success-image-wrapper">
          <Image
            className="success__image"
            src={rapper}
            alt="A rapper from a low view performing into a microphone at a show."
          />
        </div>

        {/* Blog */}
        <article className="success-blog-wrapper">
          <h2 className="success__header success__header--blog">
            How famousartist went from SoundCloud to platinum!
          </h2>
          <p className="success__text success__text--blog">
            See how artist famousartist went from homeless to platinum!
          </p>
          <p className="success__text success__text--blog">
            {" "}
            An interview with famousartist explains how BeatGenius helped him
            thrive!
          </p>
          <div className="success-btn-wrapper">
            <button className="btn btn-large rounded btn-outline ">
              <Icon className="btn-outline--icon" icon="ph:play-fill" />
              Watch interview
            </button>
            <Link className="success__link" href={"#"}>
              See all success stories
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SuccessStories;

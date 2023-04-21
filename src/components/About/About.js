import React from "react";
import ListenersGraphic from "../Graphics/ListenersGraphic";
import ThisIsBeatGenius from "./ThisIsBeatGenius";
import RecordLabels from "./RecordLabels";

const About = () => {
  return (
    <section className="about">
      <ThisIsBeatGenius />
      <RecordLabels />
    </section>
  );
};

export default About;

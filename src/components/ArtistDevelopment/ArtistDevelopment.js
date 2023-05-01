import React from "react";
import Statistics from "../Graphics/Statistics";
import ArtistDevelopmentText from "./ArtistDevelopmentText";
const ArtistDevelopment = () => {
  return (
    <section className="artist-development" id="artist-development">
      <div className="artist-development-content-wrapper">
        <ArtistDevelopmentText />
        <Statistics />
      </div>
    </section>
  );
};

export default ArtistDevelopment;

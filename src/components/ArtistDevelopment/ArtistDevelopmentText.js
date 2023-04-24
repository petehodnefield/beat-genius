import React from "react";
import { Icon } from "@iconify/react";

const ArtistDevelopmentText = () => {
  return (
    <div className="artist-dev-text-wrapper">
      <h3 className="artist-dev__subheader">Artist Development</h3>
      <h2 className="artist-dev__header">Build your unique sound</h2>
      <p className="artist-dev__text artist-dev__text--spacing-sm">
        Our veteran team of producers know how to help artists craft their own
        style.
      </p>
      <p className="artist-dev__text artist-dev__text--spacing-lg">
        Consult with our producers to learn about you and your musical goals
      </p>
      {/* Icon features */}
      <div className="artist-dev-icons-wrapper">
        {/* Individual wrapper */}
        {/* Custom sounds */}
        <div className="artist-dev-feature-wrapper">
          <div className="artist-dev-feature-icon-wrapper">
            <Icon className="artist-dev__icon" icon="ph:speaker-high" />
          </div>
          <h4 className="artist-dev-feature__text">Custom sounds</h4>
        </div>
        {/* Industry advice */}
        <div className="artist-dev-feature-wrapper">
          <div className="artist-dev-feature-icon-wrapper">
            <Icon className="artist-dev__icon" icon="ph:speaker-hifi" />
          </div>
          <h4 className="artist-dev-feature__text">Industry advice</h4>
        </div>
        {/* Professional networking */}
        <div className="artist-dev-feature-wrapper">
          <div className="artist-dev-feature-icon-wrapper">
            <Icon className="artist-dev__icon" icon="ph:share-network" />
          </div>
          <h4 className="artist-dev-feature__text">Professional networking</h4>
        </div>
      </div>
    </div>
  );
};

export default ArtistDevelopmentText;

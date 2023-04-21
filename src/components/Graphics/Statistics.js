import React from "react";
import CircleIcon from "../Icons/CircleIcon";
import { Icon } from "@iconify/react";
import Image from "next/image";

import chances from "../../../public/assets/albumArtwork/chances.jpg";
import club from "../../../public/assets/albumArtwork/club.jpg";

const Statistics = () => {
  return (
    <div className="statistics">
      {/* Blue bg header */}
      <div className="statistics__head">
        {/* <CircleIcon iconCode="ph:microphone-stage" /> */}
        <h3 className="statistics__head-text">Hello, iykyk!</h3>
      </div>
      {/* Stats Row 1 */}
      <div className="statistics-row-wrapper">
        {/* Today's streams container */}
        <div className="statistics-data statistics-data--lg">
          <h3 className="statistics-data__header">Today's streams</h3>
          <div className="statistics-data__data">
            <Icon className="statistics-data__icon" icon="ph:headphones" />
            <h4 className="statistics-data__stat">30,200</h4>
            <h5 className="statistics-data__percentage statistics-data__percentage--green">
              +120%
            </h5>
          </div>
        </div>
        {/* Impressions container */}
        <div className="statistics-data statistics-data--center">
          <h3 className="statistics-data__header">Impressions</h3>
          <div className="statistics-data__data">
            <h4 className="statistics-data__stat">15,780</h4>
            <h5 className="statistics-data__percentage statistics-data__percentage--green">
              +120%
            </h5>
          </div>
        </div>
        {/* New followers container */}
        <div className="statistics-data ">
          <h3 className="statistics-data__header">New followers</h3>
          <div className="statistics-data__data">
            <h4 className="statistics-data__stat">58</h4>
            <h5 className="statistics-data__percentage statistics-data__percentage--green">
              +2%
            </h5>
          </div>
        </div>
      </div>
      {/* Stats row 1 end */}
      {/* Stats Row 2 */}
      <div className="statistics-row-wrapper">
        {/* Today's streams container */}
        <div className="statistics-data statistics-data--lg">
          <h3 className="statistics-data__header">Returning listeners</h3>
          <div className="statistics-data__data">
            <Icon className="statistics-data__icon" icon="ph:headphones" />
            <h4 className="statistics-data__stat">10,240</h4>
            <h5 className="statistics-data__percentage statistics-data__percentage--green">
              +300%
            </h5>
          </div>
        </div>
        {/* Saves container */}
        <div className="statistics-data statistics-data--center">
          <h3 className="statistics-data__header">Saves</h3>
          <div className="statistics-data__data">
            <Icon className="statistics-data__icon" icon="ph:heart" />

            <h4 className="statistics-data__stat">800</h4>
            <h5 className="statistics-data__percentage statistics-data__percentage--green">
              +10%
            </h5>
          </div>
        </div>
        {/* Playlists container */}
        <div className="statistics-data ">
          <h3 className="statistics-data__header">New playlists</h3>
          <div className="statistics-data__data">
            <Icon className="statistics-data__icon" icon="ph:playlist" />

            <h4 className="statistics-data__stat">3</h4>
            <h5 className="statistics-data__percentage statistics-data__percentage--red">
              -6%
            </h5>
          </div>
        </div>
      </div>
      {/* Stats row 2 end */}

      {/* Stats Row 3 */}
      <div className="statistics-last-row-wrapper">
        {/* Most popular streams */}
        <div className="statistics-data statistics-data--lg">
          <h3 className="statistics-data__header">Most popular song</h3>
          <div className="statistics-data__data">
            <h4 className="statistics-data__stat">Chances</h4>
            <div className="statistics-data__artwork-wrapper">
              <Image className="statistics-data__artwork" src={chances} />
            </div>
          </div>
        </div>
        <div className="statistics-data statistics-data--center">
          <h3 className="statistics-data__header">Least popular song</h3>
          <div className="statistics-data__data">
            <h4 className="statistics-data__stat">Club Ain't It</h4>
            <div className="statistics-data__artwork-wrapper">
              <Image className="statistics-data__artwork" src={club} />
            </div>
          </div>
        </div>
      </div>
      {/* Stats row 3 end */}
    </div>
  );
};

export default Statistics;

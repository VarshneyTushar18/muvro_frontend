"use client";

import { useState } from "react";
import Image from "next/image";
import Style from "./MapLocation.module.css"; // optional if you want custom CSS

export default function WorldMapLocations() {
  const [activeLocation, setActiveLocation] = useState(null);

  const locations = [
    {
      id: 1,
      markerClass: "contact-map-marker1",
      boxClass: "map-marker-locations1",
      country: "Tech2Globe INDIA",
      text: "701, 7th Floor, Tower B, Logix Cyber Park, C Block, Phase 2, Sector 62, Noida, Uttar Pradesh 201301",
    },
    {
      id: 2,
      markerClass: "contact-map-marker2",
      boxClass: "map-marker-locations2",
      country: "Tech2Globe USA",
      text: "1538, Old Country Road, Plainview, New York, United State - 11803",
    },
    {
      id: 3,
      markerClass: "contact-map-marker3",
      boxClass: "map-marker-locations3",
      country: "Tech2Globe CANADA",
      text: "975 Mid-Way Blvd UNIT 12 Mississauga, ON L5T 2C6, Canada",
    },
    {
      id: 4,
      markerClass: "contact-map-marker4",
      boxClass: "map-marker-locations4",
      country: "Tech2Globe CANADA",
      text: "3836 Keeha Dr Port Alberni, BC, V9Y8C8, Canada",
    },
  ];

  return (
    <div className={`${Style.WorldMapSection} py-4`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Our Global Branches</h3>

            <figure className={Style.MapFigure}>
              <img
                src="/images/contact-us-world-wide-locations.webp"
                alt="World map"
                className="img-fluid"
              />

              <div className={Style.MapListWrapper}>
                {locations.map((loc) => (
                  <div key={loc.id} className={Style.myLocoMap}>
                    {/* Marker Button */}
                    <button
                      className={`${loc.markerClass} ${Style.locationMarker}`}
                      onClick={() =>
                        setActiveLocation(
                          activeLocation === loc.id ? null : loc.id
                        )
                      }
                    ></button>

                    {/* Popup Box */}
                    <div
                      className={`${loc.boxClass} ${Style.Location}`}
                      style={{
                        display: activeLocation === loc.id ? "block" : "none",
                      }}
                    >
                      <span
                        className={Style.CloseBtn}
                        onClick={() => setActiveLocation(null)}
                      >
                        &#10005;
                      </span>

                      <strong>{loc.country}</strong>
                      <p>{loc.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
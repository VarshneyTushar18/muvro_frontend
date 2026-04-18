// components/Intro.jsx
"use client";

import { useState } from "react";

export default function Intro({ section }) {
  const [isExpanded, setIsExpanded] = useState(false);
  if (!section) return null;

  const { sectionHeader } = section;

  const charLimit = 450;
  const description = sectionHeader.description || "";
  const isLong = description.length > charLimit;
  const displayText = isExpanded ? description : description.slice(0, charLimit);

  return (
    <section>
      <div className="container">
        <span className="section-label" data-aos="fade-down">
          {sectionHeader.label}
        </span>

        <div className="row mt-4 justify-content-between">
          <div
            className="col-12 col-xl-6 col-xxl-7"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2
              dangerouslySetInnerHTML={{
                __html: sectionHeader.heading.replace(
                  /\[([^\]]+)\]/g,
                  "<span>$1</span>"
                ),
              }}
            />
          </div>

          <div
            className="col-12 col-xl-5 col-xxl-5"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <p>
              {displayText}
              {isLong && !isExpanded && "..."}
            </p>
            {isLong && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className=" border-0 bg-transparent p-0 fw-semibold"
                style={{ cursor: "pointer" }}
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

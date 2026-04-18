"use client";
import React, { useState } from "react";
import styles from "./KeyFeatures.module.css";

const FeaturesSection = ({
  heading,
  features = [],
  aosAnimation = "zoom-in",
  aosDuration = "800",
}) => {
  const [showAll, setShowAll] = useState(false);
  const maxVisible = 6;

  const validFeatures = features.filter((f) => f.title && f.desc);
  const visibleFeatures = showAll
    ? validFeatures
    : validFeatures.slice(0, maxVisible);

  return (
    <section className={styles.section}>
      <div className="container">
        {heading && (
          <h3
            className="text-center mb-4"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {heading}
          </h3>
        )}

        <div className={`row ${styles.featuresGrid}`}>
          {visibleFeatures.map((feature, index) => (
            <div
              className="col-md-6 col-lg-4 mb-4"
              key={index}
              data-aos={aosAnimation}
              data-aos-duration={aosDuration}
              data-aos-delay={index * 100}
            >
              <div className={`${styles.featureCard} h-100`}>
                <h4 className={styles.title}>{feature.title}</h4>
                <p className={styles.desc}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {validFeatures.length > maxVisible && (
          <div
            className="text-center mt-3"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <button
              className="mbtn mbtn-small mbtn-secondary"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;

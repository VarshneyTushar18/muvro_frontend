/*
  Project: Muvro
  Page: Home
  Module: Certifications Section

  Author: Tech2Globe Web Solutions
  Creation Date: 2025-AUG-29
  Last Modified Date: 2025-AUG-29
  Version: 1.1
*/
import styles from "./Certifications.module.css";

export default function Certifications() {
  const certifications = [
    { src: "/images/Avetta-Member.png", alt: "Avetta Member Certification" },
    { src: "/images/TUV-Nord.png", alt: "TUV Nord Certification" },
    { src: "/images/CE.png", alt: "CE Certification" },
    { src: "/images/ISO.png", alt: "ISO Certification" },
  ];

  return (
    <section className="bg-secondary">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6 gap-md-4 col-lg-4 d-flex d-lg-block order-2 order-lg-1">
            {certifications.slice(0, 2).map((cert, i) => (
              <div key={i} className={styles.certificationWrapper} data-aos="zoom-in">
                <img
                  className="img-fluid"
                  src={cert.src}
                  alt={cert.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Center Column */}
          <div className="col-lg-4 text-center d-flex align-items-center flex-column justify-content-center order-1 order-lg-2">
            <span className="section-label-center">Certified By</span>
            <h2 className="mt-2 mb-3">Certifications</h2>
            <p>
              From Globally Certified, Locally Trusted — Powering Smart Logistics
              with Proven Excellence.
            </p>
          </div>

          {/* Right Column */}
          <div className="col-md-6 gap-md-4 col-lg-4 d-flex d-lg-block order-3 order-lg-3">
            {certifications.slice(2).map((cert, i) => (
              <div key={i} className={styles.certificationWrapper} data-aos="zoom-in">
                <img
                  className="img-fluid"
                  src={cert.src}
                  alt={cert.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

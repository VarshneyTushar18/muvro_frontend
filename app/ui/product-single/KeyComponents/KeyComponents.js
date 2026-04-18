"use client";
import { useState } from "react";
import styles from "./KeyComponents.module.css";

export default function KeyComponents({ title, subtitle, desc, components }) {
  const [selectedComp, setSelectedComp] = useState(null);

  return (
    <section className={styles.KeyComponentsSection}>
      <div className="container">
        <div
          className={styles.wrapper}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span className="section-label-center">{subtitle}</span>
          <h2 className="text-white text-center">{title}</h2>
          <p className="text-white text-center">{desc}</p>
        </div>

        <div className="row justify-content-center mt-5">
          {components?.map((comp, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-3 mb-4"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay={index * 100}
            >
              <div className={styles.card}>
                {
                  comp.image && (
                    <div className={styles.cardImg}>
                  <img
                    src={comp.image}
                    alt={comp.title}
                    className="img-fluid"
                  />
                </div>
                  )
                }
                <div className={styles.cardBody}>
                  <h3>{comp.title}</h3>
                  <p>
                    {comp.desc.length > 160
                      ? comp.desc.slice(0, 160) + "..."
                      : comp.desc}
                  </p>
                  {comp.desc.length > 160 && (
                    <button
                      className={styles.RdBtn}
                      onClick={() => setSelectedComp(comp)}
                    >
                      Read More
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedComp && (
          <div
            className={`modal pt-5 fade show ${styles.KeyPopup}`}
            style={{
              display: "block",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
            tabIndex="-1"
            role="dialog"
          >
            <div
              className="modal-dialog pt-5 modal-dialog-scrollable"
              role="document"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedComp.title}</h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => setSelectedComp(null)}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>{selectedComp.desc}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

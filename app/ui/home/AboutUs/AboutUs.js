/*
  Project: Muvro
  Page: Home
  Module: About Us Section

  Author: Tech2Globe Web Solutions
  Creation Date: 2025-AUG-29
  Last Modified Date: 2025-AUG-29
  Version: 1.0
*/
import { RiPlayLine } from "@remixicon/react";
import styles from "./AboutUs.module.css";
import VideoModal from "./VideoModal";

export default function AboutUs() {
  return (
    <>
      <section>
        <div className="container">
          {/* Section Label */}
          <span className="section-label" data-aos="fade-down">
            About Us
          </span>

          <div className="row mt-4 justify-content-between">
            {/* Left Column (Heading) */}
            <div
              className="col-xl-6 col-xxl-7"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h2>
                We believe in <span>flexibility</span> and modularity which
                reflect in our solutions.
              </h2>
            </div>

            {/* Right Column (Content + Button) */}
            <div
              className="col-lg-5 col-xl-5"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <p>
                Most of the technologies we use in our solutions are fully
                designed, developed, manufactured in its world class factory and
                installed & serviced by our teams only. This gives us
                competitive advantage, quick delivery and a long-lasting
                solution to our customers. We believe in flexibility and
                modularity which reflect in our solutions.
              </p>

              {/* Button to open modal */}
              <div
                className={styles.videoBtnWrapper}
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <span>EXPLORE VIRTUAL</span>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
                >
                  <RiPlayLine />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal modalId="videoModal" videoId="ElUcmYWRebU" />
    </>
  );
}

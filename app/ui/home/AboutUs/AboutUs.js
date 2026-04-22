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
              className="col-xl-6 col-xxl-6"
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
              className="col-lg-6 col-xl-6"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <p>
                Muvro Technologies is a global leader in warehouse automation and intralogistics, delivering futuristic, innovative, and modular solutions for fulfilment centres, distribution centres, last-mile delivery stations, dark stores, and quick commerce.<br/><br/>
                With 23+ years of expertise, in-house manufacturing, and a global support network, we empower industries including e-commerce, parcels & postal, 3PL, retail, FMCG, automotive, and more to move smarter, faster, and more efficiently.<br/><br/>
                Our portfolio spans high- High-Speed Cross-Belt Sorters, Linear Sorters, Swivel Wheel Sorters,3D Smart Sorters, ASRS Systems (Pallet ASRS & Bin-to-Person ASRS), Smart & High-Speed Conveying Systems, Electrical Control Systems and advanced automation software. <br/><br/>
At Muvro, our mission is clear — to help businesses optimize operations, enhance efficiency, and gain a sustainable competitive edge in an ever-evolving market.

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

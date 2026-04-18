"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  RiDoubleQuotesR,
  RiStarFill,
  RiArrowLeftLine,
  RiArrowRightLine,
} from "@remixicon/react";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./CaseStudyTestimonial.module.css";

export default function CaseStudyTestimonial() {
  const slides = [
    {
      id: 1,
      image: "/images/case-study-1.png",
      title: "Cross Belt Sorter uses in Logistics Industries",
      desc: `In today’s fast-paced logistics sector, accuracy and efficiency are critical...`,
      feedback: `In today’s fast-paced logistics sector, accuracy and efficiency are critical to meeting rising customer expectations. The Cross Belt Sorter has emerged as a game-changer, offering high-speed sorting with precision and adaptability. At a major logistics hub, the system was implemented to handle surging parcel volumes driven by e-commerce growth. Results were immediate—sorting capacity increased by 40%, operational costs dropped significantly, and error rates were minimized. Its ability to process diverse parcel sizes and shapes made it especially valuable during peak demand seasons. Beyond efficiency, the solution also improved delivery timelines and customer satisfaction. This case study demonstrates how integrating Cross Belt Sorters empowers logistics providers to streamline operations, boost productivity, and stay competitive in a rapidly evolving industry.`,
      author: "Mr.Ajay Yadav - CEO, Muvro",
      link: "#",
    },
    {
      id: 2,
      image: "/images/case-study-1.png",
      title: "Automated Storage in Manufacturing",
      feedback: `In today’s fast-paced logistics sector, accuracy and efficiency are critical to meeting rising customer expectations. The Cross Belt Sorter has emerged as a game-changer, offering high-speed sorting with precision and adaptability. At a major logistics hub, the system was implemented to handle surging parcel volumes driven by e-commerce growth. Results were immediate—sorting capacity increased by 40%, operational costs dropped significantly, and error rates were minimized. Its ability to process diverse parcel sizes and shapes made it especially valuable during peak demand seasons. Beyond efficiency, the solution also improved delivery timelines and customer satisfaction. This case study demonstrates how integrating Cross Belt Sorters empowers logistics providers to streamline operations, boost productivity, and stay competitive in a rapidly evolving industry.`,
      author: "Operations Head at ABC Ltd",
      link: "#",
    },
  ];

  return (
    <section className={styles.caseStudyTestimonial}>
      <div className="container">
        <div className={`${styles.sectionHeader}`}>
          <div className="row justify-content-between">
            <div className="col-lg-7" data-aos="fade-right">
              <div className={styles.wrapper}>
                <span className="section-label text-white">Our Case Study</span>
                <h2 className="text-white">Case Studies & Testimonials</h2>
                <p className="text-white">
                  Explore real-world case studies and authentic client testimonials
                  that highlight our proven expertise, measurable results, and the
                  lasting impact we deliver.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 d-flex align-items-center justify-content-lg-end"
              data-aos="fade-left"
            >
              <div className={styles.navBtns}>
                <button
                  className="mbtn mbtn-small mbtn-primary case-study-carousel-prev"
                  aria-label="Previous Slide"
                >
                  <RiArrowLeftLine />
                </button>
                <button
                  className="mbtn mbtn-small mbtn-primary case-study-carousel-next"
                  aria-label="Next Slide"
                >
                  <RiArrowRightLine />
                </button>
              </div>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: `.case-study-carousel-prev`,
              nextEl: `.case-study-carousel-next`,
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            className="mt-5"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={slide.id}>
                <div className="row justify-content-between">
                  <div
                    className="col-lg-6"
                    data-aos="zoom-in"
                    data-aos-delay={i * 100}
                  >
                    <div className={styles.imgWrapper}>
                      <img
                        src={slide.image}
                        className="img-fluid"
                        alt={slide.title}
                      />
                      <div className={styles.overlayContent}>
                        <h3>{slide.title}</h3>
                        {/* <a href={slide.link}>Explore More</a> */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-5 mt-4 mt-lg-0"
                    data-aos="fade-up"
                    data-aos-delay={i * 150}
                  >
                    <div className={styles.feedbackContent}>
                      <p>{slide.feedback}</p>
                    </div>
                    <div className={`mt-4 ${styles.authorInfoWrapper}`}>
                      <div className={styles.authorInfo}>
                        <p>{slide.author}</p>
                        <div className={styles.rating}>
                          {[...Array(5)].map((_, idx) => (
                            <RiStarFill key={idx} />
                          ))}
                        </div>
                      </div>
                      <div className={styles.quoteIcon}>
                        <RiDoubleQuotesR />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

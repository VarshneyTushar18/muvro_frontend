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

export default function Testimonial({ slides }) {
  return (
    <div className={styles.testimonialSection}>
      <div className="container">
        <div className={styles.testimonialHeader}>
          <div className="row justify-content-between">
            <div className="col-lg-7" data-aos="fade-right">
              <div className={styles.wrapper}>
                <span className="section-label text-white">Client Testimonials</span>
                <h2 className="text-white">What Our Clients Say</h2>
                <p className="text-white">
                  Hear from our satisfied clients about their experience working
                  with our team and the results we delivered.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 d-flex align-items-center justify-content-lg-end"
              data-aos="fade-left"
            >
              <div className={styles.navBtns}>
                <button
                  className="mbtn mbtn-small mbtn-primary testimonial-carousel-prev"
                  aria-label="Previous Slide"
                >
                  <RiArrowLeftLine />
                </button>
                <button
                  className="mbtn mbtn-small mbtn-primary testimonial-carousel-next"
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
              prevEl: `.testimonial-carousel-prev`,
              nextEl: `.testimonial-carousel-next`,
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            className="mt-5"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={slide.id}>
                <div className="row justify-content-center">
                  <div
                    className="col-lg-12"
                    data-aos="fade-up"
                    data-aos-delay={i * 150}
                  >
                    <div className={styles.testimonialCard}>
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

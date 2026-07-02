"use client";
import Link from "next/link";
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
      feedback: `Hi Muvro Team, I sincerely appreciate your outstanding support on the MSTA Sort Slide Project, especially as it’s the first site with large-scale conveyor salvaging. Kudos to the Design Team for their excellent work on the system’s design and ensuring a perfect fit for the salvaged components. Thanks to the Project Team for managing refurbishment, adhering to SOPs, and ensuring system stability while providing essential training. Special thanks to the teams involved in continuous checks, snag closures, and ensuring operational readiness. Congratulations to everyone on this milestone, and I look forward to many more successful projects ahead!`,
      author: "Job Tissen - Happy Client",
      link: "#",
    },
    {
      id: 2,
      image: "/images/case-study-1.png",
      title: "Automated Storage in Manufacturing",
      feedback: `Excellent work MUVRO Team! Thank you both for planning and completing the conveyor dismantling project at South west. Well ahead of the agreed timeline. Your efforts have ensured that all safety parameters were met, and the project was completed without any escalations in quality. Great job, once again!`,
      author: "Arun - Happy Client",
      link: "#",
    },
    {
      id: 3,
      image: "/images/case-study-1.png",
      title: "Automated Storage in Manufacturing",
      feedback: `I sincerely thank you for your dedication and commitment towards the safe and timely execution of the Project of FC Peripheral Conveyor. Your efforts have been truly commendable, and we greatly appreciate your contribution in ensuring that all tasks were completed without any operational or safety concerns. Once again, I would like to express my gratitude for your hard work and unwavering commitment. You both are highly valued members of the Muvro project team. It was a real pleasure working with you, and I look forward to our future joint endeavours.`,
      author: "Kumar - Happy Client",
      link: "#",
    },
    {
      id: 4,
      image: "/images/case-study-1.png",
      title: "Automated Storage in Manufacturing",
      feedback: `On behalf of our Project Management team, we would like to express our appreciation for the outstanding work you did on the Delhi In-City project. Your professionalism and the countless hours you dedicated to ensuring the project's smooth and timely completion have truly impressed the entire team. Your self-motivation, dedication, and diligence serve as an inspiration to your colleagues, and you both are invaluable assets to the Muvro team. We wish you all the best for future projects with us.`,
      author: "Amit Kumar - Happy Client",
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
                <span className="section-label text-white">Our Case Studies & Testimonials</span>
                <h2 className="text-white">Testimonials</h2>
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

          <div className="text-center mt-4">
            <Link href="/case-study" className="mbtn mbtn-primary">
              View Case Study
            </Link>
          </div>
        </div>
      </div>
    </section>

  );
}

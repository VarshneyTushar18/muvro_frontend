"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./EventsSection.module.css";

import {
  RiArrowLeftLine,
  RiArrowRightLine,
} from "@remixicon/react";

import Link from "next/link";

const events = [
  {
    id: 1,
    image: "/images/events/Invitation-For-Website-IWE.jpg",
    title: "Intralogistics & Warehousing Expo, Mumbai | 2026",
    date: "14 May - 16 May",
    link: "#",
  },
  {
    id: 2,
    image: "/images/events/Invitation-IWS-Delhi.jpg",
    title: "India Warehousing Show, Delhi | 2026",
    date: "25 June - 27 June",
    link: "#",
  },
  {
    id: 3,
    image: "/images/events/Modex-Atlanta-(USA)-13-16-Apr-26.jpg",
    title: "Modex Atlanta (USA) | 2026",
    date: "13 April - 16 April",
    link: "#",
  },
  {
    id: 4,
    image: "/images/events/Mumbai-05-07-Feb-2026.jpg",
    title: "Intralogistics & Warehousing Expo, Mumbai | 2026",
    date: "05 February - 07 February",
    link: "#",
  },
];

export default function EventsSection() {
  const [showNav, setShowNav] = useState(true);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const checkNav = (swiper) => {
    if (!swiper) return;

    const slidesPerView =
      swiper.params.slidesPerView === "auto"
        ? swiper.slidesPerViewDynamic()
        : swiper.params.slidesPerView;

    setShowNav(
      swiper.slides.length > slidesPerView || swiper.width < 768
    );
  };

  return (
    <section
      className={styles.eventsSection}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container">
        <div className="row justify-content-between">
          {/* Left Column */}
          <div
            className="col-lg-5"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <span className="section-label">Company Events</span>

            <h2 className="my-4">
              Upcoming <span>Events</span>
            </h2>

            <p className="mb-5">
              From manufacturing to retail, Muvro Technologies
              delivers innovative intralogistics and material
              handling solutions that drive efficiency,
              reliability, and growth across diverse industries
              worldwide.
            </p>

            <Link
              href="/events"
              className="mbtn mbtn-primary display-inline-block"
            >
              View All Events
            </Link>

            {/* Navigation Buttons */}
            {showNav && (
              <div
                className={`mt-4 ${styles.navButtons}`}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <button
                  ref={prevRef}
                  className={styles.navButton}
                >
                  <RiArrowLeftLine />
                </button>

                <button
                  ref={nextRef}
                  className={styles.navButton}
                >
                  <RiArrowRightLine />
                </button>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div
            className="col-lg-7 mt-4 mt-lg-0"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              watchOverflow={true}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl =
                  prevRef.current;

                swiper.params.navigation.nextEl =
                  nextRef.current;
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  if (
                    swiper.params.navigation &&
                    typeof swiper.params.navigation !== "boolean"
                  ) {
                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }

                  checkNav(swiper);
                });
              }}
              onResize={checkNav}
              className={styles.eventsSlider}
            >
              {events.map((event, index) => (
                <SwiperSlide key={event.id}>
                  <div
                    className={styles.card}
                    data-aos="zoom-in"
                    data-aos-delay={index * 150}
                  >
                    <div className={styles.imageWrapper}>
                      <img
                        src={event.image}
                        alt={event.title}
                      />
                    </div>

                    <div className={styles.content}>
                      <h3 className={styles.title}>
                        {event.title}
                      </h3>

                      <span className={styles.date}>
                        {event.date}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import styles from "./EventsSection.module.css";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
} from "@remixicon/react";
import Link from "next/link";

const events = [
  {
    id: 1,
    image: "/images/event-1.png",
    title: "Georgia World Congress Centre Atlanta | 2025",
    date: "13 Apr - 16 Apr",
    link: "#",
  },
  {
    id: 2,
    image: "/images/event-2.png",
    title: "International Trade Show Messe Stuttgart, Germany | 2025",
    date: "24 Mar - 26 Mar",
    link: "#",
  },
];

export default function EventsSection() {
  const [showNav, setShowNav] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleInit = (swiper) => {
    checkNav(swiper);

    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.navigation.init();
    swiper.navigation.update();
  };

  const handleResize = (swiper) => {
    checkNav(swiper);
  };

  const checkNav = (swiper) => {
    if (!swiper) return;
    const slidesPerView =
      swiper.params.slidesPerView === "auto"
        ? swiper.slidesPerViewDynamic()
        : swiper.params.slidesPerView;

    setShowNav(swiper.slides.length > slidesPerView || swiper.width < 768);
  };

  return (
    <section
      className={`${styles.eventsSection}`}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container">
        <div className="row justify-content-between">
          {/* Left column */}
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
              From manufacturing to retail, Muvro Technologies delivers
              innovative intralogistics and material handling solutions that
              drive efficiency, reliability, and growth across diverse
              industries worldwide.
            </p>
            <Link href="/events" className="mbtn mbtn-primary display-inline-block">
              View All Events
            </Link>

            {/* Navigation arrows (only show when needed) */}
            {showNav && (
              <div
                className={`mt-4 ${styles.navButtons}`}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <button
                  ref={prevRef}
                  className="justify-content-center align-items-center"
                >
                  <RiArrowLeftLine />
                </button>
                <button
                  ref={nextRef}
                  className="justify-content-center align-items-center"
                >
                  <RiArrowRightLine />
                </button>
              </div>
            )}
          </div>

          {/* Right column with Swiper */}
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
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
              }}
              onInit={handleInit}
              onResize={handleResize}
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
                      <img src={event.image} alt={event.title} />
                    </div>
                    <div className={styles.content}>
                      <h3 className={styles.title}>{event.title}</h3>
                      <span className={styles.date}>{event.date}</span>
                      {/* <a href={event.link} className={styles.link}>
                        <RiArrowRightUpLine />
                      </a> */}
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

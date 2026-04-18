"use client";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./ServicesSection.module.css";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
} from "@remixicon/react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "ASRS Solutions",
    description:
      "Ultra High Speed, High Throughput, Modular & Precise Sort 10,000-40,000 parcels/hour at over 2.5 m / s with scalable layouts & twin / two - tier carriers, built for large - scale sorting centres.",
    image: "/images/asrs.jpg",
    link: "/solutions#interalogistics",
  },
  {
    id: 2,
    title: "Sorting Solutions",
    description:
      "High Throughput, Compact & Low-Profile Design. It sorts 6,000-1,000 parcels/hour with high precision and efficiency in a space-saving design ideal for high-density operations.",
    image: "/images/sorting.png",
    link: "/solutions#interalogistics",
  },
  {
    id: 3,
    title: "Fulfilment Solutions",
    description:
      "High-Density, Automated Precision, Scalable Design, Optimize your warehouse with our Pallet Shuttle ASRS, offering automated, high-density storage that enhances throughput and operational efficiency.",
    image: "/images/fulfilment.png",
    link: "/solutions#interalogistics",
  },
  {
    id: 4,
    title: "Quick Commerce",
    description:
      "Compact Space, Semi-automated, Maximum Storage Utilization, Optimize warehouse efficiency with a high-density, semi-automated system that maximizes pallet storage in depth & height, with lower cost.",
    image: "/images/quick-commerce.png",
    link: "/solutions#interalogistics",
  },
  {
    id: 5,
    title: "Mobile Robots",
    description:
      "Mobile Robots in automotive industries automate material transport, streamline assembly processes, reduce manual labor, and enhance efficiency, safety, and overall production flexibility.",
    image: "/images/mobile-robots.png",
    link: "/solutions#automotive",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [showArrows, setShowArrows] = useState(false); // <-- control arrows
  const swiperRef = useRef(null);

  const activeService = services[active];
  const len = services.length;

  const goTo = (index, markInteracted = false) => {
    const next = ((index % len) + len) % len;
    setActive(next);
    if (swiperRef.current) {
      swiperRef.current.slideTo(next);
      if (markInteracted) swiperRef.current.autoplay?.stop();
    }
    if (markInteracted) setUserInteracted(true);
  };

  // Banner auto-advance
  useEffect(() => {
    if (hoverPaused || userInteracted) return;
    const timer = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % len;
        swiperRef.current?.slideTo(next);
        return next;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, [hoverPaused, userInteracted, len]);

  // Detect if arrows needed
  const checkArrows = (swiper) => {
    const { slides, params } = swiper;
    let slidesPerView = params.slidesPerView;

    if (typeof slidesPerView === "string" || slidesPerView === "auto") {
      slidesPerView = swiper.slidesPerViewDynamic();
    }

    if (slides.length > slidesPerView) {
      setShowArrows(true);
    } else {
      setShowArrows(false);
    }
  };

  return (
    <>
      <section className="pb-0">
        <div className="container mb-5">
          {/* Section Label */}
          <span className="section-label" data-aos="fade-down">
            Efficiency, Flexibility & Reliability
          </span>

          <div className="mt-5 mb-3 d-xl-flex justify-content-between align-items-start gap-4">
            <h2
              className="flex-shrink-0"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Smart <span>Solutions</span>
            </h2>
            <p data-aos="fade-left" data-aos-delay="200">
              Our end-to-end solutions are fully designed, developed, and
              manufactured in-house, ensuring faster delivery, modular
              flexibility, and long-lasting performance tailored to meet diverse
              intralogistics and material handling needs.
            </p>
            <Link
              href="/solutions"
              className="mbtn mbtn-small mbtn-primary mt-3 mt-lg-0 display-inline-block flex-shrink-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Explore More
            </Link>
          </div>
        </div>

        {/* Banner */}
        <div
          className={styles.banner}
          style={{ backgroundImage: `url(${activeService.image})` }}
          onMouseEnter={() => setHoverPaused(true)}
          onMouseLeave={() => !userInteracted && setHoverPaused(false)}
          data-aos="fade-up"
        >
          <div className={styles.overlay}>
            <div
              className={`${styles.bannerContent} container`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p>{activeService.description}</p>
              <a
                href={activeService.link}
                className="mbtn mbtn-small mbtn-primary"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                Explore More
              </a>
            </div>
          </div>
        </div>

        {/* Services Slider */}
        <div className={styles.sliderWrapper}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={2}
            autoplay={{
              delay: 10000,
              disableOnInteraction: true,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              checkArrows(swiper);
            }}
            onResize={(swiper) => checkArrows(swiper)}
            onSlidesLengthChange={(swiper) => checkArrows(swiper)}
            onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
            onMouseLeave={() =>
              !userInteracted && swiperRef.current?.autoplay?.start()
            }
            breakpoints={{
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className={styles.servicesSlider}
          >
            {services.map((service, index) => (
              <SwiperSlide key={service.id}>
                <div
                  className={`${styles.card} ${
                    index === active ? styles.active : ""
                  }`}
                  style={{ backgroundImage: `url(${service.image})` }}
                  onClick={() => goTo(index, true)}
                >
                  <div className={styles.cardOverlay}>
                    <h3 className={styles.title}>{service.title}</h3>
                    <RiArrowRightUpLine className={styles.arrow} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Custom Navigation Buttons (only show when needed) */}
      {showArrows && (
        <div
          className={styles.navButtons}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button
            className="mbtn mbtn-primary"
            onClick={() => goTo(active - 1, true)}
            aria-label="Previous service"
          >
            <RiArrowLeftLine />
          </button>
          <button
            className="mbtn mbtn-primary"
            onClick={() => goTo(active + 1, true)}
            aria-label="Next service"
          >
            <RiArrowRightLine />
          </button>
        </div>
      )}
    </>
  );
}

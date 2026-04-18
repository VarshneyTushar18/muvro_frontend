"use client";
import { useRef, useState, useEffect } from "react";
import { RiArrowLeftLongLine, RiArrowRightLongLine } from "@remixicon/react";
import styles from "./Timeline.module.css";

const Timeline = ({ timelineData }) => {
  const wrapperRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };

    checkScroll();
    wrapperRef.current?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      wrapperRef.current?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollBy = (distance) => {
    wrapperRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <div className={styles.timelineOuter}>
      {/* Left Arrow */}
      <button
        className={`${styles.arrow} ${styles.leftArrow}`}
        onClick={() => scrollBy(-250)}
        disabled={!canScrollLeft}
      >
        <RiArrowLeftLongLine />
      </button>

      {/* Timeline Wrapper */}
      <div
        ref={wrapperRef}
        className={styles.timelineWrapper}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <ul className={styles.timelineContainer}>
          {timelineData.map((event, index) => (
            <li
              key={index}
              className={styles.timelineItem}
              data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
              data-aos-delay={index * 150}
              data-aos-duration="1000"
              data-aos-offset="150"
            >
              <div className={styles.inner_circle}></div>
              <div className={styles.year}>{event.year}</div>
              <div className={styles.eventDetails}>
                <div className={styles.title}>{event.title}</div>
                <div className={styles.description}>{event.description}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.centerLine}></div>
      </div>

      {/* Right Arrow */}
      <button
        className={`${styles.arrow} ${styles.rightArrow}`}
        onClick={() => scrollBy(250)}
        disabled={!canScrollRight}
      >
        <RiArrowRightLongLine />
      </button>
    </div>
  );
};

export default Timeline;

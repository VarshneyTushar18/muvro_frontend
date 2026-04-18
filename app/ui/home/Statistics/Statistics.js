/*
  Project: Muvro
  Page: Home
  Module: Statistics Section

  Author: Tech2Globe Web Solutions
  Creation Date: 2025-AUG-29
  Last Modified Date: 2025-AUG-29
  Version: 1.0
*/

"use client";
import { useEffect, useRef, useState } from "react";
import { RiAddLine } from "@remixicon/react";
import styles from "./Statistics.module.css";

export default function Statistics() {
  const [start, setStart] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      value: 20,
      label: "Successful Years in Business",
      image: "/images/statistics-1.png",
    },
    { value: 1000, label: "Installations", image: "/images/statistics-2.png" },
    {
      value: 350,
      label: "Professional Employees",
      image: "/images/statistics-3.png",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-secondary">
      <div className="container">
        <div className={styles.wrapper}>
          <h4 data-aos="fade-down">
            We provide Integrated Logistics Automation Solutions Worldwide
          </h4>
          <p data-aos="fade-up" data-aos-delay="150">
            Every day, our team works diligently to provide integrated solutions
            that provide substantial benefits to the various business verticals
            in Logistics &amp; Automation. Our custom designs for the specific
            needs of each customer, our automation technology, our expertise are
            the perfect solution for any product line, regardless of industry.
          </p>
        </div>

        <div className={`row justify-content-between align-items-center m-0`}>
          {stats.map((stat, i) => (
            <StatisticCard
              key={i}
              target={stat.value}
              label={stat.label}
              image={stat.image}
              start={start}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatisticCard({ target, label, image, start, index }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime;
    const duration = 2000;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target]);

  return (
    <div
      className={`${styles.statisticCard} col-md-6 col-lg-4`}
      style={{ "--bg-image": `url(${image})` }}
      data-aos="zoom-in"
      data-aos-delay={100 + index * 150}
    >
      <p>
        {count}
        <RiAddLine />
      </p>
      <span>{label}</span>
    </div>
  );
}

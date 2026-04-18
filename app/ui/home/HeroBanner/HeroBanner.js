/*
  Project: Muvro
  Page: Home
  Module: Hero Banner Section

  Author: Tech2Globe Web Solutions
  Creation Date: 2025-AUG-29
  Last Modified Date: 2025-AUG-29
  Version: 1.0
*/

"use client";
import styles from "./HeroBanner.module.css";
import { RiArrowRightUpLine } from "@remixicon/react";

export default function HeroBanner() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/banner-poster.jpg"
      >
        <source src="/videos/banner.mp4" type="video/mp4" />
        <source src="/videos/banner.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.overlay}></div>

      <div className={`${styles.content} container`}>
        <h1 className={styles.title}>
          We Are <span>Leading Supplier</span> of Innovative Intralogistics And
          Material Handling Solutions <RiArrowRightUpLine />
        </h1>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const interactiveElements = document.querySelectorAll(
      "a, button, h1 span, h2 span, h3 span, h4 span, h5 span, h6 span,.swiper-pagination-bullet, .swiper-button-next, .swiper-button-prev"
    );

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.top = `${e.pageY - 10}px`;
        cursor.style.left = `${e.pageX - 10}px`;
      }
    };

    const addHover = () => cursor?.classList.add(styles.cursorHover);
    const removeHover = () => cursor?.classList.remove(styles.cursorHover);

    document.addEventListener("mousemove", moveCursor);

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return <div ref={cursorRef} className={styles.cursor}></div>;
}

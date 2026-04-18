"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "80px",
            right: "30px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "0",
            padding: "12px",
            cursor: "pointer",
            zIndex: 1000,
          }}
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
}
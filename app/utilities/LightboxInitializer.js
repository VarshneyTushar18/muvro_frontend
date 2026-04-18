"use client";

import { useEffect } from "react";
import "glightbox/dist/css/glightbox.css";

export default function LightboxInitializer() {
  useEffect(() => {
    let lightbox;

    // Dynamically import GLightbox only in the browser
    import("glightbox").then(({ default: GLightbox }) => {
      lightbox = GLightbox({
        selector: ".glightbox",
        touchNavigation: true,
        loop: true,
        zoomable: true,
      });
    });

    return () => {
      if (lightbox) {
        lightbox.destroy();
      }
    };
  }, []);

  return null; // no UI, just initialization
}

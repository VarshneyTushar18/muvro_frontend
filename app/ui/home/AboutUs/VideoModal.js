/*
  Project: Muvro
  Page: Home
  Module: About Us Video Modal

  Author: Tech2Globe Web Solutions
  Creation Date: 2025-AUG-29
  Last Modified Date: 2025-AUG-29
  Version: 1.0
*/
"use client";
import { useEffect, useState } from "react";
import { RiCloseLine, RiYoutubeFill } from "@remixicon/react";
import styles from "./AboutUs.module.css";

export default function VideoModal({ modalId, videoId }) {
  const [play, setPlay] = useState(false);

  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const stopVideo = () => setPlay(false);

  const dismissModal = (e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    stopVideo();

    if (typeof window === "undefined") return;
    const modalEl = document.getElementById(modalId);
    if (!modalEl) return;

    const bootstrap = window.bootstrap;
    const instance = bootstrap?.Modal?.getInstance(modalEl);
    if (instance) {
      instance.hide();
      return;
    }

    // Fallback if Bootstrap instance is missing
    modalEl.classList.remove("show");
    modalEl.style.display = "none";
    modalEl.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    document.body.style.removeProperty("padding-right");
    document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
  };

  useEffect(() => {
    const modalEl = document.getElementById(modalId);
    if (!modalEl) return;

    const onHidden = () => stopVideo();
    modalEl.addEventListener("hidden.bs.modal", onHidden);
    return () => modalEl.removeEventListener("hidden.bs.modal", onHidden);
  }, [modalId]);

  return (
    <div
      className={`modal fade ${styles.videoModalRoot}`}
      id={modalId}
      tabIndex="-1"
      aria-hidden="true"
      onClick={dismissModal}
    >
      <div
        className={`modal-dialog modal-dialog-centered modal-lg ${styles.videoModalDialog}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`${styles.videoModal} modal-content`}>
          <button
            type="button"
            className={styles.closeBtn}
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={dismissModal}
          >
            <RiCloseLine />
          </button>

          <div className={play ? `ratio ratio-16x9 ${styles.videoFrame}` : styles.videoFrame}>
            {play ? (
              <iframe
                src={videoUrl}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div
                className={styles.videoThumb}
                onClick={(e) => {
                  e.stopPropagation();
                  setPlay(true);
                }}
              >
                <img
                  src={thumbnailUrl}
                  alt="Video thumbnail"
                  className="img-fluid"
                />
                <RiYoutubeFill />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

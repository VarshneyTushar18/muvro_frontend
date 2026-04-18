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
import { useState } from "react";
import { RiCloseLine, RiYoutubeFill } from "@remixicon/react";
import styles from "./AboutUs.module.css";

export default function VideoModal({ modalId, videoId }) {
  const [play, setPlay] = useState(false);

  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handleClose = () => setPlay(false);

  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex="-1"
      aria-hidden="true"
      onClick={handleClose}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg"  data-aos="zoom-in"
        data-aos-duration="600">
        <div className={`${styles.videoModal} modal-content`}>
          <button
            type="button"
            className={styles.closeBtn}
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <RiCloseLine />
          </button>

          <div className={play ? "ratio ratio-16x9" : ""}>
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

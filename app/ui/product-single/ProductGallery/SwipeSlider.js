"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./swipeslider.module.css";

export default function SwiperSlider({ images = [],galleryName="swiper-gallery",slidesPerViewMobile=1,slidesPerViewTablet=2,slidesPerViewDesktop=3 }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: slidesPerViewMobile,
        },
        768: {
          slidesPerView: slidesPerViewTablet,
        },
        1024: {
          slidesPerView: slidesPerViewDesktop,
        },
      }}
      loop={true}
      className="rounded-xl"
    >
      {images.map((img, i) => (
         <SwiperSlide key={i}>
          <a
            href={img.src}
            className="glightbox"
            data-gallery={galleryName}
          >
            <img
              src={img.src}
              alt={img.alt || `Slide ${i + 1}`}
              className={`${styles.primage} img-fluid cursor-pointer`}
            />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

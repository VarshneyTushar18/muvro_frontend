"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./Clients.module.css";

export default function ClientsCarousel() {
  const images = [
    { src: "/images/adani.png", alt: "Adani" },
    { src: "/images/amazon.png", alt: "Amazon" },
    { src: "/images/ekart.png", alt: "Ekart" },
    { src: "/images/flipkart.png", alt: "Flipkart" },
    { src: "/images/fm-logistics.png", alt: "FM Logistics" },
    { src: "/images/ford.png", alt: "Ford" },
    { src: "/images/mahindra.png", alt: "Mahindra" },
    { src: "/images/myntra.png", alt: "Myntra" },
  ];

  return (
    <div className={styles.carouselWrapper} data-aos="fade-up">
      <Swiper
        modules={[Autoplay]}
        loop
        freeMode
        allowTouchMove={false}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        slidesPerView={6}
        spaceBetween={30}
        breakpoints={{
          1200: { slidesPerView: 6 },
          992: { slidesPerView: 5 },
          768: { slidesPerView: 4 },
          576: { slidesPerView: 3 },
          0: { slidesPerView: 2 },
        }}
        className={styles.swiper}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className={styles.clientWrapper}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className={styles.clientLogo}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./Clients.module.css";

export default function ClientsCarousel() {
  const images = [
    { src: "/images/logos/adani-logo.webp", alt: "Adani" },
    { src: "/images/logos/amazon-logo.webp", alt: "Amazon" },
    { src: "/images/logos/ekart-logo.webp", alt: "Ekart" },
    { src: "/images/logos/flipkart-logo.webp", alt: "Flipkart" },
    { src: "/images/logos/fm-logistic-logo.webp", alt: "FM Logistics" },
    { src: "/images/logos/ford-logo.webp", alt: "Ford" },
    { src: "/images/logos/mahindra-logo.webp", alt: "Mahindra" },
    { src: "/images/logos/myntra-logo.webp", alt: "Myntra" },
  ];

  return (
    <div className={styles.carouselWrapper} data-aos="fade-up">
      <Swiper
        modules={[Autoplay]}
        loop
        freeMode
        allowTouchMove={false}
        speed={3000}
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

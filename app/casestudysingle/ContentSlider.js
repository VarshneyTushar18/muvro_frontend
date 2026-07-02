"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./contentSlider.module.css";

export default function ContentSlider({ slides = [] }) {
    if (!slides.length) return null;

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={0}
            loop={slides.length > 1}
            className={styles.swiper}
        >
            {slides.map((slide, i) => (
                <SwiperSlide key={i}>
                    <div
                        className={`${styles.slide} ${slide.imagePosition === "left" ? styles.reverse : ""}`}
                    >
                        <div className={styles.content}>
                            {slide.heading && <h3 className={styles.heading}>{slide.heading}</h3>}
                            {slide.contentHtml && (
                                <div
                                    className={styles.richText}
                                    dangerouslySetInnerHTML={{ __html: slide.contentHtml }}
                                />
                            )}
                        </div>
                        {slide.image?.src && (
                            <div className={styles.media}>
                                <img src={slide.image.src} alt={slide.image.alt} />
                            </div>
                        )}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

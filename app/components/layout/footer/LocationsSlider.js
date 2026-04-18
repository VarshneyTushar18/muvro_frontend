"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Locations.module.css";

import { RiMailLine, RiPhoneLine } from "@remixicon/react";

const locations = [
    {
        title: "INDIA OFFICE",
        country: "in",
        address: `Plot No- 1195, Main Road National Highway – 34 Morta, Ghaziabad – 201003
Uttar Pradesh, India`,
        email: "info@muvro.com",
        phone: "+91-7457800130",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.176234234234!2d77.457234234234!3d28.662345345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1a2e2a4d4567%3A0x123456789abcdef!2sMuvro%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1695555555555!5m2!1sen!2sin",
    },
    {
        title: "INDIA OFFICE",
        country: "us",
        address: `Plot No- 1195, Main Road National Highway – 34 Morta, Ghaziabad – 201003
Uttar Pradesh, India`,
        email: "info@muvro.com",
        phone: "+91-7457800130",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.176234234234!2d77.457234234234!3d28.662345345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1a2e2a4d4567%3A0x123456789abcdef!2sMuvro%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1695555555555!5m2!1sen!2sin",
    },
    {
        title: "INDIA OFFICE",
        country: "in",
        address: `Plot No- 1195, Main Road National Highway – 34 Morta, Ghaziabad – 201003
Uttar Pradesh, India`,
        email: "info@muvro.com",
        phone: "+91-7457800130",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.176234234234!2d77.457234234234!3d28.662345345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1a2e2a4d4567%3A0x123456789abcdef!2sMuvro%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1695555555555!5m2!1sen!2sin",
    },
    {
        title: "INDIA OFFICE",
        country: "us",
        address: `Plot No- 1195, Main Road National Highway – 34 Morta, Ghaziabad – 201003
Uttar Pradesh, India`,
        email: "info@muvro.com",
        phone: "+91-7457800130",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.176234234234!2d77.457234234234!3d28.662345345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1a2e2a4d4567%3A0x123456789abcdef!2sMuvro%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1695555555555!5m2!1sen!2sin",
    },
];

export default function LocationsSlider({ locations }) {
    if (!locations) return null;
    return (
        <div className={styles.locationsList}>
            <Swiper
                spaceBetween={4}
                breakpoints={{
                    320: { slidesPerView: 1 }, // Mobile
                    768: { slidesPerView: 2 }, // Tablet
                    1024: { slidesPerView: 3 }, // Desktop/Laptop
                }}
                navigation={false}
                modules={[Pagination]}
                pagination={{ clickable: true }}
            >
                {locations.map((loc, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.locationItem}>
                            <div className={styles.mapFrame}>
                                <iframe
                                    src={loc.mapEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={loc.location}
                                ></iframe>
                            </div>
                            <div className={styles.locationDetails}>
                                <h3 className={styles.locationTitle}>
                                    {loc.flag && <img className={styles.locationFlag} src={`${process.env.NEXT_PUBLIC_STRAPI_ASSETS_BASE_URL}${loc.flag.url}`} alt={`${loc.alternativeText ? loc.alternativeText : loc.location} Flag`} />}
                                    {loc.location}
                                </h3>
                                <p className={styles.locationAddress}>{loc.address}</p>
                                <div className={styles.locationContacts}>
                                    {
                                        loc.email && (
                                            <p className={styles.locationContact}>
                                                <RiMailLine />
                                                <a href={`mailto:${loc.email}`}>{loc.email}</a>
                                            </p>
                                        )
                                    }
                                    {
                                        loc.phoneNumber && (
                                            <p className={styles.locationContact}>
                                                <RiPhoneLine />
                                                <a href={`tel:${loc.phoneNumber}`}>{loc.phoneNumber}</a>
                                            </p>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

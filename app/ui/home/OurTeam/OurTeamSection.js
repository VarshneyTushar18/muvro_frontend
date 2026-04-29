"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./OurTeamSection.module.css";

export default function OurTeamSection() {
  const members = [
    {
      name: "Mr. Ajay Yadav",
      role: "CEO",
      image: "/images/ajay-yadav.png",
    },
    {
      name: "Mr. Ashish Kumar",
      role: "VP Business Development",
      image: "/images/ashish-kumar.png",
    },
    {
      name: "Mr. Saurabh Kr",
      role: "Sr. Manager (BDM)",
      image: "/images/saurabh-kr.png",
    },
    {
      name: "Ms. Hemy Sharma",
      role: "CRM Manager",
      image: "/images/hemy-sharma.png",
    },
    {
      name: "Mr. A. Jetinder",
      role: "Plant Head",
      image: "/images/r.-A.-Jetinder.jpg",
    },
    {
      name: "Mr. Vikram Sharma",
      role: "Design Head",
      image: "/images/vikram-sharma.png",
    },
    {
      name: "Mr. Rajkumar",
      role: "R&D Head",
      image: "/images/Mr.-Rajkumar.jpg",
    },
    {
      name: "Mr. Saurabh Dixit",
      role: "Design Manager",
      image: "/images/Mr.-Saurabh-Dixit.jpg",
    },
    {
      name: "Mr. Kali Kumar",
      role: "Quality Manager ",
      image: "/images/Mr.KaliKumar.jpg",
    },
    {
      name: "Mr. Govind",
      role: "SC Head",
      image: "/images/Mr.Govind.jpg",
    },
    {
      name: "Mr. Abhilash T.",
      role: "Project Manager",
      image: "/images/xmeet-the-team-6.jpg",
    },
    {
      name: "Mr. Hemant",
      role: "Project Manager",
      image: "/images/Mr.Hemant.jpg",
    },
    {
      name: "Mr. Ravi Kumar",
      role: "Production In charge",
      image: "/images/Mr.-Ravi-Kumar.jpg",
    },
    {
      name: "Mr. Rohit Kumar",
      role: "Assembly In charge",
      image: "/images/Mr.-Rohit-Kumar.jpg",
    },
    {
      name: "Mr. Avanesh Kumar",
      role: "Finance Head",
      image: "/images/meet-the-team-9-removebg-preview.jpg",
    },
  ];

  return (
    <section className="py-5" data-aos="fade-up" data-aos-duration="1000">
      <div className="container">
        <div className={styles.wrapper} data-aos="fade-up" data-aos-delay="100">
          <span className="section-label-center">OUR TEAM</span>
          <h2 className="text-center mb-3">
            Meet The <span>Team</span>
          </h2>
          <p className="text-center mb-5">
            Get to know the passionate experts driving innovations and success
            at Muvro Technologies
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1400: { slidesPerView: 5 },
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {members.map((member, index) => (
            <SwiperSlide key={index}>
              <figure
                className={styles.card}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className={styles.cardImage}>
                  <div className={styles.cardImageInner}>
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      loading="lazy"
                    />
                  </div>
                </div>
                <figcaption className="text-center">
                  <h5 className={styles.cardTitle}>{member.name}</h5>
                  <p className={styles.cardText}>{member.role}</p>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

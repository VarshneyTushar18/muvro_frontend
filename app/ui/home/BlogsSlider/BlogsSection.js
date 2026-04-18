"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import BlogsCard from "../../../components/blogs/BlogsCard";
import styles from "./BlogsSection.module.css";

export default function BlogsSection() {
  const blogs = [1, 2, 3];

  return (
    <section
      className="bg-secondary "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container">
        <div
          className={styles.sectionHeader}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span className="section-label-center">Blogs & Updates</span>
          <h2>
            Latest <span>Blogs</span>
          </h2>
          <p>
            Stay informed with the latest innovations, success stories, and
            industry updates from Muvro Technologies.
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          loop={false}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              {/* <BlogsCard /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

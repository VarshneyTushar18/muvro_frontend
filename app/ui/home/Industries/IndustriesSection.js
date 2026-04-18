'use client';
import Link from "next/link";
import styles from "./IndustriesSection.module.css";

function IndustryCard({ title, description, image, link, index }) {
  const Wrapper = link ? Link : 'div';
  const wrapperProps = link
    ? { href: link }
    : { onClick: (e) => e.preventDefault() }; 
  return (
    <Wrapper
      {...wrapperProps}
      className={styles.card}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      style={{ cursor: link ? 'pointer' : 'default' }}
    >
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.overlay}>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.titleBar}>{title}</div>
    </Wrapper>
  );
}


export default function IndustriesSection() {
  const industries = [
    {
      title: "Automotive",
      description:
        "For the automotive sector, we provide modular, reliable intralogistics solutions that boost efficiency, precision, and production speed.",
      image: "/images/automobile.png",
      link: "/industries#automobile-manufacturing",
    },
    {
      title: "Parcel & Postal",
      description:
        "We deliver efficient, scalable parcel and postal handling solutions ensuring fast, accurate sorting and seamless distribution operations.",
      image: "/images/parcel-postal.png",
      link: "/industries#parcel-postels",
    },
    {
      title: "FMCG",
      description:
        "We provide agile, reliable intralogistics solutions for FMCG, enabling faster throughput, accuracy, and flexibility in high-volume operations.",
      image: "/images/fmcg.png",
      link: "/industries#fmcg",
    },
    {
      title: "Food & Beverages",
      description:
        "We offer hygienic, efficient intralogistics solutions for food and beverage industries, ensuring speed, accuracy, and compliance with safety standards.",
      image: "/images/food-beverage.png",
      link: "/industries#food-beverage",
    },
    {
      title: "Whitegoods",
      description:
        "We deliver robust, flexible intralogistics solutions for white goods, enhancing production speed, handling efficiency, and operational reliability.",
      image: "/images/whitegoods.png",
      link: "/industries#white-goods",
    },
    {
      title: "Electrical",
      description:
        "We provide reliable material handling and automation solutions for the electrical industry, ensuring safe operations and improved efficiency.",
      image: "/images/electricals.png",
      link: "/industries#electronics-manufacturing",
    },
    {
      title: "E-commerce",
      description:
        "We deliver fast, scalable intralogistics solutions for e-commerce, enabling accurate order fulfillment, optimized storage, and seamless distribution.",
      image: "/images/ecommerce.png",
      link: "/industries#e-commerce",
    },
    {
      title: "Exhibitions",
      description:
        "We offer efficient, flexible material handling solutions for exhibitions, ensuring smooth setup, quick transitions, and reliable logistics support.",
      image: "/images/exhibitions.png",
    },
  ];

  return (
    <section className="bg-secondary">
      <div className="container">
        <div className={styles.wrapper}>
          <span className="section-label" data-aos="fade-down">
            Industries We Serve
          </span>
          <h2 data-aos="fade-up" data-aos-delay="100">
            Driving <span>Innovation</span> Across Industries
          </h2>
          <p data-aos="fade-up" data-aos-delay="200">
            From manufacturing to retail, Muvro Technologies delivers innovative
            intralogistics and material handling solutions that drive efficiency,
            reliability, and growth across diverse industries worldwide.
          </p>
        </div>

        <div className={styles.industriesGrid}>
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

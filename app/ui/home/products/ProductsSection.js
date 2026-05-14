"use client";
import { RiArrowLeftLine, RiArrowLeftLongLine, RiArrowRightLine, RiArrowRightLongLine, RiArrowRightUpLine } from "@remixicon/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./ProductsSection.module.css";
import "./custom.css";

const categories = [
  {
    id: 1,
    name: "Sorters",
    products: [
      {
        id: 1,
        title: "ZedSort™ the Loop – High-Speed Cross Belt Loop Sorter",
        desc: "Muvro’s ZedSort – The Loop is a high-speed Cross Belt Sorter ensuring precise, quiet, and efficient warehouse automation.",
        img: "/images/new-images/ZedSort-the-Loop.webp",
        tag: "Speed. Precision. Power ",
        bg: "#eee",
        link: "/high-speed-cross-belt-loop-sorter",
        icon: "/images/sorter-icon.svg",
        categoryTag: "Sorters",
      },
      {
        id: 2,
        title: "ZedSort™ the Tilt Tray Sorter System",
        desc: " Tilt Tray Sorter System is a high-speed, modular, and flexible solution for automating sorting in warehouses, distribution centres, and logistics hubs.",
        img: "/images/new-images/ZedSort-the-tilt.webp",
        tag: "Smart. Scalable. Seamless.",
        bg: "#eee",
        link: "/tilt-tray-sorter-system",
        icon: "/images/sorter-icon.svg",
        categoryTag: "Sorters",
      },
      {
        id: 3,
        title: "Trid with Zed Bot (3D smart sorter)",
        desc: "Muvro delivers an advanced modular sorting system with autonomous bots optimizing space, accuracy, and scalability for modern warehouses.",
        img: "/images/new-images/3dsmart-sorter-image.webp",
        tag: "Smart. Scalable. Space-Savvy ",
        bg: "#eee",
        link: "/3d-smart-sorter-ics",
        icon: "/images/sorter-icon.svg",
        categoryTag: "Sorters",
      },
      {
        id: 4,
        title: "ZedSort™ The LIN Linear Cross-Belt Sorter",
        desc: "Muvro’s ZedSort™ Cross-Belt Sorter powers modern logistics with unmatched speed, reliability, and flexibility for diverse industries.",
        img: "/images/new-images/ZedSort-the-Lin.webp",
        tag: "High-Speed. Precision Space-Efficient.",
        bg: "#eee",
        link: "/zedsort-the-lin-linear-cross-belt-sorter",
        icon: "/images/sorter-icon.svg",
        categoryTag: "Sorters",
      },
      {
        id: 5,
        title: "Swing Wheel Sorter",
        desc: "Muvro’s Swing Wheel Sorter delivers high-speed, precise parcel handling, boosting efficiency across e-commerce, retail, and logistics operations.",
        img: "/images/new-images/Swing-Wheel-Sorter-Image.webp",
        tag: "Swift. Smart. Seamless ",
        bg: "#eee",
        link: "/swing-wheel-sorter",
        icon: "/images/sorter-icon.svg",
        categoryTag: "Sorters",
      },
    ],
  },
  {
    id: 2,
    name: "Secondary Sorters",
    products: [
      {
        id: 1,
        title: "Vertixo Stack Sorter",
        desc: "The Vertixo™ Stack Sorter is a high-density, multi-level parcel sorting system engineered for modern warehouses.",
        img: "/images/vertixo-main.webp",
        tag: "Ideal for high-density",
        bg: "#eee",
        link: "/vertixo-stack-sorter",
        icon: "/images/sorter-icon.svg",
        categoryTag: "Secondary Sorters",
      },
      {
        id: 2,
        title: "Vetro Micro Sort",
        desc: "Vetro Micro Sort offers a compact yet powerful secondary sortotion solution designed specifically for space—constrained environments.",
        img: "/images/vetro-micro-main.webp",
        tag: "Smart Parcel Tracking",
        bg: "#eee",
        link: "/vetro-micro-sort",
        icon: "/images/sorter-icon.svg",
        categoryTag: "Secondary Sorters",
      },
      {
        id: 3,
        title: "VOREX",
        desc: "The VOREX™ Multi-Layer Multi-Bot Sorting System is Muvro’s most advanced 3D orbital sorter—engineered for operations.",
        img: "/images/vorex-main.webp",
        tag: "Multi-Layer High-Density Sorting",
        bg: "#eee",
        link: "/vorex",
        icon: "/images/sorter-icon.svg",
        categoryTag: "Secondary Sorters",
      },

    ],
  },

  {
    id: 3,
    name: "ASRS",
    products: [
      {
        id: 1,
        title: "NaviGO Pallet Shuttle ASRS System",
        desc: "Muvro’s ASRS with NaviGO Cart and Shuttle revolutionizes warehouse automation, ensuring precise, scalable, and efficient goods management.",
        img: "/images/navigo.webp",
        tag: "Smart. Scalable. Seamless.",
        bg: "#eee",
        link: "/navigo-pallet-shuttle-asrs-system",
        icon: "/images/sorter-icon.svg",
        categoryTag: "ASRS",
      },
      {
        id: 2,
        title: "Radio Shuttle System",
        desc: "Muvro’s NaviGO ASRS Shuttle delivers high-density, modular, and efficient storage automation—maximizing space, throughput, and operational productivity.",
        img: "/images/radio-shuttle-system-image.webp",
        tag: "Deep. Dynamic. Dependable.",
        bg: "#eee",
        link: "/radio-shuttle-system",
        icon: "/images/sorter-icon.svg",
        categoryTag: "ASRS",
      },
      {
        id: 3,
        title: "Pallet ASRS Stacker Crane",
        desc: "Muvro’s AS/RS Stacker Cranes optimize vertical storage with precision, safety, and automation—maximizing efficiency, capacity, and cost savings.",
        img: "/images/ASRS-Stacker-Crane.webp",
        tag: "Tall. Precise. Powerful.",
        bg: "#eee",
        link: "/asrs-stacker-cranes",
        icon: "/images/sorter-icon.svg",
        categoryTag: "ASRS",
      },
      {
        id: 4,
        title: "Mini Load ASRS Shuttle System",
        desc: " Muvro Mini-Load ASRS is a high-speed, multi-deep tote storage and retrieval system designed for modern fulfillment centers. ",
        img: "/images/mini-load-asrs.webp",
        tag: "Energy-Efficient Drives",
        bg: "#eee",
        link: "/mini-load-asrs-shuttle-system",
        icon: "/images/sorter-icon.svg",
        categoryTag: "ASRS",
      }
    ],
  },

  {
    id: 4,
    name: "Parcel Feeding / Handling",
    products: [
      {
        id: 1,
        title: "Singulator System",
        desc: "Muvro’s Multibelt Parcel Singulator streamlines bulk parcel movement into a smooth, single-file flow for efficient sorting operations.",
        img: "/images/parcel-singulator-system.webp",
        tag: "Smart. Smooth. Singular",
        bg: "#eee",
        link: "/parcel-singulator-system",
        icon: "/images/sorter-icon.svg",
        categoryTag: "Parcel Feeding / Handling",
      },
      {
        id: 2,
        title: "Parcel Tipper",
        desc: "A tipper assembly is a mechanical and hydraulic system integrated into a tipper truck (or dump truck)  that enables the lifting and unloading of bulk materials from the vehicle’s cargo bed.",
        img: "/images/Parcel-tipper.webp",
        tag: "Universal Compatibility",
        bg: "#eee",
        link: "/tipper",
        icon: "/images/sorter-icon.svg",
        categoryTag: "Parcel Feeding / Handling",
      },
      {
        id: 3,
        title: "VDS System",
        desc: "A VDS is an advanced automated solution designed to accurately measure the length, width, height, and volume of parcels, cartons, or totes within modern logistics and warehouse operations. ",
        img: "/images/vds-system-image.webp",
        tag: "Gentle Product Handling",
        bg: "#eee",
        link: "/volumetric-dimensioning-system",
        icon: "/images/sorter-icon.svg",
        categoryTag: "Parcel Feeding / Handling",
      },
    ],
  },
  {
    id: 5,
    name: "Conveyor",
    products: [
      {
        id: 1,
        title: "Belt Conveyor",
        desc: "A Belt Conveyor is a versatile and cost-effective material handling system used in industries such as e-commerce, warehousing, logistics, food processing, packaging, and manufacturing.",
        img: "/images/Belt-Conveyor-Image.webp",
        tag: "Customizable & Scalable Design",
        bg: "#eee",
        link: "/conveyor",
        icon: "/images/conveyor.svg",
        categoryTag: "Conveyors",
      },
      {
        id: 2,
        title: "Roller Conveyor",
        desc: "Designed for continuous and efficient material movement, driven by an AC geared motor, it operates without zone control, utilizing a chain or belt drive mechanism",
        img: "/images/Roller-Conveyor-Image-New.webp",
        tag: "Simple & Robust Design",
        bg: "#eee",
        link: "/conveyor",
        icon: "/images/conveyor.svg",
        categoryTag: "Conveyors",
      },
      {
        id: 3,
        title: "Modular Conveyor",
        desc: " Modular Belt Conveyors are advanced and adaptable material handling systems designed to meet the diverse needs of modern industries. ",
        img: "/images/modular-conveyor-image.webp",
        tag: "Application Versatility",
        bg: "#eee",
        link: "/conveyor",
        icon: "/images/conveyor.svg",
        categoryTag: "Conveyors",
      },
      {
        id: 4,
        title: "Chain Conveyor",
        desc: " Chain Conveyors are a robust & Versatile in material handling solution. They are designed for heavy-duty conveying applications across diverse industries.",
        img: "/images/chain-conveyor-image.webp",
        tag: "Versatile Layout Capabilities",
        bg: "#eee",
        link: "/conveyor",
        icon: "/images/conveyor.svg",
        categoryTag: "Conveyors",
      },
      {
        id: 5,
        title: "Telescopic Conveyor",
        desc: " A telescopic conveyor is a type of conveyor system designed for efficient loading and unloading of materials, particularly in environments like warehouses, airports, and distribution centres. ",
        img: "/images/Telescopic-Conveyor.webp",
        tag: "Flexible Design",
        bg: "#eee",
        link: "/conveyor",
        icon: "/images/conveyor.svg",
        categoryTag: "Conveyors",
      },
      {
        id: 6,
        title: "Spiral Conveyor",
        desc: "An spiral conveyor system is designed to transport products in a spiral pattern, making it ideal for elevation changes and space-efficient material handling in various warehouse operations.",
        img: "/images/Spiral-Conveyor-Image.webp",
        tag: "Elevation & Angle Control",
        bg: "#eee",
        link: "/conveyor",
        icon: "/images/conveyor.svg",
        categoryTag: "Conveyors",
      },
    ],
  }
];

function ProductCard({ item, imageOnTop = false }) {
  return (
    <div
      className={`${styles.card}`}
      style={{ backgroundColor: item.bg }}
    >
      {
        !imageOnTop &&
        <div className={styles.cardHeader}>
          {/* <span className={styles.tag}>{item.tag}</span> */}
        </div>
      }

      <div className={`${styles.cardBody} ${imageOnTop ? styles.imageOnTop : ""}`}>
        <div className={styles.cardContent}>

          {
            imageOnTop &&
            <div className={styles.cardHeader}>
              {/* <span className={styles.tag}>{item.tag}</span> */}
            </div>
          }

          <div className={styles.cardIcon}>
            <div className={styles.iconWrapper}>
              <img src={item.icon} alt={item.title} className="img-fluid" />
            </div>
          </div>
          <div className={styles.cardText}>
            <h3>{item.title}</h3>

            <p className="mb-3">{item.desc}</p>

            <a href={item.link} className={styles.link}>
              Explore More <RiArrowRightUpLine fontSize={12} />
            </a>
          </div>
          <div className={styles.categorytag}>
            {item.categoryTag}
          </div>
        </div>
        <div className={styles.cardImage}>
          <img src={item.img} alt={item.title} />
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  return (
    <section className="customproductsection">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className={styles.wrapper}>
              <span className="section-label-center">Smart Technologies</span>
              <h2>
                Cutting-Edge <span>Technologies</span>
              </h2>
              <p>
                From manufacturing to retail, Muvro Technologies delivers innovative
                intralogistics and material handling solutions that drive
                efficiency, reliability, and growth across diverse industries
                worldwide.
              </p>
            </div>
            <div className={styles.WrapperSlider}>
              <div className={`${styles.navButtons}`}>
                <button className={`custom-button-prev mbtn mbtn-primary ${styles.navButton}`}>
                  <RiArrowLeftLongLine />
                </button>
                <button className={`custom-button-next mbtn mbtn-primary ${styles.navButton}`}>
                  <RiArrowRightLongLine />
                </button>
              </div>
              {/* Parent Slider: Categories */}
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".custom-button-next",
                  prevEl: ".custom-button-prev",
                }}
                autoHeight={true}
                spaceBetween={50}
              >
                {categories.map((category) => (
                  <SwiperSlide key={category.id}>
                    <div className="category-block">
                      <div className={styles.categoryHeader}>
                        <h3 className="text-left mb-4">{category.name}</h3>
                      </div>

                      {category.products.length === 0 ? (
                        <p className="text-center py-5 fw-bold">No Products Available</p>
                      ) : (
                        <>
                          {/* Desktop Layout (≥1366px) - 3 Column Grid */}
                          <div className="d-none d-xxl-block">
                            <div className="row g-4">
                              {category.products.map((item) => (
                                <div key={item.id} className="col-lg-6 d-flex">
                                  <ProductCard item={item} imageOnTop={true} />
                                </div>
                              ))}
                            </div>
                          </div>
                          {/* Mobile & Tablet Slider (≤1366px) */}
                          <div className="d-block d-xxl-none">
                            <Swiper
                              modules={[Pagination]}
                              spaceBetween={20}
                              pagination={{ clickable: true }}
                              breakpoints={{
                                0: { slidesPerView: 1 },
                                576: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 2 },
                                1200: { slidesPerView: 2 },
                              }}
                            >
                              {category.products.map((item) => (
                                <SwiperSlide key={item.id}>
                                  <ProductCard item={item} />
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>
                        </>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

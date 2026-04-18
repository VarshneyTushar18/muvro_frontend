"use client";
import { RiArrowLeftLine, RiArrowLeftLongLine, RiArrowRightLine, RiArrowRightLongLine, RiArrowRightUpLine } from "@remixicon/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./ProductsSection.module.css";

const categories = [
  {
    id: 1,
    name: "Sorters",
    products: [
      {
        id: 1,
        title: "High Speed Cross Belt Sorter",
        desc: "Muvro’s ZedSort – The Loop is a high-speed Cross Belt Sorter ensuring precise, quiet, and efficient warehouse automation.",
        img: "/images/High Speed Cross Belt Sorter.png",
        tag: "Speed. Precision. Power ",
        bg: "#F6F6F6",
        link: "/high-speed-cross-belt-loop-sorter"
      },
      {
        id: 2,
        title: "Tilt Tray Sorter",
        desc: " Tilt Tray Sorter System is a high-speed, modular, and flexible solution for automating sorting in warehouses, distribution centres, and logistics hubs.",
        img: "/images/Tilt-Tray-Sorter.png",
        tag: "Smart. Scalable. Seamless.",
        bg: "rgba(104,104,104,0.3)",
        link: "/tilt-tray-sorter-system"
      },
      {
        id: 3,
        title: "3D Smart Sorter",
        desc: "Muvro delivers an advanced modular sorting system with autonomous bots optimizing space, accuracy, and scalability for modern warehouses.",
        img: "/images/3D Smart Sorter.png",
        tag: "Smart. Scalable. Space-Savvy ",
        bg: "rgba(255,193,0,0.2)",
        link: "/3d-smart-sorter-ics"
      },
      {
        id: 4,
        title: "Linear Cross Belt Sorter",
        desc: "Muvro’s ZedSort™ Cross-Belt Sorter powers modern logistics with unmatched speed, reliability, and flexibility for diverse industries.",
        img: "/images/zedsort-the-lin-linear-cross-belt-sorter.webp",
        tag: "High-Speed. Precision Space-Efficient.",
        bg: "rgba(255,138,8,0.3)",
        link: "/zedsort-the-lin-linear-cross-belt-sorter"
      },
      {
        id: 5,
        title: "Swing Wheel Sorter",
        desc: "Muvro’s Swing Wheel Sorter delivers high-speed, precise parcel handling, boosting efficiency across e-commerce, retail, and logistics operations.",
        img: "/images/Swing Wheel Sorter.png",
        tag: "Swift. Smart. Seamless ",
        bg: "#F2F2F2",
        link: "/swing-wheel-sorter"
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
        img: "/images/Vertixo_Stack_Sorter.webp",
        tag: "Ideal for high-density",
        bg: "rgba(255,193,0,0.2)",
        link: "/vertixo-stack-sorter"
      },
      {
        id: 2,
        title: "Vetro Micro Sort",
        desc: "Vetro Micro Sort offers a compact yet powerful secondary sortotion solution designed specifically for space—constrained environments.",
        img: "/images/Micro_SORT_The_Lite.webp",
        tag: "Smart Parcel Tracking",
        bg: "rgba(255,193,0,0.2)",
        link: "/vetro-micro-sort"
      },
      {
        id: 3,
        title: "VOREX",
        desc: "The VOREX™ Multi-Layer Multi-Bot Sorting System is Muvro’s most advanced 3D orbital sorter—engineered for operations.",
        img: "/images/Vorex-image.webp",
        tag: "Multi-Layer High-Density Sorting",
        bg: "rgba(255,193,0,0.2)",
        link: "/vorex"
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
        img: "/images/Pallet Shuttle ASRS System.png",
        tag: "Smart. Scalable. Seamless.",
        bg: "rgba(255,193,0,0.2)",
        link: "/navigo-pallet-shuttle-asrs-system"
      },
      {
        id: 2,
        title: "Radio Shuttle System",
        desc: "Muvro’s NaviGO ASRS Shuttle delivers high-density, modular, and efficient storage automation—maximizing space, throughput, and operational productivity.",
        img: "/images/Radio Shuttle System.png",
        tag: "Deep. Dynamic. Dependable.",
        bg: "rgba(104,104,104,0.3)",
        link: "/radio-shuttle-system"
      },
      {
        id: 3,
        title: "Pallet ASRS Stacker Crane",
        desc: "Muvro’s AS/RS Stacker Cranes optimize vertical storage with precision, safety, and automation—maximizing efficiency, capacity, and cost savings.",
        img: "/images/Pallet ASRS Stacker Crane.png",
        tag: "Tall. Precise. Powerful.",
        bg: "#F6F6F6",
        link: "/asrs-stacker-cranes"
      },
      {
        id: 4,
        title: "Mini Load ASRS Shuttle System",
        desc: " Muvro Mini-Load ASRS is a high-speed, multi-deep tote storage and retrieval system designed for modern fulfillment centers. ",
        img: "/images/Mini-Load-ASRS-Shuttle-System.webp",
        tag: "Energy-Efficient Drives",
        bg: "#F6F6F6",
        link: "/mini-load-asrs-shuttle-system"
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
        img: "/images/Singulator System.png",
        tag: "Smart. Smooth. Singular",
        bg: "rgba(255,193,0,0.2)",
        link: "/parcel-singulator-system"
      },
      {
        id: 2,
        title: "Parcel Tipper",
        desc: "A tipper assembly is a mechanical and hydraulic system integrated into a tipper truck (or dump truck)  that enables the lifting and unloading of bulk materials from the vehicle’s cargo bed.",
        img: "/images/tipper-parcel.webp",
        tag: "Universal Compatibility",
        bg: "#F2F2F2",
        link: "/tipper"
      },
      {
        id: 3,
        title: "VDS System",
        desc: "Developed by Intralox, it features a modular plastic belt with embedded rollers that can move products in multiple directions",
        img: "/images/vds-system.webp",
        tag: "Gentle Product Handling",
        bg: "#F2F2F2",
        link: "/activated-roller-belt"
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
        img: "/images/belt-conveyor.webp",
        tag: "Customizable & Scalable Design",
        bg: "rgba(255,193,0,0.2)",
        link: "/conveyor"
      },
      {
        id: 2,
        title: "Roller Conveyor",
        desc: "Designed for continuous and efficient material movement, driven by an AC geared motor, it operates without zone control, utilizing a chain or belt drive mechanism",
        img: "/images/Roller-Conveyor.webp",
        tag: "Simple & Robust Design",
        bg: "#F2F2F2",
        link: "/conveyor"
      },
      {
        id: 3,
        title: "Modular Conveyor",
        desc: " Modular Belt Conveyors are advanced and adaptable material handling systems designed to meet the diverse needs of modern industries. ",
        img: "/images/Modular-Conveyor.webp",
        tag: "Application Versatility",
        bg: "#F2F2F2",
        link: "/conveyor"
      },
      {
        id: 4,
        title: "Chain Conveyor",
        desc: " Chain Conveyors are a robust & Versatile in material handling solution. They are designed for heavy-duty conveying applications across diverse industries.",
        img: "/images/Chain-Conveyor.webp",
        tag: "Versatile Layout Capabilities",
        bg: "#F2F2F2",
        link: "/conveyor"
      },
      {
        id: 5,
        title: "Telescopic Conveyor",
        desc: " A telescopic conveyor is a type of conveyor system designed for efficient loading and unloading of materials, particularly in environments like warehouses, airports, and distribution centres. ",
        img: "/images/Telescopic-Conveyor.webp",
        tag: "Flexible Design",
        bg: "#F2F2F2",
        link: "/conveyor"
      },
    ],
  }
];

function ProductCard({ item, imageOnTop = false }) {
  return (
    <div
      className={`${styles.card} h-100`}
      style={{ backgroundColor: item.bg }}
    >
      {
        !imageOnTop &&
        <div className={styles.cardHeader}>
          <span className={styles.tag}>{item.tag}</span>
        </div>
      }

      <div className={`${styles.cardBody} ${imageOnTop ? styles.imageOnTop : ""}`}>
        <div className={styles.cardContent}>
          {
            imageOnTop &&
            <div className={styles.cardHeader}>
              <span className={styles.tag}>{item.tag}</span>
            </div>
          }
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <a href={item.link} className={styles.link}>
            Check Details <RiArrowRightUpLine />
          </a>
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
    <section>
      <div className="container">
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
                      {/* Desktop Layout (≥1366px) */}
                      <div className="d-none d-xxl-block">
                        <div className="row g-4 justify-content-center">
                          {category.products.length === 1 && (
                            <div className="col-lg-6 d-flex">
                              <ProductCard item={category.products[0]} imageOnTop={true} />
                            </div>
                          )}

                          {category.products.length === 2 && (
                            <>
                              {category.products.map((item) => (
                                <div key={item.id} className="col-lg-6 d-flex">
                                  <ProductCard item={item} imageOnTop={true} />
                                </div>
                              ))}
                            </>
                          )}

                          {category.products.length === 3 && (
                            <>
                              {category.products.map((item) => (
                                <div key={item.id} className="col-lg-4 d-flex">
                                  <ProductCard item={item} imageOnTop={true} />
                                </div>
                              ))}
                            </>
                          )}

                          {category.products.length === 4 && (
                            <>
                              {category.products.slice(0, 2).map((item) => (
                                <div key={item.id} className="col-lg-6 d-flex">
                                  <ProductCard item={item} />
                                </div>
                              ))}
                              {category.products.slice(2, 4).map((item) => (
                                <div key={item.id} className="col-lg-6 d-flex">
                                  <ProductCard item={item} />
                                </div>
                              ))}
                            </>
                          )}

                          {category.products.length >= 5 && (
                            <>
                              <div className="col-lg-8 d-flex flex-column">
                                <div className="row g-4 flex-grow-1">
                                  {category.products.slice(0, 3).map((item) => (
                                    <div
                                      key={item.id}
                                      className={`col-${item.id === 1 ? "12" : "6"} d-flex`}
                                    >
                                      <ProductCard item={item} />
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="col-lg-4 d-flex flex-column">
                                <div className="row g-4">
                                  {category.products.slice(3, 5).map((item) => (
                                    <div key={item.id} className="col-12 d-flex">
                                      <ProductCard item={item} imageOnTop={true} />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </>
                          )}
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
                            576: { slidesPerView: 1.2 },
                            768: { slidesPerView: 1.5 },
                            1024: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
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
    </section>
  );
}

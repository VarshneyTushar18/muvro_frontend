"use client";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./ServicesSection.module.css";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
} from "@remixicon/react";

const formatSolutionItemId = (title) =>
  `solution-${title?.replace(/\s+/g, "-").toLowerCase()}`;

const getHashFromLink = (link) => link?.split("#")[1] || "";

const normalize = (value) =>
  value?.toString().toLowerCase().replace(/[^a-z0-9]/g, "") || "";

const getProductImageUrl = (product) => {
  const imageUrl = product?.transparentImage?.url;
  if (!imageUrl) return "";

  return imageUrl.startsWith("http")
    ? imageUrl
    : `${process.env.NEXT_PUBLIC_STRAPI_ASSETS_BASE_URL || ""}${imageUrl}`;
};

function ProductCard({ product }) {
  const imageUrl = getProductImageUrl(product);

  return (
    <div className={styles.productCard}>
      <div className={styles.productCardImage}>
        <a href={`/${product.slug}`} className="text-center">
          {imageUrl && (
            <img src={imageUrl} alt={product.productName} loading="lazy" />
          )}
        </a>
      </div>
      <div className={styles.productCardText}>
        <p className={styles.productName}>{product.productName}</p>
        <div className={styles.productFooter}>
          <a href={`/${product.slug}`} className={styles.arrow}>
            <RiArrowRightUpLine />
          </a>
        </div>
      </div>
    </div>
  );
}

function ServiceModal({ service, solutionItem }) {
  if (!service) return null;

  const relatedProducts = solutionItem?.hasMultipleProduct
    ? solutionItem.product_pages || []
    : solutionItem?.product_page
      ? [solutionItem.product_page]
      : [];

  return (
    <div
      className="modal fade"
      id="serviceModal"
      tabIndex="-1"
      aria-labelledby="serviceModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="serviceModalLabel">
              {service.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className={`modal-body ${styles.serviceModalBody}`}>
            <p>{service.description}</p>

            {relatedProducts.length > 0 ? (
              <div className={styles.productGrid}>
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id || product.slug} product={product} />
                ))}
              </div>
            ) : (
              <img
                src={service.image}
                alt={service.title}
                className={`img-fluid ${styles.serviceModalImage}`}
              />
            )}

            {service.link && relatedProducts.length === 0 && (
              <a href={service.link} className="mbtn mbtn-small mbtn-primary">
                View Solution
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const categories = {
  "Intralogistics": [
    {
      id: 1,
      title: "ASRS Solutions",
      description:
        "Ultra High Speed, High Throughput, Modular & Precise Sort 10,000-40,000 parcels/hour at over 2.5 m / s with scalable layouts & twin / two - tier carriers, built for large - scale sorting centres.",
      image: "/images/asrs.jpg",
      link: "/solutions#solution-asrs-solutions",
    },
    {
      id: 2,
      title: "Sorting Solutions",
      description:
        "High Throughput, Compact & Low-Profile Design. It sorts 6,000-1,000 parcels/hour with high precision and efficiency in a space-saving design ideal for high-density operations.",
      image: "/images/sorting.png",
      link: "/solutions#solution-sorting-solutions",
    },
    {
      id: 3,
      title: "Secondary Sorting Systems",
      description:
        "Our innovative gantry-based system delivers unmatched throughput, precision, and scalability for modern logistics operations.",
      image: "/images/secondary-image-sorting-update.webp",
      link: "/solutions#solution-secondary-sorting-solutions",
    },
    {
      id: 4,
      title: "Fulfilment Solutions",
      description:
        "High-Density, Automated Precision, Scalable Design, Optimize your warehouse with our Pallet Shuttle ASRS, offering automated, high-density storage that enhances throughput and operational efficiency.",
      image: "/images/fulfilment.png",
      link: "/solutions#solution-fulfilment-solutions",
      manualLink: "/fulfilment-solution",
    },
    {
      id: 5,
      title: "Quick Commerce",
      description:
        "Compact Space, Semi-automated, Maximum Storage Utilization, Optimize warehouse efficiency with a high-density, semi-automated system that maximizes pallet storage in depth & height, with lower cost.",
      image: "/images/quick-ecommone.webp",
      link: "/solutions#solution-quick-commerce",
    },
    {
      id: 6,
      title: "Mobile Robots",
      description:
        "Mobile Robots in automotive industries automate material transport, streamline assembly processes, reduce manual labor, and enhance efficiency, safety, and overall production flexibility.",
      image: "/images/mobile-robots-main-image.webp",
      link: "/solutions#solution-mobile-robots",
    },
  ],
  "Automotive": [
    {
      id: 1,
      title: "Assembly Lines",
      description: "Modular lines for component and vehicle assembly with controlled flow, station balancing, quality gates, and production-ready ergonomics.",
      image: "/images/automotbe-banner-1.webp",
      link: "/solutions#solution-assembly-lines",
      manualLink: "/automotive",
      
    },
    {
      id: 2,
      title: "SPM's",
      description: "Special purpose machines built around your part, cycle time, and process sequence for repeatable output on demanding shop floors.",
      image: "/images/automotbe-banner-1.webp",
      link: "/solutions#solution-gearbox-assembly-lines",
      manualLink: "/automotive",
    },
    {
      id: 3,
      title: "Mobile Robots",
      description: "AGV and AMR based internal transport for predictable, safer material movement between storage, line-side, and dispatch areas.",
      image: "/images/automotbe-banner-1.webp",
      link: "/solutions#solution-axle-line-and-frame",
      manualLink: "/automotive",
    },
    {
      id: 4,
      title: "EMS System",
      description: "Electrified monorail systems for overhead movement where floor space is limited and synchronized transfer is essential.",
      image: "/images/automotbe-banner-1.webp",
      link: "/solutions#solution-ergonomic-handling-system",
      manualLink: "/automotive",
    },
    {
      id: 5,
      title: "Rail Guided Vehicles (RGV)",
      description: "Rail-guided transfer vehicles for reliable in-line and cross-bay movement of pallets, bins, fixtures, and work-in-process loads.",
      image: "/images/automotbe-banner-1.webp",
      link: "/solutions#solution-mobile-robots",
      manualLink: "/automotive",
    },
    {
      id: 6,
      title: "Sorting & Storage",
      description: "Organized storage and sorting systems that keep automotive components available at the right station, in the right sequence.",
      image: "/images/automotbe-banner-1.webp",
      link: "/solutions#solution-mobile-robots",
      manualLink: "/automotive",
    },
    {
      id: 7,
      title: "Ergonomic Handling System",
      description: "Operator-friendly lifting, tilting, positioning, and handling equipment designed to reduce strain and improve repeatability.",
      image: "/images/automotbe-banner-1.webp",
      link: "/solutions#solution-mobile-robots",
      manualLink: "/automotive",
    },
    {
      id: 8,
      title: "Fixtures & Grippers",
      description: "Precision fixtures and gripping systems for stable part holding, robotic handling, inspection, and repeatable assembly quality.",
      image: "/images/automotbe-banner-1.webp",
      link: "/solutions#solution-mobile-robots",
      manualLink: "/automotive",
    },
  ],
  "White Goods": [
    {
      id: 1,
      title: "IDU VRV Assembly Line",
      description: "Modular assembly lines tailored for IDU VRV units, providing controlled flow, precision balancing, and ergonomic operator stations.",
      image: "/images/whitegoods-banner-1.webp",
      link: "/solutions#white-goods",
      manualLink: "/white-goods",
    },
    {
      id: 2,
      title: "ODU VRV Assembly Line",
      description: "Robust assembly solutions for ODU VRV units with synchronized transfer, quality gates, and seamless component integration.",
      image: "/images/whitegoods-banner-1.webp",
      link: "/solutions#white-goods",
      manualLink: "/white-goods",
    },
    {
      id: 3,
      title: "IDU RA Assembly Line",
      description: "High-efficiency assembly lines for IDU RA production, engineered for cycle time optimization and repeatable output.",
      image: "/images/whitegoods-banner-1.webp",
      link: "/solutions#white-goods",
      manualLink: "/white-goods",
    },
    {
      id: 4,
      title: "ODU RA Assembly Line",
      description: "Complete production line setup for ODU RA, featuring automated material handling and rigorous testing station integration.",
      image: "/images/whitegoods-banner-1.webp",
      link: "/solutions#white-goods",
      manualLink: "/white-goods",
    },
    {
      id: 5,
      title: "Robotics Palletizer",
      description: "Automated robotic palletizing systems that provide predictable, high-speed end-of-line packaging and secure material handling.",
      image: "/images/whitegoods-banner-1.webp",
      link: "/solutions#white-goods",
      manualLink: "/white-goods",
    },
    {
      id: 5,
      title: "ASRS System",
      description: "Automated Storage and Retrieval Systems for organized, high-density storage and timely retrieval of white goods components.",
      image: "/images/whitegoods-banner-1.webp",
      link: "/solutions#white-goods",
      manualLink: "/white-goods",
    },
  ],

  "Food & Beverages": [
    {
      id: 1,
      title: "End of Line Conveyors",
      description: "Automated conveyor solutions for seamless end-of-line packaging and transfer. Muvro’s systems ensure high-speed handling while maintaining product integrity and hygiene standards.",
      image: "https://img.freepik.com/premium-vector/green-start-button_875240-2897.jpg",
      link: "/solutions#solution-end-of-line-(conveyor-line)",
    },
    {
      id: 2,
      title: "Spiral Conveyors",
      description: "Compact spiral conveyors for efficient vertical movement in food plants. Muvro’s designs maximize floor space while supporting continuous, contamination-free product flow.",
      image: "https://img.freepik.com/premium-vector/green-start-button_875240-2897.jpg",
      link: "/solutions#solution-spiral-conveyor",
    },
    {
      id: 3,
      title: "FG Lines",
      description: "Complete final goods lines engineered for high-speed beverage and food packaging. Muvro delivers integrated, hygienic systems to optimize throughput and minimize downtime.",
      image: "https://img.freepik.com/premium-vector/green-start-button_875240-2897.jpg",
      link: "/solutions#solution-fg-lines",
    },
  ],
  "Waste Management": [
    {
      id: 1,
      title: "Bulk Handling Conveyor",
      description: "Heavy-duty conveyors engineered for efficient movement of bulk waste materials. Muvro’s durable systems ensure smooth, continuous operation in demanding waste-handling environments.",
      image: "https://img.freepik.com/premium-vector/green-start-button_875240-2897.jpg",
      link: "/solutions#solution-bulk-handling-conveyor-",
    },
    {
      id: 2,
      title: "Turnkey Projects",
      description: "End-to-end waste management solutions covering collection, segregation, and transfer. Muvro delivers fully integrated systems designed for maximum efficiency and sustainability.",
      image: "https://img.freepik.com/premium-vector/green-start-button_875240-2897.jpg",
      link: "/solutions#solution-truckey-projects-",
    },
  ],
  "Packaging Industry": [
    {
      id: 1,
      title: "Carton Handling Conveyor",
      description: "Automated conveyor systems designed for efficient carton transfer across packaging lines. Muvro’s precision-engineered conveyors ensure smooth, continuous flow and reduced manual handling.",
      image: "https://img.freepik.com/premium-vector/green-start-button_875240-2897.jpg",
      link: "/solutions#solution-carton-handling-conveyor-",
    },
    {
      id: 2,
      title: "Special Low Profile RGV",
      description: "Compact and low-height RGVs tailored for tight packaging environments. Muvro’s RGVs enable fast, reliable, and space-saving material movement with intelligent navigation control.",
      image: "https://img.freepik.com/premium-vector/green-start-button_875240-2897.jpg",
      link: "/solutions#solution-special-low-profile-rgv-",
    },
  ],
  "Airport": [
    {
      id: 1,
      title: "Baggage Handling Conveyor",
      description: "Reliable and energy-efficient conveyors for seamless baggage transfer. Designed by Muvro for optimal flow and minimal downtime.",
      image: "https://img.freepik.com/premium-vector/green-start-button_875240-2897.jpg",
      link: "/solutions#airport",
    },
    {
      id: 2,
      title: "Sorter System",
      description: "High-speed sorter systems for accurate baggage distribution. Muvro’s intelligent automation ensures quick turnaround and precision handling.",
      image: "https://img.freepik.com/premium-vector/green-start-button_875240-2897.jpg",
      link: "/solutions#airport",
    },
    {
      id: 3,
      title: "Baggage Scanning Conveyor",
      description: "Secure and integrated conveyors for smooth baggage screening. Muvro’s systems maintain continuous flow with advanced safety controls.",
      image: "https://img.freepik.com/premium-vector/green-start-button_875240-2897.jpg",
      link: "/solutions#airport",
    },
    {
      id: 4,
      title: "Spiral Conveyor",
      description: "Compact spiral conveyors for efficient vertical movement of baggage. Muvro’s design saves space while maintaining high throughput.",
      image: "https://img.freepik.com/premium-vector/green-start-button_875240-2897.jpg",
      link: "/solutions#airport",
    },
    {
      id: 5,
      title: "Lifts",
      description: "Robust lifts engineered for heavy-duty airport operations. Muvro’s lift solutions enhance connectivity between terminal levels with safety assurance.",
      image: "https://img.freepik.com/premium-vector/green-start-button_875240-2897.jpg",
      link: "/solutions#airport",
    }
  ],

};

const disabledCategories = new Set([
  "Food & Beverages",
  "Waste Management",
  "Packaging Industry",
  "Airport",
]);

export default function ServicesSectionTabs({ solutions = [] }) {
  const categoryNames = Object.keys(categories);
  const [activeCategory, setActiveCategory] = useState(categoryNames[0]);
  const [activeService, setActiveService] = useState(0);
  const [selectedService, setSelectedService] = useState(categories[categoryNames[0]][0]);
  const [selectedSolutionItem, setSelectedSolutionItem] = useState(null);
  const [showArrows, setShowArrows] = useState(false);
  const swiperRef = useRef(null);

  const services = categories[activeCategory];
  const len = services.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveService((prev) => (prev + 1) % len);
      swiperRef.current?.slideToLoop?.((activeService + 1) % len);
    }, 6000);
    return () => clearInterval(timer);
  }, [len, activeService]);

  const goTo = (index) => {
    const next = ((index % len) + len) % len;
    setActiveService(next);
    swiperRef.current?.slideTo(next);
  };

  const checkArrows = (swiper) => {
    const slides = swiper.slides.length;
    let perView = swiper.params.slidesPerView;
    if (typeof perView === "string" || perView === "auto") {
      perView = swiper.slidesPerViewDynamic();
    }
    setShowArrows(slides > perView);
  };

  const currentService = services[activeService];
  const solutionItems = solutions.flatMap((solution) => solution.solutionItem || []);
  const findSolutionItem = (service) => {
    const linkHash = getHashFromLink(service.link);
    const normalizedHash = normalize(linkHash);
    const normalizedServiceTitle = normalize(service.title);
    const itemsWithKeys = solutionItems.map((item) => ({
      item,
      itemId: formatSolutionItemId(item.itemTitle),
      normalizedItemTitle: normalize(item.itemTitle),
    }));

    return (
      itemsWithKeys.find(({ normalizedItemTitle }) => normalizedItemTitle === normalizedServiceTitle)
        ?.item ||
      itemsWithKeys.find(({ itemId }) => itemId === linkHash)?.item ||
      itemsWithKeys
        .filter(
          ({ normalizedItemTitle }) =>
            normalizedHash.includes(normalizedItemTitle) ||
            normalizedItemTitle.includes(normalizedHash)
        )
        .sort((a, b) => b.normalizedItemTitle.length - a.normalizedItemTitle.length)[0]
        ?.item ||
      null
    );
  };

  return (
    <section className={`${styles.WrapperSlider} pb-5`}>
      <div className="container mb-2">
        <span className="section-label" data-aos="fade-down">
          Efficiency, Flexibility & Reliability
        </span>

        <div className="mt-3 mb-3 d-xl-flex justify-content-between align-items-start gap-5">
          <h2 data-aos="fade-right" data-aos-delay="100" className="flex-shrink-0">
            Smart <span>Solutions</span>
          </h2>
          <p data-aos="fade-left" data-aos-delay="200">
            Our end-to-end solutions are designed, developed, and manufactured
            in-house — ensuring faster delivery and long-lasting performance
            tailored to diverse industry needs.
          </p>
        </div>
      </div>
      <div className="container">
        {/* Category Tabs */}
        <Swiper
          spaceBetween={6}
          slidesPerView="auto"
          className={styles.categoryTabs}
          allowTouchMove
        >
          {categoryNames.map((cat) => (
            <SwiperSlide key={cat}>
              <button
                className={`${styles.tabButton} ${cat === activeCategory ? styles.activeTab : ""
                  } ${disabledCategories.has(cat) ? styles.disabledTab : ""}`}
                onClick={() => {
                  if (!disabledCategories.has(cat)) {
                    setActiveCategory(cat);
                    setActiveService(0);
                  }
                }}
                disabled={disabledCategories.has(cat)}
              >
                {cat}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Banner */}
        <div className={styles.bannerWrapper}>
          <div
            className={styles.banner}
            style={{ backgroundImage: `url(${currentService.image})` }}
            data-aos="fade-up"
          >
            <div className={styles.overlay}>
              <div className={`${styles.bannerContent} container`}>
                <p>{currentService.description}</p>
                {currentService.manualLink ? (
                  <a
                    href={currentService.manualLink}
                    className="mbtn mbtn-small mbtn-primary"
                  >
                    Explore More
                  </a>
                ) : (
                  <button
                    type="button"
                    className="mbtn mbtn-small mbtn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#serviceModal"
                    onClick={() => {
                      setSelectedService(currentService);
                      setSelectedSolutionItem(findSolutionItem(currentService));
                    }}
                  >
                    Explore More
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* Services Slider */}
          <div className={styles.sliderWrapper}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={2}
              autoplay={{ delay: 8000, disableOnInteraction: false }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                checkArrows(swiper);
              }}
              onResize={checkArrows}
              onSlidesLengthChange={checkArrows}
              breakpoints={{
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
              className={styles.servicesSlider}
            >
              {services.map((service, index) => (
                <SwiperSlide key={`${activeCategory}-${service.id}`}>
                  <div
                    className={`${styles.card} ${index === activeService ? styles.active : ""
                      }`}
                    style={{ backgroundImage: `url(${service.image})` }}
                    onClick={() => goTo(index)}
                  >
                    <div className={styles.cardOverlay}>
                      <h3 className={styles.title}>{service.title}</h3>
                      {/* <RiArrowRightUpLine className={styles.arrow} /> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>


      </div>

      {/* Navigation Arrows */}
      {showArrows && (
        <div className={styles.navButtons} data-aos="fade-up" data-aos-delay="200">
          <button
            className="mbtn mbtn-primary"
            onClick={() => goTo(activeService - 1)}
            aria-label="Previous service"
          >
            <RiArrowLeftLine />
          </button>
          <button
            className="mbtn mbtn-primary"
            onClick={() => goTo(activeService + 1)}
            aria-label="Next service"
          >
            <RiArrowRightLine />
          </button>
        </div>
      )}
      <ServiceModal service={selectedService} solutionItem={selectedSolutionItem} />
    </section>
  );
}

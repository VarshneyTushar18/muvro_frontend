"use client";
import { RiArrowRightUpLine } from "@remixicon/react";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import Style from "./industries.module.css";
function ProductsModal({ industry, modalId }) {
  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex="-1"
      aria-labelledby={`${modalId}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${modalId}Label`}>
              {industry.title} Products
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <div className={Style.productGrid}>
              {industry.products?.map((prod, i) => (
                <div className={Style.productCard} key={i}>
                  <div className={Style.productCardImage}>
                    <img src={prod.img} alt={prod.name} loading="lazy" />
                  </div>
                  <div className={Style.productCardText}>
                    <p className={Style.productName}>{prod.name}</p>
                    <div className={Style.productFooter}>
                      <p className={Style.productSubtitle}>{prod.tagline}</p>
                      <a href={prod.link} className={Style.arrow}>
                        <RiArrowRightUpLine />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Industries() {
  const crumbs = [
    { label: "Home", link: "/" },
    { label: "Industries" },
  ];

  const industries = [
    {
      title: "Warehousing",
      img: "images/Industries/Warehousing.jpg",
      description:
        "Smart, scalable warehousing solutions designed for efficiency, optimized space utilization, faster fulfillment, and reliable operations every day.",
      link: "#",
      products: [
        {
          name: "3D Smart Sorter (ICS) ",
          img: "/images/3d_sorter_bg_removed_c28b208916.png",
          tagline: "10Kg Max Weight",
          link: "/3d-smart-sorter-ics",
        }
      ]
    },
    {
      title: "E-Commerce",
      img: "images/Industries/ecommerce.png",
      description:
        "We powering e-commerce with faster deliveries, accurate order processing, flexible scalability, and seamless warehouse automation solutions.",
      link: "#",
      products: [
        {
          name: "3D Smart Sorter (ICS) ",
          img: "/images/3d_sorter_bg_removed_c28b208916.png",
          tagline: "10Kg Max Weight",
          link: "/3d-smart-sorter-ics",
        }
      ]
    },
    {
      title: "Parcel & Postel's",
      img: "images/Industries/parcels.png",
      description:
        "Future-ready parcel and postal automation solutions ensuring speed, accuracy, reliable distribution, and enhanced customer satisfaction.",
      link: "#",
      products: [
        {
          name: "3D Smart Sorter (ICS) ",
          img: "/images/3d_sorter_bg_removed_c28b208916.png",
          tagline: "10Kg Max Weight",
          link: "/3d-smart-sorter-ics",
        }
      ]
    },
    {
      title: "Quick Commerce",
      img: "images/Industries/quick-commerce.png",
      description:
        "Enabling ultra-fast order fulfillment, accurate deliveries, optimized storage, and scalable automation for growing demand.",
      link: "#",
      products: [
        {
          name: "3D Smart Sorter (ICS) ",
          img: "/images/3d_sorter_bg_removed_c28b208916.png",
          tagline: "10Kg Max Weight",
          link: "/3d-smart-sorter-ics",
        }
      ]
    },
    {
      title: "Automobile & Manufacturing",
      img: "images/Industries/automobile.png",
      description:
        "Driving productivity in automobile and manufacturing with advanced automation, efficient material handling, and reliable systems.",
      link: "#",
      products: [
        {
          name: "3D Smart Sorter (ICS) ",
          img: "/images/3d_sorter_bg_removed_c28b208916.png",
          tagline: "10Kg Max Weight",
          link: "/3d-smart-sorter-ics",
        }
      ]
    },
    {
      title: "E-Mobility",
      img: "images/Industries/eMobility.png",
      description:
        "Empowering e-mobility with advanced automation, efficient material handling, and reliable systems that drive sustainable and future-ready operations.",
      link: "#",
      products: [
        {
          name: "3D Smart Sorter (ICS) ",
          img: "/images/3d_sorter_bg_removed_c28b208916.png",
          tagline: "10Kg Max Weight",
          link: "/3d-smart-sorter-ics",
        }
      ]
    },
    {
      title: "White Goods",
      img: "images/Industries/white-goods.png",
      description:
        "With advanced automation, efficient material handling, and reliable systems that ensure consistency, speed, and quality.",
      link: "#",
      products: [
        {
          name: "3D Smart Sorter (ICS) ",
          img: "/images/3d_sorter_bg_removed_c28b208916.png",
          tagline: "10Kg Max Weight",
          link: "/3d-smart-sorter-ics",
        }
      ]
    },
    {
      title: "Electronics Manufacturing",
      img: "images/Industries/electronics-manufacturing.png",
      description:
        "Enabling ultra-fast order fulfillment, accurate deliveries, optimized storage, and scalable automation for growing demand.",
      link: "#",
      products: [
        {
          name: "3D Smart Sorter (ICS) ",
          img: "/images/3d_sorter_bg_removed_c28b208916.png",
          tagline: "10Kg Max Weight",
          link: "/3d-smart-sorter-ics",
        }
      ]
    },
    {
      title: "FMCG",
      img: "images/Industries/fmcg.png",
      description:
        "Advanced intralogistics solutions for FMCG industries ensuring faster movement, optimized storage, and scalable automation systems.",
      link: "#",
      products: [
        {
          name: "3D Smart Sorter (ICS) ",
          img: "/images/3d_sorter_bg_removed_c28b208916.png",
          tagline: "10Kg Max Weight",
          link: "/3d-smart-sorter-ics",
        }
      ]
    },
    {
      title: "Food & Beverage",
      img: "images/Industries/food-beverages.png",
      description:
        "Enhancing food and beverage manufacturing with advanced automation, safe material handling, and reliable systems ensuring efficiency.",
      link: "#",
      products: [
        {
          name: "3D Smart Sorter (ICS) ",
          img: "/images/3d_sorter_bg_removed_c28b208916.png",
          tagline: "10Kg Max Weight",
          link: "/3d-smart-sorter-ics",
        }
      ]
    },
    {
      title: "Waste Management",
      img: "images/Industries/waste-management.png",
      description:
        "Enhancing waste management with efficient automation, smart material handling, and reliable systems for safe, and streamlined operations.",
      link: "#",
      products: [
        {
          name: "3D Smart Sorter (ICS) ",
          img: "/images/3d_sorter_bg_removed_c28b208916.png",
          tagline: "10Kg Max Weight",
          link: "/3d-smart-sorter-ics",
        }
      ]
    },
    {
      title: "Airport",
      img: "images/Industries/airport.png",
      description:
        "Reliable airport automation solutions for baggage handling, cargo movement, and ensuring speed, accuracy, and operational efficiency.",
      link: "#",
      products: [
        {
          name: "3D Smart Sorter (ICS) ",
          img: "/images/3d_sorter_bg_removed_c28b208916.png",
          tagline: "10Kg Max Weight",
          link: "/3d-smart-sorter-ics",
        }
      ]
    }
  ];

  return (
    <>
      <BreadcrumbStrip crumbs={crumbs} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 pb-5 text-center">
              <span className="section-label-center mb-3">
                Smart solutions for every sector
              </span>
              <h2>
                <span>Industries</span> We Serve
              </h2>
            </div>
          </div>

          <div className="row">
            {industries.map((industry, index) => (
              <div className="col-md-4 col-lg-3 mb-3" key={index} id={industry.title
                .toLowerCase()
                .replace(/['"]/g, '')          // remove apostrophes and quotes
                .replace(/[^\w\s-]/g, '')      // remove other special chars except spaces and hyphens
                .replace(/\s+/g, '-')          // replace spaces with hyphens
              }>
                <div className={Style.industrypage_card}>
                  <img src={industry.img} alt={industry.title} />
                  <div className={Style.card_context}>
                    <h5>{industry.title}</h5>
                    <p>{industry.description}</p>
                  </div>
                  {industry.products ? (
                    <button
                      className={`${Style.linkblock} btn border-radius-0`}
                      data-bs-toggle="modal"
                      data-bs-target={`#industryModal-${index}`}
                    >
                      <span>Explore More</span>
                      <RiArrowRightUpLine />
                    </button>
                  ) : (
                    <a className={Style.linkblock} href="#">
                      <span>Explore More</span>
                      <RiArrowRightUpLine />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Modals */}
      {industries.map(
        (industry, index) =>
          industry.products && (
            <ProductsModal
              key={`modal-${index}`}
              industry={industry}
              modalId={`industryModal-${index}`}
            />
          )
      )}
    </>
  );
}

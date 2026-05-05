"use client";

import { useState } from "react";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import Style from "./style.module.css";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function ContactUs() {
  const router = useRouter();
  const crumbs = [
    { label: "Home", link: "/" },
    { label: "Fulfilment Solution" },
  ];

  const subtitle = "We'd Love to Hear From You";
  const title = "Let's Connect";
  const description =
    "Reach out to Muvro Technologies for innovative, fully in-house designed and manufactured intralogistics solutions—fast delivery, reliable service, and lasting value from our Delhi NCR facility.";
  const image = "/images/ContactImage.webp";
  const formHeading = "Your Voice Matters";
  const formText =
    "Fill out the form below and our team will get back to you as soon as possible.";
  const enquiryOptions = [
    { value: "products", label: "For Products" },
    { value: "services", label: "For Services" },
    { value: "others", label: "For Others" },
  ];


  return (
    <>
      <BreadcrumbStrip crumbs={crumbs} />

      <section
        className={Style.contact_page}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="container">
          {/* Header Section */}
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-xl-6 pb-4">
              <img src="/images/Muvro-Fulfilment-Center.webp" alt="" className="img-fluid" />
            </div>
            <div className="col-xl-6 pb-4">

              <span
                className="section-label mb-0"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                Fulfilment Solution
              </span>

              <h2
                className="mb-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Overview
              </h2>

              <p
                className=""
                data-aos="fade-up"
                data-aos-delay="300"
              >
                In the context of supply chains, Fulfilment refers to the complete process of receiving, preparing, and delivering customer orders—from the moment products arrive at a facility to their final dispatch. Whether it’s your Amazon package, a food order from Uber Eats, or an industrial shipment, every step of this journey relies on seamless fulfillment operations.
              </p>
              <p
                className=""
                data-aos="fade-up"
                data-aos-delay="300"
              >
                At MUVRO Technologies, we deliver smart, efficient, modular, and scalable automation solutions tailored to the diverse needs of fulfillment applications. Our systems are designed to optimize performance across industries such as e-commerce, packaging, food processing, manufacturing, pharmaceuticals, assembly lines, parcel distribution, and warehouse automation.
              </p>
            </div>
          </div>

          <hr />


        </div>

        <div className="container">
          {/* Header Section */}
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100">
            <h5
              className="mb-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              The Role of Automation in Fulfilment Centers
            </h5>

            <p
              className=""
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Modern fulfillment centers handle thousands of SKUs daily, requiring rapid sorting, segregation, and handling of shipments. Automation plays a crucial role in streamlining these operations—improving speed, accuracy, and cost efficiency while minimizing manual intervention and operational errors.
            </p>
            <p
              className=""
              data-aos="fade-up"
              data-aos-delay="300"
            >
              MUVRO’s fulfillment automation solutions integrate conveyors, scanners, weighers, sorters, and robotic systems to ensure uninterrupted and optimized flow throughout the facility—from inbound to outbound logistics.
            </p>
          </div>
        </div>


        <div className="container pt-5">
       
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100">
            <span
              className="section-label-center mb-0"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              Fulfilment Solution
            </span>

            <h3
              className=" text-center mb-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Key Conveyor Solutions in <span>Fulfilment Automation</span>
            </h3>
          </div>

          <div
            className="row pt-5 justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-xl-6 pb-4">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
              >
                <SwiperSlide>
                  <img src="/images/Inbound-1.webp" alt="Slide 1" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/Inbound-2.webp" alt="Slide 2" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/Inbound-3.webp" alt="Slide 3" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/Inbound-4.webp" alt="Slide 4" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/Inbound-5.webp" alt="Slide 5" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/Inbound-6.webp" alt="Slide 6" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/Inbound-7.webp" alt="Slide 7" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/Inbound-8.webp" alt="Slide 8" style={{ width: '100%' }} />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-xl-6 pb-4">

              <h4
                className="mb-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Inbound Conveyor
              </h4>

              <p
                className=""
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Inbound conveyors form the first step in the fulfillment process. They are engineered to transport incoming goods or materials from receiving docks into the warehouse for inspection, sorting, or storage. These systems automate the unloading process, ensuring smooth material flow and reducing manual handling. Integration with DWS (Dimension-Weigh-Scan) systems and barcode scanners enhances traceability and operational efficiency.

                <br /><br />

                <h6>Applications:</h6>

                
                    <ul className={Style.TwoCol}>
                      <li>Receiving docks</li>
                      <li>Inspection zones</li>
                      <li>Quality check areas</li>
                      <li>Inventory staging</li>
                    </ul>
                

              
              </p>

            </div>
          </div>



          <div
            className="row pt-5 justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-xl-6 pb-4">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
              >
                <SwiperSlide>
                  <img src="/images/processing-1.webp" alt="Slide 1" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/processing-2.webp" alt="Slide 2" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/processing-3.webp" alt="Slide 3" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/processing-4.webp" alt="Slide 4" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/processing-5.webp" alt="Slide 5" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/processing-6.webp" alt="Slide 6" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/processing-7.webp" alt="Slide 7" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/processing-8.webp" alt="Slide 8" style={{ width: '100%' }} />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-xl-6 pb-4">

              <h4
                className="mb-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Processing Conveyors
              </h4>

              <p
                className=""
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Processing conveyors move items through various stages of production or value addition within the facility. Unlike standard transport conveyors, they synchronize with other machinery to perform operations such as assembly, inspection,
                packaging, or labeling directly on the line. These systems are highly customizable—featuring adjustable speed control,
                environmental compliance (e.g., cleanroom or temperature-controlled setups), and precise synchronization with robotic or automated systems.

                <br /><br />

                <h6>Applications:</h6>

                
                    <ul className={Style.TwoCol}>
                      <li>Food & pharma processing</li>
                      <li>Electronics assembly </li>
                      <li>Packaging lines</li>
                      <li>Quality inspection systems</li>
                    </ul>
                

              
              </p>

            </div>
          </div>


          <div
            className="row pt-5 justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-xl-6 pb-4">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
              >
                <SwiperSlide>
                  <img src="/images/Outbound-1.webp" alt="Slide 1" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/Outbound-2.webp" alt="Slide 2" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/Outbound-3.webp" alt="Slide 3" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/Outbound-4.webp" alt="Slide 4" style={{ width: '100%' }} />
                </SwiperSlide>
                
              </Swiper>
            </div>
            <div className="col-xl-6 pb-4">

              <h4
                className="mb-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Outbound Conveyors
              </h4>

              <p
                className=""
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Outbound conveyors handle the final movement of finished goods from packaging or sorting zones to dispatch or shipping areas. They are designed for high-volume, time-sensitive logistics operations, ensuring fast, error-free order consolidation and timely dispatch. Integration with automated sorters, chutes, scanning, and labeling systems ensures each package reaches the correct loading dock or vehicle efficiently.

                <br /><br />

                <h6>Applications:</h6>

                
                    <ul className={Style.TwoCol}>
                      <li>Sorting & dispatch</li>
                      <li>Parcel handling </li>
                      <li>Shipping bays </li>
                      <li>Cross-dock operations</li>
                    </ul>
                

              
              </p>

            </div>
          </div>


        </div>
      </section>

    </>
  );
}

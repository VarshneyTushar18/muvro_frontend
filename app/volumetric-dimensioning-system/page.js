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
import { FiMove, FiShield, FiBox, FiZap, FiMinimize, FiTool, FiFastForward, FiPackage, FiCircle, FiGitBranch, FiSliders, FiCheckCircle, FiAlertCircle, FiUpload, FiBattery, FiAward, FiLink, FiRadio } from 'react-icons/fi';

export default function VolumetricDimensioningSystem() {
  const router = useRouter();
  const crumbs = [
    { label: "Home", link: "/" },
    { label: "Volumetric Dimensioning System" },
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

      <img src="/images/banners/VDS.webp" alt="Volumetric Dimensioning System" className="img-fluid" />

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
              <img src="/images/Volumetric-Dimensioning-System-Image.webp" alt="Volumetric Dimensioning System" className="img-fluid" />
            </div>
            <div className="col-xl-6 pb-4">

              <span
                className="section-label mb-0"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                Volumetric Dimensioning System
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
                A VDS (Volumetric Dimensioning System) by MUVRO is an advanced automated solution designed to accurately measure the
                length, width, height, and volume of parcels, cartons, or totes within modern logistics and warehouse operations. Integrated seamlessly with conveyor and sorting systems, MUVRO’s VDS eliminates manual measurement by using sensors and intelligent controls to capture real-time dimensional data, improving accuracy and operational efficiency. The system is
                available in three specialized configurations—Integrated Roller Belt Conveyor VDS, Diverter Arm Conveyor VDS, and Smart Tilt Gate Conveyor VDS—each tailored for different handling and sorting requirements. With capabilities such as high-speed measurement, precise volume calculation, seamless WMS/ERP integration, and enhanced throughput, MUVRO’s VDS enables optimized space utilization, reduced errors, and cost-effective material handling in high-performance distribution environments.
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

            <p
              className=""
              data-aos="fade-up"
              data-aos-delay="300"
            >
              A VDS (Volumetric Dimensioning System) is an automated system used to measure parcel dimensions (L×W×H) and volume in logistics operations. It is mainly of three types: Integrated Roller Belt VDS, Diverter Arm Conveyor VDS, and Smart Tilt Gate Conveyor VDS. Key capabilities include high-speed accurate measurement, real-time data capture, system integration (WMS/ERP), and improved throughput and space optimization.
            </p>
          </div>

          <hr />
        </div>




        <div className="container">

          <div
            className="row pt-5 justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >

            <div className="col-xl-12 pb-4">

              <h4
                className="mb-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Integrated Roller Belt Conveyor
              </h4>

              <p
                className=""
                data-aos="fade-up"
                data-aos-delay="300"
              >
                An
                Integrated Roller Belt Conveyor
                is an advanced conveying system
                designed for precise and efficient product handling, it features a modular plastic belt
                with embedded rollers that can move products in multiple directions
                —
                forward,
                sideways, or rotate them
                —
                without the need for external pus
                hers or complex
                mechanisms. By activating the rollers through contact with angled guides or belts
                beneath the surface, Integrated Roller Belt conveyors enable smooth sorting, merging, diverting, and
                aligning of items. They are widely used in packaging, logistics, food proces
                sing, and
                manufacturing industries due to their gentle product handling, low maintenance, and
                space
                -
                saving design. Offering high flexibility and automation efficiency, Integrated Roller Belt
                conveyors help increase throughput, reduce manual labour, and improve overall
                materi
                al flow in modern production and distribution systems.

              </p>

            </div>

            <div className="col-xl-12 pb-4">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={3} // default (desktop)
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1, // mobile
                  },
                  640: {
                    slidesPerView: 2, // tablet
                  },
                  1024: {
                    slidesPerView: 3, // desktop
                  },
                }}
              >
                <SwiperSlide>
                  <img src="/images/arb-1.webp" alt="Slide 1" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/arb-2.webp" alt="Slide 2" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/arb-3.webp" alt="Slide 3" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/arb-4.webp" alt="Slide 4" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/arb-5.webp" alt="Slide 5" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/arb-6.webp" alt="Slide 6" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/arb-7.webp" alt="Slide 7" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/arb-8.webp" alt="Slide 8" style={{ width: '100%' }} />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="row">
              <div className="col-xl-12 pb-4">
                <h4 className="mb-4">Key Features</h4>
                <div className={Style.featureGrid}>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiMove /></div>
                    <h5>Omnidirectional movement</h5>
                    <p>Allows products to move forward, sideways, or rotate in place for precise positioning.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiShield /></div>
                    <h5>Gentle product handling</h5>
                    <p>Reduces product damage by eliminating pushers, gates, and other contact mechanisms.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiBox /></div>
                    <h5>Modular belt design</h5>
                    <p>Simplifies maintenance and allows easy replacement of individual belt sections.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiZap /></div>
                    <h5>Flexible layout options</h5>
                    <p>Supports complex conveyor configurations like 90° transfers, merges, and diverts.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiMinimize /></div>
                    <h5>Space-saving system</h5>
                    <p>Performs multiple functions in a compact footprint, reducing floor space requirements.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiTool /></div>
                    <h5>Low maintenance</h5>
                    <p>Fewer moving parts minimize wear, downtime, and maintenance costs.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiFastForward /></div>
                    <h5>High throughput capacity</h5>
                    <p>Enables continuous, efficient flow of products in high-speed operations.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiPackage /></div>
                    <h5>Handles varied product types</h5>
                    <p>Works effectively with items of different sizes, shapes, and weights.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 pb-4">
                <h4 className="mb-4">Key Components</h4>
                <div className={Style.featureGrid}>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiCircle /></div>
                    <h5>Activated Roller Belt (ARB)</h5>
                    <p>The core component — a modular plastic belt with angled rollers embedded in its surface, enabling controlled product movement in multiple directions.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiRadio /></div>
                    <h5>Rollers</h5>
                    <p>Small, freely rotating cylinders set at specific angles within the belt that guide and move products as they are activated.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiZap /></div>
                    <h5>Activation Mechanism</h5>
                    <p>Typically consists of <strong>under-belt transfer belts</strong> or <strong>stationary guides</strong> that contact the rollers from beneath, causing them to rotate and move items in the desired direction.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiBattery /></div>
                    <h5>Drive System</h5>
                    <p>Includes motors, chains, or gear drives that power the main conveyor belt.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiBox /></div>
                    <h5>Frame and Support Structure</h5>
                    <p>Provides the mechanical stability to hold the conveyor components and ensure smooth belt operation.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiSliders /></div>
                    <h5>Control System</h5>
                    <p>Coordinates belt activation, speed, and direction, often integrated with sensors or automation systems for sorting and merging tasks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div
            className="row pt-5 justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >

            <div className="col-xl-12 pb-4">
              <h4 className="mb-3" data-aos="fade-up" data-aos-delay="200">
                Smart Tilt Gate Conveyor
              </h4>

              <p data-aos="fade-up" data-aos-delay="300">
                A Smart Tilt Gate Conveyor is a specialized conveyor system designed to
                transport materials, components, or finished products along an inclined or
                declined surface, incorporating a gating mechanism that controls the
                movement and flow of items on the conveyor. The tilt feature allows
                products to be moved efficiently between different elevation levels,
                facilitating loading, unloading, or transfer between workstations or
                storage areas.
              </p>

              <p>
                The gating mechanism acts as a controlled barrier or stopper that can
                hold, release, or divert products at specific points along the conveyor.
                This precise control over the flow of items helps manage product
                accumulation, sorting, staging, or batch processing without manual
                intervention.
              </p>

              <p>
                Widely used in manufacturing plants, warehouses, and distribution centers,
                gated tilted conveyors enhance operational efficiency by automating
                material handling processes, reducing product damage, and minimizing labour
                costs. Their flexibility in adjusting tilt angles and gate operation makes
                them suitable for various industries, including automotive, electronics,
                food and beverage, and logistics.
              </p>

              <p>
                By integrating sensors and automation controls, gated tilted conveyors
                provide reliable and repeatable performance, ensuring smooth product flow
                and optimized throughput in complex production or packaging lines.
              </p>
            </div>

            <div className="col-xl-12 pb-4">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={3} // default (desktop)
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1, // mobile
                  },
                  640: {
                    slidesPerView: 2, // tablet
                  },
                  1024: {
                    slidesPerView: 3, // desktop
                  },
                }}
              >
                <SwiperSlide>
                  <img src="/images/Tilted-1.webp" alt="Slide 1" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/Tilted-2.webp" alt="Slide 2" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/Tilted-3.webp" alt="Slide 3" style={{ width: '100%' }} />
                </SwiperSlide>

              </Swiper>
            </div>

            <div className="row">
              <div className="col-xl-12 pb-4">
                <h4 className="mb-4">Key Features</h4>
                <div className={Style.featureGrid}>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiSliders /></div>
                    <h5>Adjustable Tilt Angle</h5>
                    <p>Allows the conveyor to operate on inclines or declines, facilitating movement between different heights or levels.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiGitBranch /></div>
                    <h5>Integrated Gating Mechanism</h5>
                    <p>Gates act as physical stops or release points to control product flow, enabling precise stopping, holding, or diverting.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiCheckCircle /></div>
                    <h5>Smooth and Controlled Material Handling</h5>
                    <p>Designed to handle products gently to minimize damage during transport, especially on inclined surfaces.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiZap /></div>
                    <h5>Automation Ready</h5>
                    <p>Easily integrated with sensors, PLCs, and other control systems for automated operation and synchronization with other processes.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiBox /></div>
                    <h5>Modular Design</h5>
                    <p>Flexible and customizable to fit various layouts, product sizes, and throughput requirements.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiAward /></div>
                    <h5>Durable Construction</h5>
                    <p>Built with materials suitable for the environment, ensuring long service life even under continuous operation.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiAlertCircle /></div>
                    <h5>Safety Features</h5>
                    <p>Includes emergency stops, guards, and safety interlocks to protect operators and equipment.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiTool /></div>
                    <h5>Easy Maintenance and Access</h5>
                    <p>Designed for quick cleaning, inspection, and maintenance to reduce downtime.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiFastForward /></div>
                    <h5>Variable Speed Control</h5>
                    <p>Allows adjustment of conveyor speed to match production rates or product characteristics.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiMinimize /></div>
                    <h5>Compact Footprint</h5>
                    <p>Optimized design to save floor space while providing efficient vertical transport.</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-12 pb-4">
                <h4 className="mb-4">Key Components</h4>
                <div className={Style.featureGrid}>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiBox /></div>
                    <h5>Conveyor Belt or Roller Bed</h5>
                    <p>The surface on which products are transported; can be belts, rollers, or slats depending on the application.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiZap /></div>
                    <h5>Tilt Frame/Structure</h5>
                    <p>The adjustable frame that supports the conveyor and allows it to operate at various incline or decline angles.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiGitBranch /></div>
                    <h5>Gating Mechanism</h5>
                    <p>Physical gates or stops that can be manually or automatically operated to control the flow of items on the conveyor.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiBattery /></div>
                    <h5>Drive System</h5>
                    <p>Motors and gearboxes that power the conveyor movement; often includes variable speed drives for flexibility.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiRadio /></div>
                    <h5>Sensors and Detection Devices</h5>
                    <p>Proximity sensors, photoelectric sensors, or limit switches to detect product position and control gate operation.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiSliders /></div>
                    <h5>Control System (PLC/HMI)</h5>
                    <p>Programmable logic controller and human-machine interface to automate conveyor and gate operations.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiBox /></div>
                    <h5>Support Legs and Mounting</h5>
                    <p>Adjustable supports that stabilize the conveyor at the desired tilt angle.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiAlertCircle /></div>
                    <h5>Safety Features</h5>
                    <p>Emergency stops, safety guards, and interlocks to ensure safe operation.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiUpload /></div>
                    <h5>Load/Unload Stations</h5>
                    <p>Areas designed for placing or removing products from the conveyor, often coordinated with gate operation.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiBattery /></div>
                    <h5>Power Supply</h5>
                    <p>Electrical supply system to power motors, sensors, and control equipment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div
            className="row pt-5 justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >

            <div className="col-xl-12 pb-4">
              <h4 className="mb-3" data-aos="fade-up" data-aos-delay="200">
                Diverter Arm Conveyor
              </h4>

              <p data-aos="fade-up" data-aos-delay="300">
                A Diverter Arm Conveyor is a compact and efficient sorting mechanism commonly used in
                automated parcel, logistics, and baggage handling systems. It is designed
                to divert parcels or bags from the main conveyor line to designated
                secondary lines, chutes, or sorting areas. The system operates using a
                swinging arm that is actuated by a pneumatic cylinder, servo motor, or
                electric actuator, depending on the required speed and precision.
              </p>

              <p>
                When a parcel is identified for diversion, the arm swiftly swings into the
                conveyor path, redirecting the item without stopping the main flow. This
                ensures continuous material handling, high throughput, and reduced manual
                intervention.
              </p>

              <p>
                Due to its compact design, fast actuation, and reliable operation, the
                swing arm diverter is widely implemented in e-commerce distribution
                centres, courier hubs, and airport baggage systems to achieve efficient
                and accurate sortation.
              </p>
            </div>

            <div className="col-xl-12 pb-4">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={3} // default (desktop)
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1, // mobile
                  },
                  640: {
                    slidesPerView: 2, // tablet
                  },
                  1024: {
                    slidesPerView: 3, // desktop
                  },
                }}
              >
                <SwiperSlide>
                  <img src="/images/Swing-Arm-1.webp" alt="Slide 1" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/Swing-Arm-2.webp" alt="Slide 2" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/Swing-Arm-3.webp" alt="Slide 3" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/Swing-Arm-4.webp" alt="Slide 4" style={{ width: '100%' }} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/images/Swing-Arm-5.webp" alt="Slide 5" style={{ width: '100%' }} />
                </SwiperSlide>

              </Swiper>
            </div>

            <div className="row">
              <div className="col-xl-12 pb-4">
                <h4 className="mb-4">Key Features</h4>
                <div className={Style.featureGrid}>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiFastForward /></div>
                    <h5>High-Speed Operation</h5>
                    <p>Capable of diverting parcels or bags at conveyor speeds up to 2.5 m/s with precise timing.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiMinimize /></div>
                    <h5>Compact Design</h5>
                    <p>Space-saving structure suitable for integration in existing conveyor layouts.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiZap /></div>
                    <h5>Flexible Actuation Options</h5>
                    <p>Available with pneumatic, servo, or electric rotary actuators depending on speed and accuracy needs.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiCheckCircle /></div>
                    <h5>Accurate Sorting</h5>
                    <p>Ensures smooth and controlled parcel redirection with minimal impact or product damage.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiFastForward /></div>
                    <h5>Quick Response Time</h5>
                    <p>Fast actuation (typically 100–300 ms) enables high throughput.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiAward /></div>
                    <h5>Durable Construction</h5>
                    <p>Made from mild steel, aluminium, or stainless steel for long life and low maintenance.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiLink /></div>
                    <h5>Easy Integration</h5>
                    <p>Compatible with barcode scanners, sensors, and PLC-based control systems.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiTool /></div>
                    <h5>Low Maintenance</h5>
                    <p>Simple mechanism with easy access for inspection and servicing.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiSliders /></div>
                    <h5>Customizable Design</h5>
                    <p>Tailored arm length, angle, and mounting configuration to suit various conveyor systems.</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-12 pb-4">
                <h4 className="mb-4">Key Components</h4>
                <div className={Style.featureGrid}>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiMove /></div>
                    <h5>Swing Arm / Paddle</h5>
                    <p>The deflecting blade that swings into the conveyor path to redirect parcels or bags.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiZap /></div>
                    <h5>Actuator</h5>
                    <p>Provides the swinging motion; can be pneumatic, servo-driven, or electric rotary type.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiBox /></div>
                    <h5>Mounting Frame / Bracket</h5>
                    <p>Supports the entire diverter assembly and allows secure installation on the conveyor line.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiRadio /></div>
                    <h5>Sensors</h5>
                    <p>Detect parcel position or barcode data and signal the control system for accurate timing.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiSliders /></div>
                    <h5>Control System (PLC / Controller)</h5>
                    <p>Coordinates actuator movement and integrates with conveyor and sortation logic.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiShield /></div>
                    <h5>Shock Absorber / Stopper</h5>
                    <p>Restricts excessive movement and cushions the arm during operation or return stroke.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiBattery /></div>
                    <h5>Power Supply Unit</h5>
                    <p>Delivers electrical or pneumatic power to the actuator and control components.</p>
                  </div>
                  <div className={Style.featureCard}>
                    <div className={Style.iconWrapper}><FiAlertCircle /></div>
                    <h5>Safety Guards / Covers</h5>
                    <p>Enclose moving parts to protect operators and ensure safe operation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>




      </section >

    </>
  );
}

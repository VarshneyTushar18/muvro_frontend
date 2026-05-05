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
                available in three specialized configurations—Integrated Ball Belt VDS, Swing Arm VDS, and Tilt Smart Gate VDS—each tailored for different handling and sorting requirements. With capabilities such as high-speed measurement, precise volume calculation, seamless WMS/ERP integration, and enhanced throughput, MUVRO’s VDS enables optimized space utilization, reduced errors, and cost-effective material handling in high-performance distribution environments.
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
              A VDS (Volumetric Dimensioning System) is an automated system used to measure parcel dimensions (L×W×H) and volume in logistics operations. It is mainly of three types: Integrated Ball Belt VDS, Swing Arm VDS, and Tilt Smart Gate VDS. Key capabilities include high-speed accurate measurement, real-time data capture, system integration (WMS/ERP), and improved throughput and space optimization.
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
                Activated Roller Belt (ARB)
              </h4>

              <p
                className=""
                data-aos="fade-up"
                data-aos-delay="300"
              >
                An
                Activated Roller Belt (ARB) conveyor
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
                beneath the surface, ARB conveyors enable smooth sorting, merging, diverting, and
                aligning of items. They are widely used in packaging, logistics, food proces
                sing, and
                manufacturing industries due to their gentle product handling, low maintenance, and
                space
                -
                saving design. Offering high flexibility and automation efficiency, ARB
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
              <div className="col-xl-6 pb-4">
                <h4 className="mb-4">Key Features</h4>
                <ul>
                  <li>
                    <strong>Omnidirectional movement</strong>
                    <p>Allows products to move forward, sideways, or rotate in place for precise positioning.</p>
                  </li>
                  <li>
                    <strong>Gentle product handling</strong>
                    <p>Reduces product damage by eliminating pushers, gates, and other contact mechanisms.</p>
                  </li>
                  <li>
                    <strong>Modular belt design</strong>
                    <p>Simplifies maintenance and allows easy replacement of individual belt sections.</p>
                  </li>
                  <li>
                    <strong>Flexible layout options</strong>
                    <p>Supports complex conveyor configurations like 90° transfers, merges, and diverts.</p>
                  </li>
                  <li>
                    <strong>Space-saving system</strong>
                    <p>Performs multiple functions in a compact footprint, reducing floor space requirements.</p>
                  </li>
                  <li>
                    <strong>Low maintenance</strong>
                    <p>Fewer moving parts minimize wear, downtime, and maintenance costs.</p>
                  </li>
                  <li>
                    <strong>High throughput capacity</strong>
                    <p>Enables continuous, efficient flow of products in high-speed operations.</p>
                  </li>
                  <li>
                    <strong>Handles varied product types</strong>
                    <p>Works effectively with items of different sizes, shapes, and weights.</p>
                  </li>
                </ul>
              </div>

              <div className="col-xl-6 pb-4">
                <h4 className="mb-4">Key Components</h4>
                <ul>
                  <li>
                    <strong>Activated Roller Belt (ARB)</strong>
                    <p>The core component — a modular plastic belt with angled rollers embedded in its surface, enabling controlled product movement in multiple directions.</p>
                  </li>
                  <li>
                    <strong>Rollers</strong>
                    <p>Small, freely rotating cylinders set at specific angles within the belt that guide and move products as they are activated.</p>
                  </li>

                  <li>
                    <strong>Activation Mechanism</strong>
                    <p>Typically consists of <strong>under-belt transfer belts</strong> or <strong>stationary guides</strong> that contact the rollers from beneath, causing them to rotate and move items in the desired direction.</p>
                  </li>
                  <li>
                    <strong>Drive System</strong>
                    <p>Includes motors, chains, or gear drives that power the main conveyor belt.</p>
                  </li>
                  <li>
                    <strong>Frame and Support Structure</strong>
                    <p>Provides the mechanical stability to hold the conveyor components and ensure smooth belt operation.</p>
                  </li>
                  <li>
                    <strong>Control System</strong>
                    <p>Coordinates belt activation, speed, and direction, often integrated with sensors or automation systems for sorting and merging tasks.</p>
                  </li>
                </ul>
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
                Gated (Tilted) Conveyor
              </h4>

              <p data-aos="fade-up" data-aos-delay="300">
                A Gated (Tilted) Conveyor is a specialized conveyor system designed to
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
              <div className="col-xl-6 pb-4">
                <h4 className="mb-4">Key Features</h4>
                <ul>
                  <li>
                    <strong>Adjustable Tilt Angle</strong>
                    <p>
                      Allows the conveyor to operate on inclines or declines, facilitating
                      movement between different heights or levels.
                    </p>
                  </li>
                  <li>
                    <strong>Integrated Gating Mechanism</strong>
                    <p>
                      Gates act as physical stops or release points to control product
                      flow, enabling precise stopping, holding, or diverting.
                    </p>
                  </li>
                  <li>
                    <strong>Smooth and Controlled Material Handling</strong>
                    <p>
                      Designed to handle products gently to minimize damage during
                      transport, especially on inclined surfaces.
                    </p>
                  </li>
                  <li>
                    <strong>Automation Ready</strong>
                    <p>
                      Easily integrated with sensors, PLCs, and other control systems for
                      automated operation and synchronization with other processes.
                    </p>
                  </li>
                  <li>
                    <strong>Modular Design</strong>
                    <p>
                      Flexible and customizable to fit various layouts, product sizes, and
                      throughput requirements.
                    </p>
                  </li>
                  <li>
                    <strong>Durable Construction</strong>
                    <p>
                      Built with materials suitable for the environment, ensuring long
                      service life even under continuous operation.
                    </p>
                  </li>
                  <li>
                    <strong>Safety Features</strong>
                    <p>
                      Includes emergency stops, guards, and safety interlocks to protect
                      operators and equipment.
                    </p>
                  </li>
                  <li>
                    <strong>Easy Maintenance and Access</strong>
                    <p>
                      Designed for quick cleaning, inspection, and maintenance to reduce
                      downtime.
                    </p>
                  </li>
                  <li>
                    <strong>Variable Speed Control</strong>
                    <p>
                      Allows adjustment of conveyor speed to match production rates or
                      product characteristics.
                    </p>
                  </li>
                  <li>
                    <strong>Compact Footprint</strong>
                    <p>
                      Optimized design to save floor space while providing efficient
                      vertical transport.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="col-xl-6 pb-4">
                <h4 className="mb-4">Key Components</h4>
                <ul>
                  <li>
                    <strong>Conveyor Belt or Roller Bed</strong>
                    <p>
                      The surface on which products are transported; can be belts,
                      rollers, or slats depending on the application.
                    </p>
                  </li>
                  <li>
                    <strong>Tilt Frame/Structure</strong>
                    <p>
                      The adjustable frame that supports the conveyor and allows it to
                      operate at various incline or decline angles.
                    </p>
                  </li>
                  <li>
                    <strong>Gating Mechanism</strong>
                    <p>
                      Physical gates or stops that can be manually or automatically
                      operated to control the flow of items on the conveyor.
                    </p>
                  </li>
                  <li>
                    <strong>Drive System</strong>
                    <p>
                      Motors and gearboxes that power the conveyor movement; often
                      includes variable speed drives for flexibility.
                    </p>
                  </li>
                  <li>
                    <strong>Sensors and Detection Devices</strong>
                    <p>
                      Proximity sensors, photoelectric sensors, or limit switches to
                      detect product position and control gate operation.
                    </p>
                  </li>
                  <li>
                    <strong>Control System (PLC/HMI)</strong>
                    <p>
                      Programmable logic controller and human-machine interface to
                      automate conveyor and gate operations.
                    </p>
                  </li>
                  <li>
                    <strong>Support Legs and Mounting</strong>
                    <p>
                      Adjustable supports that stabilize the conveyor at the desired tilt
                      angle.
                    </p>
                  </li>
                  <li>
                    <strong>Safety Features</strong>
                    <p>
                      Emergency stops, safety guards, and interlocks to ensure safe
                      operation.
                    </p>
                  </li>
                  <li>
                    <strong>Load/Unload Stations</strong>
                    <p>
                      Areas designed for placing or removing products from the conveyor,
                      often coordinated with gate operation.
                    </p>
                  </li>
                  <li>
                    <strong>Power Supply</strong>
                    <p>
                      Electrical supply system to power motors, sensors, and control
                      equipment.
                    </p>
                  </li>
                </ul>
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
                Swing Arm
              </h4>

              <p data-aos="fade-up" data-aos-delay="300">
                A Swing Arm is a compact and efficient sorting mechanism commonly used in
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
              <div className="col-xl-6 pb-4">
                <h4 className="mb-4">Key Features</h4>
                <ul>
                  <li>
                    <strong>High-Speed Operation</strong>
                    <p>
                      Capable of diverting parcels or bags at conveyor speeds up to 2.5
                      m/s with precise timing.
                    </p>
                  </li>
                  <li>
                    <strong>Compact Design</strong>
                    <p>
                      Space-saving structure suitable for integration in existing conveyor
                      layouts.
                    </p>
                  </li>
                  <li>
                    <strong>Flexible Actuation Options</strong>
                    <p>
                      Available with pneumatic, servo, or electric rotary actuators
                      depending on speed and accuracy needs.
                    </p>
                  </li>
                  <li>
                    <strong>Accurate Sorting</strong>
                    <p>
                      Ensures smooth and controlled parcel redirection with minimal impact
                      or product damage.
                    </p>
                  </li>
                  <li>
                    <strong>Quick Response Time</strong>
                    <p>
                      Fast actuation (typically 100–300 ms) enables high throughput.
                    </p>
                  </li>
                  <li>
                    <strong>Durable Construction</strong>
                    <p>
                      Made from mild steel, aluminium, or stainless steel for long life
                      and low maintenance.
                    </p>
                  </li>
                  <li>
                    <strong>Easy Integration</strong>
                    <p>
                      Compatible with barcode scanners, sensors, and PLC-based control
                      systems.
                    </p>
                  </li>
                  <li>
                    <strong>Low Maintenance</strong>
                    <p>
                      Simple mechanism with easy access for inspection and servicing.
                    </p>
                  </li>
                  <li>
                    <strong>Customizable Design</strong>
                    <p>
                      Tailored arm length, angle, and mounting configuration to suit
                      various conveyor systems.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="col-xl-6 pb-4">
                <h4 className="mb-4">Key Components</h4>
                <ul>
                  <li>
                    <strong>Swing Arm / Paddle</strong>
                    <p>
                      The deflecting blade that swings into the conveyor path to redirect
                      parcels or bags.
                    </p>
                  </li>
                  <li>
                    <strong>Actuator</strong>
                    <p>
                      Provides the swinging motion; can be pneumatic, servo-driven, or
                      electric rotary type.
                    </p>
                  </li>
                  <li>
                    <strong>Mounting Frame / Bracket</strong>
                    <p>
                      Supports the entire diverter assembly and allows secure installation
                      on the conveyor line.
                    </p>
                  </li>
                  <li>
                    <strong>Sensors</strong>
                    <p>
                      Detect parcel position or barcode data and signal the control system
                      for accurate timing.
                    </p>
                  </li>
                  <li>
                    <strong>Control System (PLC / Controller)</strong>
                    <p>
                      Coordinates actuator movement and integrates with conveyor and
                      sortation logic.
                    </p>
                  </li>
                  <li>
                    <strong>Shock Absorber / Stopper</strong>
                    <p>
                      Restricts excessive movement and cushions the arm during operation
                      or return stroke.
                    </p>
                  </li>
                  <li>
                    <strong>Power Supply Unit</strong>
                    <p>
                      Delivers electrical or pneumatic power to the actuator and control
                      components.
                    </p>
                  </li>
                  <li>
                    <strong>Safety Guards / Covers</strong>
                    <p>
                      Enclose moving parts to protect operators and ensure safe operation.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>


        </div>




      </section >

    </>
  );
}

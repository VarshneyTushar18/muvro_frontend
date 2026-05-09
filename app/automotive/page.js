import Link from "next/link";
import {
  RiArrowRightUpLine,
  RiCheckboxCircleLine,
  RiFocus3Line,
  RiRobot2Line,
  RiSettings5Line,
  RiShieldCheckLine,
  RiStackLine,
  RiToolsLine,
  RiTruckLine,
} from "@remixicon/react";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import Style from "./style.module.css";
import CTABanner from "../components/cta/CTABanner";

const frontendBaseUrl =
  process.env.NEXT_PUBLIC_FRONTEND_BASE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata = {
  title: "Automotive Automation Solutions | MUVRO Technologies",
  description:
    "Explore MUVRO automotive automation solutions for assembly lines, SPMs, mobile robots, EMS systems, RGVs, sorting, ergonomic handling, fixtures, and grippers.",
  alternates: {
    canonical: frontendBaseUrl + "/automotive",
  },
};

const crumbs = [
  { label: "Home", link: "/" },
  { label: "Automotive" },
];



const capabilities = [
  "Line design, station integration, and synchronized transfer flow",
  "Controls, safety, traceability, and production data integration",
  "Custom handling, fixtures, grippers, tooling, and end effectors",
  "Scalable material movement with robots, RGVs, EMS, and conveyors",
];

const solutionCards = [
  {
    title: "Assembly Lines",
    icon: RiSettings5Line,
    image: "/images/Assembly-Lines.webp",
    description:
      "Modular lines for component and vehicle assembly with controlled flow, station balancing, quality gates, and production-ready ergonomics.",
    points: ["Engine, gearbox, axle, and frame lines", "Manual, semi-automatic, and automatic stations", "Poka-yoke, torque, inspection, and traceability"],
  },
  {
    title: "SPM's",
    icon: RiToolsLine,
    image: "/images/SPM's.webp",
    description:
      "Special purpose machines built around your part, cycle time, and process sequence for repeatable output on demanding shop floors.",
    points: ["Pressing, testing, assembly, and inspection", "Custom tooling and machine guarding", "PLC, HMI, sensors, and data capture"],
  },
  {
    title: "Mobile Robots",
    icon: RiRobot2Line,
    image: "/images/mob-rob.webp",
    description:
      "AGV and AMR based internal transport for predictable, safer material movement between storage, line-side, and dispatch areas.",
    points: ["Line feeding and kitting movement", "Flexible route planning", "Reduced forklift dependency"],
  },
  {
    title: "EMS Systems",
    icon: RiTruckLine,
    image: "/images/EMS-Systems.webp",
    description:
      "Electrified monorail systems for overhead movement where floor space is limited and synchronized transfer is essential.",
    points: ["Overhead transfer and buffer loops", "Independent carrier control", "Plant-layout friendly movement"],
  },
  {
    title: "Rail Guided Vehicles (RGV)",
    icon: RiFocus3Line,
    image: "/images/Rail-Guided-Vehicles.webp",
    description:
      "Rail-guided transfer vehicles for reliable in-line and cross-bay movement of pallets, bins, fixtures, and work-in-process loads.",
    points: ["Point-to-point material transfer", "High repeatability and controlled routing", "Integration with conveyors and stations"],
  },
  {
    title: "Sorting & Storage",
    icon: RiStackLine,
    image: "/images/sorting.png",
    description:
      "Organized storage and sorting systems that keep automotive components available at the right station, in the right sequence.",
    points: ["Line-side supermarkets", "Sequencing and dispatch buffers", "Barcode and scanner integration"],
  },
  {
    title: "Ergonomic Handling System",
    icon: RiShieldCheckLine,
    image: "/images/Ergonomic-Handling-System.webp",
    description:
      "Operator-friendly lifting, tilting, positioning, and handling equipment designed to reduce strain and improve repeatability.",
    points: ["Lifters, manipulators, and positioners", "Safer handling of heavy components", "Better access for assembly operations"],
  },
  {
    title: "Fixtures & Grippers",
    icon: RiCheckboxCircleLine,
    image: "/images/Fixtures-Grippers.webp",
    description:
      "Precision fixtures and gripping systems for stable part holding, robotic handling, inspection, and repeatable assembly quality.",
    points: ["Custom nests, jigs, and clamps", "Robot end-of-arm tooling", "Quick-change and part-family designs"],
  },
];

const processSteps = [
  "Study component flow, takt time, plant layout, and operator movement",
  "Design the right mix of automation, handling, storage, and safety systems",
  "Manufacture, integrate, test, install, and support the complete solution",
];

const ctaBannerData = {
  title: "Ready to Automate Your Automotive Production Line?",
  description:
    "Connect with MUVRO's automation experts to plan assembly lines, SPMs, mobile robots, EMS, RGVs, fixtures, and handling systems tailored to your plant workflow.",
  queryText: "Have an Automotive Project?",
  phoneNumber: "+91 (0) 9289 071 715",
};

export default function Automotive() {
  return (
    <>
      <BreadcrumbStrip crumbs={crumbs} />

      <main className={Style.automotivePage}>
        <section className={Style.hero}>
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6" data-aos="fade-right">
                <span className="section-label mb-3">Automotive Automation</span>
                <h1>
                  Complete automation systems for modern automotive production
                </h1>
                <p>
                  MUVRO designs and manufactures integrated automotive
                  solutions across assembly lines, SPMs, mobile robots, EMS,
                  RGVs, sorting, ergonomic handling, fixtures, and grippers.
                </p>
                {/* <div className={Style.heroActions}>
                  <Link href="/contact" className="mbtn mbtn-primary">
                    Discuss a Project
                  </Link>
                  <a href="#automotive-solutions" className={Style.textLink}>
                    View Solutions <RiArrowRightUpLine />
                  </a>
                </div> */}
              </div>

              <div className="col-lg-6" data-aos="fade-left">
                <div className={Style.heroImageWrap}>
                  <img
                    src="/images/automotive-industries.webp"
                    alt="Automotive automation production line"
                    className="img-fluid"
                  />
                  <div className={Style.heroBadge}>
                    <span>From line concept to commissioning</span>
                  </div>
                </div>
              </div>
            </div>

     
          </div>
        </section>

        <section className={Style.overview}>
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-5" data-aos="fade-up">
                <span className="section-label mb-3">Built for Production</span>
                <h2>
                  Flexible systems for high-volume, high-precision automotive
                  operations
                </h2>
              </div>
              <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
                <p>
                  Automotive plants need reliable flow between people,
                  machines, tools, robots, and materials. Our systems are
                  engineered to improve productivity, reduce manual strain,
                  protect quality, and keep every station supplied with the
                  right component at the right time.
                </p>
                <div className={Style.capabilityGrid}>
                  {capabilities.map((item) => (
                    <div className={Style.capabilityItem} key={item}>
                      <RiCheckboxCircleLine />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="automotive-solutions" className={Style.solutions}>
          <div className="container">
            <div className={Style.sectionHeader} data-aos="fade-up">
              <span className="section-label-center mb-3">Solution Range</span>
              <h2>
                Automotive <span>Automation Capabilities</span>
              </h2>
              <p>
                The page structure follows the automotive content buckets in
                your supplied folder reference.
              </p>
            </div>

            <div className={Style.solutionGrid}>
              {solutionCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    className={Style.solutionCard}
                    key={item.title}
                    data-aos="fade-up"
                    data-aos-delay={(index % 4) * 80}
                  >
                    <div className={Style.cardImage}>
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </div>
                    <div className={Style.cardBody}>
                      <div className={Style.cardTitleRow}>
                        <span className={Style.cardIcon}>
                          <Icon />
                        </span>
                        <h3>{item.title}</h3>
                      </div>
                      <p>{item.description}</p>
                      <ul>
                        {item.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>


        <CTABanner content={ctaBannerData} />
      </main>
    </>
  );
}

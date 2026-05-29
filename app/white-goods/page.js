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
  title: "White Goods Automation Solutions | MUVRO Technologies",
  description:
    "Explore MUVRO white goods automation solutions for IDU VRV, ODU VRV, IDU RA, ODU RA assembly lines, Robotics Palletizers, and ASRS systems.",
  alternates: {
    canonical: frontendBaseUrl + "/white-goods",
  },
};

const crumbs = [
  { label: "Home", link: "/" },
  { label: "White Goods" },
];

const capabilities = [
  "IDU VRV Assembly Line integration and flow",
  "ODU VRV Assembly Line synchronized transfer",
  "IDU RA and ODU RA Assembly Line balancing",
  "Robotics Palletizer and ASRS System implementation",
];

const solutionCards = [
  {
    title: "IDU VRV Assembly Line",
    icon: RiSettings5Line,
    image: "/images/white-goods/IDU-VRV-Assembly-Line.webp",
    description:
      "Modular assembly lines tailored for IDU VRV units, providing controlled flow, precision balancing, and ergonomic operator stations.",
    points: [],
  },
  {
    title: "ODU VRV Assembly Line",
    icon: RiSettings5Line,
    image: "/images/white-goods/ODU-VRV-Assembly-Line.webp",
    description:
      "Robust assembly solutions for ODU VRV units with synchronized transfer, quality gates, and seamless component integration.",
    points: [],
  },
  {
    title: "IDU RA Assembly Line",
    icon: RiSettings5Line,
    image: "/images/white-goods/IDU-RA-Assembly-Line.webp",
    description:
      "High-efficiency assembly lines for IDU RA production, engineered for cycle time optimization and repeatable output.",
    points: [],
  },
  {
    title: "ODU RA Assembly Line",
    icon: RiSettings5Line,
    image: "/images/white-goods/ODU-RA-Assembly-Line.webp",
    description:
      "Complete production line setup for ODU RA, featuring automated material handling and rigorous testing station integration.",
    points: [],
  },
  {
    title: "Robotics Palletizer",
    icon: RiRobot2Line,
    image: "/images/mob-rob.webp",
    description:
      "Automated robotic palletizing systems that provide predictable, high-speed end-of-line packaging and secure material handling.",
    points: [],
  },
  {
    title: "ASRS System",
    icon: RiStackLine,
    image: "/images/ASRS-Stacker-Crane.webp",
    description:
      "Automated Storage and Retrieval Systems for organized, high-density storage and timely retrieval of white goods components.",
    points: [],
  },
];

const ctaBannerData = {
  title: "Ready to Automate Your White Goods Production Line?",
  description:
    "Connect with MUVRO's automation experts to plan assembly lines, palletizers, and ASRS systems tailored to your plant workflow.",
  queryText: "Have a White Goods Project?",
  phoneNumber: "+91-7457800130",
};

export default function WhiteGoods() {
  return (
    <>
      <BreadcrumbStrip crumbs={crumbs} />

      <main className={Style.whiteGoodsPage}>
        <section className={Style.hero}>
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6" data-aos="fade-right">
                <br/>
                <span className="section-label mb-3">White Goods Automation</span>
                <h1>
                  Complete automation systems for white goods production
                </h1>
                <p>
                  MUVRO designs and manufactures integrated white goods
                  solutions across IDU/ODU VRV & RA assembly lines, robotics palletizers, and ASRS systems.
                  <br/><br/>
                </p>
              </div>

              <div className="col-lg-6" data-aos="fade-left">
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
                  Flexible systems for high-volume, precision white goods
                  operations
                </h2>
              </div>
              <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
                <p>
                  White goods plants need reliable flow between people,
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

        <section id="white-goods-solutions" className={Style.solutions}>
          <div className="container">
            <div className={Style.sectionHeader} data-aos="fade-up">
              <span className="section-label-center mb-3">Solution Range</span>
              <h2>
                White Goods <span>Automation Capabilities</span>
              </h2>
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
                        {item.points.map((point) => {
                          const pointText = typeof point === "string" ? point : point.text;
                          const pointLink = typeof point === "object" ? point.link : undefined;

                          return (
                            <li key={pointText}>
                              {pointLink ? (
                                <Link href={pointLink} className={Style.pointLink}>
                                  {pointText}
                                </Link>
                              ) : (
                                pointText
                              )}
                            </li>
                          );
                        })}
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

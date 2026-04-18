import BreadcrumbStrip from "../../layout/BreadcrumbStrip/BreadcrumbStrip";
import Timeline from "../../Timeline/TimelineSection";
import Style from "./ourhistory.module.css";
import {
  FaBuilding,
  FaIndustry,
  FaHandshake,
  FaCogs,
  FaWarehouse,
  FaTruck,
  FaAward,
  FaSyncAlt,
  FaGlobeAmericas,
  FaGlobeAsia
} from "react-icons/fa";
import './custom.css';

async function getPageData() {
  const res = await fetch(
    `${process.env.STRAPI_BACKEND_BASE_URL}/our-history-page?populate=*`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch values");
  }

  const data = await res.json();
  return data.data;
}

export default async function OurHistory() {
  const pageData = await getPageData();
  if (!pageData) return notFound();


  const sectionHeader = pageData.sectionHeader;

  return (
    <>
      <section className="pb-0">
        <div className="container">
          {/* Section Header */}
          <div className="row justify-content-center">
            <div
              className="col-xl-8 pb-4"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {sectionHeader && (
                <>
                  <span
                    className="section-label-center mb-3"
                    data-aos="fade-down"
                    data-aos-delay="100"
                  >
                    {sectionHeader.label}
                  </span>

                  <h2
                    className="mb-3 text-center"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    dangerouslySetInnerHTML={{
                      __html: sectionHeader.heading.replace(
                        /\[(.*?)\]/g,
                        "<span>$1</span>"
                      ),
                    }}
                  />

                  {sectionHeader.description && (
                    <p
                      className="text-center"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      {sectionHeader.description}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>

          {/* History Section */}
          <div className="row justify-content-center">
            <div
              className="col-xl-10 col-lg-10 col-md-11 col-sm-12"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={Style.history_banner}>
                <div
                  className={Style.history_imageholder}
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  <img
                    src={
                      process.env.STRAPI_ASSETS_BASE_URL + pageData.image.url
                    }
                    alt="Our History"
                  />
                </div>

                <div
                  className={Style.history_context}
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <p>{pageData.description}</p>
                </div>
              </div>
            </div>

            {/* Timeline Section */}
            {/* <div
              className="col-xl-12 col-lg-12 col-md-12 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <Timeline timelineData={pageData.timelineCard} />
            </div> */}
          </div>
        </div>
      </section>

      <section className="pb-3 pt-3 historytimelinesection">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <img src="images/Timeline-Image-1.webp" alt="Timeline" className="img-fluid desktopimage"/>
              <img src="images/Timeline-Mob.webp" alt="Timeline" className="img-fluid mobileimage"/>
            </div>
            {/* <div className="DiagonalSection">
              <div className="Line">
                <ul>
                  <li>
                    <div className="Dot4Line"></div>
                    <h6>2002</h6>
                    Foundation Year: Company begins as Uncease Automation
                  </li>

                  <li>
                    <h6>2004</h6>
                    Set up a New Manufacturing Plant in IMT Manesar Gurugram & successfully Installed the first Project Wheel & Tire ASRS system
                  </li>

                  <li>
                    <h6>2010</h6>
                    Strategic Collaboration: Partnership with Tata Motors
                  </li>

                  <li>
                    <h6>2014</h6>
                    Introduce Manipulator Systems. International Tie up with Movomech – Sweden.
                  </li>

                  <li>
                    <h6>2016</h6>
                    Setup a new 25000sq. feet multi floor Manufacturing Unit in Ghaziabad NCR.
                  </li>

                  <li>
                    <h6>2017</h6>
                    Scale in Warehouse & E-Commerce Automation — Mass-produce Smart Conveyors and Deliver Mega Projects
                  </li>

                  <li>
                    <h6>2019</h6>
                    Set Industry Benchmarks in Warehouse Automation — Quality, Speed, and Fastest Trunkey Installations in India
                  </li>

                  <li>
                    <h6>2020</h6>
                    Rebranding & R&D Investment: Rebrand to MUVRO
                  </li>

                  <li>
                    <h6>2023</h6>
                    Global Footprint: Sales office in the United States
                  </li>

                  <li>
                    <h6>2025</h6>
                    Global Footprint: Office openings in South Korea and Germany
                  </li>
                </ul>

              </div>
            </div> */}
          </div>
        </div>
      </section>


    </>
  );
}

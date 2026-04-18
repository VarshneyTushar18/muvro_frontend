import { notFound } from "next/navigation";
import { renderBlock } from "blocks-html-renderer";
import BreadcrumbStrip from "../../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import Style from "./qualitypolicy.module.css";

async function getPolicy() {
  const res = await fetch(
    `${process.env.STRAPI_BACKEND_BASE_URL}/quality-policy-page?populate=*`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch values");
  }

  const data = await res.json();
  return data.data;
}

export default async function QualityPolicy() {
  const pageData = await getPolicy();
  if (!pageData) return notFound();

  const crumbs = [
    { label: "Home", link: "/" },
    { label: "Quality Policy" },
  ];

  const sectionHeader = pageData.sectionHeader;
  const points = pageData.policyPoints.map((item) => item.text) || [];

  return (
    <>
      <BreadcrumbStrip crumbs={crumbs} />

      <section className={Style.quality_policy}>
        <div className="container">
          {/* Section Header */}
          <div className="row justify-content-center">
            <div
              className="col-xl-5 pb-5"
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
                    className="text-center mb-3"
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

          {/* Content Section */}
          <div className="row align-items-center">
            {/* Image Block */}
            <div
              className="col-xl-6"
              data-aos="zoom-in"
              data-aos-delay="150"
              data-aos-duration="1000"
            >
              <div className={Style.image_block}>
                <div className={Style.image_hover}>
                  <img
                    src={
                      process.env.STRAPI_ASSETS_BASE_URL + pageData.image.url
                    }
                    alt={pageData.image.alternativeText || "Quality Policy"}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div
              className="col-xl-6"
              data-aos="fade-left"
              data-aos-delay="250"
              data-aos-duration="1000"
            >
              <div className="context-block">
                <h5
                  className="mb-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  {pageData.title}
                </h5>

                <ul>
                  {points.map((point, index) => (
                    <li
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={350 + index * 100}
                    >
                      <img
                        src="/images/quality-policy/pointer-icon.svg"
                        alt="bullet"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                {pageData.content && (
                  <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    dangerouslySetInnerHTML={{
                      __html: renderBlock(pageData.content),
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

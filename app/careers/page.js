import Style from "./careers.module.css";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import CareersTable from "./careersTable";
import { renderBlock } from "blocks-html-renderer";
async function getCareersPageData() {
  const res = await fetch(`${process.env.STRAPI_BACKEND_BASE_URL}/careers-page?populate=*`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch values");
  }

  const data = await res.json();
  return data.data;
}
export default async function Careers() {
  const pageData = await getCareersPageData();
  if (!pageData) return notFound();

  const crumbs = [
    { label: "Home", link: "/" },
    { label: "Careers" },
  ];

  const sectionHeader = pageData.sectionHeader;

  const careersData = pageData.vacancyDetails;

  return (
    <>
      <BreadcrumbStrip crumbs={crumbs} />

      <section className={Style.quality_policy}>
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-8 pb-3"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {sectionHeader && (
                <>
                  <span
                    className="section-label-center mb-3"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {sectionHeader.label}
                  </span>
                  <h2
                    className="text-center mb-3"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    dangerouslySetInnerHTML={{
                      __html: sectionHeader.heading.replace(/\[(.*?)\]/g, "<span>$1</span>"),
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

          <div className="row align-items-center justify-content-center">
            <div
              className="col-xl-5"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="900"
            >
              <div className={Style.image_block}>
                <div className={Style.image_hover}>
                  <img
                    src={process.env.STRAPI_ASSETS_BASE_URL + pageData.image.url}
                    alt={pageData.image.alternativeText ?? "Careers at Muvro"}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>

            <div
              className="col-xl-6"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              {pageData.content && (
                <div
                  className={Style.contextBlock}
                  dangerouslySetInnerHTML={{
                    __html: renderBlock(pageData.content),
                  }}
                />
              )}
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <CareersTable careersData={careersData} />
          </div>
        </div>
      </section>



    </>
  );
}

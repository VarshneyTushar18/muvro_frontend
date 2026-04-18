import BreadcrumbStrip from "../../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import Timeline from "../../components/Timeline/TimelineSection";
import Style from "./ourhistory.module.css";

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

  const crumbs = [
    { label: "Home", link: "/" },
    { label: "Our History" },
  ];

  const sectionHeader = pageData.sectionHeader;

  return (
    <>
      <BreadcrumbStrip crumbs={crumbs} />

      <section className={Style.contact_page}>
        <div className="container">
          {/* Section Header */}
          <div className="row justify-content-center">
            <div
              className="col-xl-7 pb-4"
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
            <div
              className="col-xl-12 col-lg-12 col-md-12 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <Timeline timelineData={pageData.timelineCard} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

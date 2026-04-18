import { renderBlock } from "blocks-html-renderer";
import BreadcrumbStrip from "../../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import Style from "./whymuvro.module.css";
import { notFound } from "next/navigation";

async function getPageData() {
  const res = await fetch(
    `${process.env.STRAPI_BACKEND_BASE_URL}/why-muvro-page?populate=*`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch values");
  }

  const data = await res.json();
  return data.data;
}

export default async function WhyMuvro() {
  const pageData = await getPageData();
  if (!pageData) return notFound();

  const crumbs = [
    { label: "Home", link: "/" },
    { label: "Why Muvro" },
  ];

  const sectionHeader = pageData.sectionHeader;

  return (
    <>
      <BreadcrumbStrip crumbs={crumbs} />

      <section className={Style.contact_page}>
        <div className="container">
          {/* Section Header */}
          <div className="row">
            <div
              className="col-xl-11 pb-4"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {sectionHeader && (
                <>
                  <span
                    className="section-label mb-3"
                    data-aos="fade-down"
                    data-aos-delay="100"
                  >
                    {sectionHeader.label}
                  </span>

                  <h2
                    className="mb-3"
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

          {/* Banner Section */}
          <div
            className="row justify-content-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="col-xl-12 pb-5">
              <div className={Style.banner_muvro}>
                <img
                  src={
                    process.env.STRAPI_ASSETS_BASE_URL +
                    pageData.bannerImage.url
                  }
                  alt={
                    pageData.bannerImage.alternativeText ?? "Banner Image"
                  }
                />
                <div
                  className={Style.banner_muvro_text}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h5>{pageData.bannerTitle}</h5>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: renderBlock(pageData.bannerContent),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="row justify-content-center">
            {pageData.item.map((card, index) => (
              <div
                key={index}
                className="col-xl-6"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 150}
                data-aos-duration="1000"
              >
                <div className={Style.imgbox}>
                  <img
                    src={
                      process.env.STRAPI_ASSETS_BASE_URL + card.image.url
                    }
                    alt={card.image.alternativeText ?? card.title}
                  />
                  <h5
                    data-aos="fade-up"
                    data-aos-delay={150 + index * 100}
                  >
                    {card.title}
                  </h5>
                  <div
                    data-aos="fade-up"
                    data-aos-delay={250 + index * 100}
                    dangerouslySetInnerHTML={{
                      __html: renderBlock(card.content),
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

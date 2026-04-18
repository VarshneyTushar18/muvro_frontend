import { notFound } from "next/navigation";
import Style from "./ourvalues.module.css";

async function getValues() {
  const res = await fetch(
    `${process.env.STRAPI_BACKEND_BASE_URL}/our-values-page?populate=*`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch values");
  }

  const data = await res.json();
  return data.data;
}

export default async function OurValues() {
  const pageData = await getValues();
  if (!pageData) return notFound();


  const sectionHeader = pageData.sectionHeader;
  const values = pageData.valueCard || [];

  return (
    <>

      <section className={`${Style.valuepage} pb-0`}>
        <div className="container">
          {/* Section Header */}
          <div className="row justify-content-center">
            <div
              className="col-xl-8 pb-5"
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

          {/* Value Cards */}
          <div className={Style.valuecardholder}>
            {values.map((val, index) => (
              <div
                className={Style.cardholder}
                key={val.id}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 150}
                data-aos-duration="1000"
              >
                <div className={`${Style.valuecard} h-100`}>
                  <div className={Style.cardnum}>{index + 1}</div>

                  <div className={Style.cardcontent}>
                    <h5>{val.title}</h5>
                    <p>{val.description}</p>
                  </div>

                  <div className={Style.cardicon}>
                    <img
                      src={
                        process.env.STRAPI_ASSETS_BASE_URL + val.icon.url
                      }
                      alt={val.icon.alternativeText || val.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

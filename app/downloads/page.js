import { RiDownload2Line } from "@remixicon/react";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import Style from "./download.module.css";

async function getDownloads() {
  const res = await fetch(`${process.env.STRAPI_BACKEND_BASE_URL}/download-page?populate=*`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch values");
  }

  const data = await res.json();
  return data.data;
}

export default async function Downloads() {
  const pageData = await getDownloads();

  if (!pageData) return notFound();

  const crumbs = [
    { label: "Home", link: "/" },
    { label: "Downloads" },
  ];

  const sectionHeader = pageData.sectionHeader;
  const items = pageData.catalougeItem ?? [];

  return (
    <>
      <BreadcrumbStrip crumbs={crumbs} />

      <section
        className={Style.download_page}
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
            <div className="col-xl-8 pb-4">
              {sectionHeader && (
                <>
                  <span
                    className="section-label-center mb-3"
                    data-aos="zoom-in"
                    data-aos-delay="150"
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

          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="col-xl-10 col-lg-10 col-md-11 col-sm-12">
              <table
                className="table table-bordered table-striped table-hover"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="900"
              >
                <tbody>
                  <tr data-aos="fade-down" data-aos-delay="550">
                    <th>S.No</th>
                    <th>Catalogue Name</th>
                    <th>Action</th>
                  </tr>

                  {items.length > 0 ? (
                    items.map((catalogue, index) => (
                      <tr
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={600 + index * 100}
                        data-aos-duration="700"
                      >
                        <td>{index + 1}</td>
                        <td>{catalogue.title}</td>
                        <td>
                          <a
                            href={
                              process.env.STRAPI_ASSETS_BASE_URL +
                              catalogue.catalouge.url
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos="zoom-in"
                            data-aos-delay={650 + index * 100}
                          >
                            <RiDownload2Line /> Download
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr
                      data-aos="fade-up"
                      data-aos-delay="700"
                      data-aos-duration="800"
                    >
                      <td colSpan="3" className="text-center text-muted py-4">
                        No catalogues available at the moment.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

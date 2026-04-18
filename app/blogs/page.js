import BreadcrumbStrip from "../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import Style from "./blogs.module.css";
import BlogGrid from "./BlogGrid";

async function getBlogs(page = 1, pageSize = 24) {
  const res = await fetch(
    `${process.env.STRAPI_BACKEND_BASE_URL}/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}


export default async function BlogsPage() {
  const data = await getBlogs();
  const crumbs = [
    { label: "Home", link: "/" },
    { label: "Our Blogs" },
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
              <span
                className="section-label-center mb-3"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                Blogs & Updates
              </span>

              <h2
                className="mb-3 text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Our <span>Blogs</span>
              </h2>

              <p
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Stay informed with the latest innovations, success stories, and industry updates from Muvro Technologies.
              </p>
            </div>
          </div>

          {/* Blog Grid Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <BlogGrid initialData={data} />
          </div>
        </div>
      </section>

    </>
  );
}

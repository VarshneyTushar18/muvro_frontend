import BreadcrumbStrip from "../../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import SwiperSlider from "../../ui/product-single/ProductGallery/SwipeSlider";
import CTABanner from "../../components/cta/CTABanner";
import { renderBlock } from "blocks-html-renderer";
import Banner from "../../ui/product-single/Banner/Banner";
import { notFound } from 'next/navigation';

async function fetchSlugs() {
  const res = await fetch(
    `${process.env.STRAPI_BACKEND_BASE_URL}/software-pages?fields[0]=slug`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch software slugs");
  }
  const data = await res.json();
  return data.data.map((item) => item.slug);
}

async function fetchSoftware(slug) {
  const res = await fetch(`${process.env.STRAPI_BACKEND_BASE_URL}/software-pages?filters[slug][$eq]=${slug}&populate=*`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) { throw new Error('Failed to fetch software'); }
  const data = await res.json();
  return data.data[0];
}

export async function generateStaticParams() {
  const slugs = await fetchSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function SoftwarePage({ params }) {
  const { slug } = await params;
  const software = await fetchSoftware(slug);

  if (!software) {
    return notFound();
  }

  const crumbs = [
    { label: "Home", link: "/" },
    { label: software.softwareName },
  ];

  return (
    <>
      <Banner
        desktopBanner={
          software.banner?.desktopImage?.url
            ? `${process.env.STRAPI_ASSETS_BASE_URL}${software.banner.desktopImage.url}`
            : null
        }
        tabletBanner={
          software.banner?.tabletImage?.url
            ? `${process.env.STRAPI_ASSETS_BASE_URL}${software.banner.tabletImage.url}`
            : null
        }
        mobileBanner={
          software.banner?.mobileImage?.url
            ? `${process.env.STRAPI_ASSETS_BASE_URL}${software.banner.mobileImage.url}`
            : null
        }
        alt={software.banner?.desktopImage?.alternativeText || "Software Single Banner"}
      />

      <BreadcrumbStrip crumbs={crumbs} />

      <section data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <div className="row">
            {/* Section Header */}
            <div
              className="col-xl-12 pb-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="section-label-center mb-3">
                {software.sectionHeader.label}
              </span>
              <h2
                className="text-center"
                dangerouslySetInnerHTML={{
                  __html: software.sectionHeader.heading.replace(
                    /\[(.*?)\]/g,
                    "<span>$1</span>"
                  ),
                }}
              />
            </div>

            {/* Swiper Image Section */}
            <div
              className="col-xl-6"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="position-sticky" style={{ top: "10px" }}>
                <SwiperSlider
                  images={software.softwareImages.map((img) => ({
                    src: `${process.env.STRAPI_ASSETS_BASE_URL}${img.url}`,
                    alt: img.alternativeText,
                  }))}
                  galleryName="wcs-gallery"
                  slidesPerViewMobile={1}
                  slidesPerViewTablet={1}
                  slidesPerViewDesktop={1}
                />
              </div>
            </div>

            {/* Text Content Section */}
            <div
              className="col-xl-6"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div
                className="context_block"
                dangerouslySetInnerHTML={{ __html: renderBlock(software.content) }}
              />
            </div>
          </div>
        </div>
      </section>


      <CTABanner content={software.ctaSection} />
    </>
  );
}

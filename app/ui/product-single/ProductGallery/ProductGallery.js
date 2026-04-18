import styles from "./productGallery.module.css";
import SwiperSlider from "./SwipeSlider";

export default function ProductGallery({ section }) {
  if (!section) return null;

  const { sectionHeader, images } = section;

  return (
    <section className={styles.prgallerysection}>
      <div className="container">
        <div
          className={styles.wrapper}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {sectionHeader.label && (
            <span className="section-label-center">{sectionHeader.label}</span>
          )}

          <h2
            className="text-center mb-3"
            dangerouslySetInnerHTML={{
              __html: sectionHeader.heading.replace(
                /\[([^\]]+)\]/g,
                "<span>$1</span>"
              ),
            }}
          />

          {sectionHeader.description && (
            <p className="text-center mb-5">{sectionHeader.description}</p>
          )}
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-delay="200"
        >
          <SwiperSlider
            slidesPerViewMobile={section.slidesPerViewMobile || 1}
            slidesPerViewTablet={section.slidesPerViewTablet || 2}
            slidesPerViewDesktop={section.slidesPerViewDesktop || 3}
            images={images.map((img) => ({
              src: process.env.STRAPI_ASSETS_BASE_URL + img.url,
              alt: img.alternativeText || img.name || "Slide",
            }))}
          />
        </div>
      </div>
    </section>
  );
}

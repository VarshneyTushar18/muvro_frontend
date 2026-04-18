import styles from "./TechnicalSpecifications.module.css";

export default function TechnicalSpecifications({ sectionData }) {
  const { label, heading, description, specs } = sectionData;

  return (
    <section className={styles.technicalSpecifications}>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <span className="section-label">{label}</span>
            <h2
              className="mt-3"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
          </div>

          <div
            className="col-lg-6 d-flex align-items-end"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="800"
          >
            <p>{description}</p>
          </div>
        </div>

        <div className="row mt-5">
          {specs.map((specCard, index) => (
            <div
              className="col-md-6 col-lg-4 mb-3"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              <div className={styles.specsCard}>
                <h3 className={styles.specTitle}>{specCard.title}</h3>
                <div className="specs">
                  {specCard.items.map((item, idx) => (
                    <div className={styles.specWrapper} key={idx}>
                      <p className={styles.spec}>{item.value}</p>
                      <p className={styles.title}>{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

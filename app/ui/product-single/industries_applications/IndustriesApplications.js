import styles from "./indus.module.css";

export default function IndustriesApplications({ title, subtitle, applications }) {
  return (
    <section
      className={styles.industryApplication}
    >
      <div className="container">
        <div
          className={styles.wrapper}
        >
          <span className="section-label-center text-white">{subtitle}</span>
          <h2 className="text-white text-center">{title}</h2>
        </div>

        <div className="row justify-content-center">
          <div
            className={applications.length > 3 ? "col-md-12" : "col-md-10"}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="row justify-content-center">
              {applications.map((app, index) => (
                <div
                  className={
                    applications.length > 3
                      ? "col-md-6 col-lg-3 mb-4"
                      : "col-md-6 col-lg-4 mb-4"
                  }
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  data-aos-duration="800"
                >
                  <div className={styles.industryApplicationCard}>
                    <div className={styles.card_num}>
                      <span>{index + 1}</span>
                    </div>
                    <h3>{app.heading}</h3>
                    <p>{app.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

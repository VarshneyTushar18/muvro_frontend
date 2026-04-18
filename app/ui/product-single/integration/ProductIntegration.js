import styles from "./ProductIntegration.module.css";
import { renderBlock } from "blocks-html-renderer";

export default function ProductIntegration({ subtitle, title, specifications }) {
  if (!specifications || specifications.length === 0) return null;

  return (
    <section className={styles.integration}>
      <div className="container">
        <div className={styles.wrapper}>
          {subtitle && <span className="section-label-center">{subtitle}</span>}
          {title && <h2 className="text-center">{title}</h2>}
        </div>

        <div className="row justify-content-center">
          <div className={specifications.length > 2 ? "col-md-12" : "col-md-8"}>
            <div className="row">
              {specifications.map((spec, index) => (
                <div className={specifications.length > 2 ? "col-md-6 col-lg-4 mb-3" : "col-md-6 col-lg-6 mb-3"} key={index}>
                  <div className={styles.integrationCard}>
                    <h5>{spec.title}</h5>
                    {spec.content && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: renderBlock(spec.content),
                        }}
                      />
                    )}
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

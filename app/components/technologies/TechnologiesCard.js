// components/TechCard.jsx
import styles from "./TechnologiesCard.module.css";
import { RiArrowRightUpLine } from "@remixicon/react";
export default function TechnologiesCard({ number, title, description, imgSrc, products = [] }) {
  return (
    <>
      {/* Card */}
      <div className={`${styles.card} col-md-6 col-lg-4 my-3 my-md-4 my-lg-5`} data-aos="fade-up">
        <div className={styles.imageWrapper}>
          <img src={imgSrc} alt={title} className="img-fluid" />
        </div>
        <span className={styles.number}>{number.toString().padStart(2, "0")}.</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <hr className={styles.divider} />
        {products.length > 0 && (
          <button
            type="button"
            className="mbtn mbtn-primary d-inline-block"
            data-bs-toggle="modal"
            data-bs-target={`#productsModal${number}`} // unique modal ID per card
          >
            Explore Now
          </button>
        )}
      </div>

      {/* Modal */}
      {products.length > 0 && (
        <div
          className="modal fade"
          id={`productsModal${number}`}
          tabIndex="-1"
          aria-labelledby={`productsModalLabel${number}`}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={`productsModalLabel${number}`}>
                  {title} Products
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className={styles.productGrid}>
                  {products.map((prod) => (
                    <div className={styles.productCard} key={prod.name}>
                      <div className={styles.productCardImage}>
                        <a href={`/${prod.slug}`} className="text-center">
                        <img src={`${process.env.STRAPI_ASSETS_BASE_URL}${prod.transparentImage.url}`}
                          alt={prod.productName} />
                        </a>
                      </div>
                      <div className={styles.productCardText}>
                        <p className={styles.productName}>{prod.productName}</p>
                        <div className={styles.productFooter}>
                          <p className={styles.productSubtitle}>{prod.tagline}</p>
                          <a href={`/${prod.slug}`} className={styles.arrow}><RiArrowRightUpLine /></a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

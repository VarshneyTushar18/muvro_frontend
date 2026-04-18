// components/CTABanner.jsx
import Link from "next/link";
import styles from "./CTABanner.module.css";

const defaultContent = {
  title: "Know More About  3D Smart Sorter System – Next Gen Autonomous Sorting",
  description:
    "Discover how Muvro’s 3D Smart Sorter System – Next Gen Autonomous Sorting enhances speed, accuracy, and efficiency in warehouse automation, streamlining material flow from induction to destination with seamless flexibility.",
  queryText: "Having Queries? Call Us Now",
  phoneNumber: "+91 (0) 9289 071 715",
};

export default function CTABanner({ content = defaultContent }) {
  const { title, description, queryText, phoneNumber } = content;

  return (
    <section>
      <div className={`${styles.CTABanner} container`} data-aos="fade-up"
        data-aos-duration="800">
        <div className="row" >
          <div className="col-md-6 col-lg-7">
            <h5>{title}</h5>
            <p className="mb-0">{description}</p>
          </div>
          <div className="col-md-6 col-lg-5">
            <div
              className={`d-flex flex-column align-items-start align-items-lg-end  ${styles.ctaWrapper}`}
            >
              <span className={styles.tagline}>{queryText}</span>
              <a className={styles.phone} href={`tel:${phoneNumber}`}>
                {phoneNumber}
              </a>
              <Link href="/contact" className="mbtn mbtn-secondary">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.bannerShape}`}></div>
      </div>
    </section>
  );
}

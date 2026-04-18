import OurHistory from "../components/(company)/our-history/OurHistory";
import OurValues from "../components/(company)/our-values/OurValues";
import QualityPolicy from "../components/(company)/quality-policy/QualityPolicy";
import WhyMuvro from "../components/(company)/why-muvro/WhyMuvro";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import styles from "./style.module.css";

export default async function AboutUs() {
    const crumbs = [
        { label: "Home", link: "/" },
        { label: "About Us" },
    ];

    return (
        <>
            <BreadcrumbStrip crumbs={crumbs} />
            <section className="pb-0">
                <div className="container">
                    {/* Section Header */}
                    <div className="row justify-content-center">
                        <div
                            className="col-xl-8 pb-4"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >

                            <span
                                className="section-label-center mb-3"
                                data-aos="fade-down"
                                data-aos-delay="100"
                            >
                                More Than Just a Name
                            </span>

                            <h2
                                className="mb-5 text-center"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Discover the Meaning Behind <span>MUVRO</span>
                            </h2>

                            <p
                                className="text-center"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                Five words that capture our spirit — adaptable, original, daring, transformative, and dependable. That’s the essence of MUVRO.
                            </p>
                        </div>

                        {/* MUVRO Section */}
                        <section
                            className={styles.muvroSection}
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div
                                className={styles.line}
                                data-aos="fade-in"
                                data-aos-delay="450"
                            ></div>

                            <div className={styles.muvroContainer}>

                                {/* M */}
                                <div
                                    className={`${styles.muvroItem} ${styles.top}`}
                                    data-aos="zoom-in"
                                    data-aos-delay="500"
                                >
                                    <div className={`${styles.label} ${styles.top}`}>MODULAR</div>
                                    <div className={styles.circle}>M</div>
                                </div>

                                {/* U */}
                                <div
                                    className={`${styles.muvroItem} ${styles.bottom}`}
                                    data-aos="zoom-in"
                                    data-aos-delay="600"
                                >
                                    <div className={styles.circle}>U</div>
                                    <div className={`${styles.label} ${styles.bottom}`}>UNIQUE</div>
                                </div>

                                {/* V */}
                                <div
                                    className={`${styles.muvroItem} ${styles.top}`}
                                    data-aos="zoom-in"
                                    data-aos-delay="700"
                                >
                                    <div className={`${styles.label} ${styles.top}`}>VENTURIOUS</div>
                                    <div className={styles.circle}>V</div>
                                </div>

                                {/* R */}
                                <div
                                    className={`${styles.muvroItem} ${styles.bottom}`}
                                    data-aos="zoom-in"
                                    data-aos-delay="800"
                                >
                                    <div className={styles.circle}>R</div>
                                    <div className={`${styles.label} ${styles.bottom}`}>REVOLUTIONARY</div>
                                </div>

                                {/* O */}
                                <div
                                    className={`${styles.muvroItem} ${styles.top}`}
                                    data-aos="zoom-in"
                                    data-aos-delay="900"
                                >
                                    <div className={`${styles.label} ${styles.top}`}>OASIS</div>
                                    <div className={styles.circle}>O</div>
                                </div>

                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <OurHistory />
            <OurValues />
            <QualityPolicy />
            <WhyMuvro />
        </>
    );
}

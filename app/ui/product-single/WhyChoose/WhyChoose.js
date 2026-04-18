import styles from "./whyChoose.module.css";

export default function WhyChoose({
    aosAnimation = "fade-up",
    aosDuration = 1000,
    subheading = "Subheading",
    heading = "Heading",
    description = "Description Goes Here",
    items = []
}) {
    const validItems = items.filter(
        (item) => item.title && item.desc
    );
    if (!validItems.length) {
        console.warn("No valid items to display. Each item must have both title and desc.");
        return null;
    }
    return (
        <section className={styles.section} data-aos={aosAnimation} data-aos-duration={aosDuration}>
            <div className="container">
                <div
                    className={styles.wrapper}
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <span className="section-label-center">{subheading}</span>
                    <h2
                        className="text-center mb-3"
                        dangerouslySetInnerHTML={{ __html: heading }}
                    ></h2>

                    <p className="text-center">{description}</p>
                </div>
                <div>
                    <div
                        className={`row ${styles.items} mt-5`}
                    >
                        {validItems.map((item, index) => (
                            <div className={`col-md-6 col-lg-4 mb-3`} key={index} data-aos="fade-up"
                                data-aos-delay={(index + 1) * 100}>
                                <div className={`${styles.item} h-100`}>
                                    <h6>{item.title}</h6>
                                    <p className="mb-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

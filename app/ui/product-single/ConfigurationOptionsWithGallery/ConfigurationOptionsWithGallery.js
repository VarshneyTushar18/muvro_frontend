import { RiArrowRightCircleFill } from "@remixicon/react";
import SwiperSlider from "../ProductGallery/SwipeSlider";
import styles from "./ConfigurationOptionsWithGallery.module.css";

export default function ConfigurationOptionsWithGallery({ sectionData }) {
    return (
        <section className={`${styles.configOptionsWithGallery} ${sectionData?.repeated ? styles.repeated : ""}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <span className="section-label" data-aos="fade-up">
                        {sectionData?.label}
                    </span>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2
                                className={styles.title}
                                data-aos="fade-right"
                                data-aos-delay="100"
                                dangerouslySetInnerHTML={{ __html: sectionData?.heading }}
                            />
                            {sectionData?.htmlContent && (
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                    dangerouslySetInnerHTML={{ __html: sectionData.htmlContent }}
                                />
                            )}
                            {sectionData?.lists?.map((list, index) => (
                                <div
                                    key={index}
                                    className={styles.listBlock}
                                    data-aos="fade-up"
                                    data-aos-delay={300 + index * 100}
                                >
                                    <h3 className={styles.listTitle}>{list.title}</h3>
                                    <ul className={styles.customList}>
                                        {list.items.map((item, idx) => (
                                            <li key={idx}>
                                                <RiArrowRightCircleFill className={styles.icon} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div
                            className="col-lg-6"
                            data-aos="fade-left"
                            data-aos-delay="200"
                        >
                            <img
                                src={sectionData?.image || "./images/product-single/config-options.png"}
                                alt=""
                                className={`${styles.image} img-fluid`}
                            />
                        </div>
                    </div>
                </div>
                {sectionData?.images?.length > 0 && (
                    <SwiperSlider images={sectionData.images} galleryName="config-gallery" />
                )}
            </div>
        </section>
    );
}

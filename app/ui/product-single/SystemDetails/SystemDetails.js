import styles from "./systemDetails.module.css";
import { renderBlock } from 'blocks-html-renderer';

export default function SystemDetails({
    aosAnimation = "fade-up",
    aosDuration = 1000,
    subheading = "Subheading",
    heading = "Heading",
    title = "Title",
    image = null,
    content = "Content"
}) {
    return (
        <section className={`${styles.section}`} data-aos={aosAnimation} data-aos-duration={aosDuration}>
            <div className="container">
                <div
                    className={styles.wrapper}
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <span className="section-label-center">{subheading}</span>
                    <h2 className="text-center mb-3">
                        {heading}
                    </h2>
                </div>
                <div className={styles.contentWrapper} data-aos="fade-up" data-aos-delay="200">
                    <div className="row">
                        <div className="col-xl-6">
                            {
                                image && (
                                    <img src={image} alt="Placeholder" className={`${styles.image} img-fluid h-100`} />
                                )
                            }
                        </div>
                        <div className={`${styles.content} col-xl-6`}>
                            <h3 className={styles.title}>{title}</h3>
                            <div className={styles.description} dangerouslySetInnerHTML={{ __html: renderBlock(content) }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

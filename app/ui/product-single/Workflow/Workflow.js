import styles from "./workflow.module.css";

export default function Workflow({ sectionData }) {
    if (
        !sectionData ||
        !sectionData.items ||
        !sectionData.items.length
    ) {
        return null;
    }

    const baseUrl = process.env.STRAPI_ASSETS_BASE_URL || "";

    return (
        <section className={styles.section}>
            <div className="container">
                {sectionData.sectionHeader?.heading && (
                    <h2 className="text-center">{sectionData.sectionHeader.heading}</h2>
                )}
                <div className={`${styles.workflowGrid} mt-5`}>
                    {sectionData.items.map((step, index) => (
                        <div key={step.id} className={styles.step}>
                            {step.image?.url && (
                                <div className={styles.imageWrapper}>
                                    <img src={`${baseUrl}${step.image.url}`} alt={step.title} />
                                    {index !== sectionData.items.length - 1 && (
                                        <span className={styles.connector}></span>
                                    )}
                                </div>
                            )}
                            {step.title && <h3>{step.title}</h3>}
                            {step.description && <p>{step.description}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

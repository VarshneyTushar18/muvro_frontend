import { RiArrowRightCircleFill } from "@remixicon/react";
import styles from "./TabLayout.module.css";

function CustomList({ items }) {
    return (
        <div>
            {items.map((item, index) => (
                <div key={index} className="d-flex gap-2 mb-3">
                    <div className={`${styles.iconWrapper} flex-shrink-0`}>
                        <RiArrowRightCircleFill />
                    </div>
                    <div>
                        {item.title && <h4 className={styles.listTitle}>{item.title}</h4>}
                        {item.desc && <p className="mb-0">{item.desc}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function TabLayout({ tabs }) {
    return (
        <section className={styles.tabLayoutSection}>
            <div className="container">
                <ul
                    className={`nav nav-tabs ${styles.customTabs}`}
                    id="myTab"
                    role="tablist"
                >
                    {tabs.map((tab, index) => (
                        <li className="nav-item" role="presentation" key={index}>
                            <button
                                className={`nav-link ${index === 0 ? "active" : ""} ${styles.customTabLink}`}
                                id={`${tab.id}-tab`}
                                data-bs-toggle="tab"
                                data-bs-target={`#${tab.id}`}
                                type="button"
                                role="tab"
                                aria-controls={tab.id}
                                aria-selected={index === 0 ? "true" : "false"}
                            >
                                {tab.tabTitle}
                            </button>
                        </li>
                    ))}
                </ul>

                <div
                    className={`tab-content mt-4 ${styles.customTabContent}`}
                    id="myTabContent"
                >
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            className={`tab-pane fade ${index === 0 ? "show active" : ""} ${styles.tabPane}`}
                            id={tab.id}
                            role="tabpanel"
                            aria-labelledby={`${tab.id}-tab`}
                        >
                            <div className="row">
                                <div className={`col-md-5 text-center ${styles.imageCol}`}>
                                    <div className={styles.tabImageWrapper}>
                                        <img
                                            src={tab.image}
                                            alt={tab.tabTitle}
                                            className={`img-fluid ${styles.tabImage}`}
                                        />
                                    </div>
                                </div>
                                <div className={`col-md-7 ${styles.textCol}`}>
                                    <h3 className={styles.tabHeading}>{tab.heading}</h3>
                                    {tab.description && <p>{tab.description}</p>}
                                    {tab.items && <CustomList items={tab.items} />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { useEffect } from "react";
import styles from "./SolutionsPage.module.css";

export default function TabsWithActive({ solutions }) {
    const formatSlug = (str) =>
        str?.toString().toLowerCase().replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "");                                                                                                                                                                                                                                                     
    useEffect(() => {
        const sections = document.querySelectorAll(`.${styles.solutionWrapper}`);
        const tabs = document.querySelectorAll(`.${styles.tab}`);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.getAttribute("id");
                    const tab = Array.from(tabs).find((t) => t.getAttribute("href") === `#${id}`);

                    if (entry.isIntersecting) {
                        tabs.forEach((t) => t.classList.remove(styles.active));
                        tab?.classList.add(styles.active); 
                    }
                });
            }
        );

        sections.forEach((sec) => observer.observe(sec));

        return () => observer.disconnect(); 
    }, []);

    return (
        <div className={styles.tabsList}>
            {solutions.map((solution) => {
                const slug = formatSlug(solution.solutionName);
                const thumbUrl =
                    solution.thumbnail?.url || solution.solutionBannerImage?.url || "";
                const altText =
                    solution.thumbnail?.alternativeText ||
                    solution.solutionBannerImage?.alternativeText ||
                    "";

                return (
                    <a
                        key={solution.id}
                        href={`#${slug}`}
                        className={`${styles.tab} d-flex align-items-center justify-content-center gap-2`}
                    >
                        {thumbUrl && (
                            <img
                                src={`${process.env.NEXT_PUBLIC_STRAPI_ASSETS_BASE_URL}${thumbUrl}`}
                                alt={altText}
                                className={`img-fluid ${styles.tabThumbnail}`}
                                loading="lazy"
                            />
                        )}
                        <span>{solution.solutionName}</span>
                    </a>
                );
            })}
        </div>
    );
}

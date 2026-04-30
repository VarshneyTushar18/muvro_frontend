"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./SolutionsPage.module.css";

export default function TabsWithActive({ solutions }) {
    const formatSlug = (str) =>
        str
            ?.toString()
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "");

    const tabs = useMemo(
        () =>
            solutions.map((solution) => ({
                ...solution,
                slug: formatSlug(solution.solutionName),
            })),
        [solutions]
    );

    const [activeSlug, setActiveSlug] = useState(tabs[0]?.slug || "");

    useEffect(() => {
        if (!tabs.length) return;

        setActiveSlug((currentSlug) => currentSlug || tabs[0].slug);

        const sections = tabs
            .map(({ slug }) => document.getElementById(slug))
            .filter(Boolean);

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visibleEntry?.target.id) {
                    setActiveSlug(visibleEntry.target.id);
                }
            },
            {
                root: null,
                rootMargin: "-30% 0px -55% 0px",
                threshold: [0, 0.25, 0.5, 0.75, 1],
            }
        );

        sections.forEach((sec) => observer.observe(sec));

        return () => observer.disconnect();
    }, [tabs]);

    return (
        <div className={styles.tabsList}>
            {tabs.map((solution) => {
                const { slug } = solution;
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
                        onClick={() => setActiveSlug(slug)}
                        className={`${styles.tab} ${activeSlug === slug ? styles.active : ""} d-flex align-items-center justify-content-center gap-2`}
                        aria-current={activeSlug === slug ? "true" : undefined}
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

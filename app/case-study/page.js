import Link from "next/link";
import { RiArrowRightUpLine } from "@remixicon/react";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import styles from "./CaseStudyPage.module.css";

const frontendBaseUrl =
    process.env.NEXT_PUBLIC_FRONTEND_BASE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata = {
    title: "Case Studies | MUVRO Automation Success Stories",
    description:
        "Explore MUVRO case studies showing warehouse automation, intralogistics, and material handling projects delivered for real operations.",
    alternates: {
        canonical: frontendBaseUrl + "/case-study",
    },
};

async function getCaseStudies() {
    try {
        const res = await fetch(
            `${process.env.STRAPI_BACKEND_BASE_URL}/case-studies?populate=*&pagination[pageSize]=24&sort[0]=publishedAt:desc`,
            { next: { revalidate: 60 } }
        );

        if (!res.ok) {
            console.error("Failed to fetch case studies:", res.status);
            return [];
        }

        const data = await res.json();
        return data?.data || [];
    } catch (error) {
        console.error("getCaseStudies error:", error);
        return [];
    }
}

const getImageUrl = (image) => {
    if (!image?.url) return "/images/case-study-1.png";
    if (image.url.startsWith("http")) return image.url;
    return `${process.env.STRAPI_ASSETS_BASE_URL}${image.url}`;
};

export default async function CaseStudyPage() {
    const caseStudies = await getCaseStudies();
    const visibleCaseStudies = caseStudies.filter((item) => item.slug);
    const crumbs = [
        { label: "Home", link: "/" },
        { label: "Case Study" },
    ];

    return (
        <>
            <BreadcrumbStrip crumbs={crumbs} />

            <section className={styles.wrapper}>
                <div className="container">
                    <div className={styles.intro}>
                        <span className="section-label-center mb-3">Our Case Study</span>
                        <h2 className="text-center mb-3">
                            Automation <span>Success Stories</span>
                        </h2>
                        <p className="text-center">
                            Explore real project outcomes, operational improvements, and customer results delivered by MUVRO automation systems.
                        </p>
                    </div>

                    {visibleCaseStudies.length > 0 ? (
                        <div className={styles.grid}>
                            {visibleCaseStudies.map((item) => (
                                <Link
                                    href={`/case-study/${item.slug}`}
                                    className={styles.card}
                                    key={item.id || item.slug}
                                >
                                    <div className={styles.imageWrapper}>
                                        <img
                                            src={getImageUrl(item.banner)}
                                            alt={item.banner?.alternativeText || item.title || "Case study"}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className={styles.content}>
                                        <div className={styles.meta}>
                                            {/* {item.projectName && <span>{item.projectName}</span>} */}
                                            {item.projectYear && <span>{item.projectYear}</span>}
                                        </div>
                                        <h3 className={styles.title}>{item.title}</h3>
                                        {item.shortDescription && (
                                            <p className={styles.description}>{item.shortDescription}</p>
                                        )}
                                        <div className={styles.footer}>
                                            <span>View Case Study</span>
                                            <RiArrowRightUpLine />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className={styles.empty}>Case studies will be available soon.</p>
                    )}
                </div>
            </section>
        </>
    );
}

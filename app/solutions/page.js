import { notFound } from "next/navigation";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import styles from "./SolutionsPage.module.css";
import { RiArrowRightUpLine } from "@remixicon/react";
import TabsWithActive from "./TabsWithActive";


const frontendBaseUrl = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata = {
    title: "Solutions | MUVRO Warehouse Automation & Intralogistics Systems",
    description:
        "Explore MUVRO’s innovative automation solutions designed to optimize warehouse performance — from tilt tray sorters and conveyors to smart intralogistics systems that enhance speed, accuracy, and scalability across operations.",
    keywords: [
        "MUVRO solutions",
        "warehouse automation solutions",
        "intralogistics systems",
        "tilt tray sorter",
        "conveyor systems",
        "sortation technology",
        "e-commerce logistics",
        "distribution center automation",
        "warehouse management",
        "logistics optimization",
    ],
    authors: [{ name: "MUVRO", url: frontendBaseUrl }],
    creator: "MUVRO",
    publisher: "MUVRO",
    metadataBase: new URL(frontendBaseUrl),
    openGraph: {
        title: "MUVRO Solutions | Smart Warehouse & Logistics Automation",
        description:
            "Discover MUVRO’s comprehensive range of automation solutions — engineered to streamline material flow, reduce costs, and deliver unmatched efficiency in logistics and fulfillment operations.",
        url: frontendBaseUrl + "/solutions",
        siteName: "MUVRO",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "MUVRO Solutions | Smart Warehouse & Logistics Automation",
        description:
            "Explore MUVRO’s intelligent automation and intralogistics solutions built for speed, accuracy, and scalability in modern warehouse operations.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: frontendBaseUrl + "/solutions",
    },
};

async function getSolutions() {
    const res = await fetch(
        `${process.env.STRAPI_BACKEND_BASE_URL}/solution-page?populate=*`,
        { next: { revalidate: 60 } }
    );

    if (!res.ok) {
        console.error("Fetch failed:", res.status);
        return null;
    }

    const data = await res.json();

    
    return data?.data;
}

function ProductsModal({ item, modalId }) {
    return (
        <div
            className="modal fade"
            id={modalId}
            tabIndex="-1"
            aria-labelledby={`${modalId}Label`}
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`${modalId}Label`}>
                            {item.itemTitle} Products
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="modal-body">
                        <div className={styles.productGrid}>
                            {item.product_pages.map((prod) => {
                                const imageUrl = prod.transparentImage?.url
                                    ? `${process.env.STRAPI_ASSETS_BASE_URL}${prod.transparentImage.url}`
                                    : "";

                                return (
                                    <div className={styles.productCard} key={prod.id}>
                                        <div className={styles.productCardImage}>
                                            <a href={`/${prod.slug}`} className="text-center">
                                                {imageUrl && (
                                                    <img src={imageUrl} alt={prod.productName} loading="lazy" />
                                                )}
                                            </a>
                                        </div>
                                        <div className={styles.productCardText}>
                                            <p className={styles.productName}>{prod.productName}</p>
                                            <div className={styles.productFooter}>
                                                <p className={styles.productSubtitle}>{prod.tagline}</p>
                                                <a href={`/${prod.slug}`} className={styles.arrow}>
                                                    <RiArrowRightUpLine />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default async function SolutionsPage() {
    const pageData = await getSolutions();
    if (!pageData) return notFound();

    const { sectionHeader, solution: solutions = [] } = pageData;

    if (!sectionHeader) {
        return notFound();
    }

    const crumbs = [
        { label: "Home", link: "/" },
        { label: "Solutions" },
    ];

    const formatSlug = (str) =>
        str
            ?.toString()
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "");

    return (
        <>
            <BreadcrumbStrip crumbs={crumbs} />

            <section className="container">
                <div className={styles.wrapper}>
                    <span className="section-label-center">{sectionHeader.label}</span>
                    <h2
                        className="text-center mb-3"
                        dangerouslySetInnerHTML={{
                            __html: sectionHeader.heading.replace(/\[(.*?)\]/g, "<span>$1</span>"),
                        }}
                    />
                    {sectionHeader.description && (
                        <p className="text-center">{sectionHeader.description}</p>
                    )}
                </div>

                <TabsWithActive solutions={solutions} />


                {solutions.map((solution, index) => {
                    const bannerUrl =
                        solution.solutionBannerImage?.url &&
                        `${process.env.STRAPI_ASSETS_BASE_URL}${solution.solutionBannerImage.url}`;
                    const bannerAlt = solution.solutionBannerImage?.alternativeText ?? "Banner";
                    const bannerName =
                        solution.solutionBannerName || solution.solutionName;
                    const slug = formatSlug(solution.solutionName);

                    return (
                        <div key={index} id={slug} className={styles.solutionWrapper}>
                            <div className={styles.bannerWrapper}>
                                {/* {bannerUrl && (
                                    <img
                                        src={bannerUrl}
                                        alt={bannerAlt}
                                        className={`${styles.banner} img-fluid`}
                                        loading="lazy"
                                    />
                                )}
                                <div
                                    className={`${styles.bannerShape} ${index % 2 === 0 ? "shape-left" : "shape-right"
                                        }`}
                                >
                                    <span>{bannerName}</span>
                                </div> */}
                                <h3 className="text-center">{bannerName}</h3>
                            </div>

                            <div className="position-relative">
                                {solution.solutionItem.map((item, i) => {
                                    const isEven = i % 2 === 0;

                                    return (
                                        <div
                                            key={i}
                                            id={`solution-${item.itemTitle?.replace(/\s+/g, "-").toLowerCase()}`}
                                            className={`${styles.solution} row align-items-center mb-5 mx-0`}
                                        >
                                            <div
                                                className={`${styles.imageWrapper} col-md-6 ${isEven ? "order-md-1" : "order-md-2"
                                                    }`}
                                            >
                                                {item.itemImage?.url && (
                                                    <img
                                                        src={`${process.env.STRAPI_ASSETS_BASE_URL}${item.itemImage.url}`}
                                                        alt={item.itemTitle}
                                                        className="img-fluid"
                                                        loading="lazy"
                                                    />
                                                )}
                                            </div>

                                            <div
                                                className={`${styles.contentWrapper} col-md-6 d-flex flex-column justify-content-center align-items-start ${isEven ? "order-md-2" : "order-md-1"
                                                    }`}
                                            >
                                                <h3 className={styles.title}>{item.itemTitle}</h3>
                                                <p>{item.itemDescription}</p>

                                                {item.hasMultipleProduct && item.product_pages?.length > 0 ? (
                                                    <button
                                                        type="button"
                                                        className="mbtn mbtn-primary"
                                                        data-bs-toggle="modal"
                                                        data-bs-target={`#productsModal-${index}-${i}`}
                                                    >
                                                        Explore Now
                                                    </button>
                                                ) : item.product_page?.slug ? (
                                                    <a
                                                        href={`/${item.product_page.slug}`}
                                                        className="mbtn mbtn-primary"
                                                    >
                                                        Explore Now
                                                    </a>
                                                ) : null}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </section>
            {/* All Modals */}
            {solutions.flatMap((solution, index) =>
                solution.solutionItem.map(
                    (item, i) =>
                        item.hasMultipleProduct &&
                        item.product_pages?.length > 0 && (
                            <ProductsModal
                                key={`modal-${index}-${i}`}
                                item={item}
                                modalId={`productsModal-${index}-${i}`}
                            />
                        )
                )
            )}
        </>
    );
}

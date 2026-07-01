
import { RiDoubleQuotesL, RiDoubleQuotesR } from "@remixicon/react";
import CTABanner from "../../components/cta/CTABanner";
import BreadcrumbStrip from "../../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import Style from "./singlecasestudy.module.css";
import { notFound } from "next/navigation";
import { renderBlock } from "blocks-html-renderer";

const getImageUrl = (image) => {
    if (!image?.url) return "/images/case-study-1.png";
    if (image.url.startsWith("http")) return image.url;
    return `${process.env.STRAPI_ASSETS_BASE_URL}${image.url}`;
};

async function fetchSlugs() {
    try {
        const url = `${process.env.STRAPI_BACKEND_BASE_URL}/case-studies?fields[0]=slug`;
        console.log("Fetching slugs from:", url);
        
        const res = await fetch(url, { next: { revalidate: 60 } });
        if (!res.ok) {
            console.error("Slugs API Error:", res.status, res.statusText);
            throw new Error("Failed to fetch case studies slugs");
        }
        const data = await res.json();
        console.log("Slugs fetched:", data.data.length, "case studies");
        return data.data.map((item) => item.slug).filter(Boolean);
    } catch (error) {
        console.error("fetchSlugs error:", error);
        return [];
    }
}
export async function generateStaticParams() {
    const slugs = await fetchSlugs();
    return slugs.map((slug) => ({ slug }));
}

async function getCaseStudy(slug) {
    try {
        const url = `${process.env.STRAPI_BACKEND_BASE_URL}/case-studies?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`;
        console.log("Fetching from:", url);
        
        const res = await fetch(url, { next: { revalidate: 60 } });
        
        if (!res.ok) {
            console.error("API Error:", res.status, res.statusText);
            throw new Error(`Failed to fetch case study details: ${res.status}`);
        }

        const data = await res.json();
        console.log("API Response:", data);
        
        return data.data && data.data.length > 0 ? data.data[0] : null;
    } catch (error) {
        console.error("getCaseStudy error:", error);
        throw error;
    }
}

export async function generateMetadata({ params }) {
    const { slug } = params;
    const pageData = await getCaseStudy(slug);

    if (!pageData) {
        return {
            title: "Case Study Not Found | MUVRO",
            description: "The requested case study could not be found.",
        };
    }

    const frontendBaseUrl =
        process.env.NEXT_PUBLIC_FRONTEND_BASE_URL ||
        (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

    return {
        title: `${pageData.title} | Case Study | MUVRO`,
        description:
            pageData.shortDescription ||
            "Explore a MUVRO case study covering real automation outcomes and operational results.",
        alternates: {
            canonical: `${frontendBaseUrl}/case-study/${pageData.slug || slug}`,
        },
    };
}

export default async function CaseStudy({ params }) {
    const { slug } = params;
    const pageData = await getCaseStudy(slug);
    if (!pageData) return notFound();
    const bannerUrl = getImageUrl(pageData.banner);
    const hasFeedback = Boolean(pageData.feedbackAuthor && pageData.feedback);
    const hasContent = Boolean(pageData.content);

    const crumbs = [
        { label: "Home", link: "/" },
        { label: "Case Study" },
    ];

    return (
        <>
            <BreadcrumbStrip crumbs={crumbs} />
            <section className={Style.case_study}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={Style.main_banner}>
                                <img
                                    src={bannerUrl}
                                    alt={pageData.banner?.alternativeText ?? pageData.title ?? "Case study"}
                                />
                            </div>
                            <div className={Style.project_details}>
                                {pageData.projectName && (
                                    <div className={Style.projectname}>
                                        <h2>{pageData.projectName}</h2>
                                    </div>
                                )}
                                {pageData.projectYear && (
                                    <div className={Style.projectyear}>
                                        <h2>{pageData.projectYear}</h2>
                                    </div>
                                )}
                            </div>
                            <div className={Style.project_overview}>
                                <div className={Style.title}>
                                    <h1>{pageData.title || "Case Study"}</h1>
                                </div>
                                <div className={Style.description}>
                                    {pageData.shortDescription && <p>{pageData.shortDescription}</p>}
                                </div>
                            </div>
                            {hasFeedback && (
                                <div className={Style.project_testimonial}>
                                    <div className={Style.left_quote}>
                                        <RiDoubleQuotesL />
                                    </div>
                                    <div
                                        className={Style.testimonial_text}
                                        dangerouslySetInnerHTML={{ __html: renderBlock(pageData.feedback) }}
                                    />
                                    <div className={Style.author}>{pageData.feedbackAuthor}</div>
                                    <div className={Style.right_quote}>
                                        <RiDoubleQuotesR />
                                    </div>
                                </div>
                            )}
                            {hasContent && (
                                <div
                                    className={Style.project_conclusion}
                                    dangerouslySetInnerHTML={{ __html: renderBlock(pageData.content) }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <CTABanner content={pageData.ctaSection} />
        </>

    );
}
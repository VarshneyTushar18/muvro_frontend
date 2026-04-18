
import { RiDoubleQuotesL, RiDoubleQuotesR } from "@remixicon/react";
import CTABanner from "../../components/cta/CTABanner";
import BreadcrumbStrip from "../../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import Style from "./singlecasestudy.module.css";
import { notFound } from "next/navigation";
import { renderBlock } from "blocks-html-renderer";

async function fetchSlugs() {
    const res = await fetch(
        `${process.env.STRAPI_BACKEND_BASE_URL}/case-studies?fields[0]=slug`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch case studies slugs");
    }
    const data = await res.json();
    return data.data.map((item) => item.slug);
}
export async function generateStaticParams() {
    const slugs = await fetchSlugs();
    return slugs.map((slug) => ({ slug }));
}

async function getCaseStudy(slug) {
    console.log(slug);
    const res = await fetch(`${process.env.STRAPI_BACKEND_BASE_URL}/case-studies?filters[slug][$eq]=${slug}&populate=*`,
        { next: { revalidate: 60 } }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch case study details");
    }

    const data = await res.json();
    return data.data.length > 0 ? data.data[0] : null;
}

export default async function CaseStudy({ params }) {
    const { slug } = await params;
    const pageData = await getCaseStudy(slug);
    if (!pageData) return notFound();
    const crumbs = [
        { label: "Home" },
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
                                <img src={process.env.STRAPI_ASSETS_BASE_URL + pageData.banner?.url} alt={pageData.banner?.alternativeText ?? pageData.title} />
                            </div>
                            <div className={Style.project_details}>
                                <div className={Style.projectname}>
                                    <h2>{pageData.projectName}</h2>
                                </div>
                                <div className={Style.projectyear}>
                                    <h2>{pageData.projectYear}</h2>
                                </div>
                            </div>
                            <div className={Style.project_overview}>
                                <div className={Style.title}>
                                    <h1>{pageData.title}</h1>
                                </div>
                                <div className={Style.description}>
                                    <p>{pageData.shortDescription}</p>
                                </div>
                            </div>
                            {pageData.feedbackAuthor && pageData.feedback && (
                                <div className={Style.project_testimonial}>
                                    <div className={Style.left_quote}>
                                        <RiDoubleQuotesL />
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: renderBlock(pageData.feedback) }} />
                                    <div className={Style.author}>{pageData.feedbackAuthor}</div>
                                    <div className={Style.right_quote}>
                                        <RiDoubleQuotesR />
                                    </div>
                                </div>
                            )}


                            <div className={Style.project_conclusion} dangerouslySetInnerHTML={{ __html: renderBlock(pageData.content) }} />
                        </div>
                    </div>
                </div>
            </section>
            <CTABanner content={pageData.ctaSection} />
        </>

    );
}
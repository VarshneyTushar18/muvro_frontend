import { notFound } from "next/navigation";
import { renderBlock } from "blocks-html-renderer";
import CaseStudySingleView from "../../casestudysingle/CaseStudySingleView";
import { mapStrapiPageSections } from "../../casestudysingle/mapStrapiSections";
import { defaultCtaContent } from "../../casestudysingle/defaultSections";

const getImageUrl = (image) => {
    if (!image?.url) return "/images/case-study-1.png";
    if (image.url.startsWith("http")) return image.url;
    return `${process.env.STRAPI_ASSETS_BASE_URL}${image.url}`;
};

async function fetchSlugs() {
    try {
        const url = `${process.env.STRAPI_BACKEND_BASE_URL}/case-studies?fields[0]=slug`;
        const res = await fetch(url, { next: { revalidate: 60 } });

        if (!res.ok) {
            throw new Error("Failed to fetch case studies slugs");
        }

        const data = await res.json();
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
        const res = await fetch(url, { next: { revalidate: 60 } });

        if (!res.ok) {
            console.error("getCaseStudy API error:", res.status, await res.text());
            return null;
        }

        const data = await res.json();
        return data.data && data.data.length > 0 ? data.data[0] : null;
    } catch (error) {
        console.error("getCaseStudy error:", error);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
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
        title: pageData.seo?.metaTitle || `${pageData.title} | Case Study | MUVRO`,
        description:
            pageData.seo?.metaDescription ||
            pageData.shortDescription ||
            "Explore a MUVRO case study covering real automation outcomes and operational results.",
        alternates: {
            canonical: `${frontendBaseUrl}/case-study/${pageData.slug || slug}`,
        },
    };
}

export default async function CaseStudy({ params }) {
    const { slug } = await params;
    const pageData = await getCaseStudy(slug);

    if (!pageData) return notFound();

    const bannerUrl = getImageUrl(pageData.banner);
    const sections = mapStrapiPageSections(pageData.pageSections);
    const contentHtml = pageData.content ? renderBlock(pageData.content) : "";
    const feedbackHtml =
        pageData.feedback && pageData.feedbackAuthor ? renderBlock(pageData.feedback) : "";

    return (
        <CaseStudySingleView
            caseStudy={pageData}
            bannerUrl={bannerUrl}
            sections={sections}
            contentHtml={contentHtml}
            feedbackHtml={feedbackHtml}
            ctaContent={pageData.ctaSection || defaultCtaContent}
        />
    );
}

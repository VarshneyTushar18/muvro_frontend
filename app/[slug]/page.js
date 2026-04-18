import CTABanner from "../components/cta/CTABanner";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import Banner from "../ui/product-single/Banner/Banner";
import ChuteConfigurations from "../ui/product-single/chute_configurations/ChuteConfigurations";
import IndustriesApplications from "../ui/product-single/industries_applications/IndustriesApplications";
import ProductIntegration from "../ui/product-single/integration/ProductIntegration";
import Intro from "../ui/product-single/Intro/Intro";
import KeyFeatures from "../ui/product-single/KeyFeatures/KeyFeatures";
import SupportedTypes from "../ui/product-single/supported_type/SupportedType";
import SystemDetails from "../ui/product-single/SystemDetails/SystemDetails";
import VideoSection from "../ui/product-single/VideoSection/VideoSection";
import WhyChoose from "../ui/product-single/WhyChoose/WhyChoose";
import TabLayout from "../ui/product-single/TabLayout/TabLayout";
import Workflow from "../ui/product-single/Workflow/Workflow";
import ProductGallery from "../ui/product-single/ProductGallery/ProductGallery";
import ConfigurationOptionsWithGallery from "../ui/product-single/ConfigurationOptionsWithGallery/ConfigurationOptionsWithGallery";
import KeyComponents from "../ui/product-single/KeyComponents/KeyComponents";
import TechnicalSpecifications from "../ui/product-single/TechnicalSpecifications/TechnicalSpecifications";
import { notFound } from 'next/navigation';
import React from "react";
async function fetchSlugs() {
    const res = await fetch(
        `${process.env.STRAPI_BACKEND_BASE_URL}/products?fields[0]=slug`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch product slugs");
    }
    const data = await res.json();
    return data.data.map((item) => item.slug);
}

async function getProduct(slug) {
    const res = await fetch(
        `${process.env.STRAPI_BACKEND_BASE_URL}/products?filters[slug][$eq]=${slug}&populate=*`
        ,
        { next: { revalidate: 60 } }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch product');
    }

    const data = await res.json();
    return data.data[0];
}

export async function generateStaticParams() {
    const slugs = await fetchSlugs();
    return slugs.map((slug) => ({ slug }));
}


export default async function ProductSinglePage({ params }) {
    const { slug } = await params;
    const product = await getProduct(slug);

    if (!product) {
        return notFound();
    }

    const crumbs = [
        { label: "Home", link: "/" },
        { label: product.productName },
    ];

    const renderSection = (section, isRepeated = false) => {
        if (!section) return null;

        switch (section.__component) {
            case "product-page.banner":
                return (
                    <Banner
                        desktopBanner={section.DesktopImage?.url ? `${process.env.STRAPI_ASSETS_BASE_URL}${section.DesktopImage.url}` : null}
                        tabletBanner={section.TabletImage?.url ? `${process.env.STRAPI_ASSETS_BASE_URL}${section.TabletImage.url}` : null}
                        mobileBanner={section.MobileImage?.url ? `${process.env.STRAPI_ASSETS_BASE_URL}${section.MobileImage.url}` : null}
                        alt={section.DesktopImage?.alternativeText || "Product Banner"}
                        loading="eager"
                    />
                );

            case "product-page.introduction":
                return (
                    <>
                        <Intro section={section} />
                        {section.youtubeURL && <VideoSection videoUrl={section.youtubeURL} title="Product Video" />}
                    </>
                );


            case "product-page.key-features":
                return (
                    <KeyFeatures
                        heading={section.sectionHeader.heading}
                        features={section.features.map((f) => ({ title: f.title, desc: f.description }))}
                    />
                );

            case "product-page.system-details":
                return (
                    <SystemDetails
                        subheading={section.sectionHeader.label}
                        heading={section.sectionHeader.heading}
                        image={section.image?.url ? `${process.env.STRAPI_ASSETS_BASE_URL}${section.image.url}` : null}
                        content={section.content}
                        title={section.heading}
                    />
                );

            case "product-page.why-choose-us":
                return (
                    <WhyChoose
                        subheading={section.sectionHeader.label}
                        heading={section.sectionHeader.heading.replace(/\[([^\]]+)\]/g, "<span>$1</span>")}
                        description={section.sectionHeader.description}
                        items={section.items.map((item) => ({ title: item.title, desc: item.description }))}
                    />
                );

            case "product-page.workflow":
                return <Workflow sectionData={section} />;

            case "product-page.configure-options":
                return (
                    <ConfigurationOptionsWithGallery
                        sectionData={{
                            label: section.sectionHeader?.label || "",
                            heading: (section.sectionHeader?.heading || "").replace(/\[(.*?)\]/g, "<span>$1</span>"),
                            htmlContent: section.sectionHeader?.description || "",
                            image: section.image?.url ? `${process.env.STRAPI_ASSETS_BASE_URL}${section.image.url}` : null,
                            lists: section.configureItems?.map((item) => ({
                                title: item.title,
                                items: item.configureItemsTexts?.map((txt) => txt.text) || [],
                            })) || [],
                            images: section.slider?.map((img) => ({
                                src: img.url ? `${process.env.STRAPI_ASSETS_BASE_URL}${img.url}` : "",
                                alt: img.alternativeText || img.name || "Slider Image",
                            })) || [],
                            repeated: isRepeated,
                        }}
                    />
                );

            case "product-page.tab-layout":
                return (
                    <TabLayout
                        tabs={section.tabs?.map((tab, index) => ({
                            id: `tab-${index}`,
                            tabTitle: tab.tabName,
                            heading: tab.tabContentHeading || tab.tabName,
                            description: tab.tabContentDescription || "",
                            image: tab.image?.url ? `${process.env.STRAPI_ASSETS_BASE_URL}${tab.image.url}` : null,
                            items: tab.tabContentList?.map((item) => ({ title: item.heading, desc: item.description })),
                        })) || []}
                    />
                );

            case "product-page.system-specifications":
                return (
                    <ProductIntegration
                        subtitle={section.sectionHeader.label}
                        title={section.sectionHeader.heading}
                        specifications={section.specifications || []}
                    />
                );

            case "product-page.industry-applications":
                return (
                    <IndustriesApplications
                        subtitle={section.sectionHeader.label}
                        title={section.sectionHeader.heading}
                        applications={section.applications.map((app) => ({ heading: app.title, description: app.description }))}
                    />
                );

            case "product-page.system-versatility":
                return (
                    <SupportedTypes
                        title={section.sectionHeader.heading}
                        types={section.items.map((item) => ({
                            heading: item.heading,
                            description: item.description,
                            image: item.image?.url ? `${process.env.STRAPI_ASSETS_BASE_URL}${item.image.url}` : '',
                        }))}
                    />
                );

            case "product-page.available-designs":
                return <ChuteConfigurations section={section} />;

            case "product-page.technical-specifications":
                return (
                    <TechnicalSpecifications
                        sectionData={{
                            label: section.sectionHeader.label,
                            heading: section.sectionHeader.heading.replace(/\[([^\]]+)\]/g, "<span>$1</span>"),
                            description: section.sectionHeader.description,
                            specs: section.item.map((s) => ({
                                title: s.heading,
                                items: s.specifications.map((spec) => ({ label: spec.title, value: spec.specification })),
                            })),
                        }}
                    />
                );

            case "product-page.key-components":
                return (
                    <KeyComponents
                        subtitle={section.sectionHeader.label}
                        title={section.sectionHeader.heading}
                        desc={section.sectionHeader.description}
                        components={section.components.map((c) => ({
                            image: c.image?.url ? `${process.env.STRAPI_ASSETS_BASE_URL}${c.image.url}` : '',
                            title: c.title,
                            desc: c.description,
                        }))}
                    />
                );

            case "product-page.product-gallery":
                return <ProductGallery section={section} />;

            case "product-page.cta":
                return <CTABanner content={section} />;

            default:
                return null; // unknown section type
        }
    };
    const hasCTA = product.pageSections?.some(
        (section) => section.__component === "product-page.cta"
    );

    return (
        <>

            {product.pageSections?.map((section, index) => {
                const isRepeated =
                    section.__component === "product-page.configure-options" &&
                    index > 0 &&
                    product.pageSections[index - 1].__component === "product-page.configure-options";
                return (
                    <React.Fragment key={section.id}>
                        {renderSection(section, isRepeated)}

                        {section.__component === "product-page.banner" && (
                            <BreadcrumbStrip crumbs={crumbs} />
                        )}
                    </React.Fragment>
                );
            })}
            {!hasCTA && (
                <CTABanner
                    content={{
                        title: "Get in Touch with Our Experts",
                        description:
                            "Connect with our automation specialists to discover efficient, reliable, and cost-effective material handling and warehouse solutions tailored to your business needs.",
                        queryText: "Call Us Today",
                        phoneNumber: "+91 (0) 9289 071 715",
                    }}
                />
            )}

        </>

    );
}

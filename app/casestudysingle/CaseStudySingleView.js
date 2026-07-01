import Link from "next/link";
import { RiArrowRightLine, RiCheckboxCircleLine, RiDoubleQuotesL, RiDoubleQuotesR } from "@remixicon/react";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import CTABanner from "../components/cta/CTABanner";
import ContentSlider from "./ContentSlider";
import styles from "./style.module.css";

function formatHeading(text = "") {
    return text.replace(/\[(.*?)\]/g, "<span>$1</span>");
}

function getBreadcrumbLabel(caseStudy) {
    if (caseStudy.projectName) {
        return caseStudy.projectName.replace(/^Project Name:\s*/i, "").trim();
    }

    return (caseStudy.title || "Case Study").split("–")[0].split("-")[0].trim();
}

function SectionHeader({ header, intro }) {
    if (!header?.label && !header?.heading && !intro) return null;

    return (
        <div className={styles.sectionHeader} data-aos="fade-up">
            {header?.label && <span className="section-label-center mb-3">{header.label}</span>}
            {header?.heading && (
                <h2
                    dangerouslySetInnerHTML={{
                        __html: formatHeading(header.heading),
                    }}
                />
            )}
            {intro && <p>{intro}</p>}
        </div>
    );
}

function hasSectionContent(sections) {
    if (!sections) return false;

    return Boolean(
        sections.stats?.length ||
        sections.introParagraphs?.length ||
        sections.objectives?.length ||
        sections.challenges?.length ||
        sections.solutions?.length ||
        sections.performance?.length ||
        sections.benefits?.length ||
        sections.deployment?.length ||
        sections.contentSliderSections?.length ||
        sections.conclusionText
    );
}

export default function CaseStudySingleView({
    caseStudy,
    bannerUrl,
    sections,
    contentHtml,
    feedbackHtml,
    ctaContent,
}) {
    const breadcrumbLabel = getBreadcrumbLabel(caseStudy);
    const crumbs = [
        { label: "Home", link: "/" },
        { label: "Case Study", link: "/case-study" },
        { label: breadcrumbLabel },
    ];

    const hasStructuredSections = hasSectionContent(sections);
    const hasFeedback = Boolean(feedbackHtml && caseStudy.feedbackAuthor);
    const hasDynamicContent = Boolean(contentHtml) && !hasStructuredSections;

    return (
        <>
            <BreadcrumbStrip crumbs={crumbs} />

            <div className={styles.page}>
                <div className={styles.hero} data-aos="fade-in">
                    <img
                        src={bannerUrl}
                        alt={caseStudy.banner?.alternativeText ?? caseStudy.title ?? "Case study"}
                        className={styles.heroImageStatic}
                    />
                    <div className={styles.heroOverlay}>
                        <div className="container">
                            <div className={styles.heroContent} data-aos="fade-up" data-aos-delay="200">
                                <span className={styles.heroTag}>
                                    {caseStudy.projectYear
                                        ? caseStudy.projectYear.replace(/^Project Year:\s*/i, "").trim()
                                        : "Case Study"}
                                </span>
                                <h1
                                    className={styles.heroTitle}
                                    dangerouslySetInnerHTML={{
                                        __html: formatHeading(caseStudy.title || "Case Study"),
                                    }}
                                />
                                {caseStudy.shortDescription && (
                                    <p className={styles.heroSubtitle}>{caseStudy.shortDescription}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {hasStructuredSections && (
                    <div className={styles.statsBar}>
                        <div className="container">
                            <div className={styles.statsGrid}>
                                {sections.stats.map((stat, i) => (
                                    <div
                                        key={stat.label}
                                        className={styles.statItem}
                                        data-aos="fade-up"
                                        data-aos-delay={i * 80}
                                    >
                                        <div className={styles.statValue}>{stat.value}</div>
                                        <div className={styles.statLabel}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {hasStructuredSections && (
                    <>
                        <section className={styles.section}>
                            <div className="container">
                                <div className={styles.introBlock}>
                                    <div className={styles.introText} data-aos="fade-right">
                                        <span className="section-label mb-3">
                                            {sections.introLabel || "01 — Project Background"}
                                        </span>
                                        {sections.introHeading && (
                                            <h2
                                                className="mb-3"
                                                dangerouslySetInnerHTML={{
                                                    __html: formatHeading(sections.introHeading),
                                                }}
                                            />
                                        )}
                                        {sections.introParagraphs.map((paragraph) => (
                                            <p key={paragraph}>{paragraph}</p>
                                        ))}
                                        {sections.productLink && (
                                            <Link
                                                href={sections.productLink}
                                                className="mbtn mbtn-small mbtn-primary d-inline-flex align-items-center gap-2 mt-2"
                                            >
                                                View Product <RiArrowRightLine size={18} />
                                            </Link>
                                        )}
                                    </div>
                                    <div className={styles.introImage} data-aos="fade-left">
                                        <img
                                            src={bannerUrl}
                                            alt={caseStudy.banner?.alternativeText ?? caseStudy.title ?? "Case study"}
                                        />
                                    </div>
                                </div>

                                {sections.objectives?.length > 0 && (
                                    <div className="mt-5 pt-4">
                                        <h4 className="text-center mb-4" data-aos="fade-up">
                                            Project <span>Objectives</span>
                                        </h4>
                                        <div className={styles.objectivesGrid}>
                                            {sections.objectives.map((obj, i) => (
                                                <div
                                                    key={obj.text}
                                                    className={styles.objectiveCard}
                                                    data-aos="fade-up"
                                                    data-aos-delay={i * 80}
                                                >
                                                    <div className={styles.objectiveIcon}>
                                                        <obj.icon />
                                                    </div>
                                                    <p className={styles.objectiveText}>{obj.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>

                        {sections.challenges?.length > 0 && (
                            <section className={`${styles.section} ${styles.sectionAlt}`}>
                                <div className="container">
                                    <SectionHeader
                                        header={sections.challengesHeader}
                                        intro={sections.challengesIntro}
                                    />
                                    <div className={styles.challengesGrid}>
                                        {sections.challenges.map((item, i) => (
                                            <div
                                                key={item.text}
                                                className={styles.challengeCard}
                                                data-aos="fade-up"
                                                data-aos-delay={i * 60}
                                            >
                                                <div className={styles.challengeIcon}>
                                                    <item.icon />
                                                </div>
                                                <p className={styles.challengeText}>{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {sections.solutions?.length > 0 && (
                            <section className={styles.section}>
                                <div className="container">
                                    <SectionHeader
                                        header={sections.solutionsHeader}
                                        intro={sections.solutionsIntro}
                                    />
                                    <div className={styles.solutionsGrid}>
                                        {sections.solutions.map((sol, i) => (
                                            <div
                                                key={sol.title}
                                                className={styles.solutionCard}
                                                data-aos="fade-up"
                                                data-aos-delay={i * 100}
                                            >
                                                <div className={styles.solutionHeader}>
                                                    <span className={styles.solutionNumber}>{sol.number}</span>
                                                    <h4 className={styles.solutionTitle}>{sol.title}</h4>
                                                </div>
                                                <div className={styles.solutionBody}>
                                                    <ul className={styles.solutionList}>
                                                        {sol.items.map((item) => (
                                                            <li key={item}>
                                                                <RiCheckboxCircleLine />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <div className={styles.solutionResult}>
                                                        <strong>Result:</strong> {sol.result}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {sections.performance?.length > 0 && (
                            <section className={`${styles.section} ${styles.sectionAlt}`}>
                                <div className="container">
                                    <SectionHeader
                                        header={sections.performanceHeader}
                                        intro={sections.performanceIntro}
                                    />
                                    <div className={styles.metricsGrid}>
                                        {sections.performance.map((metric, i) => (
                                            <div
                                                key={metric.label}
                                                className={styles.metricCard}
                                                data-aos="zoom-in"
                                                data-aos-delay={i * 80}
                                            >
                                                <div className={styles.metricIcon}>
                                                    <metric.icon />
                                                </div>
                                                <div className={styles.metricValue}>{metric.value}</div>
                                                <div className={styles.metricLabel}>{metric.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {sections.benefits?.length > 0 && (
                            <section className={styles.section}>
                                <div className="container">
                                    <SectionHeader
                                        header={sections.benefitsHeader}
                                        intro={sections.benefitsIntro}
                                    />
                                    <div className={styles.benefitsGrid}>
                                        {sections.benefits.map((benefit, i) => (
                                            <div
                                                key={benefit.title}
                                                className={styles.benefitCard}
                                                data-aos="fade-up"
                                                data-aos-delay={i * 80}
                                            >
                                                <div className={styles.benefitIcon}>
                                                    <benefit.icon />
                                                </div>
                                                <h5 className={styles.benefitTitle}>{benefit.title}</h5>
                                                <p className={styles.benefitDesc}>{benefit.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {sections.deployment?.length > 0 && (
                            <section className={`${styles.section} ${styles.sectionAlt}`}>
                                <div className="container">
                                    <SectionHeader
                                        header={sections.deploymentHeader}
                                        intro={sections.deploymentIntro}
                                    />
                                    <div className={styles.deploymentGrid}>
                                        {sections.deployment.map((step, i) => (
                                            <div
                                                key={step.text}
                                                className={styles.deployStep}
                                                data-aos="fade-up"
                                                data-aos-delay={i * 100}
                                            >
                                                <div className={styles.deployDot}>
                                                    <step.icon />
                                                </div>
                                                <p className={styles.deployText}>{step.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {sections.contentSliderSections?.map((sliderSection, i) => (
                            sliderSection.slides?.length > 0 && (
                                <section
                                    key={`slider-${i}`}
                                    className={`${styles.section} ${i % 2 === 1 ? styles.sectionAlt : ""}`}
                                >
                                    <div className="container">
                                        {(sliderSection.label || sliderSection.heading) && (
                                            <div className={styles.sectionHeader} data-aos="fade-up">
                                                {sliderSection.label && (
                                                    <span className="section-label-center mb-3">
                                                        {sliderSection.label}
                                                    </span>
                                                )}
                                                {sliderSection.heading && (
                                                    <h2
                                                        dangerouslySetInnerHTML={{
                                                            __html: formatHeading(sliderSection.heading),
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        )}
                                        <div data-aos="fade-up">
                                            <ContentSlider slides={sliderSection.slides} />
                                        </div>
                                    </div>
                                </section>
                            )
                        ))}

                        {sections.conclusionText && (
                            <section className={styles.conclusionSection}>
                                <div className="container">
                                    <div className={styles.conclusionBox} data-aos="fade-up">
                                        <span className="section-label-center mb-3">
                                            {sections.conclusionLabel || "07 — Conclusion"}
                                        </span>
                                        <h2 className="text-center mb-4">Conclusion</h2>
                                        <p className={styles.conclusionText}>{sections.conclusionText}</p>
                                    </div>
                                </div>
                            </section>
                        )}
                    </>
                )}

                {hasDynamicContent && (
                    <section className={styles.section}>
                        <div className="container">
                            <div
                                className={styles.dynamicContent}
                                dangerouslySetInnerHTML={{ __html: contentHtml }}
                            />
                        </div>
                    </section>
                )}

                {hasFeedback && (
                    <section className={`${styles.section} ${styles.sectionAlt}`}>
                        <div className="container">
                            <div className={styles.testimonialBox} data-aos="fade-up">
                                <div className={styles.testimonialQuoteLeft}>
                                    <RiDoubleQuotesL />
                                </div>
                                <div
                                    className={styles.testimonialText}
                                    dangerouslySetInnerHTML={{ __html: feedbackHtml }}
                                />
                                <div className={styles.testimonialAuthor}>{caseStudy.feedbackAuthor}</div>
                                <div className={styles.testimonialQuoteRight}>
                                    <RiDoubleQuotesR />
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>

            <CTABanner content={ctaContent} />
        </>
    );
}

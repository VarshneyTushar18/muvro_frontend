import Image from "next/image";
import Link from "next/link";
import {
    RiSpeedUpLine,
    RiTeamLine,
    RiLayoutGridLine,
    RiMoneyDollarCircleLine,
    Ri24HoursLine,
    RiBox3Line,
    RiBuilding2Line,
    RiUserSearchLine,
    RiFocus3Line,
    RiErrorWarningLine,
    RiScales3Line,
    RiRefreshLine,
    RiLayoutMasonryLine,
    RiRadarLine,
    RiCpuLine,
    RiRulerLine,
    RiGroupLine,
    RiCheckboxCircleLine,
    RiBarChartBoxLine,
    RiVolumeMuteLine,
    RiMapPinAddLine,
    RiArrowUpCircleLine,
    RiPriceTag3Line,
    RiTruckLine,
    RiTimeLine,
    RiFundsLine,
    RiTestTubeLine,
    RiRocketLine,
    RiToolsLine,
    RiShieldCheckLine,
    RiGraduationCapLine,
    RiCustomerService2Line,
    RiArrowRightLine,
} from "@remixicon/react";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import CTABanner from "../components/cta/CTABanner";
import styles from "./style.module.css";

const frontendBaseUrl =
    process.env.NEXT_PUBLIC_FRONTEND_BASE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata = {
    title: "High-Speed Cross Belt Loop Sorter Case Study | MUVRO",
    description:
        "How an e-commerce fulfillment center achieved 40,000 PPH throughput, 45% manpower reduction, and ROI within 22–26 months with MUVRO's High-Speed Cross Belt Loop Sorter.",
    alternates: {
        canonical: frontendBaseUrl + "/case-study/high-speed-cross-belt-loop-sorter",
    },
};

const stats = [
    { value: "40,000", label: "PPH Throughput" },
    { value: ">99.99%", label: "Sort Accuracy" },
    { value: "~45%", label: "Manpower Saved" },
    { value: "~28%", label: "Space Saved" },
    { value: "98.7%", label: "Availability" },
];

const objectives = [
    { icon: RiSpeedUpLine, text: "Increase throughput to 40,000 PPH" },
    { icon: RiTeamLine, text: "Reduce manpower and footprint" },
    { icon: RiLayoutGridLine, text: "Increase destination chutes without expansion" },
    { icon: RiMoneyDollarCircleLine, text: "Achieve ROI within 30 months" },
    { icon: Ri24HoursLine, text: "Deploy a stable 24/7 automated solution" },
];

const challenges = [
    { icon: RiBox3Line, text: "Irregular wide parcel range: 50 g–10 kg, polybags to cartons" },
    { icon: RiBuilding2Line, text: "Limited warehouse space and fixed building layout" },
    { icon: RiUserSearchLine, text: "Manual bottleneck — manual secondary sorting and long operator travel" },
    { icon: RiFocus3Line, text: "Requirement of 40,000 PPH with >99.5% accuracy" },
    { icon: RiErrorWarningLine, text: "Previous sorter reliability issues" },
    { icon: RiScales3Line, text: "Manual shipment profiling and weighing causing billing inaccuracies" },
    { icon: RiRefreshLine, text: "High missort rates and parcel rehandling" },
];

const solutions = [
    {
        number: "3.1",
        title: "Layout Optimization",
        items: [
            "Compact loop sorter with dual-side chute arrangement",
            "U+C hybrid layout for maximum chute density",
        ],
        result: "28% space saving and 80+ destination chutes.",
    },
    {
        number: "3.2",
        title: "Smart Induction System",
        items: [
            "Multi-stage induction with automatic gap creation",
            "Dynamic speed matching",
            "Integrated dimensioning, weighing, and barcode scanning",
            "Vision systems from SICK and Cognex",
        ],
        result: "Induction efficiency improved from 82% to 96%.",
    },
    {
        number: "3.3",
        title: "Advanced Controls",
        items: [
            "Redundant PLC and WCS architecture",
            "Real-time cart tracking and automatic recirculation",
            "OEE, chute status, and alarm monitoring",
        ],
        result: "Missort rate reduced below 0.3%.",
    },
    {
        number: "3.4",
        title: "Automated Profiling, Weighing & Billing",
        items: [
            "Automatic dimensioning and weighing replaced manual processes",
            "Improved shipment data quality and billing accuracy",
            "Automated destination allocation and recirculation",
            "Operators focused only on induction and chute management",
        ],
        result: "Sorting manpower reduced from 48 to 26 operators (~45%).",
    },
];

const performance = [
    { icon: RiSpeedUpLine, value: "40,000", label: "PPH Throughput" },
    { icon: RiCheckboxCircleLine, value: ">99.99%", label: "Sort Accuracy" },
    { icon: RiLayoutMasonryLine, value: "~28%", label: "Space Saving" },
    { icon: RiGroupLine, value: "~45%", label: "Manpower Reduction" },
    { icon: RiBarChartBoxLine, value: "98.7%", label: "System Availability" },
    { icon: RiVolumeMuteLine, value: "<72 dBA", label: "Noise Level" },
];

const benefits = [
    { icon: RiMapPinAddLine, title: "84 Destinations", desc: "Increased from 43 to 84 destination chutes" },
    { icon: RiArrowUpCircleLine, title: "2.1× Daily Capacity", desc: "Daily sorting capacity more than doubled" },
    { icon: RiPriceTag3Line, title: "~32% OPEX Reduction", desc: "Significant operational cost savings" },
    { icon: RiTruckLine, title: "Faster Turnaround", desc: "Improved truck loading and dispatch speed" },
    { icon: RiTimeLine, title: "Same-Day Dispatch", desc: "Enabled same-day order fulfillment capability" },
    { icon: RiFundsLine, title: "22–26 Month ROI", desc: "Return on investment achieved ahead of target" },
];

const deployment = [
    { icon: RiTestTubeLine, text: "FAT and live parcel testing" },
    { icon: RiRocketLine, text: "Phased ramp-up to full throughput" },
    { icon: RiToolsLine, text: "3% spare cart strategy" },
    { icon: RiShieldCheckLine, text: "Preventive maintenance program" },
    { icon: RiGraduationCapLine, text: "Operator certification and hypercare support" },
];

const ctaContent = {
    title: "Ready to Transform Your Fulfillment Center?",
    description:
        "Discover how MUVRO's High-Speed Cross Belt Loop Sorter can deliver 40,000+ PPH throughput, >99.99% accuracy, and ROI within 2 years for your operation.",
    queryText: "Having Queries? Call Us Now",
    phoneNumber: "+91-7457800130",
};

export default function CaseStudySingle() {
    const crumbs = [
        { label: "Home", link: "/" },
        { label: "Case Study", link: "/case-study" },
        { label: "Cross Belt Loop Sorter" },
    ];

    return (
        <>
            <BreadcrumbStrip crumbs={crumbs} />

            <div className={styles.page}>
                {/* Hero Banner */}
                <div className={styles.hero} data-aos="fade-in">
                    <Image
                        src="/images/high-speed-cross-belt-sorter-image.webp"
                        alt="High-Speed Cross Belt Loop Sorter"
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay}>
                        <div className="container">
                            <div className={styles.heroContent} data-aos="fade-up" data-aos-delay="200">
                                <span className={styles.heroTag}>Case Study</span>
                                <h1 className={styles.heroTitle}>
                                    High-Speed Cross Belt <span>Loop Sorter</span>
                                </h1>
                                <p className={styles.heroSubtitle}>
                                    Layout Optimization, Throughput Enhancement &amp; ROI Improvement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className={styles.statsBar}>
                    <div className="container">
                        <div className={styles.statsGrid}>
                            {stats.map((stat, i) => (
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

                {/* Project Background */}
                <section className={styles.section}>
                    <div className="container">
                        <div className={styles.introBlock}>
                            <div className={styles.introText} data-aos="fade-right">
                                <span className="section-label mb-3">01 — Project Background</span>
                                <h2 className="mb-3">
                                    From Congestion to <span>High Performance</span>
                                </h2>
                                <p>
                                    An e-commerce fulfillment center handling 15,000–20,000 parcels/hour faced
                                    increasing volumes, leading to congestion, high manpower dependency, missorts,
                                    and space limitations.
                                </p>
                                <p>
                                    A High-Speed Cross Belt Loop Sorter was selected to meet ambitious growth
                                    targets — transforming a labor-intensive operation into a highly automated
                                    fulfillment center without warehouse expansion.
                                </p>
                                <Link
                                    href="/high-speed-cross-belt-loop-sorter"
                                    className="mbtn mbtn-small mbtn-primary d-inline-flex align-items-center gap-2 mt-2"
                                >
                                    View Product <RiArrowRightLine size={18} />
                                </Link>
                            </div>
                            <div className={styles.introImage} data-aos="fade-left">
                                <img
                                    src="/images/high-speed-cross-belt-sorter-image.webp"
                                    alt="Cross Belt Loop Sorter in operation"
                                />
                            </div>
                        </div>

                        <div className="mt-5 pt-4">
                            <h4 className="text-center mb-4" data-aos="fade-up">
                                Project <span>Objectives</span>
                            </h4>
                            <div className={styles.objectivesGrid}>
                                {objectives.map((obj, i) => (
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
                    </div>
                </section>

                {/* Key Challenges */}
                <section className={`${styles.section} ${styles.sectionAlt}`}>
                    <div className="container">
                        <div className={styles.sectionHeader} data-aos="fade-up">
                            <span className="section-label-center mb-3">02 — Key Challenges</span>
                            <h2>
                                Operational <span>Bottlenecks</span>
                            </h2>
                            <p>
                                The facility faced multiple constraints that demanded a comprehensive
                                automation solution beyond conventional sorting systems.
                            </p>
                        </div>
                        <div className={styles.challengesGrid}>
                            {challenges.map((item, i) => (
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

                {/* Solutions Implemented */}
                <section className={styles.section}>
                    <div className="container">
                        <div className={styles.sectionHeader} data-aos="fade-up">
                            <span className="section-label-center mb-3">03 — Solutions Implemented</span>
                            <h2>
                                Integrated <span>Automation Strategy</span>
                            </h2>
                            <p>
                                A multi-layered approach combining layout engineering, smart induction,
                                advanced controls, and automated profiling to deliver end-to-end performance gains.
                            </p>
                        </div>
                        <div className={styles.solutionsGrid}>
                            {solutions.map((sol, i) => (
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

                {/* Performance Achieved */}
                <section className={`${styles.section} ${styles.sectionAlt}`}>
                    <div className="container">
                        <div className={styles.sectionHeader} data-aos="fade-up">
                            <span className="section-label-center mb-3">04 — Performance Achieved</span>
                            <h2>
                                Measurable <span>Results</span>
                            </h2>
                            <p>
                                The deployed system exceeded performance targets across throughput, accuracy,
                                efficiency, and operational reliability.
                            </p>
                        </div>
                        <div className={styles.metricsGrid}>
                            {performance.map((metric, i) => (
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

                {/* Business Benefits */}
                <section className={styles.section}>
                    <div className="container">
                        <div className={styles.sectionHeader} data-aos="fade-up">
                            <span className="section-label-center mb-3">05 — Business Benefits</span>
                            <h2>
                                Tangible <span>Business Impact</span>
                            </h2>
                            <p>
                                Beyond operational metrics, the project delivered significant commercial
                                advantages and long-term competitive positioning.
                            </p>
                        </div>
                        <div className={styles.benefitsGrid}>
                            {benefits.map((benefit, i) => (
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

                {/* Deployment Strategy */}
                <section className={`${styles.section} ${styles.sectionAlt}`}>
                    <div className="container">
                        <div className={styles.sectionHeader} data-aos="fade-up">
                            <span className="section-label-center mb-3">06 — Deployment Strategy</span>
                            <h2>
                                Structured <span>Go-Live Approach</span>
                            </h2>
                            <p>
                                A phased deployment methodology ensured smooth transition, operator readiness,
                                and sustained system reliability from day one.
                            </p>
                        </div>
                        <div className={styles.deploymentGrid}>
                            {deployment.map((step, i) => (
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

                {/* Conclusion */}
                <section className={styles.conclusionSection}>
                    <div className="container">
                        <div className={styles.conclusionBox} data-aos="fade-up">
                            <span className="section-label-center mb-3">07 — Conclusion</span>
                            <h2 className="text-center mb-4">Conclusion</h2>
                            <p className={styles.conclusionText}>
                                The High-Speed Cross Belt Loop Sorter transformed the facility from a
                                labor-intensive operation into a highly automated fulfillment center,
                                delivering 40,000 PPH throughput, &gt;99.99% sort accuracy, 45% manpower
                                reduction, and ROI within 2 years while supporting future growth without
                                warehouse expansion.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <CTABanner content={ctaContent} />
        </>
    );
}

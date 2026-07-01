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
} from "@remixicon/react";

export const DEFAULT_CASE_STUDY_SLUG = "high-speed-cross-belt-loop-sorter-case-study";

export const defaultSections = {
    stats: [
        { value: "40,000", label: "PPH Throughput" },
        { value: ">99.99%", label: "Sort Accuracy" },
        { value: "~45%", label: "Manpower Saved" },
        { value: "~28%", label: "Space Saved" },
        { value: "98.7%", label: "Availability" },
    ],
    introLabel: "01 — Project Background",
    introHeading: "From Congestion to [High Performance]",
    introParagraphs: [
        "An e-commerce fulfillment center handling 15,000–20,000 parcels/hour faced increasing volumes, leading to congestion, high manpower dependency, missorts, and space limitations.",
        "A High-Speed Cross Belt Loop Sorter was selected to meet ambitious growth targets — transforming a labor-intensive operation into a highly automated fulfillment center without warehouse expansion.",
    ],
    productLink: "/high-speed-cross-belt-loop-sorter",
    objectives: [
        { icon: RiSpeedUpLine, text: "Increase throughput to 40,000 PPH" },
        { icon: RiTeamLine, text: "Reduce manpower and footprint" },
        { icon: RiLayoutGridLine, text: "Increase destination chutes without expansion" },
        { icon: RiMoneyDollarCircleLine, text: "Achieve ROI within 30 months" },
        { icon: Ri24HoursLine, text: "Deploy a stable 24/7 automated solution" },
    ],
    challengesHeader: {
        label: "02 — Key Challenges",
        heading: "Operational [Bottlenecks]",
    },
    challengesIntro:
        "The facility faced multiple constraints that demanded a comprehensive automation solution beyond conventional sorting systems.",
    challenges: [
        { icon: RiBox3Line, text: "Irregular wide parcel range: 50 g–10 kg, polybags to cartons" },
        { icon: RiBuilding2Line, text: "Limited warehouse space and fixed building layout" },
        { icon: RiUserSearchLine, text: "Manual bottleneck — manual secondary sorting and long operator travel" },
        { icon: RiFocus3Line, text: "Requirement of 40,000 PPH with >99.5% accuracy" },
        { icon: RiErrorWarningLine, text: "Previous sorter reliability issues" },
        { icon: RiScales3Line, text: "Manual shipment profiling and weighing causing billing inaccuracies" },
        { icon: RiRefreshLine, text: "High missort rates and parcel rehandling" },
    ],
    solutionsHeader: {
        label: "03 — Solutions Implemented",
        heading: "Integrated [Automation Strategy]",
    },
    solutionsIntro:
        "A multi-layered approach combining layout engineering, smart induction, advanced controls, and automated profiling to deliver end-to-end performance gains.",
    solutions: [
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
    ],
    performanceHeader: {
        label: "04 — Performance Achieved",
        heading: "Measurable [Results]",
    },
    performanceIntro:
        "The deployed system exceeded performance targets across throughput, accuracy, efficiency, and operational reliability.",
    performance: [
        { icon: RiSpeedUpLine, value: "40,000", label: "PPH Throughput" },
        { icon: RiCheckboxCircleLine, value: ">99.99%", label: "Sort Accuracy" },
        { icon: RiLayoutMasonryLine, value: "~28%", label: "Space Saving" },
        { icon: RiGroupLine, value: "~45%", label: "Manpower Reduction" },
        { icon: RiBarChartBoxLine, value: "98.7%", label: "System Availability" },
        { icon: RiVolumeMuteLine, value: "<72 dBA", label: "Noise Level" },
    ],
    benefitsHeader: {
        label: "05 — Business Benefits",
        heading: "Tangible [Business Impact]",
    },
    benefitsIntro:
        "Beyond operational metrics, the project delivered significant commercial advantages and long-term competitive positioning.",
    benefits: [
        { icon: RiMapPinAddLine, title: "84 Destinations", desc: "Increased from 43 to 84 destination chutes" },
        { icon: RiArrowUpCircleLine, title: "2.1× Daily Capacity", desc: "Daily sorting capacity more than doubled" },
        { icon: RiPriceTag3Line, title: "~32% OPEX Reduction", desc: "Significant operational cost savings" },
        { icon: RiTruckLine, title: "Faster Turnaround", desc: "Improved truck loading and dispatch speed" },
        { icon: RiTimeLine, title: "Same-Day Dispatch", desc: "Enabled same-day order fulfillment capability" },
        { icon: RiFundsLine, title: "22–26 Month ROI", desc: "Return on investment achieved ahead of target" },
    ],
    deploymentHeader: {
        label: "06 — Deployment Strategy",
        heading: "Structured [Go-Live Approach]",
    },
    deploymentIntro:
        "A phased deployment methodology ensured smooth transition, operator readiness, and sustained system reliability from day one.",
    deployment: [
        { icon: RiTestTubeLine, text: "FAT and live parcel testing" },
        { icon: RiRocketLine, text: "Phased ramp-up to full throughput" },
        { icon: RiToolsLine, text: "3% spare cart strategy" },
        { icon: RiShieldCheckLine, text: "Preventive maintenance program" },
        { icon: RiGraduationCapLine, text: "Operator certification and hypercare support" },
    ],
    conclusionLabel: "07 — Conclusion",
    conclusionText:
        "The High-Speed Cross Belt Loop Sorter transformed the facility from a labor-intensive operation into a highly automated fulfillment center, delivering 40,000 PPH throughput, >99.99% sort accuracy, 45% manpower reduction, and ROI within 2 years while supporting future growth without warehouse expansion.",
};

export const defaultCtaContent = {
    title: "Ready to Transform Your Fulfillment Center?",
    description:
        "Discover how MUVRO's High-Speed Cross Belt Loop Sorter can deliver 40,000+ PPH throughput, >99.99% accuracy, and ROI within 2 years for your operation.",
    queryText: "Having Queries? Call Us Now",
    phoneNumber: "+91-7457800130",
};

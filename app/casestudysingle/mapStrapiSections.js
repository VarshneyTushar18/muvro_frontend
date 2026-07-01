import {
    RiArrowUpCircleLine,
    RiBarChartBoxLine,
    RiBox3Line,
    RiBuilding2Line,
    RiCheckboxCircleLine,
    RiErrorWarningLine,
    RiFocus3Line,
    RiFundsLine,
    RiGraduationCapLine,
    RiGroupLine,
    RiLayoutGridLine,
    RiLayoutMasonryLine,
    RiMapPinAddLine,
    RiMoneyDollarCircleLine,
    RiPriceTag3Line,
    RiRefreshLine,
    RiRocketLine,
    RiScales3Line,
    RiShieldCheckLine,
    RiSpeedUpLine,
    RiTeamLine,
    RiTestTubeLine,
    RiTimeLine,
    RiToolsLine,
    RiTruckLine,
    RiUserSearchLine,
    RiVolumeMuteLine,
    Ri24HoursLine,
} from "@remixicon/react";

const ICON_MAP = {
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
};

export function getRemixIcon(iconName) {
    return ICON_MAP[iconName] || RiCheckboxCircleLine;
}

function mapIconTextItems(items = []) {
    return items.map((item) => ({
        icon: getRemixIcon(item.icon),
        text: item.text,
    }));
}

function mapSectionHeader(header, fallbackHeading, fallbackDescription = "") {
    if (!header) {
        return {
            label: "",
            heading: fallbackHeading,
            description: fallbackDescription,
        };
    }

    return {
        label: header.label || "",
        heading: header.heading || fallbackHeading,
        description: header.description || fallbackDescription,
    };
}

export function mapStrapiPageSections(pageSections) {
    if (!pageSections) return null;

    const hasStructuredContent =
        pageSections.stats?.length ||
        pageSections.introParagraphs?.length ||
        pageSections.objectives?.length ||
        pageSections.challenges?.length ||
        pageSections.solutions?.length ||
        pageSections.performance?.length ||
        pageSections.benefits?.length ||
        pageSections.deployment?.length ||
        pageSections.conclusionText;

    if (!hasStructuredContent) return null;

    return {
        stats: pageSections.stats?.map((stat) => ({
            value: stat.value,
            label: stat.label,
        })) || [],
        introHeading: pageSections.introHeading || "",
        introLabel: pageSections.introLabel || "01 — Project Background",
        introParagraphs: pageSections.introParagraphs?.map((paragraph) => paragraph.text) || [],
        productLink: pageSections.productLink || "",
        objectives: mapIconTextItems(pageSections.objectives),
        challengesHeader: mapSectionHeader(
            pageSections.challengesHeader,
            "Operational [Bottlenecks]"
        ),
        challengesIntro: pageSections.challengesHeader?.description || "",
        challenges: mapIconTextItems(pageSections.challenges),
        solutionsHeader: mapSectionHeader(
            pageSections.solutionsHeader,
            "Integrated [Automation Strategy]"
        ),
        solutionsIntro: pageSections.solutionsHeader?.description || "",
        solutions:
            pageSections.solutions?.map((solution) => ({
                number: solution.number,
                title: solution.title,
                items: solution.items?.map((item) => item.text) || [],
                result: solution.result,
            })) || [],
        performanceHeader: mapSectionHeader(
            pageSections.performanceHeader,
            "Measurable [Results]"
        ),
        performanceIntro: pageSections.performanceHeader?.description || "",
        performance:
            pageSections.performance?.map((metric) => ({
                icon: getRemixIcon(metric.icon),
                value: metric.value,
                label: metric.label,
            })) || [],
        benefitsHeader: mapSectionHeader(
            pageSections.benefitsHeader,
            "Tangible [Business Impact]"
        ),
        benefitsIntro: pageSections.benefitsHeader?.description || "",
        benefits:
            pageSections.benefits?.map((benefit) => ({
                icon: getRemixIcon(benefit.icon),
                title: benefit.title,
                desc: benefit.description,
            })) || [],
        deploymentHeader: mapSectionHeader(
            pageSections.deploymentHeader,
            "Structured [Go-Live Approach]"
        ),
        deploymentIntro: pageSections.deploymentHeader?.description || "",
        deployment: mapIconTextItems(pageSections.deployment),
        conclusionText: pageSections.conclusionText || "",
        conclusionLabel: pageSections.conclusionLabel || "07 — Conclusion",
    };
}

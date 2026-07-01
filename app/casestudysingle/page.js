import { redirect } from "next/navigation";
import { DEFAULT_CASE_STUDY_SLUG } from "./defaultSections";

export default function CaseStudySinglePreviewPage() {
    redirect(`/case-study/${DEFAULT_CASE_STUDY_SLUG}`);
}

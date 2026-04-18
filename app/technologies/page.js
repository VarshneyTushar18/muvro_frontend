import { notFound } from "next/navigation";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import TechnologiesCard from "../components/technologies/TechnologiesCard";
import styles from "./TechnologiesPage.module.css";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "MUVRO Technologies | MUVRO Intelligent Automation & Robotics",
  description:
    "Explore the advanced technologies behind MUVRO’s automation systems — including robotics, AI-driven controls, and smart intralogistics solutions that redefine warehouse efficiency, precision, and scalability.",
  keywords: [
    "MUVRO technologies",
    "warehouse automation technology",
    "robotics in logistics",
    "AI warehouse systems",
    "smart intralogistics",
    "conveyor automation",
    "tilt tray sorter technology",
    "logistics robotics",
    "automated material handling",
    "intelligent warehouse solutions",
  ],
  authors: [{ name: "MUVRO", url: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL }],
  creator: "MUVRO",
  publisher: "MUVRO",
  metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_BASE_URL),
  openGraph: {
    title: "MUVRO Technologies | Smart Automation & Robotics Solutions",
    description:
      "Discover how MUVRO leverages cutting-edge technologies — from robotics and AI to data-driven controls — powering the next generation of warehouse and logistics automation.",
    url: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + "/technologies",
    siteName: "MUVRO",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MUVRO Technologies | Smart Automation & Robotics Solutions",
    description:
      "Explore MUVRO’s intelligent automation technologies — robotics, AI, and data-driven control systems that redefine logistics performance.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + "/technologies",
  },
};

async function getTechnologies() {
  const res = await fetch(`${process.env.STRAPI_BACKEND_BASE_URL}/technology-page?populate[sectionHeader]=*&populate[technologies][populate][products][fields][0]=productName&populate[technologies][populate][products][fields][1]=slug&populate[technologies][populate][products][fields][2]=tagline&populate[technologies][populate][products][populate]=transparentImage&populate[technologies][populate]=image`, 
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch technologies");
  }

  const data = await res.json();
  return data.data;
}


export default async function TechnologiesPage() {
  const pageData = await getTechnologies();

  if(!pageData) return notFound();

  const crumbs = [
    { label: "Home", link: "/" },
    { label: "Technologies" },
  ];

  const sectionHeader = pageData.sectionHeader;
  const technologies = pageData.technologies || [];

  return (
    <>
      <BreadcrumbStrip crumbs={crumbs} />
      <section className="container">
        <div
          className={styles.wrapper}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {sectionHeader && (
            <>
              <span className="section-label-center">{sectionHeader.label}</span>
              <h2
                className="text-center mb-3"
                dangerouslySetInnerHTML={{
                  __html: sectionHeader.heading.replace(/\[(.*?)\]/g, "<span>$1</span>")
                }}
              />
              {sectionHeader.description && (
                <p className="text-center">{sectionHeader.description}</p>
              )}
            </>
          )}
        </div>

        <div className="row">
          {technologies.map((tech, index) => (
            <TechnologiesCard
              key={tech.id}
              number={index + 1}
              title={tech.title}
              description={tech.description}
              imgSrc={tech.image?.url ? `${process.env.STRAPI_ASSETS_BASE_URL}${tech.image.url}` : ""}
              products={tech.products}
            />
          ))}
        </div>
      </section>
    </>
  );
}

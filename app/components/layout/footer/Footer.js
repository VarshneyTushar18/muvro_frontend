import { RiLinkedinFill, RiYoutubeFill, RiFacebookFill, RiTwitterXFill, RiPinterestFill } from "@remixicon/react";
import { FaInstagram } from "react-icons/fa";

import styles from "./Footer.module.css";
import Newsletter from "./Newsletter";
import LocationsSlider from "./LocationsSlider";
import FooterLinksSection from "./FooterLinksSection";

const CERTIFICATIONS = [
  {
    title: "Avetta",
    logo: "/images/avetta.webp",
  },
  {
    title: "CE",
    logo: "/images/CE.png",
  },
  {
    title: "Tuvnord",
    logo: "/images/tuvnord.webp",
  },
  {
    title: "ISO",
    logo: "/images/ISO.png",
  },
];


async function getFooterData() {
  const backendBaseUrl = process.env.STRAPI_BACKEND_BASE_URL;
  if (!backendBaseUrl) {
    throw new Error("Missing environment variable STRAPI_BACKEND_BASE_URL");
  }

  const url = new URL("footer?populate=*", `${backendBaseUrl}/`).toString();
  const res = await fetch(url);

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Failed to fetch footer data (${res.status}): ${body}`);
  }

  const data = await res.json();
  return data.data;
}

export default async function Footer() {
  let footerData = null;

  try {
    footerData = await getFooterData();
  } catch (error) {
    console.error("Footer data load failed:", error);
  }

  if (!footerData) {
    return (
      <footer className="bg-secondary">
        <div className="container">
          <p className="text-center">Footer content is unavailable.</p>
        </div>
      </footer>
    );
  }

  const menuItems = footerData.menuItem;

  let largestMenuItem = null;
  let maxLinks = 0;

  menuItems.forEach(item => {
    const count = item.menuListItem?.length || 0;
    if (count > maxLinks) {
      maxLinks = count;
      largestMenuItem = item;
    }
  });

  const otherMenuItems = menuItems.filter(item => item !== largestMenuItem);


  return (
    <footer className="bg-secondary">
      <div className={styles.footertop}>

        <div className={`${styles.footerWrapper} container`}>
          <div className={styles.left}>
            <img src={process.env.NEXT_PUBLIC_STRAPI_ASSETS_BASE_URL + footerData.logo.url} alt="Muvro Logo" />
            <p>
              {footerData.description}
            </p>
            <div className={styles.socials}>
              {footerData.linkedinUrl && (
                <a className={styles.linkedin} href={footerData.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <RiLinkedinFill size={22} />
                </a>
              )}

              {footerData.youtubeUrl && (
                <a className={styles.youtube} href={footerData.youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <RiYoutubeFill size={22} />
                </a>
              )}

              {footerData.InstagramUrl && (
                <a className={styles.instagram} href={footerData.InstagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram size={22} />
                </a>
              )}

              {footerData.facebookUrl && (
                <a className={styles.facebook} href={footerData.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <RiFacebookFill size={22} />
                </a>
              )}

              {footerData.xUrl && (
                <a className={styles.x} href={footerData.xUrl} target="_blank" rel="noopener noreferrer" aria-label="X">
                  <RiTwitterXFill size={22} />
                </a>
              )}

              {footerData.pinterestUrl && (
                <a className={styles.pinterest} href={footerData.pinterestUrl} target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                  <RiPinterestFill size={22} />
                </a>
              )}
            </div>
          </div>

          <div className={styles.links}>
            {otherMenuItems.map(item => (
              <FooterLinksSection
                key={item.id}
                title={item.heading}
                links={item.menuListItem}
              />
            ))}
          </div>
          {largestMenuItem && (
            <div className={styles.links}>
              <FooterLinksSection
                key={largestMenuItem.id}
                title={largestMenuItem.heading}
                links={largestMenuItem.menuListItem}
                isLargest
              />
            </div>
          )}

          <div className={styles.certifications}>
            <h4 className={styles.linksHeader}>Certifications</h4>
            <div className={styles.certificationLogos}>
              {CERTIFICATIONS.map((cert, index) => (
                <div key={index} className={styles.certificationLogo}>
                  <img
                    src={cert.logo}
                    alt={cert.title}
                    title={cert.title}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      {
        footerData.location.length > 0 && (
          <div className={`${styles.locations} container`}>
            <h4 className={styles.linksHeader} >
              Our Global Presence
            </h4>
            <LocationsSlider locations={footerData.location} />
          </div>
        )
      }

      <div className={`${styles.copyRight} container`}>
        {
          footerData.copyrightText.replace(
            "[year]",
            new Date().getFullYear()
          )
        }
        {" | Design & Developed by "}
        <a
          href="https://tech2globe.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.devCredit}
        >
          Tech2Globe
        </a>
      </div>
    </footer >
  );
}

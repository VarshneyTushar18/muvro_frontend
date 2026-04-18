import { RiLinkedinFill, RiYoutubeFill, RiInstagramFill, RiFacebookFill, RiTwitterXFill, RiPinterestFill } from "@remixicon/react";

import styles from "./Footer.module.css";
import Newsletter from "./Newsletter";
import LocationsSlider from "./LocationsSlider";
import FooterLinksSection from "./FooterLinksSection";


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
      <Newsletter heading={footerData.newsletterHeading} />
      <div className={`${styles.footerWrapper} container`}>
        <div className={styles.left}>
          <img src={process.env.NEXT_PUBLIC_STRAPI_ASSETS_BASE_URL + footerData.logo.url} alt="Muvro Logo" />
          <p>
            {footerData.description}
          </p>
          <div className={styles.socials}>
            {footerData.linkedinUrl && (
              <a href={footerData.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <RiLinkedinFill size={22} />
              </a>
            )}

            {footerData.youtubeUrl && (
              <a href={footerData.youtubeUrl} target="_blank" rel="noopener noreferrer">
                <RiYoutubeFill size={22} />
              </a>
            )}

            {footerData.InstagramUrl && (
              <a href={footerData.InstagramUrl} target="_blank" rel="noopener noreferrer">
                <RiInstagramFill size={22} />
              </a>
            )}

            {footerData.facebookUrl && (
              <a href={footerData.facebookUrl} target="_blank" rel="noopener noreferrer">
                <RiFacebookFill size={22} />
              </a>
            )}

            {footerData.xUrl && (
              <a href={footerData.xUrl} target="_blank" rel="noopener noreferrer">
                <RiTwitterXFill size={22} />
              </a>
            )}

            {footerData.pinterestUrl && (
              <a href={footerData.pinterestUrl} target="_blank" rel="noopener noreferrer">
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

      </div>
      {
        footerData.location.length > 0 && (
          <div className={`${styles.locations} container px-0`}>
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
      </div>
    </footer >
  );
}

"use client";
import { useEffect, useState } from "react";
import { RiArrowDownLine } from "@remixicon/react";
import styles from "./Footer.module.css";
import Link from "next/link";

function FooterLinkItem({ link }) {
  if (!link?.url) return null;

  return (
    <li>
      {link.url.startsWith("http") ? (
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {link.title}
        </a>
      ) : (
        <Link href={link.url}>{link.title}</Link>
      )}
    </li>
  );
}

const FooterLinksSection = ({ title, links = [], isLargest = false }) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => {
      setIsMobile(media.matches);
      if (!media.matches) setOpen(false);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const handleToggle = () => {
    if (!isMobile) return;
    setOpen((prev) => !prev);
  };

  const listClassName = [
    styles.linksList,
    isLargest ? styles.industriesGrid : "",
    open ? styles.show : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (isLargest) {
    const firstCol = links.slice(0, Math.ceil(links.length / 2));
    const secondCol = links.slice(Math.ceil(links.length / 2));

    return (
      <div className={`${styles.accordionSection} ${styles.borderBottom}`}>
        <h4
          className={styles.linksHeader}
          onClick={handleToggle}
          role={isMobile ? "button" : undefined}
          aria-expanded={isMobile ? open : true}
        >
          {title}
          <span className={`${styles.arrow} ${open ? styles.open : ""}`}>
            <RiArrowDownLine />
          </span>
        </h4>
        <div className={listClassName}>
          <div className={styles.linksListInner}>
            <ul className="mb-0">
              {firstCol.map((link, i) => (
                <FooterLinkItem key={i} link={link} />
              ))}
            </ul>
            <ul className="mb-0">
              {secondCol.map((link, i) => (
                <FooterLinkItem key={i} link={link} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.accordionSection} ${styles.borderBottom}`}>
      <h4
        className={styles.linksHeader}
        onClick={handleToggle}
        role={isMobile ? "button" : undefined}
        aria-expanded={isMobile ? open : true}
      >
        {title}
        <span className={`${styles.arrow} ${open ? styles.open : ""}`}>
          <RiArrowDownLine />
        </span>
      </h4>
      <div className={listClassName}>
        <ul className={`${styles.linksListInner} mb-0`}>
          {links.map((link, i) => (
            <FooterLinkItem key={i} link={link} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterLinksSection;

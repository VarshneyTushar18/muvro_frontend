"use client";
import { useState } from "react";
import {
    RiArrowDownLine,
} from "@remixicon/react";
import styles from "./Footer.module.css";
import Link from "next/link";

const FooterLinksSection = ({ title, links, isLargest = false }) => {
    const [open, setOpen] = useState(false);

    if (isLargest) {
        const firstCol = links.slice(0, 6);
        const secondCol = links.slice(6);

        return (
            <div className={`${styles.accordionSection} ${styles.borderBottom}`}>
                <h4 className={styles.linksHeader} onClick={() => setOpen(!open)}>
                    {title}
                    <span className={`${styles.arrow} ${open ? styles.open : ""}`}>
                        <RiArrowDownLine />
                    </span>
                </h4>
                <div
                    className={`${styles.linksList} ${open ? styles.show + " mb-0 mt-3" : "my-0"} ${styles.industriesGrid}`}
                >
                    <ul className="mb-0">
                        {firstCol.map((link, i) => (
                            <li key={i}>
                                {link.url.startsWith("http") ? (
                                    <a href={link.url}>{link.title}</a>
                                ) : (
                                    <Link href={link.url}>{link.title}</Link>
                                )}
                            </li>
                        ))}
                    </ul>
                    <ul className="mb-0">
                        {secondCol.map((link, i) => (
                            <li key={i}>
                                {link.url.startsWith("http") ? (
                                    <a href={link.url}>{link.title}</a>
                                ) : (
                                    <Link href={link.url}>{link.title}</Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        );
    }

    return (
        <div className={`${styles.accordionSection} ${styles.borderBottom}`}>
            <h4 className={styles.linksHeader} onClick={() => setOpen(!open)}>
                {title}
                <span className={`${styles.arrow} ${open ? styles.open : ""}`}>
                    <RiArrowDownLine />
                </span>
            </h4>
            <ul
                className={`${styles.linksList} ${open ? styles.show + " mb-0 mt-3" : "my-0"
                    }`}
            >
                {links.map((link, i) => (
                    <li key={i}>
                        {link.url.startsWith("http") ? (
                            <a href={link.url}>{link.title}</a>
                        ) : (
                            <Link href={link.url}>{link.title}</Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterLinksSection;
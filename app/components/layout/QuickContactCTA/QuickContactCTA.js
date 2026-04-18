"use client";

import { useState } from "react";
import styles from "./QuickContactCTA.module.css";
import { RiChat1Line, RiFileEditLine, RiPhoneLine } from "@remixicon/react";
import Link from "next/link";

export default function QuickContactCTA() {
    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen(!open);

    return (
        <div className={styles.floatingContainer}>


            <button
                className={`${styles.mainBtn} ${open ? styles.opened : ""}`}
                onClick={handleToggle}
                aria-label="Quick Contact"
            >
                <img
                    src="/images/quick-contact-icon.png"
                    alt="Contact"
                    className={styles.mainIcon}
                />
            </button>
            <div className={`${styles.iconsWrapper} ${open ? styles.open : ""}`}>
                <Link href="mailto:sales@muvro.com" className={styles.iconBtn} title="Chat">
                    <RiChat1Line size={28} />
                </Link>
                <Link href="tel:+919289071715" className={styles.iconBtn} title="Call">
                    <RiPhoneLine size={28} />
                </Link>
                <Link href="/contact" className={styles.iconBtn} title="Contact Form">
                    <RiFileEditLine size={28} />
                </Link>
            </div>
        </div >
    );
}

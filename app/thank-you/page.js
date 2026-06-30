"use client";
import { useEffect, useState } from "react";
import { RiCheckboxCircleFill } from "@remixicon/react";
import Link from "next/link";
import styles from "./thankyou.module.css";

export default function ThankYou() {
    const [thankYouData, setThankYouData] = useState({ heading: "", content: "" });

    useEffect(() => {
        const data = sessionStorage.getItem("thankYouData");
        if (data) {
            setThankYouData(JSON.parse(data));
            sessionStorage.removeItem("thankYouData");
        }
    }, []);

    const heading = thankYouData.heading;
    const content = thankYouData.content;

    return (
        <main className={styles.thankYouPage}>
            <section className={styles.panel}>
                <div className={styles.iconWrap}>
                    <RiCheckboxCircleFill className={styles.icon} />
                </div>

                <h1 className={styles.heading}>
                    {heading || "Thank You For Contacting Us"}
                </h1>

                <p className={styles.subheading}>
                    {content
                        ? content
                        : "Our team will get back to you within 1 business day. Please check your junk folder and voicemail to ensure our communication is not blocked."}
                </p>

                <div className={styles.messageCard}>
                    <p>
                        If you do not hear from us within 1 business day, please send an email to <strong>info@muvro.com</strong> and we will attend to you at the earliest.
                    </p>
                </div>

                <Link href="/" className={`mbtn mbtn-primary ${styles.ctaButton}`}>
                   Go Back to Homepage
                </Link>
            </section>
        </main>
    );
}

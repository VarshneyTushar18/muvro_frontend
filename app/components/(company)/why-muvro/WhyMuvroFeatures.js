import React from "react";
import styles from "./whymuvrofeatures.module.css";

const WhyMuvroFeatures = () => {
    const features = [
        {
            title: "Tailored & Modular Solutions",
            description: "Engineered to adapt to your unique operational needs.",
        },
        {
            title: "Design-Driven Performance",
            description: "Innovation rooted in functionality and precision.",
        },
        {
            title: "Proven Technology, Rapid Delivery",
            description: "Time-tested systems delivered with speed and reliability.",
        },
        {
            title: "Scalable & Cost-Efficient Integration",
            description: "Future-ready solutions that grow with your business.",
        },
        {
            title: "Deep & Diversive Industry Experience",
            description: "Insightful expertise across multiple sectors.",
        },
        {
            title: "Extensive Industry Expertise",
            description: "Backed by decades of hands-on experience.",
        },
        {
            title: "Robust Service & Support Network",
            description: "Reliable assistance throughout the solution lifecycle.",
        },
        {
            title: "Agile & Committed Team",
            description: "Energetic, responsive, and focused on delivering results on time, every time.",
        },
    ];

    const highlights = [
        "Lucrative Automation.",
        "Commitment Delivers.",
        "Excellent Service Support.",
        "Futuristic and Scalable Integration.",
        "Proven Designs.",
        "Obsession of Excellence.",
        "Modular & Custom Systems.",
        "Crafted with Passion.",
        "Less Delivery Time.",
    ];

    return (
        <section className={styles.whyMuvroSection}>
            <div className="container">
                <div className="row justify-content-center mb-4">
                    <div className="col-xl-11">
                        <span
                            className="section-label-center mb-3"
                            data-aos="fade-down"
                            data-aos-delay="100"
                        >
                            Why Choose Us
                        </span>

                        <h2
                            className="mb-3 text-center"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                           Why <span>MUVRO</span>?
                        </h2>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-xl-11">
                        {/* Single Card with Grid Layout */}
                        <div className={styles.mainCard} data-aos="fade-up" data-aos-delay="100">
                            <div className="row g-4">
                                {/* Left Section - Features */}
                                <div className="col-lg-7">
                                    <div className={styles.featuresList}>
                                        {features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className={styles.featurePoint}
                                                data-aos="fade-right"
                                                data-aos-delay={index * 30}
                                            >
                                                <span className={styles.bullet}>•</span>
                                                <div className={styles.featureContent}>
                                                    <strong>{feature.title}</strong>
                                                    <p>{feature.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Section - Highlights */}
                                <div className="col-lg-5">
                                    <div className={styles.highlightContainer}>
                                        <div className={styles.highlightsList}>
                                            {highlights.map((highlight, index) => (
                                                <div
                                                    key={index}
                                                    className={styles.highlightPoint}
                                                    data-aos="zoom-in"
                                                    data-aos-delay={index * 35}
                                                >
                                                    <span className={styles.icon}>✦</span>
                                                    <span>{highlight}</span>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyMuvroFeatures;

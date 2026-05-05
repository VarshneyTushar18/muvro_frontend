import React from "react";
import OurHistory from "../components/(company)/our-history/OurHistory";
import OurValues from "../components/(company)/our-values/OurValues";
import QualityPolicy from "../components/(company)/quality-policy/QualityPolicy";
import WhyMuvro from "../components/(company)/why-muvro/WhyMuvro";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import Counter from "../components/aboutcounter/aboutcounter";
import styles from "./style.module.css";
import "./custom.css";
import {
    FaCertificate,
    FaFlask,
    FaIndustry,
    FaLeaf,
    FaCheckCircle,
    FaSmile
} from "react-icons/fa";

const features = [
    {
        icon: <FaCertificate />,
        title: "ISO 9001 Certification",
        text: "Ensures consistent quality management practices.",
        color: "success"
    },
    {
        icon: <FaFlask />,
        title: "World Class R&D Innovation",
        text: "Drives technological advancements through a dedicated team.",
        color: "primary"
    },
    {
        icon: <FaIndustry />,
        title: "Global Manufacturing",
        text: "Aligns with global standards for quality and efficiency.",
        color: "info"
    },
    {
        icon: <FaLeaf />,
        title: "Sustainability Commitment",
        text: "Reduces carbon footprint and promotes renewable energy.",
        color: "warning"
    },
    {
        icon: <FaCheckCircle />,
        title: "Robust Quality Program",
        text: "Maintains strict adherence to quality protocols.",
        color: "danger"
    },
    {
        icon: <FaSmile />,
        title: "Customer Satisfaction",
        text: "Achieves 100% satisfaction through fast delivery and service.",
        color: "secondary"
    }
];

 const data = [
    {
      title: 'Product Quality Satisfaction',
      desc: 'Commitment to Product Quality',
      value: 99,
      color: 'green',
    },
    {
      title: 'Reliability',
      desc: 'Building Trust Through Reliability',
      value: 99.9,
      color: 'orange',
    },
    {
      title: 'Purchase Satisfaction',
      desc: 'Delivering Delight',
      value: 99.9,
      color: 'teal',
    },
    {
      title: 'Accuracy',
      desc: 'Precision in Every Detail',
      value: 99.5,
      color: 'yellow',
    },
    {
      title: 'Meet Expectations',
      desc: 'Exceeding Standards',
      value: 99.9,
      color: 'blue',
    },
    {
      title: 'Investment Satisfaction',
      desc: 'Empowering Futures',
      value: 100,
      color: 'purple',
    },
  ];

export default async function AboutUs() {
    const crumbs = [
        { label: "Home", link: "/" },
        { label: "About Us" },
    ];

    return (
        <>
            <BreadcrumbStrip crumbs={crumbs} />
            <section className="pb-0">
                <div className="container">
                    {/* Section Header */}
                    <div className="row justify-content-center">
                        <div
                            className="col-xl-8 pb-4"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >

                            <span
                                className="section-label-center mb-3"
                                data-aos="fade-down"
                                data-aos-delay="100"
                            >
                                More Than Just a Name
                            </span>

                            <h2
                                className="mb-5 text-center"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Discover the Meaning Behind <span>MUVRO</span>
                            </h2>

                            <p
                                className="text-center"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                Five words that capture our spirit — adaptable, original, daring, transformative, and dependable. That’s the essence of MUVRO.
                            </p>
                        </div>

                        {/* MUVRO Section */}
                        <section
                            className={styles.muvroSection}
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div
                                className={styles.line}
                                data-aos="fade-in"
                                data-aos-delay="450"
                            ></div>

                            <div className={styles.muvroContainer}>

                                {/* M */}
                                <div
                                    className={`${styles.muvroItem} ${styles.top}`}
                                    data-aos="zoom-in"
                                    data-aos-delay="500"
                                >
                                    <div className={`${styles.label} ${styles.top}`}>MODULAR</div>
                                    <div className={styles.circle}>M</div>
                                </div>

                                {/* U */}
                                <div
                                    className={`${styles.muvroItem} ${styles.bottom}`}
                                    data-aos="zoom-in"
                                    data-aos-delay="600"
                                >
                                    <div className={styles.circle}>U</div>
                                    <div className={`${styles.label} ${styles.bottom}`}>UNIQUE</div>
                                </div>

                                {/* V */}
                                <div
                                    className={`${styles.muvroItem} ${styles.top}`}
                                    data-aos="zoom-in"
                                    data-aos-delay="700"
                                >
                                    <div className={`${styles.label} ${styles.top}`}>VENTURIOUS</div>
                                    <div className={styles.circle}>V</div>
                                </div>

                                {/* R */}
                                <div
                                    className={`${styles.muvroItem} ${styles.bottom}`}
                                    data-aos="zoom-in"
                                    data-aos-delay="800"
                                >
                                    <div className={styles.circle}>R</div>
                                    <div className={`${styles.label} ${styles.bottom}`}>REVOLUTIONARY</div>
                                </div>

                                {/* O */}
                                <div
                                    className={`${styles.muvroItem} ${styles.top}`}
                                    data-aos="zoom-in"
                                    data-aos-delay="900"
                                >
                                    <div className={`${styles.label} ${styles.top}`}>OASIS</div>
                                    <div className={styles.circle}>O</div>
                                </div>

                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <OurHistory />

            <section className="pb-0">
                <div className="container">
                    {/* Section Header */}
                    <div className="row justify-content-center">
                        <div
                            className="col-xl-6 pb-4"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <h3
                                className="mb-4"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                What <span>We Do</span>
                            </h3>
                            <p>We deliver Various Automation Solution for E-Commerce and Warehouse Industries with the entire chain from Analysis, Design, Dimensioning and manufacturing to installation and services. This Offer our customer convenience and peace of mind. </p>
                        </div>
                        <div
                            className="col-xl-6 pb-4"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <h3
                                className="mb-4"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Muvro has <span>array of solutions</span>
                            </h3>
                            <p>High Speed Cross Belt Sorters, Linear Sorter , 3D Smart Sorter , Fast Sorter , Swivel Wheel Sorter, Volume Distribution Systems ( VDS), ASRS Systems, Conveyor Systems  Powered Roller Conveyors, PVC & Modular Belt Conveyors, Curve & Merger Conveyors,  ZPA Roller Conveyors. By these Solution we contribute to increase the efficiency, Just in Time Delivery, and competitiveness of our customers.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-0">
                <div className="container">
                    {/* Section Header */}
                    <div className="row justify-content-center align-items-center">
                        <div
                            className="col-xl-4 pb-4"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <h3
                                className="mb-5"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                MUVRO is Building Its <span>Future Factory</span> in 4,60,000 Sq Feet.
                            </h3>

                            <ul>
                                <li data-aos="fade-up">
                                    Its Phase #1 will be Functional by Dec- 2026
                                </li>
                                <li data-aos="fade-up">
                                    Its Phase #2 will be Functional by July - 2027
                                </li>
                            </ul>
                        </div>
                        <div
                            className="col-xl-6 pb-4"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <img src="images/image-collage.jpg" alt="About Us" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>
            </section>

            <OurValues />

            <section className="pb-0">
                <div className="container">
                    {/* Section Header */}
                    <div className="row justify-content-center align-items-center">
                        <h3
                            className="mb-5 text-center"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Intralogistics <span>Solutions </span>
                        </h3>
                        <div
                            className="col-xl-6 pb-4"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <img src="images/muvro-diagram-image.webp" alt="Muvro Diagram" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <QualityPolicy />

            <section className="pb-0">
                <div className="container">
                    <div className="row g-4">
                        <h3
                            className="mb-5 text-center"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Muvro <span>Achievments </span>
                        </h3>
                        {features.map((item, index) => (
                            <div className="col-12 col-sm-6 col-lg-4" key={index}>
                                <div className={`card h-100 border-0 shadow-sm feature-card`}>
                                    <div className="card-body text-center">
                                        <div className={`icon-box bg-${item.color}`}>
                                            {item.icon}
                                        </div>
                                        <h5 className="mt-3">{item.title}</h5>
                                        <p className="text-muted">{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <WhyMuvro />

            <section className="pb-0">
                <div className="container py-5">
                    <div className="row">
                        <h3
                                className="mb-5 text-center"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Customer Satisfaction & <span>Benchmarks </span>
                            </h3>
                        {data.map((item, index) => (
                            <div className="col-md-6 mb-4" key={index}>
                                <div className="counter-box d-flex align-items-center gap-3 p-3">

                                    <div className={`circle ${item.color}`}>
                                        <Counter target={item.value} />%
                                    </div>

                                    <div>
                                        <h6 className="text-capitalize">{item.title}</h6>
                                        <p className="text-muted mb-0">{item.desc}</p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* <section className="pb-0">
                <div className="container">
                   
                    <div className="row justify-content-center align-items-center">
                        <div
                            className="col-xl-8 pb-4 text-center">
                            <h3
                                className="mb-5 text-center"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Our <span>Certifications </span>
                            </h3>
                            <div className="row g-4 justify-content-center">
                                <div
                                    className="col-xl-5 pb-4"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                >
                                    <img src="images/picture1.webp" alt="" className="img-fluid" />
                                </div>
                                <div
                                    className="col-xl-5 pb-4"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                >
                                    <img src="images/picture2.webp" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
}

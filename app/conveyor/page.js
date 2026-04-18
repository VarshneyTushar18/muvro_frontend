import BreadcrumbStrip from "../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import Image from "next/image";
import ConveyorTabs from "../components/conveyor/ConveyorTabs";
import styles from "./style.module.css";

export default async function Conveyor() {
    const crumbs = [
        { label: "Home", link: "/" },
        { label: "Conveyors" },
    ];

    return (
        <>
            <BreadcrumbStrip crumbs={crumbs} />
            <section className={styles.conveyor}>
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <Image src="/images/Conveyor-Banner.webp" alt="Conveyor Belt" width={1920} height={680} className="img-fluid rounded" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <span
                                className="section-label mb-3"
                                data-aos="fade-down"
                                data-aos-delay="100"
                            >
                                Conveyors
                            </span>

                            <h3
                                className="mb-3"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Modular and Custom Conveyor Systems
                            </h3>
                        </div>
                        <div className="col-lg-7">
                            <p
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                At Muvro, we design and manufacture modular and custom conveyor systems tailored to meet the diverse needs of industries such as e-commerce, logistics, manufacturing, and warehousing. Our solutions offer scalability, flexibility, and efficiency, ensuring seamless material handling and optimized workflow. Whether you need a standardized conveyor system for quick deployment or a fully customized solution to fit your unique operational requirements, Muvro delivers high-performance conveyors built for reliability and durability. Upgrade your automation with precision-engineered conveyor solutions designed for the future of material handling.
                            </p>
                        </div>
                    </div>
                </div>

                <ConveyorTabs />
        </section >
        </>
    );
}
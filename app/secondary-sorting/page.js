import BreadcrumbStrip from "../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

export default async function SecondarySorting() {
    const crumbs = [
        { label: "Home", link: "/" },
        { label: "Secondary Sorting" },
    ];

    return (
        <>
            <BreadcrumbStrip crumbs={crumbs} />

            <section>
                <div className="container">
                    <div className="row pb-5">
                        <div className="col-lg-12">
                            <Image
                                src="/images/Sec-Sorting-banner.webp"
                                alt="Secondary Sorting"
                                width={1920}
                                height={500}
                                className="img-fluid rounded"
                            />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row pb-5 align-items-center">
                        <div className="col-lg-5">
                            <Image src="/images/Vertixo-Stack-Sorter-Image.webp" width={1080} height={720} alt="Vertixo™ Stack Sorter" className="img-fluid"/>
                        </div>
                        <div className="col-lg-7">
                            <span
                                className="section-label mb-3"
                                data-aos="fade-down"
                                data-aos-delay="100"
                            >
                                Secondary Sorting
                            </span>

                            <h3
                                className="mb-3"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Vertixo™ Stack Sorter
                            </h3>
                            <p>Vertixo™ is a pantry—based vertical multi—level sorter supporting up to 60 destinations and 900—l500 TPH. Its sinple or dual 3—axis pantry delivers fast, accurate parcel placement in dense warehouses. Compact, modular, and integrated with full measurement systems, Vertixo" maximizes throughput where floor space is limited.</p>
                            <div className="buttonblock pt-3">
                                <Link href="/vertixo-stack-sorter" className="mbtn mbtn-small mbtn-primary d-inline-block">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="row pb-5 align-items-center">
                        <div className="col-lg-7 order-2 order-lg-1">
                            <span
                                className="section-label mb-3"
                                data-aos="fade-down"
                                data-aos-delay="100"
                            >
                                Secondary Sorting
                            </span>

                            <h3
                                className="mb-3"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Vetro Micro Sort
                            </h3>
                            <p>Vetro combines modular PVC belt conveyors in a T—shaped layout, with each cell usinp three coordinated modules for efficient sorting. Supporting up to 16 destinations and 2500 TPH, it includes scanning, weiphinp, and 3D profiling. Its liphtweipht, modular desipn allows effortless relocation within any facility, ideal for small & medium sort centre.</p>
                            <div className="buttonblock pt-3">
                                <Link href="/vetro-micro-sort" className="mbtn mbtn-small mbtn-primary d-inline-block">
                                    View Details
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5 order-1 order-lg-2">
                            <Image src="/images/vetro-micro-sort-image.webp" width={1080} height={720} alt="Vetro Micro Sort" className="img-fluid"/>
                        </div>
                    </div>

                    <div className="row pb-5 align-items-center">
                        <div className="col-lg-5">
                            <Image src="/images/vorex-image-single.webp" width={1080} height={720} alt="VOREX™" className="img-fluid"/>
                        </div>
                        <div className="col-lg-7">
                            <span
                                className="section-label mb-3"
                                data-aos="fade-down"
                                data-aos-delay="100"
                            >
                                Secondary Sorting
                            </span>

                            <h3
                                className="mb-3"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                VOREX™
                            </h3>
                            <p>Vorex uses autonomous bots across multiple layers to achieve l500—3000 TPH and up to 64 destinations (Expandable) . Dual infeed lines and synchronized lifts maintain continuous flow. Ideal for dense warehouses, Vorex delivers scalable 3D sorting with efficient routing, minimal footprint, and high operational flexibility.</p>
                            <div className="buttonblock pt-3">
                                <Link href="/vorex" className="mbtn mbtn-small mbtn-primary d-inline-block">
                                    View Details
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
}

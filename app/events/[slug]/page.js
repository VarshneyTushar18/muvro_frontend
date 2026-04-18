
import BreadcrumbStrip from "../../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import SocialShare from "../../utilities/SocialShare";
import Style from "./singleevent.module.css";

async function fetchSlugs() {
    const res = await fetch(
        `${process.env.STRAPI_BACKEND_BASE_URL}/events?fields[0]=slug`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch events slugs");
    }
    const data = await res.json();
    return data.data.map((item) => item.slug);
}
async function getEvents(slug) {
    const res = await fetch(
        `${process.env.STRAPI_BACKEND_BASE_URL}/events?filters[slug][$eq]=${slug}&populate=*`,
        { next: { revalidate: 60 } }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch events');
    }

    const data = await res.json();
    return data.data[0];
}

export async function generateStaticParams() {
    const slugs = await fetchSlugs();
    return slugs.map((slug) => ({ slug }));
}

function formatDate(dateString) {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();

    const ordinal = (n) => {
        if (n > 3 && n < 21) return 'TH';
        switch (n % 10) {
            case 1: return 'ST';
            case 2: return 'ND';
            case 3: return 'RD';
            default: return 'TH';
        }
    };

    return `${day}${ordinal(day)} ${month} ${year}`;
}

export default async function EventSingle({ params }) {

    const { slug } = await params;
    const events = await getEvents(slug);

    if (!events) {
        return notFound();
    }

    const crumbs = [
        { label: "Home", link: "/" },
        { label: "Events", link: "/events" },
        { label: events.title }
    ];
    return (
        <>
            <BreadcrumbStrip crumbs={crumbs} />

            <section className={Style.EventSingle}>
                <div className="container">
                    <div
                        className={Style.feature_card}
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <div className="row justify-content-center align-items-center">
                            <div
                                className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                                data-aos="zoom-in"
                                data-aos-delay="100"
                                data-aos-duration="900"
                            >
                                <div className={Style.feature_image}>
                                    <img
                                        src={
                                            process.env.STRAPI_ASSETS_BASE_URL +
                                            (events.poster
                                                ? events.poster.url
                                                : events.eventImages[0].url)
                                        }
                                        alt={
                                            events.poster?.alternativeText ||
                                            events.eventImages[0]?.alternativeText ||
                                            events.title ||
                                            "Event"
                                        }
                                    />
                                </div>
                            </div>

                            <div
                                className="col-xl-8 col-lg-8 col-md-6 col-sm-12"
                                data-aos="fade-left"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                            >
                                <div className={Style.feature_context}>
                                    <span
                                        className={Style.category}
                                        data-aos="fade-up"
                                        data-aos-delay="250"
                                    >
                                        {formatDate(events.startDate)} - {formatDate(events.endDate)}
                                    </span>
                                    <h1
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                        data-aos-duration="800"
                                    >
                                        {events.title}
                                    </h1>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-delay="350"
                                        data-aos-duration="900"
                                    >
                                        {events.description}
                                    </p>
                                    <div
                                        className={Style.social_media}
                                        data-aos="fade-up"
                                        data-aos-delay="400"
                                    >
                                        <SocialShare />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* New Gallery Section */}
                <div
                    className="container mt-5"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="800"
                >
                    <h3
                        className="text-center"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        Event Gallery
                    </h3>

                    <div className="row pt-4">
                        <div className={Style.masonry}>
                            {events.eventImages &&
                                events.eventImages.map((image, index) => (
                                    <div
                                        className={Style.brick}
                                        key={index}
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 100}
                                        data-aos-duration="800"
                                    >
                                        <a
                                            href={
                                                process.env.STRAPI_ASSETS_BASE_URL + image.url
                                            }
                                            className="glightbox"
                                        >
                                            <img
                                                src={process.env.STRAPI_ASSETS_BASE_URL + image.url}
                                                alt={image.alternativeText ?? events.title}
                                            />
                                        </a>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>

        </>

    );
}
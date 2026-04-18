import { RiArrowLeftSLine, RiArrowRightSLine, RiArrowRightUpLine } from "@remixicon/react";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import Style from "./events.module.css";
import EventGrid from "./EventGrid";
export const metadata = {
  title: "Our Events | Muvro Technologies",
  description: "Explore the latest events, exhibitions, and product showcases by Muvro Technologies.",
};

async function getEvents(page = 1, pageSize = 24) {
  const res = await fetch(
    `${process.env.STRAPI_BACKEND_BASE_URL}/events?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) throw new Error("Failed to fetch events");
  return res.json();
}
export default async function Events() {
  const data = await getEvents();
  const crumbs = [
    { label: "Home", link: "/" },
    { label: "Our Events" },
  ];

  if (!data?.data?.length) {
    return <div className="text-center py-5">No events found.</div>;
  }

  return (
    <>
      <BreadcrumbStrip crumbs={crumbs} />

      <section className={Style.contact_page}>
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-xl-6 pb-4" data-aos="fade-up" data-aos-delay="100">
              <span className="section-label-center mb-3">Upcoming & Past Events</span>
              <h2 className="mb-3 text-center">
                Our <span>Events</span>
              </h2>
              <p className="text-center">
                Stay informed with the latest innovations, success stories, and industry updates from Muvro Technologies.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <EventGrid initialData={data} />
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine, RiArrowRightUpLine } from "@remixicon/react";
import Style from "./events.module.css";
import Link from "next/link";

export default function EventGrid({ initialData }) {
    const [events, setEvents] = useState(initialData.data);
    const [pagination, setPagination] = useState(initialData.meta.pagination);
    const [loading, setLoading] = useState(false);
    const fetchEvents = async (page) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/events?page=${page}&pageSize=${pagination.pageSize}`);
            console.log(res);
            const data = await res.json();
            setEvents(data.data);
            setPagination(data.meta.pagination);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // Smart pagination generator
    const getPageNumbers = () => {
        const { page, pageCount } = pagination;
        const delta = 1; // show 1 page before and after current
        let pages = [];

        // Always show first page
        if (page > 2) pages.push(1);
        if (page > 3) pages.push("...");

        // Pages around current
        for (let i = Math.max(1, page - delta); i <= Math.min(pageCount, page + delta); i++) {
            pages.push(i);
        }

        // Last page
        if (page < pageCount - 2) pages.push("...");
        if (page < pageCount - 1) pages.push(pageCount);

        return pages;
    };

    const pages = getPageNumbers();

    return (
        <>
            <div
                className={Style.Event_grid}
                data-aos="fade-up"
                data-aos-duration="800"
            >
                {loading ? (
                    <p>Loading events...</p>
                ) : (
                    events.map((event, index) => (
                        <div
                            key={event.id}
                            className={Style.card}
                            data-aos="zoom-in"
                            data-aos-delay={index * 150}
                            data-aos-duration="800"
                        >
                            <div
                                className={Style.imageWrapper}
                                data-aos="fade-up"
                                data-aos-delay={index * 150 + 100}
                                data-aos-duration="900"
                            >
                                <img
                                    src={
                                        process.env.NEXT_PUBLIC_STRAPI_ASSETS_BASE_URL +
                                        (event.poster
                                            ? event.poster.url
                                            : event.eventImages[0].url)
                                    }
                                    alt={
                                        event.poster?.alternativeText ||
                                        event.eventImages[0]?.alternativeText ||
                                        event.title ||
                                        "Event"
                                    }
                                />
                            </div>

                            <div
                                className={Style.content}
                                data-aos="fade-up"
                                data-aos-delay={index * 150 + 200}
                                data-aos-duration="1000"
                            >
                                <h3
                                    className={Style.title}
                                    data-aos="fade-right"
                                    data-aos-delay={index * 150 + 250}
                                >
                                    {event.title}
                                </h3>
                                <span
                                    className={Style.date}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 150 + 300}
                                >
                                    {event.startDate} - {event.endDate}
                                </span>
                                <Link
                                    href={"/events/" + event.slug}
                                    className={Style.link}
                                    data-aos="fade-left"
                                    data-aos-delay={index * 150 + 350}
                                >
                                    <RiArrowRightUpLine />
                                </Link>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {pagination.pageCount > 1 && (
                <nav
                    aria-label="Page navigation example"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="800"
                >
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${pagination.page === 1 ? "disabled" : ""}`}>
                            <button
                                className="page-link"
                                onClick={() => fetchEvents(pagination.page - 1)}
                                data-aos="fade-right"
                                data-aos-delay="100"
                            >
                                <RiArrowLeftSLine />
                            </button>
                        </li>

                        {pages.map((p, idx) => (
                            <li
                                key={idx}
                                className={`page-item ${p === pagination.page
                                        ? "active"
                                        : p === "..."
                                            ? "disabled"
                                            : ""
                                    }`}
                                data-aos="zoom-in"
                                data-aos-delay={idx * 100}
                            >
                                {p === "..." ? (
                                    <span className="page-link">...</span>
                                ) : (
                                    <button
                                        className="page-link"
                                        onClick={() => fetchEvents(p)}
                                    >
                                        {p}
                                    </button>
                                )}
                            </li>
                        ))}

                        <li
                            className={`page-item ${pagination.page === pagination.pageCount ? "disabled" : ""
                                }`}
                        >
                            <button
                                className="page-link"
                                onClick={() => fetchEvents(pagination.page + 1)}
                                data-aos="fade-left"
                                data-aos-delay="100"
                            >
                                <RiArrowRightSLine />
                            </button>
                        </li>
                    </ul>
                </nav>
            )}

        </>
    );
}

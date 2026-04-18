"use client";
import { useEffect, useState } from "react";
import { RiCheckboxCircleFill } from "@remixicon/react";
import Link from "next/link";

export default function ThankYou() {
    const [thankYouData, setThankYouData] = useState({ heading: "", content: "" });
    useEffect(() => {
        const data = sessionStorage.getItem("thankYouData");
        if (data) {
            setThankYouData(JSON.parse(data));
            sessionStorage.removeItem("thankYouData");
        }
    }, []);
    let heading = thankYouData.heading;
    let content = thankYouData.content;
    return (
        <div className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100 p-4">
            <RiCheckboxCircleFill
                size={100}
                className="text-success mb-4"
            />
            <h1 className="mb-2">
                {heading ? heading : "Thank You For Contacting Us"}
            </h1>
            <p className="mb-4">
                {content
                    ? content
                    : "We’ve received your message and our team will get back to you within 1 business day. We appreciate your interest!"}
            </p>
            <Link href="/" className="mbtn mbtn-primary">
                Go Back
            </Link>
        </div>
    );
}

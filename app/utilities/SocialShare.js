"use client";

import { RiFileCopyLine } from "@remixicon/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SocialShare() {
    const pathname = usePathname(); // current path
    const [currentUrl, setCurrentUrl] = useState("");

    // Get full URL from browser
    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentUrl(window.location.href);
        }
    }, []);

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
        x: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(currentUrl);
        alert("Blog URL copied to clipboard!");
    };

    return (
        <ul className="d-flex gap-2 list-unstyled">
            <li>
                <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <img src="../images/fb-icon.svg" alt="Share on Facebook" />
                </a>
            </li>
            <li>
                <a href={shareLinks.x} target="_blank" rel="noopener noreferrer">
                    <img src="../images/x-icon.svg" alt="Share on X" />
                </a>
            </li>
            <li>
                <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src="../images/lk-icon.svg" alt="Share on LinkedIn" />
                </a>
            </li>
            <li>
                <button
                    onClick={copyToClipboard}
                    style={{
                        background: "#e0e0e0",
                        border: "none",
                        padding: "8px",       
                        borderRadius: "50%",    
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    aria-label="Copy URL"
                >
                    <RiFileCopyLine size={20} />
                </button>
            </li>

        </ul>
    );
}

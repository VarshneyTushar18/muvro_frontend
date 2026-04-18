"use client";

import React from "react";
import styles from "./BreadcrumbStrip.module.css";
import { RiArrowRightDoubleLine } from "@remixicon/react";

const BreadcrumbStrip = ({ crumbs = [] }) => {
    if (!crumbs || crumbs.length === 0) return null;

    return (
        <nav className={styles.breadcrumb}>
            <div className="container">
                <ul>
                    {crumbs.map((crumb, index) => {
                        const isLast = index === crumbs.length - 1;
                        return (
                            <li key={index} className={isLast ? styles.active : ""}>
                                {isLast ? (
                                    <span>{crumb.label}</span>
                                ) : (
                                    <>
                                        <a href={crumb.link}>{crumb.label}</a>
                                        <RiArrowRightDoubleLine className={styles.separator} />
                                    </>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default BreadcrumbStrip;
"use client";

import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import BlogsCard from "../components/blogs/BlogsCard";
import Style from "./blogs.module.css";

export default function BlogGrid({ initialData }) {
  const [blogs, setBlogs] = useState(initialData.data);
  const [pagination, setPagination] = useState(initialData.meta.pagination);
  const [loading, setLoading] = useState(false);

  const fetchBlogs = async (page) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/blogs?page=${page}&pageSize=${pagination.pageSize}`);
      const data = await res.json();
      setBlogs(data.data);
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
      <div className={Style.Blog_grid}>
        {loading ? <p>Loading blogs...</p> : blogs.map((blog, index) => <BlogsCard key={index} blog={blog} />)}
      </div>

      {pagination.pageCount > 1 && (
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${pagination.page === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => fetchBlogs(pagination.page - 1)}>
                <RiArrowLeftSLine />
              </button>
            </li>

            {pages.map((p, idx) => (
              <li
                key={idx}
                className={`page-item ${p === pagination.page ? "active" : p === "..." ? "disabled" : ""}`}
              >
                {p === "..." ? (
                  <span className="page-link">...</span>
                ) : (
                  <button className="page-link" onClick={() => fetchBlogs(p)}>
                    {p}
                  </button>
                )}
              </li>
            ))}

            <li className={`page-item ${pagination.page === pagination.pageCount ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => fetchBlogs(pagination.page + 1)}>
                <RiArrowRightSLine />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

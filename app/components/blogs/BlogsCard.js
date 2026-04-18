import { RiCalendar2Line, RiLink } from "@remixicon/react";
import styles from "./BlogsCard.module.css";
import Link from "next/link";
function formatDate(dateString) {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase(); // APR
  const year = date.getFullYear();

  // Get ordinal for day
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

export default function BlogsCard({ blog }) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className={styles.card}
      data-aos="zoom-in"
      data-aos-delay={ 150}
      data-aos-duration="800"
    >
      <div className={styles.imageWrapper}>
        <img
          src={process.env.NEXT_PUBLIC_STRAPI_ASSETS_BASE_URL + blog.banner.url}
          alt={blog.banner.alternativeText ?? blog.title}
          className={styles.image}
        />
        <div className={styles.overlay}>
          <RiLink size={32} className={styles.linkIcon} />
        </div>
      </div>

      <div className={styles.meta}>
        <span className={styles.category}>{blog.blog_category.category}</span>
        <span className={styles.date}>
          <RiCalendar2Line size={16} className={styles.icon} />
          {formatDate(blog.publishedAt)}
        </span>
      </div>

      <h3 className={styles.title}>{blog.title}</h3>
    </Link>

  );
}

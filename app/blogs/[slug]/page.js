import { RiCalendar2Line, RiShareForwardLine } from "@remixicon/react";
import BreadcrumbStrip from "../../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import Style from "./singleblog.module.css";
import { renderBlock } from "blocks-html-renderer";
import SocialShare from "../../utilities/SocialShare";
import Link from "next/link";

async function fetchSlugs() {
    const res = await fetch(
        `${process.env.STRAPI_BACKEND_BASE_URL}/blogs?fields[0]=slug`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch blog slugs");
    }
    const data = await res.json();
    return data.data.map((item) => item.slug);
}
async function getBlog(slug) {
    const res = await fetch(
        `${process.env.STRAPI_BACKEND_BASE_URL}/blogs?filters[slug][$eq]=${slug}&populate=*`,
        { next: { revalidate: 60 } }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch blog');
    }

    const data = await res.json();
    return data.data[0];
}

export async function generateStaticParams() {
    const slugs = await fetchSlugs();
    return slugs.map((slug) => ({ slug }));
}

async function getRecentBlogs(currentSlug, limit = 3) {
    const res = await fetch(
        `${process.env.STRAPI_BACKEND_BASE_URL}/blogs?filters[slug][$ne]=${currentSlug}&sort[0]=publishedAt:desc&pagination[limit]=${limit}&populate=*`,
        { next: { revalidate: 60 } }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch recent blogs");
    }

    const data = await res.json();
    return data.data;
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

export default async function BlogSingle({ params }) {

    const { slug } = await params;
    const blog = await getBlog(slug);

    if (!blog) {
        return notFound();
    }

    const crumbs = [
        { label: "Home", link: "/" },
        { label: "Blogs", link: "/blogs" },
        { label: blog.title }
    ];
    const recentBlogs = await getRecentBlogs(slug, 3);
    return (
        <>
            <BreadcrumbStrip crumbs={crumbs} />

            <section className={Style.BlogSingle}>
                <div className="container">
                    <div className={Style.feature_card}>
                        <div className="row justify-content-center align-items-center">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className={Style.feature_image}>
                                    <img src={process.env.STRAPI_ASSETS_BASE_URL + blog.banner.url} alt={blog.banner.alternativeText ?? blog.title} />
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">
                                <div className={Style.feature_context}>
                                    <span className={Style.category}>{blog.blog_category.category}</span>
                                    <h1>{blog.title}</h1>
                                    <span className={Style.date}><RiCalendar2Line size={16} className={Style.icon} /> {formatDate(blog.publishedAt)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container pt-3 pb-3">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-4">
                            <div dangerouslySetInnerHTML={{ __html: renderBlock(blog.content) }} />
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-8">
                            <div className={Style.sidebar}>
                                <div className={Style.social_widget}>
                                    <h5> Share Blog <RiShareForwardLine /></h5>
                                    <SocialShare />
                                </div>

                                <div className={Style.recent_post_widget}>
                                    <h5>Recent Post</h5>
                                    <ul>
                                        {recentBlogs.map((item) => (
                                            <li key={item.id}>

                                                <div className={Style.post_img}>
                                                    <img
                                                        src={process.env.STRAPI_ASSETS_BASE_URL + item.banner.url}
                                                        alt={item.banner.alternativeText ?? item.title}
                                                    />
                                                </div>
                                                <div className={Style.post_content}>
                                                    <Link href={`/blogs/${item.slug}`} className={Style.recent_post_link}>
                                                    <h6>{item.title}</h6>
                                                </Link>
                                                <span>{formatDate(item.publishedAt)}</span>
                                            </div>
                                                
                                            </li>
                                        ))}

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

        </>

    );
}
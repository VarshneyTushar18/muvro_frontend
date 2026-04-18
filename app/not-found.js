import Link from "next/link";

export default function NotFound() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100 p-4 bg-light">
            {/* Image */}
            <img
                src="/images/not-found.webp"
                alt="Not Found"
                width={400}
                loading="lazy"
                decoding="async"
                className="img-fluid mb-4"
            />
 
            {/* Text */}
            <h1 className="display-5 fw-bold text-dark mb-2">Oops! Page Not Found</h1>
            <p className="text-muted mb-4">
                The page you are looking for might have been removed, had its name
                changed, or is temporarily unavailable.
            </p>

            {/* Button */}
            <Link href="/" className="mbtn mbtn-primary">
                Go Back Home
            </Link>
        </div>
    );
}

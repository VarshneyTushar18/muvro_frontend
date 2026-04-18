import styles from "./banner.module.css";

export default function Banner({ desktopBanner, tabletBanner, mobileBanner, alt = "Banner", loading = "lazy" }) {
    if (!desktopBanner) {
        console.error("⚠️ Banner component requires a desktopBanner prop.");
        return null;
    }

    return (
        <section className={styles.bannerSection}>
            <picture>
                {/* Mobile (up to 767px) */}
                {mobileBanner && (
                    <source srcSet={mobileBanner} media="(max-width: 767px)" />
                )}
                {/* Tablet (768px to 1023px) */}
                {tabletBanner && (
                    <source srcSet={tabletBanner} media="(max-width: 1023px)" />
                )}
                {/* Desktop (default / required) */}
                <img
                    src={desktopBanner}
                    alt={alt}
                    className={styles.bannerImage}
                    loading={loading}
                />
            </picture>
        </section>
    );
}

import styles from "./videoSection.module.css";

export default function VideoSection({ 
  videoUrl, 
  title = "Watch Video", 
  aosAnimation = "fade-up", 
  aosDuration = 1000 
}) {
  if (!videoUrl) {
    console.error("⚠️ VideoSection requires a valid videoUrl prop.");
    return null;
  }

  return (
    <section className={`${styles.videoSection} pt-0`}>
      <div className="container" data-aos={aosAnimation} data-aos-duration={aosDuration}>        
        <div className={styles.videoWrapper}>
          <iframe
            src={videoUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

// components/ChuteConfigurations.jsx
import styles from "./chuteConfigurations.module.css";

export default function ChuteConfigurations({ section }) {
  if (!section) return null; // handle missing data

  const { sectionHeader, items } = section;

  return (
    <section className={styles.chuteConfigurations}>
      <div className="container">
        <div className={styles.wrapper}>
          <span className="section-label-center">{sectionHeader.label}</span>
          <h2 className="text-center">{sectionHeader.heading}</h2>
          <p className="text-center">{sectionHeader.description}</p>
        </div>

        <div className={styles.gridview}>
          {items.map((item) => (
            <div key={item.id} className={styles.configcard}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

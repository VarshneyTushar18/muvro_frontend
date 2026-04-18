import styles from "./supported.module.css";

export default function SupportedTypes({ title, types }) {
  return (
    <section className={styles.supportedType}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className="text-center pb-3">{title}</h2>
        </div>

        <div className="row">
          {types.map((type, index) => (
            <div className="col-md-4 col-lg-3 mb-3" key={index}>
              <div className={styles.supportedTypeCard}>
                <img src={type.image} alt={type.heading} className={styles.image} />
                <h5>{type.heading}</h5>
                <p>{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

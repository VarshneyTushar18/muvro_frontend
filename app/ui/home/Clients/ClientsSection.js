import ClientsCarousel from "./ClientsCarousel";

export default function ClientsSection() {
  return (
    <section
      aria-labelledby="clients-title"
    >
      <div className="container text-center">
        <div data-aos="fade-up">
          <h2 id="clients-title">
            Trusted by <span>Industry Leaders</span>
          </h2>
          <p className="mt-3">
            Trusted by leading brands to deliver innovative solutions and drive
            success across industries.
          </p>
        </div>

        <div className="mt-5" data-aos="fade-up" data-aos-delay="150">
          <ClientsCarousel />
        </div>
      </div>
    </section>
  );
}

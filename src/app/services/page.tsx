import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services, categoryLabels, type ServiceCategory } from '@/data/services';
import ScrollReveal from '@/components/ScrollReveal';
import BookingCTA from '@/components/BookingCTA';

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description:
    'Explore our full menu of hair services — braids, color, cuts, treatments, styling, and extensions. View pricing, durations, and book your appointment.',
};

export default function ServicesPage() {
  const categories = Object.keys(categoryLabels) as ServiceCategory[];

  return (
    <>
      {/* Page Header */}
      <section className="page-header" id="services-header">
        <div className="container">
          <p className="subheading">What We Offer</p>
          <h1 className="heading-display page-header__title">
            Our <span className="text-gold">Services</span>
          </h1>
          <div className="gold-line" />
          <p className="page-header__text">
            From intricate braids to bold color transformations — every service
            delivered with artistry, precision, and care.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      {categories.map((category) => {
        const categoryServices = services.filter((s) => s.category === category);
        if (categoryServices.length === 0) return null;

        return (
          <section
            key={category}
            className="section"
            id={category}
          >
            <div className="container">
              <ScrollReveal>
                <div className="section-intro">
                  <p className="subheading">{categoryLabels[category]}</p>
                  <h2 className="heading-section">{categoryLabels[category]}</h2>
                  <div className="gold-line" />
                </div>
              </ScrollReveal>

              <div className="grid grid--3 reveal-stagger">
                {categoryServices.map((service, i) => (
                  <ScrollReveal key={service.id} delay={i * 100}>
                    <div className="service-card" id={`service-${service.id}`}>
                      <div className="service-card__image-wrap">
                        <Image
                          src={service.image}
                          alt={service.name}
                          width={600}
                          height={375}
                          quality={80}
                        />
                      </div>
                      <div className="service-card__body">
                        <h3 className="service-card__name">{service.name}</h3>
                        <p className="service-card__desc">{service.description}</p>
                        <div className="service-card__meta">
                          <span className="service-card__price">
                            {service.priceTo
                              ? `$${service.priceFrom} – $${service.priceTo}`
                              : `From $${service.priceFrom}`}
                          </span>
                          <span className="service-card__duration">
                            {service.duration}
                          </span>
                        </div>
                        <Link
                          href="/book"
                          className="btn btn--primary btn--sm mt-md"
                          style={{ width: '100%' }}
                        >
                          Book This Service
                        </Link>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <BookingCTA
        title="Found Your Service?"
        text="Book now and let our talented stylists bring your vision to life."
      />
    </>
  );
}

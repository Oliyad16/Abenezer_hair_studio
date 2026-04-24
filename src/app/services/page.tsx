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

      {/* Featured Single Image */}
      <section className="section section--sm pt-0" id="services-featured-image">
        <div className="container">
          <ScrollReveal>
            <div style={{ position: 'relative', width: '100%', height: '500px', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
              <Image
                src="/images/portfolio/img_0549.jpeg"
                alt="Elegant hair styling at Abenezer Hair Studio"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                quality={90}
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Categories */}
      {categories.map((category) => {
        const categoryServices = services.filter((s) => s.category === category);
        if (categoryServices.length === 0) return null;

        return (
          <section
            key={category}
            className="section pt-0"
            id={category}
          >
            <div className="container">
              <ScrollReveal>
                <div className="section-intro pl-0 text-left" style={{ textAlign: 'left', marginBottom: 'var(--space-xl)' }}>
                  <p className="subheading">{categoryLabels[category]}</p>
                  <h2 className="heading-section">{categoryLabels[category]}</h2>
                  <div className="gold-line gold-line--left" />
                </div>
              </ScrollReveal>

              <div className="grid grid--2 reveal-stagger">
                {categoryServices.map((service, i) => (
                  <ScrollReveal key={service.id} delay={i * 50}>
                    <div className="service-card p-xl" id={`service-${service.id}`} style={{ padding: 'var(--space-xl)', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-lg)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div className="service-card__body" style={{ padding: 0, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <h3 className="service-card__name" style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>{service.name}</h3>
                        <p className="service-card__desc" style={{ flexGrow: 1, marginBottom: 'var(--space-md)' }}>{service.description}</p>
                        <div className="service-card__meta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)', fontWeight: 500, color: 'var(--color-accent)' }}>
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
                          className="btn btn--outline btn--sm mt-auto"
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

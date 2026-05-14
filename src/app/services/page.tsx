import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services, categoryLabels, type ServiceCategory } from '@/data/services';
import { business } from '@/data/business';
import ScrollReveal from '@/components/ScrollReveal';
import BookingCTA from '@/components/BookingCTA';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description:
    'Explore our full menu of hair services — braids, color, cuts, treatments, styling, and extensions. View pricing, durations, and book your appointment.',
};

export default function ServicesPage() {
  const categories = Object.keys(categoryLabels) as ServiceCategory[];
  const totalServices = services.length;
  const minPrice = Math.min(...services.filter(s => s.priceFrom > 0).map(s => s.priceFrom));
  const maxPrice = Math.max(...services.filter(s => s.priceTo).map(s => s.priceTo!));
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: business.website },
    { name: 'Services', url: `${business.website}/services` },
  ]);
  const serviceSchema = generateServiceSchema();

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

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

      {/* Answer-First Definition (GEO Agent 2) */}
      <section className="section section--sm pt-0" id="services-overview">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="heading-section" style={{ fontSize: 'var(--text-lg)' }}>
              Hair Services at Abenezer Hair Studio
            </h2>
            <p className="body-text" style={{ lineHeight: 1.8 }}>
              Abenezer Hair Studio provides {totalServices}+ professional hair services
              across {categories.length} categories, including cuts, color and highlights,
              texture services, scalp treatments, natural hair styling, bridal styling, and
              à la carte add-ons. Pricing ranges from ${minPrice} to ${maxPrice}, with
              appointment durations from 15 minutes to 4 hours depending on the service.
              All services are performed one-on-one by owner and lead stylist Rodas G.
            </p>

            {/* Service Overview Table (GEO Agent 3 — Stats) */}
            <div style={{ overflowX: 'auto', marginTop: 'var(--space-lg)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--color-accent)', textAlign: 'left' }}>
                    <th style={{ padding: 'var(--space-sm) var(--space-md)' }}>Category</th>
                    <th style={{ padding: 'var(--space-sm) var(--space-md)' }}># Services</th>
                    <th style={{ padding: 'var(--space-sm) var(--space-md)' }}>Price Range</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((cat) => {
                    const catServices = services.filter(s => s.category === cat);
                    const catMin = Math.min(...catServices.filter(s => s.priceFrom > 0).map(s => s.priceFrom));
                    const catMaxPrices = catServices.filter(s => s.priceTo).map(s => s.priceTo!);
                    const catMax = catMaxPrices.length > 0 ? Math.max(...catMaxPrices) : catMin;
                    return (
                      <tr key={cat} style={{ borderBottom: '1px solid var(--color-border, rgba(255,255,255,0.1))' }}>
                        <td style={{ padding: 'var(--space-sm) var(--space-md)', fontWeight: 500 }}>
                          <a href={`#${cat}`} style={{ color: 'var(--color-accent)' }}>{categoryLabels[cat]}</a>
                        </td>
                        <td style={{ padding: 'var(--space-sm) var(--space-md)' }}>{catServices.length}</td>
                        <td style={{ padding: 'var(--space-sm) var(--space-md)' }}>
                          {catMax > catMin ? `$${catMin} – $${catMax}` : `From $${catMin}`}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Single Image */}
      <section className="section section--sm pt-0" id="services-featured-image">
        <div className="container">
          <ScrollReveal>
            <div style={{ position: 'relative', width: '100%', height: '500px', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
              <Image
                src="/images/rodas-owner.jpeg"
                alt="Rodas styling a client at Abenezer Hair Studio"
                fill
                style={{ objectFit: 'cover', objectPosition: 'right' }}
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

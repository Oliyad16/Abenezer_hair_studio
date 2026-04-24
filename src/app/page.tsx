import Image from 'next/image';
import Link from 'next/link';
import { business } from '@/data/business';
import { services } from '@/data/services';
import ScrollReveal from '@/components/ScrollReveal';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import BookingCTA from '@/components/BookingCTA';
import { ImageExpansion } from '@/components/blocks/demo';
export default function HomePage() {
  const featuredServices = services.filter((s) => s.featured);
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - business.yearEstablished;

  return (
    <>
      {/* ── Scroll Expansion Hero ────────────────────────────────────────── */}
      <ImageExpansion />

      {/* ── Trust Bar ───────────────────────────────────── */}
      <section className="trust-bar" id="trust-bar">
        <div className="container">
          <div className="trust-bar__inner">
            <div className="trust-bar__item">
              <span className="trust-bar__icon">♥</span>
              <span>Intimate One-on-One Studio</span>
            </div>
            <div className="trust-bar__divider" />
            <div className="trust-bar__item">
              <span className="trust-bar__icon">★</span>
              <span>5-Star Rated</span>
            </div>
            <div className="trust-bar__divider" />
            <div className="trust-bar__item">
              <span className="trust-bar__icon">✦</span>
              <span>{yearsInBusiness}+ Years of Care</span>
            </div>
            <div className="trust-bar__divider" />
            <div className="trust-bar__item">
              <span className="trust-bar__icon">✦</span>
              <span>All Hair Types Welcome</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Experience ──────────────────────────────── */}
      <section className="section" id="the-experience">
        <div className="container">
          <ScrollReveal>
            <div className="section-intro">
              <p className="subheading">The Abenezer Difference</p>
              <h2 className="heading-section">
                Untangle Your Hair.<br />
                <span className="text-gold">Unwind Your Mind.</span>
              </h2>
              <div className="gold-line" />
              <p className="body-text">
                At Abenezer, your appointment is never rushed. It&apos;s never impersonal.
                This is your time — to breathe, to talk, to be heard, and to leave
                feeling lighter in every way.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid--3 reveal-stagger">
            {[
              {
                icon: '♥',
                title: 'You Are Heard',
                text: 'This isn\'t assembly-line service. It\'s a genuine, one-on-one conversation where you\'re not just a client — you\'re a person who matters.',
              },
              {
                icon: '✦',
                title: 'You Are Cared For',
                text: 'From the moment you sit down to the moment you leave, every detail is intentional. Your hair, your comfort, your peace of mind — all of it.',
              },
              {
                icon: '★',
                title: 'You Leave Lighter',
                text: 'It\'s not just about how your hair looks walking out. It\'s about how you feel. Renewed, confident, and reminded that someone cares.',
              },
            ].map((value, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card" style={{ padding: 'var(--space-2xl)', textAlign: 'center' }}>
                  <span
                    style={{
                      fontSize: '2.5rem',
                      color: 'var(--color-accent)',
                      display: 'block',
                      marginBottom: 'var(--space-md)',
                    }}
                  >
                    {value.icon}
                  </span>
                  <h3 className="heading-card mb-md">{value.title}</h3>
                  <p className="body-text" style={{ maxWidth: 'none', margin: '0 auto' }}>
                    {value.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Services ───────────────────────────── */}
      <section className="section section--cream" id="featured-services">
        <div className="container">
          <ScrollReveal>
            <div className="section-intro">
              <p className="subheading">Our Specialties</p>
              <h2 className="heading-section">Services Crafted with Care</h2>
              <div className="gold-line" />
              <p className="body-text">
                Whether it&apos;s a transformative color, your wedding day styling, or
                simply a moment of care for yourself — every service is personal.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid--4 reveal-stagger">
            {featuredServices.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 100}>
                <div className="service-card" id={`service-card-${service.id}`}>
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
                    <p className="service-card__category">
                      {service.category}
                    </p>
                    <h3 className="service-card__name">{service.name}</h3>
                    <p className="service-card__desc">{service.description}</p>
                    <div className="service-card__meta">
                      <span className="service-card__price">
                        From ${service.priceFrom}
                      </span>
                      <span className="service-card__duration">
                        {service.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-2xl">
            <Link href="/services" className="btn btn--outline" id="view-all-services">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Preview ───────────────────────────────── */}
      <section className="section" id="about-preview">
        <div className="container">
          <div className="about-split">
            <ScrollReveal direction="left">
              <div className="about-split__image" style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', aspectRatio: '896/1074', position: 'relative' }}>
                <Image
                  src="/images/Rodi_Image.jpeg"
                  alt="Rodas, Owner of Abenezer Hair Studio"
                  fill
                  quality={100}
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <p className="subheading">Meet Rodas</p>
                <h2 className="heading-section">
                  A Stylist Who<br />
                  <span className="text-gold">Truly Cares</span>
                </h2>
                <div className="gold-line gold-line--left" />
                <p className="body-text mb-lg">
                  Rodas didn&apos;t just open a hair studio. She created a space where
                  people can come as they are — stressed, tired, celebrating, or
                  just needing someone who listens. For over {yearsInBusiness} years,
                  Abenezer Hair Studio has been that space for the Wheaton and
                  Silver Spring community.
                </p>
                <p className="body-text mb-xl">
                  In this small, intimate studio, there are no distractions.
                  It&apos;s just you and Rodas — your hair being transformed while
                  the weight on your shoulders gets a little lighter.
                  That&apos;s the Abenezer experience.
                </p>
                <Link href="/about" className="btn btn--outline" id="about-learn-more">
                  Learn More About Rodas →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Gallery Preview ─────────────────────────────── */}
      <section className="section section--warm" id="gallery-preview">
        <div className="container">
          <ScrollReveal>
            <div className="section-intro">
              <p className="subheading">Our Work</p>
              <h2 className="heading-section">See the Artistry</h2>
              <div className="gold-line" />
              <p className="body-text">
                Every style tells a story. Browse our latest transformations.
              </p>
            </div>
          </ScrollReveal>

          <div className="gallery-grid">
            {[
              { src: '/images/portfolio/img_0538.jpeg', alt: 'Precision hair tailoring' },
              { src: '/images/portfolio/fullsizerender__10_.jpeg', alt: 'Gorgeous color finish' },
              { src: '/images/portfolio/img_0555.jpeg', alt: 'Protective styles' },
              { src: '/images/portfolio/fullsizerender_12.jpeg', alt: 'Vibrant highlight transformation' },
              { src: '/images/portfolio/img_0549.jpeg', alt: 'Beautiful bridal design' },
            ].map((img, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="gallery-grid__item">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={600}
                    quality={80}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-2xl">
            <Link href="/gallery" className="btn btn--outline" id="view-full-gallery">
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────── */}
      <section className="section section--accent" id="testimonials-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-intro">
              <p className="subheading">Client Love</p>
              <h2 className="heading-section">More Than Just Hair</h2>
              <div className="gold-line" />
              <p className="body-text">
                Don&apos;t just take our word for it. Here&apos;s what our community says
                about the Abenezer experience.
              </p>
            </div>
          </ScrollReveal>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ── Booking CTA ─────────────────────────────────── */}
      <BookingCTA
        title="Ready to Feel the Difference?"
        text="Book your appointment and experience a salon that cares about all of you — not just your hair."
        buttonText="Book Your Experience"
      />

      {/* ── Location & Hours ────────────────────────────── */}
      <section className="section section--cream" id="location-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-intro">
              <p className="subheading">Visit the Studio</p>
              <h2 className="heading-section">Find Us in Wheaton</h2>
              <div className="gold-line" />
            </div>
          </ScrollReveal>

          <div className="location-grid">
            <ScrollReveal direction="left">
              <div className="map-embed">
                <iframe
                  src={business.googleMapsEmbed}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Abenezer Hair Studio location"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <h3 className="heading-card mb-lg">
                  {business.name}
                </h3>
                <p className="body-text mb-lg" style={{ maxWidth: 'none' }}>
                  Studio 116 inside Salon Plaza — a private, intimate space
                  designed for your comfort and care.
                </p>
                <div className="footer__contact-item mb-md">
                  <span className="footer__contact-icon">📍</span>
                  <span>{business.address.full}</span>
                </div>
                <div className="footer__contact-item mb-md">
                  <span className="footer__contact-icon">📞</span>
                  <a href={business.phoneHref}>{business.phone}</a>
                </div>
                <div className="footer__contact-item mb-xl">
                  <span className="footer__contact-icon">✉️</span>
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                </div>

                <h4 className="heading-card mb-md" style={{ fontSize: '1rem' }}>
                  Hours of Operation
                </h4>
                <div className="hours-table">
                  {business.hours.map((h) => (
                    <div key={h.day} className="hours-row">
                      <span className="hours-row__day">{h.day}</span>
                      <span className="hours-row__time">
                        {h.open === 'Closed' ? 'Closed' : `${h.open} – ${h.close}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import { useState } from 'react';
import { business } from '@/data/business';
import ScrollReveal from '@/components/ScrollReveal';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would POST to an API route or Formspree
    setSubmitted(true);
  };

  return (
    <>
      <section className="page-header" id="contact-header">
        <div className="container">
          <p className="subheading">Get in Touch</p>
          <h1 className="heading-display page-header__title">
            Contact <span className="text-gold">Us</span>
          </h1>
          <div className="gold-line" />
          <p className="page-header__text">
            Have a question? Want to schedule an appointment? We&apos;d love to hear
            from you.
          </p>
        </div>
      </section>

      <section className="section" id="contact-section">
        <div className="container">
          <div className="location-grid">
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div>
                <h2 className="heading-section mb-lg">Send Us a Message</h2>

                {submitted ? (
                  <div
                    className="glass-card"
                    style={{
                      padding: 'var(--space-3xl)',
                      textAlign: 'center',
                    }}
                  >
                    <span style={{ fontSize: '3rem', display: 'block', marginBottom: 'var(--space-md)' }}>✓</span>
                    <h3 className="heading-card mb-md">Message Sent!</h3>
                    <p className="body-text" style={{ margin: '0 auto' }}>
                      Thank you for reaching out. We&apos;ll get back to you within 24
                      hours. For immediate assistance, call us at{' '}
                      <a
                        href={business.phoneHref}
                        style={{ color: 'var(--color-accent-gold)' }}
                      >
                        {business.phone}
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} id="contact-form">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-input"
                        placeholder="Your name"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                      />
                    </div>

                    <div className="grid grid--2">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-input"
                          placeholder="your@email.com"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="form-input"
                          placeholder="(301) 555-0123"
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState({ ...formState, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="service" className="form-label">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        className="form-input"
                        value={formState.service}
                        onChange={(e) =>
                          setFormState({ ...formState, service: e.target.value })
                        }
                      >
                        <option value="">Select a service (optional)</option>
                        <option value="braids">Braids &amp; Locs</option>
                        <option value="color">Color</option>
                        <option value="cuts">Cuts</option>
                        <option value="treatments">Treatments</option>
                        <option value="styling">Styling</option>
                        <option value="extensions">Extensions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        className="form-textarea"
                        placeholder="Tell us about what you're looking for..."
                        required
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn--primary btn--lg"
                      id="contact-submit"
                      style={{ width: '100%' }}
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Contact Info & Map */}
            <ScrollReveal direction="right">
              <div>
                <h2 className="heading-section mb-lg">Visit Our Studio</h2>

                <div className="map-embed mb-xl">
                  <iframe
                    src={business.googleMapsEmbed}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Abenezer Hair Studio location"
                  />
                </div>

                <div className="glass-card" style={{ padding: 'var(--space-xl)' }}>
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

                  <h3
                    className="heading-card mb-md"
                    style={{ fontSize: '1rem' }}
                  >
                    Hours of Operation
                  </h3>
                  <div className="hours-table">
                    {business.hours.map((h) => (
                      <div key={h.day} className="hours-row">
                        <span className="hours-row__day">{h.day}</span>
                        <span className="hours-row__time">
                          {h.open === 'Closed'
                            ? 'Closed'
                            : `${h.open} – ${h.close}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-xl">
                  <h3
                    className="heading-card mb-md"
                    style={{ fontSize: '1rem' }}
                  >
                    Follow Us
                  </h3>
                  <div className="footer__social">
                    <a
                      href={business.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__social-link"
                      aria-label="Facebook"
                    >
                      f
                    </a>
                    <a
                      href={business.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__social-link"
                      aria-label="Instagram"
                    >
                      IG
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import { business } from '@/data/business';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="site-footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div>
            <div className="footer__brand">
              Abenezer <span>Hair Studio</span>
            </div>
            <p className="footer__description">
              An intimate, one-on-one hair studio in Wheaton, Maryland.
              More than a salon — a space where your hair and your heart
              are cared for.
            </p>
            <div className="footer__social">
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Facebook"
                id="footer-facebook"
              >
                f
              </a>
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
                id="footer-instagram"
              >
                IG
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer__heading">Quick Links</h3>
            <div className="footer__links">
              <Link href="/" className="footer__link">Home</Link>
              <Link href="/services" className="footer__link">Services</Link>
              <Link href="/about" className="footer__link">About Rodas</Link>
              <Link href="/gallery" className="footer__link">Gallery</Link>
              <Link href="/book" className="footer__link">Book Now</Link>
              <Link href="/contact" className="footer__link">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer__heading">Services</h3>
            <div className="footer__links">
              <Link href="/services#color" className="footer__link">Color &amp; Highlights</Link>
              <Link href="/services#cuts" className="footer__link">Cuts &amp; Shape</Link>
              <Link href="/services#styling" className="footer__link">Styling &amp; Blowouts</Link>
              <Link href="/services#treatments" className="footer__link">Treatments &amp; Care</Link>
              <Link href="/services#bridal" className="footer__link">Bridal &amp; Special Occasions</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer__heading">Visit the Studio</h3>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📍</span>
              <span>{business.address.full}</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📞</span>
              <a href={business.phoneHref}>{business.phone}</a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">✉️</span>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </div>
            <div className="footer__contact-item" style={{ marginTop: '1rem' }}>
              <span className="footer__contact-icon">🕐</span>
              <span>Mon–Fri 9AM–7PM · Sat 8AM–6PM</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            © {currentYear} {business.name}. All rights reserved.
          </div>
          <div className="footer__credit">
            Website by <a href="#">Rodas Digital</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { business } from '@/data/business';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`navbar ${scrolled || pathname !== '/' ? 'navbar--solid' : 'navbar--transparent'}`}
        id="main-nav"
      >
        <div className="navbar__inner">
          <Link href="/" className="navbar__logo" id="nav-logo">
            Abenezer <span>Hair Studio</span>
          </Link>

          <div className="navbar__links">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`navbar__link ${pathname === link.href ? 'navbar__link--active' : ''}`}
                id={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/book" className="btn btn--primary btn--sm navbar__cta" id="nav-book-btn">
              Book Now
            </Link>
          </div>

          <button
            className={`navbar__toggle ${mobileOpen ? 'navbar__toggle--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="nav-toggle"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`navbar__link ${pathname === link.href ? 'navbar__link--active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/book"
          className="btn btn--primary"
          onClick={() => setMobileOpen(false)}
        >
          Book Now
        </Link>
        <a href={`tel:${business.phone.replace(/\D/g, '')}`} className="navbar__link">
          Call {business.phone}
        </a>
      </div>
    </>
  );
}

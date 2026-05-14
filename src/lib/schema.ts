import { business } from '@/data/business';
import { services } from '@/data/services';
import { team } from '@/data/team';

// ── Core HairSalon Schema (Homepage) ────────────────────────────
export function generateHairSalonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    '@id': `${business.website}/#org`,
    name: business.name,
    description: business.description,
    image: `${business.website}/images/hero/hero-bg.png`,
    url: business.website,
    telephone: business.phone,
    email: business.email,
    priceRange: business.priceRange,
    foundingDate: `${business.yearEstablished}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Wheaton',
        containedInPlace: {
          '@type': 'State',
          name: 'Maryland',
        },
      },
      {
        '@type': 'City',
        name: 'Silver Spring',
        containedInPlace: {
          '@type': 'State',
          name: 'Maryland',
        },
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Montgomery County, Maryland',
      },
    ],
    openingHoursSpecification: business.hours
      .filter((h) => h.open !== 'Closed')
      .map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.day,
        opens: convertTo24Hour(h.open),
        closes: convertTo24Hour(h.close),
      })),
    sameAs: Object.values(business.social),
    founder: {
      '@type': 'Person',
      '@id': `${business.website}/#owner`,
      name: team[0]?.name || 'Rodas G.',
      jobTitle: team[0]?.title || 'Owner & Lead Stylist',
      knowsAbout: team[0]?.specialties || ['Color & Highlights', 'Bridal Styling', 'All Hair Types', 'Silk Press'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Hair Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        '@id': `${business.website}/#offer-${s.id}`,
        itemOffered: {
          '@type': 'Service',
          '@id': `${business.website}/#service-${s.id}`,
          name: s.name,
          description: s.description,
          provider: {
            '@id': `${business.website}/#org`,
          },
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: s.priceFrom,
          ...(s.priceTo ? { maxPrice: s.priceTo } : {}),
        },
      })),
    },
  };
}

// ── Person Schema (About page) ──────────────────────────────────
export function generatePersonSchema() {
  const member = team[0];
  if (!member) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${business.website}/#owner`,
    name: member.name,
    jobTitle: member.title,
    description: member.bio,
    knowsAbout: member.specialties,
    worksFor: {
      '@id': `${business.website}/#org`,
    },
    image: `${business.website}${member.image}`,
  };
}

// ── FAQ Schema ──────────────────────────────────────────────────
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ── Breadcrumb Schema ───────────────────────────────────────────
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ── Service Category Schema (Services page) ─────────────────────
export function generateServiceSchema() {
  const categoryMap = new Map<string, typeof services>();
  services.forEach((s) => {
    const existing = categoryMap.get(s.category) || [];
    existing.push(s);
    categoryMap.set(s.category, existing);
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Hair Services at Abenezer Hair Studio',
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        '@id': `${business.website}/#service-${s.id}`,
        name: s.name,
        description: s.description,
        provider: {
          '@id': `${business.website}/#org`,
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: s.priceFrom,
          ...(s.priceTo ? { priceSpecification: { '@type': 'PriceSpecification', minPrice: s.priceFrom, maxPrice: s.priceTo, priceCurrency: 'USD' } } : {}),
        },
      },
    })),
  };
}

// ── Helper ──────────────────────────────────────────────────────
function convertTo24Hour(time: string): string {
  const [timePart, ampm] = time.split(' ');
  const [hours, minutes] = timePart.split(':').map(Number);
  let h = hours;
  if (ampm === 'PM' && h !== 12) h += 12;
  if (ampm === 'AM' && h === 12) h = 0;
  return `${h.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

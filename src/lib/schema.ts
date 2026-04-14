import { business } from '@/data/business';
import { services } from '@/data/services';

export function generateHairSalonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: business.name,
    description: business.description,
    image: `${business.website}/images/hero/hero-bg.png`,
    '@id': `${business.website}/`,
    url: business.website,
    telephone: business.phone,
    priceRange: business.priceRange,
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
    openingHoursSpecification: business.hours
      .filter((h) => h.open !== 'Closed')
      .map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.day,
        opens: convertTo24Hour(h.open),
        closes: convertTo24Hour(h.close),
      })),
    sameAs: Object.values(business.social),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Hair Services',
      itemListElement: services
        .filter((s) => s.featured)
        .map((s) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: s.name,
            description: s.description,
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

function convertTo24Hour(time: string): string {
  const [timePart, ampm] = time.split(' ');
  const [hours, minutes] = timePart.split(':').map(Number);
  let h = hours;
  if (ampm === 'PM' && h !== 12) h += 12;
  if (ampm === 'AM' && h === 12) h = 0;
  return `${h.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

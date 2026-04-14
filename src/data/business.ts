export const business = {
  name: 'Abenezer Hair Studio',
  tagline: 'Where Your Hair — and Your Heart — Are Cared For',
  description:
    'Abenezer Hair Studio is an intimate, one-on-one hair studio in Wheaton, Maryland. More than a salon — a sanctuary where you\'re heard, cared for, and leave feeling lighter. Specializing in color, bridal styling, silk press, and all hair types.',
  phone: '(301) 933-6295',
  phoneHref: 'tel:+13019336295',
  email: 'info@abenezerhair.com',
  address: {
    street: '11160 Veirs Mill Rd, Studio 116',
    city: 'Wheaton',
    state: 'MD',
    zip: '20902',
    full: '11160 Veirs Mill Rd, Studio 116, Wheaton, MD 20902',
  },
  geo: {
    latitude: 39.0396,
    longitude: -77.0558,
  },
  hours: [
    { day: 'Monday', open: '9:00 AM', close: '7:00 PM' },
    { day: 'Tuesday', open: '9:00 AM', close: '7:00 PM' },
    { day: 'Wednesday', open: '9:00 AM', close: '7:00 PM' },
    { day: 'Thursday', open: '9:00 AM', close: '8:00 PM' },
    { day: 'Friday', open: '9:00 AM', close: '8:00 PM' },
    { day: 'Saturday', open: '8:00 AM', close: '6:00 PM' },
    { day: 'Sunday', open: 'Closed', close: 'Closed' },
  ],
  social: {
    facebook: 'https://www.facebook.com/AbenezerHairStudio',
    instagram: 'https://www.instagram.com/abenezerhair',
  },
  bookingUrl: '#book',
  website: 'https://abenezerhair.com',
  yearEstablished: 2010,
  priceRange: '$$',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.5!2d-77.056!3d39.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDAyJzIyLjYiTiA3N8KwMDMnMjAuOSJX!5e0!3m2!1sen!2sus!4v1',
} as const;

export type Business = typeof business;

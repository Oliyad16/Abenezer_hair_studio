import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateHairSalonSchema } from '@/lib/schema';
import { business } from '@/data/business';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${business.name} | Intimate Hair Studio in Wheaton, MD`,
    template: `%s | ${business.name}`,
  },
  description: business.description,
  keywords: [
    'hair salon Wheaton MD',
    'intimate hair studio Silver Spring',
    'one on one hair salon',
    'hair color Wheaton',
    'bridal hair stylist Maryland',
    'silk press Wheaton',
    'personalized hair care',
    'hair salon Montgomery County',
    'Abenezer Hair Studio',
    'Rodas hair stylist',
  ],
  authors: [{ name: business.name }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: business.website,
    siteName: business.name,
    title: `${business.name} | Where Your Hair — and Your Heart — Are Cared For`,
    description: business.description,
    images: [
      {
        url: `${business.website}/images/hero/hero-bg.png`,
        width: 1200,
        height: 630,
        alt: `${business.name} — Wheaton, Maryland`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${business.name} | Intimate Hair Studio in Wheaton, MD`,
    description: business.description,
    images: [`${business.website}/images/hero/hero-bg.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0C0A09',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = generateHairSalonSchema();

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

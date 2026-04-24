import type { Metadata } from 'next';
import GalleryGrid from '@/components/GalleryGrid';
import ScrollReveal from '@/components/ScrollReveal';
import BookingCTA from '@/components/BookingCTA';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse our portfolio of braids, color, cuts, styling, and hair transformations. See the artistry of Abenezer Hair Studio.',
};

const galleryImages = [
  { src: '/images/portfolio/img_0538.jpeg', alt: 'Precision haircut', category: 'Cuts' },
  { src: '/images/portfolio/fullsizerender__10_.jpeg', alt: 'Beautiful full color transformation', category: 'Color / Highlights' },
  { src: '/images/portfolio/img_0549.jpeg', alt: 'Elegant bridal updo', category: 'Bridal & Events' },
  { src: '/images/portfolio/img_0833.jpeg', alt: 'Sleek texture finish', category: 'Spiral & Texture' },
  { src: '/images/portfolio/img_0622.jpeg', alt: 'Deep conditioning and care', category: 'Treatments' },
  { src: '/images/portfolio/img_0555.jpeg', alt: 'Natural protective style', category: 'Natural Styling' },
  { src: '/images/portfolio/fullsizerender__5_.jpeg', alt: 'Expert clip-in extensions blending', category: 'À la carte' },

  { src: '/images/portfolio/img_0550.jpeg', alt: 'Men’s haircut detail', category: 'Cuts' },
  { src: '/images/portfolio/fullsizerender__13_.jpeg', alt: 'Rich color processing', category: 'Color / Highlights' },
  { src: '/images/portfolio/img_0541.jpeg', alt: 'Bridal hair styling trial', category: 'Bridal & Events' },
  { src: '/images/portfolio/img_0836.jpeg', alt: 'Relaxer touch up results', category: 'Spiral & Texture' },
  { src: '/images/portfolio/img_0567.jpeg', alt: 'Scalp oil and wrap', category: 'Treatments' },
  { src: '/images/portfolio/img_0833.jpeg', alt: 'Twist styles for natural hair', category: 'Natural Styling' },

  { src: '/images/portfolio/img_0552.jpeg', alt: 'Gentle layer and styling', category: 'Cuts' },
  { src: '/images/portfolio/fullsizerender_12.jpeg', alt: 'Stunning full highlights', category: 'Color / Highlights' },
  { src: '/images/portfolio/img_0551.jpeg', alt: 'Bridesmaids elegant updo', category: 'Bridal & Events' },
  { src: '/images/portfolio/img_0837.jpeg', alt: 'Texturizer definition', category: 'Spiral & Texture' },
  { src: '/images/portfolio/img_0716.jpeg', alt: 'Spiral curl treatment', category: 'Treatments' },
  { src: '/images/portfolio/img_0620.jpeg', alt: 'Formal event updo styling', category: 'Bridal & Events' },

  { src: '/images/portfolio/img_0564.jpeg', alt: 'Wash, set, and blowout', category: 'Cuts' },
  { src: '/images/portfolio/fullsizerender__14_.jpeg', alt: 'Seamless balayage gradient', category: 'Color / Highlights' },
  { src: '/images/portfolio/img_0618.jpeg', alt: 'Flat iron straight finish', category: 'Cuts' },
  { src: '/images/portfolio/fullsizerender_6.jpeg', alt: 'Smooth keratin treatment', category: 'Spiral & Texture' },
  { src: '/images/portfolio/fullsizerender_17.jpeg', alt: 'Partial highlights detail', category: 'Color / Highlights' },
  { src: '/images/portfolio/img_0847.png', alt: 'Toner gloss vibrancy', category: 'Color / Highlights' },
];

const categories = [
  'Cuts',
  'Color / Highlights',
  'Spiral & Texture',
  'Treatments',
  'Natural Styling',
  'À la carte',
  'Bridal & Events',
];

export default function GalleryPage() {
  return (
    <>
      <section className="page-header" id="gallery-header">
        <div className="container">
          <p className="subheading">Our Portfolio</p>
          <h1 className="heading-display page-header__title">
            The <span className="text-gold">Gallery</span>
          </h1>
          <div className="gold-line" />
          <p className="page-header__text">
            Every style tells a story. Browse our latest work and get inspired
            for your next transformation.
          </p>
        </div>
      </section>

      <section className="section" id="gallery-section">
        <div className="container">
          <ScrollReveal>
            <GalleryGrid images={galleryImages} categories={categories} />
          </ScrollReveal>
        </div>
      </section>

      <BookingCTA
        title="Love What You See?"
        text="Book your appointment and let us create your next look."
      />
    </>
  );
}

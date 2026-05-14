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
  // ── Cuts ───────────────────────────────────────────
  { src: '/images/portfolio/img_0538.jpeg', alt: 'Precision haircut transformation', category: 'Cuts' },
  { src: '/images/portfolio/img_0550.jpeg', alt: "Men's haircut detail", category: 'Cuts' },
  { src: '/images/portfolio/img_0552.jpeg', alt: 'Gentle layered cut and styling', category: 'Cuts' },
  { src: '/images/portfolio/img_0564.jpeg', alt: 'Wash, set, and blowout styling', category: 'Cuts' },
  { src: '/images/portfolio/img_0618.jpeg', alt: 'Flat iron straight finish', category: 'Cuts' },
  { src: '/images/portfolio/img_0620.jpeg', alt: 'Elegant updo styling', category: 'Cuts' },
  { src: '/images/portfolio/cut_fsr2.jpg', alt: 'Precision cut with volume', category: 'Cuts' },
  { src: '/images/portfolio/cut_fsr5.jpg', alt: 'Layered blowout finish', category: 'Cuts' },
  { src: '/images/portfolio/cut_fsr7.jpg', alt: 'Fresh shape and style', category: 'Cuts' },
  { src: '/images/portfolio/cut_1787.jpg', alt: 'Short cut with texture', category: 'Cuts' },
  { src: '/images/portfolio/cut_1860.jpg', alt: 'Bob cut styling', category: 'Cuts' },
  { src: '/images/portfolio/cut_1872.jpg', alt: 'Sleek straight finish', category: 'Cuts' },
  { src: '/images/portfolio/cut_1907.jpg', alt: 'Blowout with movement', category: 'Cuts' },
  { src: '/images/portfolio/cut_1918.jpg', alt: 'Soft layers and body', category: 'Cuts' },
  { src: '/images/portfolio/cut_1924.jpg', alt: 'Clean cut and styling', category: 'Cuts' },

  // ── Color / Highlights ─────────────────────────────
  { src: '/images/portfolio/fullsizerender__10_.jpeg', alt: 'Beautiful full color transformation', category: 'Color / Highlights' },
  { src: '/images/portfolio/fullsizerender__13_.jpeg', alt: 'Rich color processing result', category: 'Color / Highlights' },
  { src: '/images/portfolio/fullsizerender_12.jpeg', alt: 'Stunning full highlights', category: 'Color / Highlights' },
  { src: '/images/portfolio/fullsizerender__14_.jpeg', alt: 'Seamless balayage gradient', category: 'Color / Highlights' },
  { src: '/images/portfolio/fullsizerender_17.jpeg', alt: 'Partial highlights dimension', category: 'Color / Highlights' },
  { src: '/images/portfolio/fullsizerender_5.jpeg', alt: 'Hand-painted balayage', category: 'Color / Highlights' },
  { src: '/images/portfolio/color_1777.jpg', alt: 'Warm tone color transformation', category: 'Color / Highlights' },
  { src: '/images/portfolio/color_1785.jpg', alt: 'Vibrant highlight blend', category: 'Color / Highlights' },
  { src: '/images/portfolio/color_1821.jpg', alt: 'Rich brunette color finish', category: 'Color / Highlights' },
  { src: '/images/portfolio/color_1829.jpg', alt: 'Dimensional color work', category: 'Color / Highlights' },
  { src: '/images/portfolio/color_1846.jpg', alt: 'Bold color transformation', category: 'Color / Highlights' },
  { src: '/images/portfolio/color_1854.jpg', alt: 'Sun-kissed highlight placement', category: 'Color / Highlights' },
  { src: '/images/portfolio/color_1864.jpg', alt: 'Full color with shine', category: 'Color / Highlights' },
  { src: '/images/portfolio/color_1882.jpg', alt: 'Vivid color finish', category: 'Color / Highlights' },
  { src: '/images/portfolio/color_1897.jpg', alt: 'Flawless color blend', category: 'Color / Highlights' },

  // ── Spiral & Texture ───────────────────────────────
  { src: '/images/portfolio/img_0833.jpeg', alt: 'Sleek texture finish', category: 'Spiral & Texture' },
  { src: '/images/portfolio/img_0836.jpeg', alt: 'Relaxer results', category: 'Spiral & Texture' },
  { src: '/images/portfolio/fullsizerender_6.jpeg', alt: 'Smooth keratin treatment result', category: 'Spiral & Texture' },
  { src: '/images/portfolio/spiral_1783.jpg', alt: 'Defined spiral curls', category: 'Spiral & Texture' },
  { src: '/images/portfolio/spiral_1856.jpg', alt: 'Bouncy curl definition', category: 'Spiral & Texture' },
  { src: '/images/portfolio/spiral_1871.jpg', alt: 'Voluminous spiral set', category: 'Spiral & Texture' },
  { src: '/images/portfolio/spiral_1884.jpg', alt: 'Tight spiral curl styling', category: 'Spiral & Texture' },
  { src: '/images/portfolio/spiral_1889.jpg', alt: 'Spiral curls with body', category: 'Spiral & Texture' },
  { src: '/images/portfolio/spiral_1934.jpg', alt: 'Full spiral curl transformation', category: 'Spiral & Texture' },
  { src: '/images/portfolio/spiral_1937.jpg', alt: 'Lush spiral curl finish', category: 'Spiral & Texture' },
  { src: '/images/portfolio/spiral_1943.jpg', alt: 'Cascading spiral curls', category: 'Spiral & Texture' },
  { src: '/images/portfolio/spiral_1974.jpg', alt: 'Gorgeous curl pattern', category: 'Spiral & Texture' },
  { src: '/images/portfolio/spiral_1997.jpg', alt: 'Springy spiral set', category: 'Spiral & Texture' },
  { src: '/images/portfolio/spiral_2005.jpg', alt: 'Elegant curl finish', category: 'Spiral & Texture' },
  { src: '/images/portfolio/spiral_2008.jpg', alt: 'Flowing spiral curls', category: 'Spiral & Texture' },

  // ── Natural Styling ────────────────────────────────
  { src: '/images/portfolio/img_0555.jpeg', alt: 'Natural protective braids', category: 'Natural Styling' },
  { src: '/images/portfolio/img_0837.jpeg', alt: 'Single braid-out definition', category: 'Natural Styling' },
  { src: '/images/portfolio/img_0716.jpeg', alt: 'Natural curl styling', category: 'Natural Styling' },
  { src: '/images/portfolio/natural_1811.jpg', alt: 'Natural twist style', category: 'Natural Styling' },
  { src: '/images/portfolio/natural_1825.jpg', alt: 'Defined natural curls', category: 'Natural Styling' },
  { src: '/images/portfolio/natural_1838.jpg', alt: 'Protective natural style', category: 'Natural Styling' },
  { src: '/images/portfolio/natural_1848.jpg', alt: 'Natural hair twist out', category: 'Natural Styling' },
  { src: '/images/portfolio/natural_1853.jpg', alt: 'Beautiful natural texture', category: 'Natural Styling' },
  { src: '/images/portfolio/natural_1859.jpg', alt: 'Natural curl definition', category: 'Natural Styling' },
  { src: '/images/portfolio/natural_1912.jpg', alt: 'Elegant natural style', category: 'Natural Styling' },

  // ── Bridal & Events ────────────────────────────────
  { src: '/images/portfolio/img_0549.jpeg', alt: 'Elegant bridal updo', category: 'Bridal & Events' },
  { src: '/images/portfolio/img_0541.jpeg', alt: 'Bridal hair styling trial', category: 'Bridal & Events' },
  { src: '/images/portfolio/img_0551.jpeg', alt: 'Bridesmaids elegant styling', category: 'Bridal & Events' },
  { src: '/images/portfolio/img_0622.jpeg', alt: 'Special event updo', category: 'Bridal & Events' },
  { src: '/images/portfolio/bridal_1911.jpg', alt: 'Bridal styling perfection', category: 'Bridal & Events' },
  { src: '/images/portfolio/bridal_1914.jpg', alt: 'Romantic bridal updo', category: 'Bridal & Events' },
  { src: '/images/portfolio/bridal_1916.jpg', alt: 'Classic bridal elegance', category: 'Bridal & Events' },
  { src: '/images/portfolio/bridal_1938.jpg', alt: 'Bridal party styling', category: 'Bridal & Events' },
  { src: '/images/portfolio/bridal_1949.jpg', alt: 'Wedding day hair', category: 'Bridal & Events' },
  { src: '/images/portfolio/bridal_1963.jpg', alt: 'Stunning bridal look', category: 'Bridal & Events' },
  { src: '/images/portfolio/bridal_1966.jpg', alt: 'Elegant event styling', category: 'Bridal & Events' },
  { src: '/images/portfolio/bridal_1985.jpg', alt: 'Bridal hair artistry', category: 'Bridal & Events' },
  { src: '/images/portfolio/bridal_1992.jpg', alt: 'Flawless bridal finish', category: 'Bridal & Events' },
];

const categories = [
  'Cuts',
  'Color / Highlights',
  'Spiral & Texture',
  'Natural Styling',
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

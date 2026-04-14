'use client';

import { useState } from 'react';
import Image from 'next/image';

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  categories: string[];
}

export default function GalleryGrid({ images, categories }: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === 'All'
      ? images
      : images.filter((img) => img.category === activeFilter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === 0 ? filtered.length - 1 : lightboxIndex - 1);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === filtered.length - 1 ? 0 : lightboxIndex + 1);
  };

  return (
    <>
      <div className="gallery-filter" id="gallery-filter">
        {['All', ...categories].map((cat) => (
          <button
            key={cat}
            className={`gallery-filter__btn ${activeFilter === cat ? 'gallery-filter__btn--active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery-grid" id="gallery-grid">
        {filtered.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="gallery-grid__item"
            onClick={() => openLightbox(i)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={600}
              quality={85}
            />
          </div>
        ))}
      </div>

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div className="lightbox" onClick={closeLightbox} id="gallery-lightbox">
          <button
            className="lightbox__close"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            aria-label="Close lightbox"
          >
            ✕
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <Image
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].alt}
            width={1200}
            height={1200}
            quality={90}
            className="lightbox__image"
          />
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}

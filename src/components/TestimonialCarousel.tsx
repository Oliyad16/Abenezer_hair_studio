'use client';

import { useState, useEffect, useCallback } from 'react';
import { testimonials } from '@/data/testimonials';

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="testimonial-carousel" id="testimonials">
      <div
        className="testimonial-carousel__track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial-carousel__slide">
            <div className="testimonial-card">
              <div className="stars" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="testimonial-card__quote">{t.text}</p>
              <p className="testimonial-card__author">{t.name}</p>
              <p className="testimonial-card__service">{t.service}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonial-carousel__dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`testimonial-carousel__dot ${i === current ? 'testimonial-carousel__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

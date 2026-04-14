'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list" id="faq-section">
      {items.map((item, i) => (
        <div
          key={i}
          className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}
        >
          <button
            className="faq-item__header"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            id={`faq-${i}`}
          >
            <span>{item.question}</span>
            <span className="faq-item__icon">+</span>
          </button>
          <div className="faq-item__body">
            <div className="faq-item__content">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

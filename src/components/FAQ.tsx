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
    <div className="faq-list" id="faq-section" itemScope itemType="https://schema.org/FAQPage">
      {items.map((item, i) => (
        <div
          key={i}
          className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <button
            className="faq-item__header"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            id={`faq-${i}`}
          >
            <span itemProp="name">{item.question}</span>
            <span className="faq-item__icon">{openIndex === i ? '−' : '+'}</span>
          </button>
          {/* Answer text is always in the DOM for crawler/LLM extractability.
              CSS max-height handles visual show/hide. */}
          <div
            className="faq-item__body"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
            style={{
              maxHeight: openIndex === i ? '500px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease',
            }}
          >
            <div className="faq-item__content" itemProp="text">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

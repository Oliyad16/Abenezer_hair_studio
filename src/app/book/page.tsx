import type { Metadata } from 'next';
import Link from 'next/link';
import { business } from '@/data/business';
import ScrollReveal from '@/components/ScrollReveal';
import FAQ from '@/components/FAQ';
import { generateFAQSchema } from '@/lib/schema';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: 'Book Now',
  description: `Book your appointment at ${business.name}. Intimate, one-on-one hair care in Wheaton, MD. Color, bridal styling, silk press, and more.`,
};

const faqs = [
  {
    question: 'How do I book an appointment?',
    answer:
      'You can call us directly at (301) 933-6295, message us on Facebook, or use the booking option above. Because this is an intimate, one-on-one studio, we recommend booking in advance to guarantee your preferred time.',
  },
  {
    question: 'What makes Abenezer different from other salons?',
    answer:
      'Abenezer is a private, one-on-one studio. When you\'re here, it\'s just you and Rodas — no noise, no rushing, no distractions. It\'s a space where your hair is cared for with skill and you as a person are cared for with warmth. Many of our clients say it feels less like a salon and more like visiting a friend who happens to be incredibly talented with hair.',
  },
  {
    question: 'Do you accept walk-ins?',
    answer:
      'Walk-ins are welcome when availability allows, but because this is a private studio with dedicated one-on-one time, appointments are strongly recommended — especially for color, bridal, and longer services.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'We ask for at least 24 hours notice for cancellations or rescheduling. Because each appointment is dedicated time just for you, no-shows affect our ability to serve others. Life happens — just give us a call and we\'ll work it out.',
  },
  {
    question: 'How should I prepare for my appointment?',
    answer:
      'For color: avoid washing for 24–48 hours before. For all services: arrive a few minutes early so we can chat about your vision. And most importantly — come as you are. This is your time to relax.',
  },
  {
    question: 'Do you work with all hair types?',
    answer:
      'Absolutely. Rodas has over 15 years of experience across all hair types and textures. Whether your hair is straight, curly, coily, natural, or processed — you\'re in expert hands.',
  },
  {
    question: 'Do you offer bridal and event services?',
    answer:
      'Yes! Bridal hair and makeup is one of our specialties. We offer consultations, trial runs, and full day-of styling. Many brides choose Abenezer for the personal, calm experience on what can be a hectic day.',
  },
  {
    question: 'Do you offer services for children?',
    answer:
      'Yes! We\'re patient, gentle, and experienced with children of all ages. It\'s a calm, comfortable environment where kids feel safe.',
  },
];

export default function BookPage() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="page-header" id="book-header">
        <div className="container">
          <p className="subheading">Your Time Awaits</p>
          <h1 className="heading-display page-header__title">
            Book Your <span className="text-gold">Experience</span>
          </h1>
          <div className="gold-line" />
          <p className="page-header__text">
            This isn&apos;t just an appointment — it&apos;s your time to be cared for.
            Choose your service, and let Rodas take care of the rest.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section" id="booking-section">
        <div className="container container--narrow">
          <ScrollReveal>
            <div id="booking-widget">
              <BookingForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section section--cream" id="what-to-expect">
        <div className="container">
          <ScrollReveal>
            <div className="section-intro">
              <p className="subheading">Your Visit</p>
              <h2 className="heading-section">What to Expect</h2>
              <div className="gold-line" />
            </div>
          </ScrollReveal>

          <div className="grid grid--3 reveal-stagger">
            {[
              {
                title: 'A Warm Welcome',
                text: 'When you arrive at Studio 116, you\'ll step into a calm, private space. No waiting room chaos. No competing noise. Just a warm greeting and a comfortable chair waiting for you.',
              },
              {
                title: 'Undivided Attention',
                text: 'Your appointment is your time. Rodas won\'t be splitting focus between three other clients. From the moment you sit down to the moment you leave — the attention is all on you.',
              },
              {
                title: 'More Than Hair',
                text: 'Yes, you\'ll leave with beautiful hair. But you\'ll also leave feeling heard, cared for, and a little lighter than when you walked in. That\'s the experience we protect.',
              },
            ].map((policy, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="policy-card">
                  <h3 className="policy-card__title">{policy.title}</h3>
                  <p className="policy-card__text">{policy.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <ScrollReveal>
            <div className="section-intro">
              <p className="subheading">Questions?</p>
              <h2 className="heading-section">Frequently Asked Questions</h2>
              <div className="gold-line" />
            </div>
          </ScrollReveal>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* Trust strip */}
      <section className="section section--accent" id="trust-strip">
        <div className="container text-center">
          <ScrollReveal>
            <div className="stars mb-md" style={{ fontSize: '2rem', justifyContent: 'center', display: 'flex' }}>
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <h2 className="heading-section">
              A Place Where You&apos;re More Than a Client
            </h2>
            <p className="body-text" style={{ margin: '0 auto' }}>
              Join the community of people who come to {business.name} not just for
              beautiful hair — but for the care, the warmth, and the conversation
              that makes every visit feel like coming home.
            </p>
            <div className="mt-xl">
              <Link href="/services" className="btn btn--outline">
                Explore Our Services →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

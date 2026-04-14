import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

interface BookingCTAProps {
  title?: string;
  text?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function BookingCTA({
  title = 'Ready for Your Transformation?',
  text = 'Book your appointment today and experience the Abenezer difference.',
  buttonText = 'Book Your Appointment',
  buttonHref = '/book',
}: BookingCTAProps) {
  return (
    <section className="booking-cta" id="booking-cta">
      <div className="container">
        <ScrollReveal>
          <div className="booking-cta__content">
            <p className="subheading">Your Next Look Awaits</p>
            <h2 className="heading-display booking-cta__title">{title}</h2>
            <div className="gold-line" />
            <p className="booking-cta__text">{text}</p>
            <Link href={buttonHref} className="btn btn--primary btn--lg">
              {buttonText}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

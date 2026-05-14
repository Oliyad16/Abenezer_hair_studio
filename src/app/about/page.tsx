import type { Metadata } from 'next';
import Image from 'next/image';
import { team } from '@/data/team';
import { business } from '@/data/business';
import ScrollReveal from '@/components/ScrollReveal';
import BookingCTA from '@/components/BookingCTA';
import { generateBreadcrumbSchema, generatePersonSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Rodas',
  description: `Learn about ${business.name} — an intimate, one-on-one hair studio where care goes beyond your hair. Meet Rodas, the stylist who listens, cares, and transforms.`,
};

export default function AboutPage() {
  const yearsInBusiness =
    new Date().getFullYear() - business.yearEstablished;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: business.website },
    { name: 'About', url: `${business.website}/about` },
  ]);
  const personSchema = generatePersonSchema();

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {personSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      )}

      {/* Page Header */}
      <section className="page-header" id="about-header">
        <div className="container">
          <p className="subheading">The Heart Behind the Studio</p>
          <h1 className="heading-display page-header__title">
            About <span className="text-gold">Rodas</span>
          </h1>
          <div className="gold-line" />
          <p className="page-header__text">
            More than a stylist — a listener, a friend, and someone who truly cares
            about how you feel when you leave.
          </p>
        </div>
      </section>

      {/* Answer-First Definition (GEO Agent 2) */}
      <section className="section section--sm" id="about-answer-first">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="heading-section" style={{ fontSize: 'var(--text-lg)' }}>
              Who Is Rodas G.?
            </h2>
            <p className="body-text" style={{ lineHeight: 1.8 }}>
              Rodas G. is the owner and lead stylist of Abenezer Hair Studio, a private,
              one-on-one hair salon in Wheaton, Maryland. With over {yearsInBusiness} years
              of professional experience across all hair types, Rodas specializes in color
              and highlights, bridal styling, silk press, and transformative hair work.
              She founded Abenezer Hair Studio in {business.yearEstablished} to create a
              space where every client receives undivided personal attention and genuine care.
            </p>

            {/* Studio Facts (GEO Agent 3) */}
            <div className="card" style={{ padding: 'var(--space-xl)', marginTop: 'var(--space-lg)', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-md)', color: 'var(--color-accent)' }}>
                Studio Facts
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-sm)' }}>
                <li>💇 <strong>Stylist:</strong> Rodas G.</li>
                <li>🎓 <strong>Experience:</strong> {yearsInBusiness}+ years</li>
                <li>🏠 <strong>Founded:</strong> {business.yearEstablished}</li>
                <li>📍 <strong>Location:</strong> Suite 116, Wheaton, MD</li>
                <li>✂️ <strong>Specialties:</strong> Color, Bridal, Silk Press</li>
                <li>🌟 <strong>Hair types:</strong> All types welcome</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Story */}
      <section className="section" id="about-story">
        <div className="container">
          <div className="about-split">
            <ScrollReveal direction="left">
              <div className="about-split__image">
                <Image
                  src="/images/IMG_0574.jpg"
                  alt="Inside Abenezer Hair Studio"
                  width={640}
                  height={800}
                  quality={85}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <p className="subheading">Est. {business.yearEstablished}</p>
                <h2 className="heading-section">
                  {yearsInBusiness} Years of Caring<br />
                  <span className="text-gold">For Our Community</span>
                </h2>
                <div className="gold-line gold-line--left" />
                <p className="body-text mb-lg">
                  Rodas did not open Abenezer Hair Studio to compete with the salons
                  next door. She opened it to create something they could not offer —
                  a space where people feel genuinely cared for.
                </p>
                <p className="body-text mb-lg">
                  In this intimate, private studio — Suite 116, tucked inside Salon
                  Plaza — it is just you and Rodas. No assembly line. No rushing from
                  chair to chair. Just one-on-one attention, real conversation, and
                  the kind of care that makes you feel seen.
                </p>
                <p className="body-text mb-lg">
                  Over the years, clients have come to Abenezer for a color service
                  and stayed for the experience. They have come in carrying the weight
                  of a hard week and left feeling lighter — not just because their
                  hair looked incredible, but because someone listened. Someone cared.
                </p>
                <p className="body-text">
                  That is the difference. Your hair gets styled with artistry.
                  But <em>you</em> — the whole you — get cared for with heart.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--cream" id="values">
        <div className="container">
          <ScrollReveal>
            <div className="section-intro">
              <p className="subheading">What Makes Us Different</p>
              <h2 className="heading-section">The Abenezer Promise</h2>
              <div className="gold-line" />
            </div>
          </ScrollReveal>

          <div className="grid grid--3 reveal-stagger">
            {[
              {
                icon: '♥',
                title: 'You Will Be Heard',
                text: 'When you sit in Rodas\'s chair, you are not just another appointment. This is a space where you can talk, vent, laugh, cry, or just sit in comfortable silence. Whatever you need — you will be heard.',
              },
              {
                icon: '✦',
                title: 'You Will Be Cared For',
                text: 'From the way your hair is treated to the way you are treated — every detail matters. We use quality products, take our time, and never cut corners. Because you deserve care in every sense of the word.',
              },
              {
                icon: '★',
                title: 'You Will Leave Lighter',
                text: 'Beautiful hair is the visible result. The invisible one? Walking out feeling like someone genuinely cares about your day, your story, and your well-being. That is the feeling we protect.',
              },
            ].map((value, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card" style={{ padding: 'var(--space-2xl)' }}>
                  <span
                    style={{
                      fontSize: '2rem',
                      color: 'var(--color-accent-gold)',
                      display: 'block',
                      marginBottom: 'var(--space-md)',
                    }}
                  >
                    {value.icon}
                  </span>
                  <h3 className="heading-card mb-md">{value.title}</h3>
                  <p className="body-text" style={{ maxWidth: 'none' }}>
                    {value.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Space */}
      <section className="section" id="the-space">
        <div className="container">
          <ScrollReveal>
            <div className="section-intro">
              <p className="subheading">The Studio</p>
              <h2 className="heading-section">Small by Design</h2>
              <div className="gold-line" />
              <p className="body-text">
                Abenezer is not small because it has to be — it is small because it
                should be. An intimate, private space means undivided attention,
                real conversation, and an experience you cannot get in a crowded salon.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="section section--cream" id="our-team">
        <div className="container">
          <ScrollReveal>
            <div className="section-intro">
              <p className="subheading">Meet Your Stylist</p>
              <h2 className="heading-section">Rodas G.</h2>
              <div className="gold-line" />
            </div>
          </ScrollReveal>

          <div className="grid grid--1" style={{ maxWidth: '640px', margin: '0 auto' }}>
            {team.map((member) => (
              <ScrollReveal key={member.id}>
                <div className="team-card" id={`team-${member.id}`}>
                  <div className="team-card__image-wrap">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={320}
                      height={320}
                      quality={85}
                      style={{ objectFit: 'cover', objectPosition: 'right' }}
                    />
                  </div>
                  <h3 className="team-card__name">{member.name}</h3>
                  <p className="team-card__title">{member.title}</p>
                  <p className="team-card__bio">{member.bio}</p>
                  <div className="team-card__specialties">
                    {member.specialties.map((spec) => (
                      <span key={spec} className="team-card__tag">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        title="Ready to Experience the Difference?"
        text="Book your appointment and sit in a chair where you actually matter."
        buttonText="Book Your Experience"
      />
    </>
  );
}

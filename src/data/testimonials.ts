export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Amara T.',
    rating: 5,
    text: "Rodas doesn't just do your hair — she makes you feel like you matter. I walked in stressed from a long week and left feeling lighter in every way. My color was perfect, but honestly the conversation and the care meant even more.",
    service: 'Color & Highlights',
    date: '2026-02-15',
  },
  {
    id: 't2',
    name: 'Jessica M.',
    rating: 5,
    text: "This isn't just a salon, it's a sanctuary. Rodas remembered everything I told her from my last visit — about my job, my family, everything. She listens like a friend, not a stylist. And my silk press? Flawless every single time.",
    service: 'Silk Press',
    date: '2026-01-22',
  },
  {
    id: 't3',
    name: 'Danielle R.',
    rating: 5,
    text: "I've been to big salons and small ones, and nothing compares to Abenezer. The one-on-one attention, the peace and quiet, the genuine conversation — it's like someone finally created a salon that cares about the whole person, not just the hair.",
    service: 'Bridal Styling',
    date: '2026-03-05',
  },
  {
    id: 't4',
    name: 'Miriam K.',
    rating: 5,
    text: "I came for a blowout and left with a friend. Rodas has this incredible gift of making you feel safe enough to just breathe and be yourself. My hair always looks amazing but it's the experience that keeps me coming back every month.",
    service: 'Blowout & Styling',
    date: '2025-12-10',
  },
  {
    id: 't5',
    name: 'Sarah L.',
    rating: 5,
    text: "Rodas did my hair for my wedding and it was more than I could have dreamed. She took her time, listened to exactly what I wanted, and prayed with me before I walked out. That moment meant the world to me. I felt beautiful inside and out.",
    service: 'Bridal Styling',
    date: '2025-11-18',
  },
  {
    id: 't6',
    name: 'Patricia W.',
    rating: 5,
    text: "Some days I go to Abenezer not because I need my hair done, but because I need to be in that space. Rodas creates an atmosphere of peace and care that you just can't find anywhere else. It's healing. And the results always look incredible.",
    service: 'Hair Treatment',
    date: '2026-02-28',
  },
];

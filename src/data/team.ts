export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  specialties: string[];
  yearsExperience: number;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: 'rodas',
    name: 'Rodas G.',
    title: 'Owner & Lead Stylist',
    bio: "Rodas founded Abenezer Hair Studio with a vision that went beyond hair — she wanted to create a space where every person who sits in her chair feels truly seen and heard. With over 15 years of experience across all hair types, Rodas is known not just for her skill with color, bridal styling, and transformative work, but for the genuine care and warmth she brings to every appointment. For Rodas, doing hair isn't just a craft — it's creating a moment of peace in someone's day.",
    specialties: ['Color & Highlights', 'Bridal Styling', 'All Hair Types', 'Silk Press'],
    yearsExperience: 15,
    image: '/images/team/stylist-1.png',
  },
];

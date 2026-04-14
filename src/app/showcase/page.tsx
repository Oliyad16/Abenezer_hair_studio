import type { Metadata } from 'next';
import Demo from '@/components/blocks/demo';

export const metadata: Metadata = {
  title: 'Showcase | Abenezer Hair Studio',
  description: 'Experience an interactive showcase of our cozy studio atmosphere.',
};

export default function ShowcasePage() {
  return (
    <main className="bg-[var(--color-bg-primary)]">
      {/* 
        This is a demo page purely to display the new scrollable immersive hero 
        without breaking the standard homepage structure.
      */}
      <Demo />
    </main>
  );
}

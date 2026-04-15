'use client';

import { useState, useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
  video: {
    src: '/videos/hero-video.mov',
    poster:
      '/images/gallery/braids-1.png',
    background:
      '/videos/hero-video.mov', // authentic warm studio interior
    title: 'Abenezer Sanctuary',
    date: 'Est 2024',
    scrollToExpand: 'Scroll to unwind',
    about: {
      overview:
        'Welcome to Abenezer Hair Studio — where your appointment is never rushed and never impersonal. This is your time to breathe, to talk, to be heard, and to leave feeling lighter in every way.',
      conclusion:
        'Our intimate one-on-one studio experience goes beyond hair. It is a genuine conversation where you are not just a client, you are a person who matters.',
    },
  },
  image: {
    src: '/videos/hero-video.mov',
    background:
      '/videos/hero-video.mov', // authentic warm studio interior
    title: 'Abenezer Sanctuary',
    date: 'Est 2024',
    scrollToExpand: 'Scroll to unwind',
    about: {
      overview:
        'Welcome to Abenezer Hair Studio — where your appointment is never rushed and never impersonal. This is your time to breathe, to talk, to be heard, and to leave feeling lighter in every way.',
      conclusion:
        'Our intimate one-on-one studio experience goes beyond hair. It is a genuine conversation where you are not just a client, you are a person who matters.',
    },
  },
};

import Link from 'next/link';

const MediaContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
  const currentMedia = sampleMediaContent[mediaType];

  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-6 text-[var(--color-text-heading)]'>
        Our Philosophy
      </h2>
      <p className='text-lg mb-8 text-[var(--color-text-body)]'>
        {currentMedia.about.overview}
      </p>

      <p className='text-lg mb-8 text-[var(--color-text-body)]'>
        {currentMedia.about.conclusion}
      </p>

      <div className="flex gap-4 mt-8">
        <Link href="/book" className="btn btn--primary btn--lg">
          Book Your Experience
        </Link>
        <Link href="/services" className="btn btn--outline btn--lg">
          View Services
        </Link>
      </div>
    </div>
  );
};

export const ImageExpansion = () => {
  const mediaType = 'video';
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='min-h-screen bg-[var(--color-bg-primary)]'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

const Demo = () => {
  const [mediaType, setMediaType] = useState('image');
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [mediaType]);

  return (
    <div className='min-h-screen'>
      <div className='fixed top-[100px] right-4 z-50 flex gap-2'>
        <button
          onClick={() => setMediaType('video')}
          className={`px-4 py-2 rounded-lg ${
            mediaType === 'video'
              ? 'bg-[var(--color-accent)] text-white'
              : 'bg-white/50 text-[var(--color-text-heading)] border border-[var(--color-border)]'
          }`}
        >
          Video
        </button>

        <button
          onClick={() => setMediaType('image')}
          className={`px-4 py-2 rounded-lg ${
            mediaType === 'image'
              ? 'bg-[var(--color-accent)] text-white'
              : 'bg-white/50 text-[var(--color-text-heading)] border border-[var(--color-border)]'
          }`}
        >
          Image
        </button>
      </div>

      <ScrollExpandMedia
        mediaType={mediaType as 'video' | 'image'}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === 'video' ? currentMedia.poster : undefined}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType as 'video' | 'image'} />
      </ScrollExpandMedia>
    </div>
  );
};

export default Demo;

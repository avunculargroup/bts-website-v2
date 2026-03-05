import type { Metadata } from 'next';
import { Users } from 'lucide-react';
import { Container } from '@/components/Container';
import { OurStory } from '@/components/OurStory';
import { MissionValues } from '@/components/MissionValues';
import { OurTeam } from '@/components/OurTeam';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Bitcoin Treasury Solutions provides structured Bitcoin education for Australian professionals. Melbourne-based corporate training, workshops, and consulting services for SMEs and treasury teams. Learn about our mission, team, and Bitcoin education approach.',
  openGraph: {
    title: 'About Us | Bitcoin Treasury Solutions',
    description: 'Melbourne-based Bitcoin Treasury Solutions provides structured Bitcoin education for Australian professionals. Corporate training, workshops, and consulting for SMEs and treasury teams.',
    images: [
      {
        url: '/images/og-about.png',
        width: 1200,
        height: 630,
        alt: 'About Bitcoin Treasury Solutions',
      },
    ],
  },
  alternates: {
    canonical: '/about',
  },
};

export default function About() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
  ]);

  return (
    <div className='min-h-screen' style={{ backgroundColor: 'var(--color-bg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Container className='py-16 lg:py-24'>
        <div className='max-w-4xl mx-auto'>
          {/* Page Header */}
          <div className='text-center mb-14'>
            <Users className='mx-auto h-12 w-12 mb-4' strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
            <h1
              className='text-4xl sm:text-5xl font-bold mb-4'
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
            >
              About Us
            </h1>
            <p
              className='text-base leading-relaxed'
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
            >
              Bitcoin education with clarity and care
            </p>
          </div>

          {/* Content Sections */}
          <div className='space-y-20'>
            <OurStory />
            <MissionValues />
            <OurTeam />
          </div>
        </div>
      </Container>
    </div>
  );
}

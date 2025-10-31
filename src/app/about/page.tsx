import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { OurStory } from '@/components/OurStory';
import { MissionValues } from '@/components/MissionValues';
import { OurTeam } from '@/components/OurTeam';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Bitcoin Treasury Solutions and our mission to provide structured Bitcoin learning for Australia\'s professionals. Meet our team and discover our story.',
  openGraph: {
    title: 'About Us | Bitcoin Treasury Solutions',
    description: 'Learn about Bitcoin Treasury Solutions and our mission to provide structured Bitcoin learning for Australia\'s professionals.',
  },
};

export default function About() {
  return (
    <div className='min-h-screen bg-background'>
      <Container className='py-16 lg:py-24'>
        <div className='max-w-4xl mx-auto'>
          {/* Page Header */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 font-display mb-6'>
              About Us
            </h1>
            <p className='text-xl text-primary-700 font-body leading-relaxed'>
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

'use client';

import { useState } from 'react';
import { NewsletterModal } from '@/components/NewsletterModal';
import { Calculator, ChevronDown } from 'lucide-react';
import { Services } from '@/components/Services';
import { Resources } from '@/components/Resources';
import { HeroVideoOverlay } from '@/components/HeroVideoOverlay';
import { VideoModal } from '@/components/VideoModal';
import { HeroCTA } from '@/components/HeroCTA';
import { AboutUs } from '@/components/AboutUs';
import { HomePageStructuredData } from '@/components/HomePageStructuredData';

export default function Home() {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className='w-full'>
      <HomePageStructuredData />

      {/* Hero Section */}
      <div
        className='h-[calc(100dvh-3.5rem)] max-h-[calc(100dvh-3.5rem)] lg:h-[calc(100vh-3.5rem)] lg:max-h-[calc(100vh-3.5rem)] flex flex-col lg:flex-row items-center justify-center relative overflow-hidden'
        style={{ backgroundColor: 'var(--color-bg)' }}
      >
        {/* Subtle warm background texture */}
        <div
          className='absolute inset-0 pointer-events-none'
          style={{
            backgroundImage: 'radial-gradient(ellipse at 60% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Hero Content */}
        <div className='relative z-10 w-full flex flex-col lg:flex-row items-center justify-center gap-0 py-4 lg:py-0'>
          {/* Hero Video */}
          <div className='w-full lg:w-1/2 flex justify-center sm:px-20 lg:px-12 lg:pr-8 mb-4 sm:mb-6 lg:mb-0 lg:items-center shrink-0'>
            <HeroVideoOverlay onPlayClick={() => setIsVideoModalOpen(true)} />
          </div>

          {/* Headline */}
          <div className='w-full lg:w-1/2 flex items-center justify-center sm:px-20 px-8 lg:px-12 lg:pl-8 shrink-0'>
            <div className='text-center lg:text-right max-w-xl'>
              <h1
                className='text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold leading-tight'
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
              >
                Structured Bitcoin Learning
              </h1>
              <p
                className='text-xl sm:text-2xl md:text-3xl lg:text-2xl font-medium mt-2 mb-8 leading-snug'
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-secondary)' }}
              >
                for Australia&apos;s Professionals.
              </p>
              <div className='flex flex-col sm:flex-row gap-3 justify-center lg:justify-end'>
                <button
                  onClick={() => {
                    const element = document.getElementById('hero-cta');
                    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className='inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg transition-colors duration-100 active:scale-[0.98]'
                  style={{
                    fontFamily: 'var(--font-body)',
                    backgroundColor: 'var(--color-gold)',
                    color: 'var(--color-text-primary)',
                    borderRadius: 'var(--radius-lg)',
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold-dark)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold)'; }}
                >
                  Learn more
                </button>
                <button
                  onClick={() => setIsNewsletterModalOpen(true)}
                  className='inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg transition-colors duration-100 active:scale-[0.98]'
                  style={{
                    fontFamily: 'var(--font-body)',
                    backgroundColor: 'var(--color-surface)',
                    color: 'var(--color-text-primary)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-surface-subtle)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-surface)'; }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => {
            const element = document.getElementById('hero-cta');
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className='absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center transition-opacity duration-300 opacity-50 hover:opacity-100 cursor-pointer'
          style={{ color: 'var(--color-text-secondary)' }}
          aria-label='Scroll to next section'
        >
          <ChevronDown className='w-8 h-8 animate-scroll-bounce' strokeWidth={1.5} />
        </button>
      </div>

      {/* Hero CTA Section */}
      <HeroCTA />

      {/* Resources Section */}
      <Resources />

      {/* Calculator CTA Section */}
      <div className='py-16 lg:py-24' style={{ backgroundColor: 'var(--color-surface-subtle)' }}>
        <div className='max-w-5xl mx-auto px-6 lg:px-8'>
          <div className='text-center mb-10'>
            <div className='flex justify-center mb-4'>
              <Calculator className='w-10 h-10' strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
            </div>
            <h2
              className='text-3xl sm:text-4xl font-bold mb-4'
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
            >
              Bitcoin CAGR Calculator
            </h2>
            <p
              className='text-base leading-relaxed max-w-2xl mx-auto'
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
            >
              Calculate historic performance and project future value with our comprehensive Bitcoin CAGR calculator.
              Includes Australian tax scenarios and asset comparisons.
            </p>
          </div>

          <div
            className='max-w-xl mx-auto p-8 text-center rounded-xl'
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <h3
              className='text-xl font-semibold mb-3'
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
            >
              Try Our Calculator
            </h3>
            <p
              className='text-sm leading-relaxed mb-6'
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
            >
              Analyse Bitcoin&apos;s historic CAGR, project future values, and understand tax implications
              for Australian investors and corporate treasuries.
            </p>
            <a
              href='/calculator'
              className='inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg transition-colors duration-100 active:scale-[0.98]'
              style={{
                fontFamily: 'var(--font-body)',
                backgroundColor: 'var(--color-gold)',
                color: 'var(--color-text-primary)',
                borderRadius: 'var(--radius-lg)',
              }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold-dark)'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold)'; }}
            >
              Open Calculator
              <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 5l7 7-7 7' />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Services />

      {/* About Us Section */}
      <AboutUs />

      {/* Newsletter Modal */}
      <NewsletterModal
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
      />

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId='KLC-0dgBjEA'
      />
    </div>
  );
}

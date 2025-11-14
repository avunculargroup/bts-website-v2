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

export default function Home() {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className='w-full'>
      {/* Hero Section */}
      <div className='h-[calc(100dvh-3rem)] max-h-[calc(100dvh-3rem)] lg:h-[calc(100vh-3rem)] lg:max-h-[calc(100vh-3rem)] bg-transparent flex flex-col lg:flex-row items-center justify-center relative overflow-hidden gap-0 lg:gap-0'>
        {/* Background Pattern */}
        <div 
          className='absolute inset-0'
          style={{
            backgroundColor: '#e5e5f7',
            opacity: 0.2,
            backgroundImage: 'repeating-radial-gradient(circle at 0 0, transparent 0, #e5e5f7 10px), repeating-linear-gradient(#94812955, #948129)'
          }}
        />
        {/* Hero Content */}
        <div className='relative z-10 w-full flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-0 lg:py-0 py-4'>
          {/* Hero Video Overlay Component */}
          <div className='w-full lg:w-1/2 flex justify-center sm:px-20 lg:px-12 lg:pr-8 mb-2 sm:mb-4 lg:mb-0 lg:items-center bg-transparent shrink-0'>
            <HeroVideoOverlay onPlayClick={() => setIsVideoModalOpen(true)} />
          </div>
          
          {/* Slogan - Below on mobile, right on desktop */}
          <div className='w-full lg:w-1/2 flex items-center justify-center sm:px-20 px-16 lg:px-12 lg:pl-8 shrink-0'>
            <div className='text-center lg:text-right'>
              <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-6xl font-bold text-primary-900 font-display leading-tight'>
                Structured Bitcoin Learning
              </h1>
              <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-medium text-primary-700 font-display mt-2 mb-6'>
                for Australia&apos;s Professionals.
              </h2>
              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-end'>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('hero-cta');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className='inline-flex items-center justify-center px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors duration-300 font-display text-base'
                >
                  Learn More
                </button>
                <button
                  onClick={() => setIsNewsletterModalOpen(true)}
                  className='inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-primary-900 text-primary-900 font-semibold rounded-lg hover:bg-primary-900 hover:text-white transition-colors duration-300 font-display text-base'
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Scroll Indicator */}
        <button
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('hero-cta');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className='flex absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex-col items-center justify-center text-primary-900 hover:text-primary-700 transition-colors duration-300 cursor-pointer group'
          aria-label='Scroll to next section'
        >
          <span className='text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-display'>
            Scroll
          </span>
          <ChevronDown className='w-12 h-12 lg:w-16 lg:h-16 animate-scroll-bounce opacity-75' />
        </button>
      </div>

      {/* Hero CTA Section */}
      <HeroCTA />

      {/* Resources Section */}
      <Resources />

      {/* Calculator CTA Section */}
      <div className='py-16 lg:py-24 bg-primary-950'>
        <div className='max-w-6xl mx-auto px-8'>
          <div className='text-center mb-12'>
            <div className='flex justify-center mb-4'>
              <Calculator className='w-12 h-12 text-accent-500' />
            </div>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-50 font-display mb-6'>
              Bitcoin CAGR Calculator
            </h2>
            <p className='text-xl text-secondary-100 font-body leading-relaxed max-w-3xl mx-auto'>
              Calculate historic performance and project future value with our comprehensive Bitcoin CAGR calculator. 
              Includes Australian tax scenarios and asset comparisons.
            </p>
          </div>

          <div className='bg-white p-8 rounded-lg shadow-sm border border-primary-200 max-w-2xl mx-auto'>
            <div className='text-center'>
              <h3 className='text-2xl font-bold text-primary-900 font-display mb-4'>
                Try Our Calculator
              </h3>
              <p className='text-primary-700 font-body leading-relaxed mb-6'>
                Analyse Bitcoin&apos;s historic CAGR, project future values, and understand tax implications 
                for Australian investors and corporate treasuries.
              </p>
              <a
                href='/calculator'
                className='inline-flex items-center px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors duration-300 font-display text-base'
              >
                Open Calculator
                <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </a>
            </div>
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

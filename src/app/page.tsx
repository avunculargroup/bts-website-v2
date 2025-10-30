'use client';

import { useState } from 'react';
import { NewsletterModal } from '@/components/NewsletterModal';
import { Services } from '@/components/Services';
import { Resources } from '@/components/Resources';
import { HeroImages } from '@/components/HeroImages';
import { HeroCTA } from '@/components/HeroCTA';

export default function Home() {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  return (
    <div className='w-full'>
      {/* Hero Section */}
      <div className='min-h-fit lg:h-screen bg-transparent flex flex-col lg:flex-row items-center justify-center relative overflow-hidden gap-0 lg:gap-0 py-20 lg:py-0'>
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
        <div className='relative z-10 w-full flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-0 lg:py-0'>
          {/* Hero Images Component */}
          <div className='w-full lg:w-1/2 flex justify-center sm:px-20 lg:px-12 lg:pr-8 mb-4 sm:mb-6 lg:mb-0 lg:items-center bg-transparent'>
            <HeroImages />
          </div>
          
          {/* Slogan - Below on mobile, right on desktop */}
          <div className='w-full lg:w-1/2 flex items-center justify-center sm:px-20 px-16 lg:px-12 lg:pl-8 pb-20'>
            <div className='text-center lg:text-right'>
              <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-bold text-primary-900 font-display leading-tight'>
                Structured Bitcoin Learning
              </h1>
              <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-medium text-primary-700 font-display mt-2'>
                for Australia&apos;s Professionals.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Hero CTA Section */}
      <HeroCTA />

      {/* Resources Section */}
      <Resources />

      {/* Calculator CTA Section */}
      <div className='py-16 lg:py-24 bg-primary-50'>
        <div className='max-w-6xl mx-auto px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 font-display mb-6'>
              Bitcoin CAGR Calculator
            </h2>
            <p className='text-xl text-primary-700 font-body leading-relaxed max-w-3xl mx-auto'>
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
                Analyze Bitcoin&apos;s historic CAGR, project future values, and understand tax implications 
                for Australian investors and corporate treasuries.
              </p>
              <a
                href='/calculator'
                className='inline-flex items-center px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors duration-300 font-display'
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

      {/* Newsletter Modal */}
      <NewsletterModal 
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
      />
    </div>
  );
}

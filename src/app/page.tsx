'use client';

import Image from 'next/image';
import { useState } from 'react';
import { NewsletterModal } from '@/components/NewsletterModal';
import { Services } from '@/components/Services';
import { Resources } from '@/components/Resources';

export default function Home() {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  return (
    <div className='w-full'>
      {/* Hero Section */}
      <div className='h-screen bg-transparent flex flex-col lg:flex-row items-center justify-center relative overflow-hidden'>
        {/* Wave Pattern Background */}
        <div className='absolute inset-0 opacity-10'>
          <svg 
            className='w-full h-full' 
            viewBox='0 0 1200 800' 
            preserveAspectRatio='none'
          >
            <defs>
              <linearGradient id='waveGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                <stop offset='0%' stopColor='#f97316' stopOpacity='0.5' />
                <stop offset='50%' stopColor='#f97316' stopOpacity='0.3' />
                <stop offset='100%' stopColor='#f97316' stopOpacity='0.4' />
              </linearGradient>
            </defs>
            
            {/* Wave 1 */}
            <path 
              d='M0,400 Q150,300 300,400 T600,400 T900,400 T1200,400 L1200,800 L0,800 Z' 
              fill='url(#waveGradient)'
              className='animate-pulse'
            />
            
            {/* Wave 2 */}
            <path 
              d='M0,500 Q200,350 400,500 T800,500 T1200,500 L1200,800 L0,800 Z' 
              fill='url(#waveGradient)'
              className='animate-pulse'
              style={{ animationDelay: '1s' }}
            />
            
            {/* Wave 3 */}
            <path 
              d='M0,600 Q100,450 250,600 T500,600 T750,600 T1000,600 T1200,600 L1200,800 L0,800 Z' 
              fill='url(#waveGradient)'
              className='animate-pulse'
              style={{ animationDelay: '2s' }}
            />
          </svg>
        </div>
        {/* 3D Compass SVG - Above on mobile, left on desktop */}
        <div className='w-full lg:w-1/2 flex items-center justify-center px-8 mb-8 lg:mb-0'>
          <svg 
            width="300" 
            height="300" 
            viewBox="0 0 300 300" 
            className="max-w-full h-auto lg:w-[70%]"
          >
            {/* Compass Base - Outer Ring */}
            <ellipse 
              cx="150" 
              cy="160" 
              rx="80" 
              ry="20" 
              fill="#334e68" 
              opacity="0.3"
            />
            
            {/* Compass Base - Main Circle */}
            <circle 
              cx="150" 
              cy="150" 
              r="80" 
              fill="url(#compassGradient)"
              stroke="#102a43" 
              strokeWidth="2"
              className="drop-shadow-lg"
            />
            
            {/* Compass Inner Ring */}
            <circle 
              cx="150" 
              cy="150" 
              r="65" 
              fill="none" 
              stroke="#102a43" 
              strokeWidth="1" 
              opacity="0.6"
            />
            
            {/* Compass Center Hub */}
            <circle 
              cx="150" 
              cy="150" 
              r="8" 
              fill="#102a43"
            />
            
            {/* Compass Needle - North */}
            <g className="animate-stabilize">
              <polygon 
                points="150,50 155,140 150,150 145,140" 
                fill="#f97316"
                className="drop-shadow-sm"
              />
              <polygon 
                points="150,50 152,140 150,150 148,140" 
                fill="#fb923c"
              />
            </g>
            
            {/* Compass Needle - South */}
            <g className="animate-stabilize-south">
              <polygon 
                points="150,250 155,160 150,150 145,160" 
                fill="#334e68"
                className="drop-shadow-sm"
              />
              <polygon 
                points="150,250 152,160 150,150 148,160" 
                fill="#486581"
              />
            </g>
            
            {/* Direction Markers */}
            <g fontSize="21" fontWeight="bold" textAnchor="middle">
              <text x="150" y="45" fill="#f97316" className="animate-pulse">N</text>
              <text x="255" y="155" fill="#102a43">E</text>
              <text x="150" y="265" fill="#102a43">S</text>
              <text x="45" y="155" fill="#102a43">W</text>
            </g>
            
            {/* Subtle Highlight */}
            <ellipse 
              cx="150" 
              cy="130" 
              rx="60" 
              ry="15" 
              fill="url(#highlightGradient)"
            />
            
            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="compassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="50%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>
              <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Slogan - Below on mobile, right on desktop */}
        <div className='w-full lg:w-1/2 flex items-center justify-center px-8'>
          <div className='text-center lg:text-right'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 font-display leading-tight'>
              Navigate bitcoin
            </h1>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-primary-700 font-display mt-2'>
              with clarity and care.
            </h2>
          </div>
        </div>
      </div>

      {/* Second Section - Light Orange Background */}
      <div className='bg-accent-100 py-16 lg:py-24'>
        <div className='w-full max-w-6xl px-8 mx-auto'>
          <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
            {/* Presentation Image - Left on desktop, top on mobile */}
            <div className='flex-shrink-0'>
              <Image
                src='/images/carri_us_dollar.jpg'
                alt='Professional presentation on Bitcoin and gold performance'
                width={480}
                height={320}
                className='rounded-lg shadow-lg'
                priority
              />
            </div>
            
            {/* Text and Links - Right on desktop, bottom on mobile */}
            <div className='flex-1 text-center lg:text-left'>
              <div className='space-y-4 mb-8'>
                <p className='text-base sm:text-lg md:text-xl text-primary-900 font-body leading-relaxed'>
                  BTreasury empowers companies and interested individuals to explore Bitcoin as part of a diversified investment strategy. We offer small, in‑person sessions in Melbourne where experienced coaches demystify Bitcoin and show how it can fit into your financial plan.
                </p>
                <p className='text-base sm:text-lg md:text-xl text-primary-900 font-body leading-relaxed'>
                  There is no hype and no promises of fast fortunes-just practical education that builds confidence for slow, certain growth. Join us to reclaim control over your money and prepare for the future.
                </p>
              </div>
              
              {/* Call to Action Buttons */}
              <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center lg:justify-start items-center'>
                <a 
                  href='/contact' 
                  className='text-lg sm:text-xl font-semibold text-primary-900 hover:text-accent-600 transition-colors duration-300 font-display underline decoration-accent-500 decoration-2 underline-offset-4 hover:decoration-accent-600'
                >
                  Book a Workshop
                </a>
                <button 
                  onClick={() => setIsNewsletterModalOpen(true)}
                  data-newsletter-trigger
                  className='text-lg sm:text-xl font-semibold text-primary-900 hover:text-accent-600 transition-colors duration-300 font-display underline decoration-accent-500 decoration-2 underline-offset-4 hover:decoration-accent-600 cursor-pointer'
                >
                  Join the Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <Resources />

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

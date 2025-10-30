'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calculator, TrendingUp, HelpCircle, ArrowLeft } from 'lucide-react';
import { HelpDrawer } from './HelpDrawer';

interface CalculatorLayoutProps {
  activeTab: 'historic' | 'future';
  onTabChange: (tab: 'historic' | 'future') => void;
  children: React.ReactNode;
}

export function CalculatorLayout({ activeTab, onTabChange, children }: CalculatorLayoutProps) {
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <>
      {/* Hide default header/footer with targeted CSS */}
      <style jsx global>{`
        /* Hide the main site header */
        header.sticky.top-0.z-50 {
          display: none !important;
        }
        /* Hide the main site footer */
        footer.bg-background {
          display: none !important;
        }
      `}</style>
      
      <div className='min-h-screen bg-background flex flex-col'>
        {/* Custom Header */}
        <header className='sticky top-0 z-40 w-full border-b border-primary-200 bg-primary-950 backdrop-blur supports-[backdrop-filter]:bg-primary-950'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 items-center justify-between'>
              {/* Logo */}
              <Link href='/' className='flex items-center space-x-3 hover:opacity-80 transition-opacity'>
                <Image
                  src='/images/logo.svg'
                  alt='BTS Logo'
                  width={32}
                  height={32}
                  className='h-8 w-8'
                />
                <div className='flex items-center'>
                  <span className='text-2xl md:text-3xl font-bold text-secondary-50 font-display'>
                    Bitcoin CAGR Calculator
                  </span>
                </div>
              </Link>

              {/* Right side buttons */}
              <div className='flex items-center space-x-4'>
                {/* Return to Main Website Button */}
                <Link
                  href='/'
                  className='flex items-center space-x-2 px-3 py-2 text-sm text-secondary-50 hover:text-accent-500 transition-colors rounded-md hover:bg-white/10'
                >
                  <ArrowLeft className='h-4 w-4' />
                  <span className='hidden sm:inline'>Return to Main Website</span>
                </Link>

                {/* Help Button */}
                <button
                  onClick={() => setIsHelpOpen(true)}
                  className='flex items-center space-x-2 px-3 py-2 text-sm text-secondary-50 hover:text-accent-500 transition-colors rounded-md hover:bg-white/10'
                >
                  <HelpCircle className='h-4 w-4' />
                  <span className='hidden sm:inline'>Help</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Tab Navigation */}
        <div className='border-b border-primary-200 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <nav className='flex space-x-8'>
              <button
                onClick={() => onTabChange('historic')}
                className={`py-4 px-1 border-b-2 font-semibold text-base md:text-lg transition-colors ${
                  activeTab === 'historic'
                    ? 'border-accent-500 text-accent-600'
                    : 'border-transparent text-primary-500 hover:text-primary-700 hover:border-primary-300'
                }`}
              >
                <div className='flex items-center space-x-2'>
                  <TrendingUp className='h-4 w-4' />
                  <span>Historic CAGR</span>
                </div>
              </button>
              <button
                onClick={() => onTabChange('future')}
                className={`py-4 px-1 border-b-2 font-semibold text-base md:text-lg transition-colors ${
                  activeTab === 'future'
                    ? 'border-accent-500 text-accent-600'
                    : 'border-transparent text-primary-500 hover:text-primary-700 hover:border-primary-300'
                }`}
              >
                <div className='flex items-center space-x-2'>
                  <Calculator className='h-4 w-4' />
                  <span>Future Projection</span>
                </div>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content - Flex grow to push footer down */}
        <main className='flex-1 pb-0 lg:pb-20'>
          {children}
        </main>

        {/* Disclaimers Footer - Fixed on large screens, inline on small/medium */}
        <footer className='lg:fixed lg:bottom-0 lg:left-0 lg:right-0 z-30 bg-primary-50 border-t border-primary-200 shadow-lg'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
            <div className='text-center'>
              <p className='text-sm text-primary-600 font-body'>
                <strong>Disclaimer:</strong> This tool provides general information only and does not constitute financial, tax, or accounting advice. 
                You should consult with qualified professional advisers before making any financial decisions. 
                Tax calculations are based on current Australian Taxation Office rules and may change.
              </p>
            </div>
          </div>
        </footer>

        {/* Help Drawer */}
        <HelpDrawer isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
      </div>
    </>
  );
}

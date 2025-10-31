'use client';

import { useState } from 'react';
import { Compass, TrendingUp, ShieldCheck, Target, Lightbulb, Users, TrendingDown, Map, DollarSign, Wallet, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BookSessionModal } from '@/components/BookSessionModal';

export function HeroCTA() {
  const [showFullTamTestimonial, setShowFullTamTestimonial] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [currentSessionType, setCurrentSessionType] = useState<'Corporate & SME' | 'Accountants & Financial Advisors' | 'Individuals' | 'Workshop'>('Workshop');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div id='hero-cta' className='bg-accent-100 py-16 lg:py-24'>
        <div className='w-full max-w-6xl px-8 mx-auto'>
          <div className='text-center mb-12'>
            <div className='flex justify-center mb-6'>
              <Compass className='w-16 h-16 text-accent-600' />
            </div>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-primary-900 font-display mb-6'>
              Navigate bitcoin with clarity and care
            </h2>
            <div className='space-y-4 max-w-4xl mx-auto'>
              <p className=' text-primary-800 font-body leading-relaxed'>
                BTS empowers companies and individuals to explore bitcoin as part of a diversified investment strategy. We offer small, in‑person sessions. Melbourne Based, Interstate available. Our experienced coaches demystify Bitcoin and show how it can fit into your financial plan.
              </p>
              <p className=' text-primary-800 font-body leading-relaxed'>
                There is no hype and no promises of fast fortunes—just practical education that builds confidence for slow, certain growth. Join us to reclaim control over your money and prepare for the future.
              </p>
            </div>
          </div>
          
          {/* Three Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center'>
            <button 
              onClick={() => scrollToSection('corporate-sme')}
              aria-label='Navigate to Corporate & SME section'
              className='w-full sm:w-auto bg-accent-500 text-white py-4 px-8 rounded-lg font-semibold hover:bg-accent-600 transition-colors duration-300 cursor-pointer font-display text-base '
            >
              Corporate & SME
            </button>
            <button 
              onClick={() => scrollToSection('accountants-advisors')}
              aria-label='Navigate to Accountants & Financial Advisors section'
              className='w-full sm:w-auto bg-accent-500 text-white py-4 px-8 rounded-lg font-semibold hover:bg-accent-600 transition-colors duration-300 cursor-pointer font-display text-base '
            >
              Accountants & Financial Advisors
            </button>
            <button 
              onClick={() => scrollToSection('individuals')}
              aria-label='Navigate to Individuals section'
              className='w-full sm:w-auto bg-accent-500 text-white py-4 px-8 rounded-lg font-semibold hover:bg-accent-600 transition-colors duration-300 cursor-pointer font-display text-base '
            >
              Individuals
            </button>
          </div>
        </div>
      </div>

      {/* Corporate & SME Section */}
      <div id='corporate-sme' className='bg-white py-16 lg:py-24'>
        <div className='w-full max-w-4xl px-8 mx-auto'>
          <div className='text-center mb-12'>
            <h3 className='text-3xl font-bold text-primary-900 font-display mb-6'>
              Corporate & SME
            </h3>
            <p className=' text-primary-800 font-body leading-relaxed mb-8'>
              You know your business, your treasury portfolio and your investment criteria
            </p>
          </div>

          <div className='space-y-6 mb-8'>
            <p className=' text-primary-800 font-body leading-relaxed text-center'>
              We can help you with:
            </p>
            <div className='grid gap-6 md:grid-cols-3'>
              <div className='bg-primary-50 p-6 rounded-lg border border-primary-200'>
                <div className='flex justify-center mb-4'>
                  <div className='w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center'>
                    <TrendingUp className='w-8 h-8 text-accent-600' />
                  </div>
                </div>
                <p className='text-primary-800 font-body leading-relaxed text-center'>
                  Assessing Bitcoin&apos;s role in your treasury strategy
                </p>
              </div>
              <div className='bg-primary-50 p-6 rounded-lg border border-primary-200'>
                <div className='flex justify-center mb-4'>
                  <div className='w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center'>
                    <ShieldCheck className='w-8 h-8 text-accent-600' />
                  </div>
                </div>
                <p className='text-primary-800 font-body leading-relaxed text-center'>
                  Crafting governance policies for secure adoption
                </p>
              </div>
              <div className='bg-primary-50 p-6 rounded-lg border border-primary-200'>
                <div className='flex justify-center mb-4'>
                  <div className='w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center'>
                    <Target className='w-8 h-8 text-accent-600' />
                  </div>
                </div>
                <p className='text-primary-800 font-body leading-relaxed text-center'>
                  Optimising practices for risk, purchase, sale, storage, and succession planning
                </p>
              </div>
            </div>
          </div>

          <div className='bg-accent-50 p-8 rounded-lg border-l-4 border-accent-500 text-center'>
            <p className=' text-primary-800 font-body leading-relaxed mb-4'>
              Book in a 1-hour tailored, in-house introductory hour for your CFO and financial department here
            </p>
            <p className='text-2xl font-semibold text-accent-600 font-display mb-6'>
              only $195pp
            </p>
            <div className='flex flex-col sm:flex-row gap-3 justify-center items-center'>
              <button className='bg-accent-500 text-white py-3 px-8 rounded-lg font-semibold hover:bg-accent-600 transition-colors duration-300 cursor-pointer font-display text-base'
                onClick={() => { setCurrentSessionType('Corporate & SME'); setIsBookModalOpen(true); }}
              >
                Book Session
              </button>
              <a
                href='https://calendly.com/carri27/30min'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center bg-transparent border-2 border-primary-900 text-primary-900 py-3 px-8 rounded-lg font-semibold hover:bg-primary-900 hover:text-white transition-colors duration-300 cursor-pointer font-display text-base'
              >
                Schedule a call
                <ExternalLink className='ml-2 w-4 h-4' />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Accountants & Financial Advisors Section */}
      <div id='accountants-advisors' className='bg-gray-50 py-16 lg:py-24'>
        <div className='w-full max-w-4xl px-8 mx-auto'>
          <div className='text-center mb-12'>
            <h3 className='text-3xl font-bold text-primary-900 font-display mb-6'>
              Accountants & Financial Advisors
            </h3>
            <p className=' text-primary-800 font-body leading-relaxed mb-8'>
              You know your clients: their needs, risk profiles and aspirations
            </p>
          </div>

          <div className='space-y-6 mb-8'>
            <p className=' text-primary-800 font-body leading-relaxed text-center'>
              We can help you with:
            </p>
            <div className='grid gap-6 md:grid-cols-3'>
              <div className='bg-primary-50 p-6 rounded-lg border border-primary-200'>
                <div className='flex justify-center mb-4'>
                  <div className='w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center'>
                    <Lightbulb className='w-8 h-8 text-accent-600' />
                  </div>
                </div>
                <p className='text-primary-800 font-body leading-relaxed text-center'>
                  Demystifying Bitcoin and its benefits
                </p>
              </div>
              <div className='bg-primary-50 p-6 rounded-lg border border-primary-200'>
                <div className='flex justify-center mb-4'>
                  <div className='w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center'>
                    <Users className='w-8 h-8 text-accent-600' />
                  </div>
                </div>
                <p className='text-primary-800 font-body leading-relaxed text-center'>
                  Guiding clients with credible, trustworthy advice
                </p>
              </div>
              <div className='bg-primary-50 p-6 rounded-lg border border-primary-200'>
                <div className='flex justify-center mb-4'>
                  <div className='w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center'>
                    <TrendingDown className='w-8 h-8 text-accent-600' />
                  </div>
                </div>
                <p className='text-primary-800 font-body leading-relaxed text-center'>
                  Evaluating risks and opportunities confidently
                </p>
              </div>
            </div>
          </div>

          <div className='bg-accent-50 p-8 rounded-lg border-l-4 border-accent-500 text-center'>
            <p className=' text-primary-800 font-body leading-relaxed mb-4'>
              Schedule a 1-hour customised, in-house introductory workshop for your firm&apos;s staff here
            </p>
            <p className='text-2xl font-semibold text-accent-600 font-display mb-6'>
              Only $195pp
            </p>
            <div className='flex flex-col sm:flex-row gap-3 justify-center items-center'>
              <button className='bg-accent-500 text-white py-3 px-8 rounded-lg font-semibold hover:bg-accent-600 transition-colors duration-300 cursor-pointer font-display text-base'
                onClick={() => { setCurrentSessionType('Accountants & Financial Advisors'); setIsBookModalOpen(true); }}
              >
                Book Workshop
              </button>
              <a
                href='https://calendly.com/carri27/30min'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center bg-transparent border-2 border-primary-900 text-primary-900 py-3 px-8 rounded-lg font-semibold hover:bg-primary-900 hover:text-white transition-colors duration-300 cursor-pointer font-display text-base'
              >
                Schedule a call
                <ExternalLink className='ml-2 w-4 h-4' />
              </a>
            </div>
          </div>

          {/* Testimonial */}
          <div className='mt-16 bg-gradient-to-br from-accent-100 to-primary-50 p-8 rounded-lg border-2 border-accent-300 shadow-lg relative'>
            <span className='absolute top-3 left-3 inline-block px-3 py-1 text-xs font-semibold bg-accent-100 text-accent-700 rounded-full border border-accent-200'>
              Testimonial
            </span>
            <div className='flex flex-col items-center space-y-6'>
              <div className='bg-white rounded-full p-1 shadow-md'>
                <Image
                  src='/images/sevan_tuna.png'
                  alt='Sevan Tuna'
                  width={120}
                  height={120}
                  className='rounded-full object-cover object-top'
                  style={{ objectPosition: 'center 15%' }}
                />
              </div>
              <div className='text-center max-w-2xl'>
                <p className='text-2xl text-primary-900 font-body italic mb-4 leading-relaxed'>
                  &quot;A lot of our clients have asked us about Bitcoin, what our opinion is, what we know about it,
                  whether they should be buying it. It came at a really good time, meeting the Bitcoin Treasury
                  Solutions team.&quot;
                </p>
                <div className='flex items-center justify-center gap-3'>
                  <p className='text-lg font-semibold text-accent-700 font-display mb-0'>
                    — Sevan Tuna
                  </p>
                  <Link 
                    href='https://www.linkedin.com/in/sevantuna/' 
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center justify-center text-accent-700 hover:text-accent-600 transition-colors duration-300'
                    aria-label='Connect with Sevan Tuna on LinkedIn'
                  >
                    <svg 
                      className='w-5 h-5' 
                      fill='currentColor' 
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                    </svg>
                  </Link>
                </div>
                <p className='text-primary-700 font-body'>
                  Managing Director, Alexander Spencer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Individuals Section */}
      <div id='individuals' className='bg-white py-16 lg:py-24'>
        <div className='w-full max-w-4xl px-8 mx-auto'>
          <div className='text-center mb-12'>
            <h3 className='text-3xl font-bold text-primary-900 font-display mb-6'>
              Individuals
            </h3>
            <p className=' text-primary-800 font-body leading-relaxed mb-8'>
              You know your financial situation, your investment portfolio and your retirement dreams
            </p>
          </div>

          <div className='space-y-6 mb-8'>
            <p className=' text-primary-800 font-body leading-relaxed text-center'>
              We can help you with:
            </p>
            <div className='grid gap-6 md:grid-cols-3'>
              <div className='bg-primary-50 p-6 rounded-lg border border-primary-200'>
                <div className='flex justify-center mb-4'>
                  <div className='w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center'>
                    <Map className='w-8 h-8 text-accent-600' />
                  </div>
                </div>
                <p className='text-primary-800 font-body leading-relaxed text-center'>
                  Navigating Bitcoin&apos;s place in the investment landscape
                </p>
              </div>
              <div className='bg-primary-50 p-6 rounded-lg border border-primary-200'>
                <div className='flex justify-center mb-4'>
                  <div className='w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center'>
                    <DollarSign className='w-8 h-8 text-accent-600' />
                  </div>
                </div>
                <p className='text-primary-800 font-body leading-relaxed text-center'>
                  Assessing its value proposition
                </p>
              </div>
              <div className='bg-primary-50 p-6 rounded-lg border border-primary-200'>
                <div className='flex justify-center mb-4'>
                  <div className='w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center'>
                    <Wallet className='w-8 h-8 text-accent-600' />
                  </div>
                </div>
                <p className='text-primary-800 font-body leading-relaxed text-center'>
                  Integrating it into your portfolio with best practices for purchasing and storage
                </p>
              </div>
            </div>
          </div>

          <div className='bg-accent-50 p-8 rounded-lg border-l-4 border-accent-500 text-center'>
            <p className=' text-primary-800 font-body leading-relaxed mb-4'>
              Join our 1-day public workshop for you and your loved ones
            </p>
            <p className='text-2xl font-semibold text-accent-600 font-display mb-6'>
              Only $495pp here
            </p>
            <Link
              href='/events'
              className='inline-block bg-accent-500 text-white py-3 px-8 rounded-lg font-semibold hover:bg-accent-600 transition-colors duration-300 cursor-pointer font-display text-base'
            >
              Check available workshops
            </Link>
          </div>

          {/* Testimonial */}
          <div className='mt-16 bg-gradient-to-br from-accent-100 to-primary-50 p-8 rounded-lg border-2 border-accent-300 shadow-lg relative'>
            <span className='absolute top-3 left-3 inline-block px-3 py-1 text-xs font-semibold bg-accent-100 text-accent-700 rounded-full border border-accent-200'>
              Testimonial
            </span>
            <div className='flex flex-col items-center space-y-6'>
              <div className='bg-white rounded-full p-1 shadow-md'>
                <Image
                  src='/images/tamara.png'
                  alt='Tam Jones'
                  width={120}
                  height={120}
                  className='rounded-full object-cover object-top'
                  style={{ objectPosition: 'center 15%' }}
                />
              </div>
              <div className='text-center max-w-2xl'>
                <div className='hidden lg:block'>
                  <p className='text-2xl text-primary-900 font-body italic mb-4 leading-relaxed'>
                    &quot;I loved this workshop – it&apos;s &apos;Bitcoin for beginners&apos; and gave me enough of an overview to dispel the myths around bitcoin, truly define what it is, and what it isn&apos;t, and how to take bitcoin into consideration in my financial decision making – it&apos;s not financial advice, but truly helped me understand bitcoin&apos;s: history, current status, and comparisons to other financial instruments. They cover the benefits and risks in a very interactive and interesting format. The team&apos;s knowledge and passion are incredible! If you don&apos;t know much about bitcoin, but want to, this a brilliant and valuable way to easily learn it.&quot;
                  </p>
                </div>
                <div className='block lg:hidden'>
                  <p className='text-2xl text-primary-900 font-body italic mb-4 leading-relaxed'>
                    {showFullTamTestimonial ? (
                      <>
                        &quot;I loved this workshop – it&apos;s &apos;Bitcoin for beginners&apos; and gave me enough of an overview to dispel the myths around bitcoin, truly define what it is, and what it isn&apos;t, and how to take bitcoin into consideration in my financial decision making – it&apos;s not financial advice, but truly helped me understand bitcoin&apos;s: history, current status, and comparisons to other financial instruments. They cover the benefits and risks in a very interactive and interesting format. The team&apos;s knowledge and passion are incredible! If you don&apos;t know much about bitcoin, but want to, this a brilliant and valuable way to easily learn it.&quot;
                      </>
                    ) : (
                      <>
                        &quot;I loved this workshop – it&apos;s &apos;Bitcoin for beginners&apos; and gave me enough of an overview to dispel the myths around bitcoin, truly define what it is, and what it isn&apos;t, and how to take bitcoin into consideration in my financial decision making – it&apos;s not financial advice, but truly helped me understand bitcoin&apos;s: history, current status, and comparisons to other financial instruments.{' '}
                        <button
                          onClick={() => setShowFullTamTestimonial(true)}
                          className='text-accent-600 hover:text-accent-700 underline font-semibold ml-1'
                        >
                          ...show more
                        </button>
                      </>
                    )}
                  </p>
                  {showFullTamTestimonial && (
                    <button
                      onClick={() => setShowFullTamTestimonial(false)}
                      className='text-accent-600 hover:text-accent-700 underline font-semibold mt-2'
                    >
                      show less
                    </button>
                  )}
                  </div>
                <div className='flex items-center justify-center gap-3'>
                  <p className='text-lg font-semibold text-accent-700 font-display mb-0'>
                    — Tam Jones
                  </p>
                  <Link 
                    href='https://www.linkedin.com/in/tamera-jones-17451b4/' 
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center justify-center text-accent-700 hover:text-accent-600 transition-colors duration-300'
                    aria-label='Connect with Tam Jones on LinkedIn'
                  >
                    <svg 
                      className='w-5 h-5' 
                      fill='currentColor' 
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                    </svg>
                  </Link>
                </div>
                <p className='text-primary-700 font-body'>
                  Leadership Coach
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BookSessionModal isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} sessionType={currentSessionType} />
    </>
  );
}
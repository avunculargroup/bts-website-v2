'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WaitlistModal } from '@/components/WaitlistModal';

export default function Events() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  return (
    <div className='min-h-screen bg-background'>
      <Container className='py-16 lg:py-24'>
        <div className='max-w-4xl mx-auto'>
          {/* Page Header */}
          <div className='text-center mb-16'>
            <Calendar className='mx-auto h-16 w-16 text-accent-500 mb-4' />
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 font-display mb-6'>
              Events
            </h1>
            <p className='text-xl text-primary-700 font-body leading-relaxed'>
              Join us for educational workshops and community events. Melbourne based, interstate available on request.
            </p>
          </div>

          {/* No Events Message */}
          <div className='bg-white rounded-lg shadow-sm border border-primary-200 p-12 text-center mb-16'>
            <div className='w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6'>
              <Calendar className='w-10 h-10 text-accent-600' />
            </div>
            
            <h2 className='text-2xl font-bold text-primary-900 font-display mb-4'>
              No Upcoming Public Events
            </h2>
            
            <p className='text-primary-700 font-body leading-relaxed mb-8 max-w-2xl mx-auto'>
              We&apos;re currently planning our next series of workshops and events. Be the first to know when we announce new sessions by joining our waitlist.
            </p>

            {/* Waitlist Signup */}
            <div className='bg-accent-50 p-8 rounded-lg border-l-4 border-accent-500 max-w-md mx-auto'>
              <h3 className=' font-semibold text-primary-900 font-display mb-4'>
                Join the Waitlist
              </h3>
              <p className='text-primary-700 font-body text-sm mb-6'>
                Get notified when we announce new workshops and events.
              </p>
              
              <Button 
                onClick={() => setIsWaitlistModalOpen(true)}
                className='w-full bg-accent-500 hover:bg-accent-600 text-white font-display text-base'
              >
                Join Waitlist
              </Button>
            </div>
          </div>

          {/* What to Expect */}
          <div className='space-y-8'>
            <h2 className='text-3xl font-bold text-primary-900 font-display text-center mb-12'>
              What to Expect at Our Events
            </h2>
            
            {/* Community Image */}
            <div className='mb-12'>
              <Image
                src='/images/crowd.jpg'
                alt='Community of people learning about Bitcoin together'
                width={800}
                height={400}
                className='rounded-lg shadow-lg mx-auto'
                priority
              />
            </div>
            
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {/* Event Features */}
              <div className='bg-white p-6 rounded-lg shadow-sm border border-primary-200 text-center'>
                <div className='w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Users className='w-6 h-6 text-accent-600' />
                </div>
                <h3 className=' font-semibold text-primary-900 font-display mb-2'>
                  Small Groups
                </h3>
                <p className='text-primary-700 font-body text-sm'>
                  Intimate sessions with personalised attention and plenty of time for questions.
                </p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-sm border border-primary-200 text-center'>
                <div className='w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Clock className='w-6 h-6 text-accent-600' />
                </div>
                <h3 className=' font-semibold text-primary-900 font-display mb-2'>
                  Flexible Timing
                </h3>
                <p className='text-primary-700 font-body text-sm'>
                  Sessions scheduled to fit around your work and family commitments.
                </p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-sm border border-primary-200 text-center'>
                <div className='w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <MapPin className='w-6 h-6 text-accent-600' />
                </div>
                <h3 className=' font-semibold text-primary-900 font-display mb-2'>
                  Melbourne Based, interstate on request.
                </h3>
                <p className='text-primary-700 font-body text-sm'>
                  Convenient locations in Melbourne with easy access to public transport, or we can travel to your location.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className='mt-16 mb-16'>
            <div className='bg-gradient-to-br from-accent-100 to-primary-50 p-8 rounded-lg border-2 border-accent-300 shadow-lg relative'>
              <span className='absolute top-3 left-3 inline-block px-3 py-1 text-xs font-semibold bg-accent-100 text-accent-700 rounded-full border border-accent-200'>
                Testimonial
              </span>
              <div className='flex flex-col items-center space-y-6'>
                <div className='text-center max-w-2xl'>
                  <p className='text-2xl text-primary-900 font-body italic mb-4 leading-relaxed'>
                    &quot;The workshop will further my business/SMSF confidence in investing in bitcoin. It will help me to ride out the market volatility. Well presented with much knowledge gained.&quot;
                  </p>
                  <div className='flex items-center justify-center gap-3'>
                    <p className='text-lg font-semibold text-accent-700 font-display mb-0'>
                      — Lochlan McNally
                    </p>
                    <Link 
                      href='https://www.linkedin.com/in/lochlan-mcnally-00616436/' 
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center justify-center text-accent-700 hover:text-accent-600 transition-colors duration-300'
                      aria-label='Connect with Lochlan McNally on LinkedIn'
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
                    Manager, Budget and Finance, Mining and Automotive Skills Alliance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className='mt-16 text-center'>
            <div className='bg-primary-50 p-8 rounded-lg'>
              <h3 className='text-2xl font-bold text-primary-900 font-display mb-4'>
                Interested in Private Sessions?
              </h3>
              <p className='text-primary-700 font-body mb-6'>
                We also offer one-on-one coaching and custom workshops for businesses and groups.
              </p>
              <Button asChild className='bg-accent-500 hover:bg-accent-600 text-white font-display text-base'>
                <a href='/contact'>Get in Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Waitlist Modal */}
      <WaitlistModal 
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </div>
  );
}

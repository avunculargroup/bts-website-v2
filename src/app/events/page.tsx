'use client';

import { useState } from 'react';
import Image from 'next/image';
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
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 font-display mb-6'>
              Events
            </h1>
            <p className='text-xl text-primary-700 font-body leading-relaxed'>
              Join us for educational workshops and community events in Melbourne
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
              We're currently planning our next series of workshops and events. Be the first to know when we announce new sessions by joining our waitlist.
            </p>

            {/* Waitlist Signup */}
            <div className='bg-accent-50 p-8 rounded-lg border-l-4 border-accent-500 max-w-md mx-auto'>
              <h3 className='text-lg font-semibold text-primary-900 font-display mb-4'>
                Join the Waitlist
              </h3>
              <p className='text-primary-700 font-body text-sm mb-6'>
                Get notified when we announce new workshops and events in Melbourne.
              </p>
              
              <Button 
                onClick={() => setIsWaitlistModalOpen(true)}
                className='w-full bg-accent-500 hover:bg-accent-600 text-white font-display'
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
                <h3 className='text-lg font-semibold text-primary-900 font-display mb-2'>
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
                <h3 className='text-lg font-semibold text-primary-900 font-display mb-2'>
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
                <h3 className='text-lg font-semibold text-primary-900 font-display mb-2'>
                  Melbourne Based
                </h3>
                <p className='text-primary-700 font-body text-sm'>
                  Convenient locations in Melbourne with easy access to public transport.
                </p>
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
              <Button asChild className='bg-accent-500 hover:bg-accent-600 text-white font-display'>
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

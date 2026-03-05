'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { WaitlistModal } from '@/components/WaitlistModal';

export default function Events() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const primaryBtn: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    backgroundColor: 'var(--color-gold)',
    color: 'var(--color-text-primary)',
    borderRadius: 'var(--radius-lg)',
  };

  return (
    <div className='min-h-screen' style={{ backgroundColor: 'var(--color-bg)' }}>
      <Container className='py-16 lg:py-24'>
        <div className='max-w-4xl mx-auto'>
          {/* Page Header */}
          <div className='text-center mb-14'>
            <Calendar className='mx-auto h-12 w-12 mb-4' strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
            <h1
              className='text-4xl sm:text-5xl font-bold mb-4'
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
            >
              Events
            </h1>
            <p
              className='text-base leading-relaxed'
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
            >
              Join us for educational workshops and community events. Melbourne based, interstate available on request.
            </p>
          </div>

          {/* No Events Message */}
          <div
            className='p-12 text-center mb-14 rounded-xl'
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div
              className='w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6'
              style={{ backgroundColor: 'var(--color-gold-light)' }}
            >
              <Calendar className='w-8 h-8' strokeWidth={1.5} style={{ color: 'var(--color-gold-dark)' }} />
            </div>

            <h2
              className='text-2xl font-bold mb-4'
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
            >
              No Upcoming Public Events
            </h2>

            <p
              className='text-sm leading-relaxed mb-8 max-w-2xl mx-auto'
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
            >
              We&apos;re currently planning our next series of workshops and events. Be the first to know when we announce new sessions by joining our waitlist.
            </p>

            <div
              className='p-8 rounded-xl max-w-md mx-auto text-center'
              style={{
                backgroundColor: 'var(--color-gold-light)',
                border: '1px solid var(--color-border)',
                borderLeft: '4px solid var(--color-gold)',
              }}
            >
              <h3
                className='font-semibold mb-3'
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
              >
                Join the Waitlist
              </h3>
              <p
                className='text-sm mb-5'
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
              >
                Get notified when we announce new workshops and events.
              </p>
              <button
                onClick={() => setIsWaitlistModalOpen(true)}
                className='w-full py-2.5 text-sm font-medium rounded-lg transition-colors duration-100 active:scale-[0.98]'
                style={primaryBtn}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold-dark)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold)'; }}
              >
                Join Waitlist
              </button>
            </div>
          </div>

          {/* What to Expect */}
          <div className='space-y-8'>
            <h2
              className='text-2xl sm:text-3xl font-bold text-center'
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
            >
              What to Expect at Our Events
            </h2>

            {/* Video */}
            <div>
              <div className='aspect-video max-w-4xl mx-auto'>
                <iframe
                  src='https://www.youtube.com/embed/KLC-0dgBjEA'
                  title='What to Expect at Our Events'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                  loading='lazy'
                  className='w-full h-full rounded-xl'
                  style={{ boxShadow: 'var(--shadow-md)' }}
                />
              </div>
            </div>

            <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
              {[
                { Icon: Users, title: 'Small Groups', desc: 'Intimate sessions with personalised attention and plenty of time for questions.' },
                { Icon: Clock, title: 'Flexible Timing', desc: 'Sessions scheduled to fit around your work and family commitments.' },
                { Icon: MapPin, title: 'Melbourne Based', desc: 'Convenient locations in Melbourne, or we can travel interstate to your location.' },
              ].map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className='p-6 rounded-xl text-center'
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div
                    className='w-11 h-11 rounded-lg flex items-center justify-center mx-auto mb-4'
                    style={{ backgroundColor: 'var(--color-gold-light)' }}
                  >
                    <Icon className='w-5 h-5' strokeWidth={1.5} style={{ color: 'var(--color-gold-dark)' }} />
                  </div>
                  <h3
                    className='font-semibold mb-2 text-sm'
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)' }}
                  >
                    {title}
                  </h3>
                  <p
                    className='text-sm leading-relaxed'
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className='mt-14 mb-14'>
            <div
              className='p-8 rounded-xl relative'
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <span
                className='absolute top-3 left-3 inline-block px-2.5 py-0.5 text-xs font-medium rounded'
                style={{
                  fontFamily: 'var(--font-body)',
                  backgroundColor: 'var(--color-gold-light)',
                  color: 'var(--color-gold-dark)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                Testimonial
              </span>
              <div className='flex flex-col items-center space-y-4 pt-4'>
                <div className='text-center max-w-2xl'>
                  <p
                    className='text-xl italic mb-4 leading-relaxed'
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)' }}
                  >
                    &quot;The workshop will further my business/SMSF confidence in investing in bitcoin. It will help me to ride out the market volatility. Well presented with much knowledge gained.&quot;
                  </p>
                  <div className='flex items-center justify-center gap-2'>
                    <p
                      className='text-base font-semibold mb-0'
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
                    >
                      — Lochlan McNally
                    </p>
                    <Link
                      href='https://www.linkedin.com/in/lochlan-mcnally-00616436/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='transition-colors'
                      style={{ color: 'var(--color-text-tertiary)' }}
                      onMouseOver={(e) => { e.currentTarget.style.color = 'var(--color-gold)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.color = 'var(--color-text-tertiary)'; }}
                      aria-label='Connect with Lochlan McNally on LinkedIn'
                    >
                      <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                      </svg>
                    </Link>
                  </div>
                  <p
                    className='text-sm mt-1'
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                  >
                    Manager, Budget and Finance, Mining and Automotive Skills Alliance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className='text-center'>
            <div
              className='p-8 rounded-xl'
              style={{
                backgroundColor: 'var(--color-surface-subtle)',
                border: '1px solid var(--color-border)',
              }}
            >
              <h3
                className='text-2xl font-bold mb-4'
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
              >
                Interested in Private Sessions?
              </h3>
              <p
                className='text-sm mb-6'
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
              >
                We also offer one-on-one coaching and custom workshops for businesses and groups.
              </p>
              <a
                href='/contact'
                className='inline-flex items-center px-6 py-2.5 text-sm font-medium rounded-lg transition-colors duration-100 active:scale-[0.98]'
                style={primaryBtn}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold-dark)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold)'; }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </Container>

      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </div>
  );
}

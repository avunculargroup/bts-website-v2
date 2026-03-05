'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const primaryBtn: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  backgroundColor: 'var(--color-gold)',
  color: 'var(--color-text-primary)',
  borderRadius: 'var(--radius-lg)',
};

export function Resources() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage('Successfully subscribed.');
        setEmail('');
        setTimeout(() => { setIsSuccess(false); setMessage(''); }, 3000);
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const publications = [
    {
      title: "What's Driving Bitcoin Adoption in 2025",
      description: "River Financial's comprehensive report on Bitcoin adoption trends, institutional investment, and the factors shaping Bitcoin's emergence as a global reserve asset.",
      image: "/images/river_financial.png",
      type: "Report",
      link: "https://river.com/learn/files/river-bitcoin-adoption-report-2025.pdf"
    },
    {
      title: "The Case for Bitcoin",
      description: "Fidelity's research-based framework for understanding Bitcoin's unique features, risk/return characteristics, and potential role as an alternative investment within multi-asset portfolios.",
      image: "/images/fidelity-investments.jpg",
      type: "Research",
      link: "https://institutional.fidelity.com/advisors/insights/topics/investing-ideas/the-case-for-bitcoin"
    },
    {
      title: "Conversation with AMP's Shane Oliver",
      description: "An insightful discussion with AMP's Chief Economist Shane Oliver on Bitcoin's role in investment portfolios and institutional adoption trends.",
      image: "/images/oliver-shane-650-2020.jpg",
      type: "Video",
      link: "https://www.youtube.com/watch?v=yaU9yN-wJr8"
    }
  ];

  return (
    <section className='py-16 lg:py-24' style={{ backgroundColor: 'var(--color-surface-subtle)' }}>
      <div className='max-w-5xl mx-auto px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2
            className='text-3xl sm:text-4xl font-bold mb-4'
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
          >
            Resources
          </h2>
          <p
            className='text-base leading-relaxed max-w-2xl mx-auto'
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
          >
            Access our curated list of resources to deepen your understanding of Bitcoin and investment strategies.
          </p>
        </div>

        {/* Publications Grid */}
        <div className='grid gap-6 md:grid-cols-3 mb-10'>
          {publications.map((publication, index) => (
            <div
              key={index}
              className='rounded-xl overflow-hidden transition-all duration-200'
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className='w-full h-44 relative'>
                <Image
                  src={publication.image}
                  alt={`${publication.title} - ${publication.type}`}
                  fill
                  className='object-cover'
                />
              </div>

              <div className='p-5'>
                <span
                  className='inline-block px-2.5 py-0.5 text-xs font-medium rounded mb-3'
                  style={{
                    fontFamily: 'var(--font-body)',
                    backgroundColor: 'var(--color-gold-light)',
                    color: 'var(--color-gold-dark)',
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  {publication.type}
                </span>
                <h3
                  className='text-base font-semibold mb-2 leading-snug'
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)' }}
                >
                  {publication.link ? (
                    <a
                      href={publication.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: 'inherit' }}
                      onMouseOver={(e) => { e.currentTarget.style.color = 'var(--color-gold-dark)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.color = 'inherit'; }}
                    >
                      {publication.title}
                    </a>
                  ) : (
                    publication.title
                  )}
                </h3>
                <p
                  className='text-sm leading-relaxed mb-4'
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                >
                  {publication.description}
                </p>
                {publication.link && (
                  <a
                    href={publication.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center text-sm font-medium transition-colors'
                    style={{ color: 'var(--color-gold-dark)' }}
                    onMouseOver={(e) => { e.currentTarget.style.color = 'var(--color-gold)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.color = 'var(--color-gold-dark)'; }}
                  >
                    {publication.type === 'Video' ? 'Watch video' : 'Read report'}
                    <svg className='ml-1.5 w-3.5 h-3.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className='mb-10'>
          <div
            className='p-8 md:p-10 rounded-xl text-center'
            style={{
              backgroundColor: 'var(--color-text-primary)',
            }}
          >
            <h3
              className='text-2xl font-bold mb-3'
              style={{ fontFamily: 'var(--font-display)', color: '#FAFAF8' }}
            >
              Stay Informed
            </h3>
            <p
              className='text-sm mb-6 max-w-lg mx-auto'
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-tertiary)' }}
            >
              Get the latest Bitcoin news affecting Australians and stay informed about new events and educational resources.
            </p>
            <form onSubmit={handleNewsletterSubmit} className='max-w-sm mx-auto'>
              <div className='flex flex-col sm:flex-row gap-2'>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email address'
                  required
                  disabled={isSubmitting || isSuccess}
                  className='flex-1 px-4 py-2.5 text-sm rounded-md disabled:opacity-60 disabled:cursor-not-allowed'
                  style={{
                    fontFamily: 'var(--font-body)',
                    border: '1px solid rgba(232,230,224,0.2)',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    color: '#FAFAF8',
                    borderRadius: 'var(--radius-md)',
                    outline: 'none',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-gold)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.2)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(232,230,224,0.2)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
                <button
                  type='submit'
                  disabled={isSubmitting || isSuccess}
                  className='px-5 py-2.5 text-sm font-medium rounded-lg whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-100 active:scale-[0.98]'
                  style={primaryBtn}
                  onMouseOver={(e) => { if (!isSubmitting && !isSuccess) e.currentTarget.style.backgroundColor = 'var(--color-gold-dark)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold)'; }}
                >
                  {isSubmitting ? 'Subscribing...' : isSuccess ? 'Subscribed' : 'Subscribe'}
                </button>
              </div>
              {message && (
                <p
                  className='mt-2 text-sm'
                  style={{ color: message.includes('Success') ? '#6fba9a' : '#e08080' }}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Featured Video */}
        <div className='mb-10'>
          <div
            className='p-6 lg:p-8 rounded-xl'
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div className='text-center mb-6'>
              <h3
                className='text-xl font-semibold mb-2'
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
              >
                Featured Discussion
              </h3>
              <p
                className='text-sm leading-relaxed max-w-2xl mx-auto'
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
              >
                Watch Carri from BTS discuss Bitcoin with Sevan Tuna from Alexander Spencer, an accounting firm in Camberwell.
              </p>
            </div>

            <div className='aspect-video max-w-3xl mx-auto'>
              <iframe
                src='https://www.youtube.com/embed/Bphcovq_VUk'
                title='Carri from BTS discusses Bitcoin with Sevan Tuna from Alexander Spencer'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
                loading='lazy'
                className='w-full h-full rounded-lg'
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className='text-center'>
          <div
            className='p-8 rounded-xl max-w-xl mx-auto'
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
              Explore More Resources
            </h3>
            <p
              className='text-sm leading-relaxed mb-6'
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
            >
              Access our complete library of guides, articles, and educational materials to support your Bitcoin journey.
            </p>
            <Link
              href='/resources'
              className='inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg transition-colors duration-100 active:scale-[0.98]'
              style={primaryBtn}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold-dark)'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold)'; }}
            >
              View all resources
              <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 5l7 7-7 7' />
              </svg>
            </Link>
          </div>

          <p
            className='text-sm mt-8'
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
          >
            Want to calculate Bitcoin&apos;s historic performance? Try our{' '}
            <Link
              href='/calculator'
              className='font-medium underline underline-offset-2'
              style={{ color: 'var(--color-gold-dark)' }}
            >
              Bitcoin CAGR Calculator
            </Link>{' '}
            with Australian tax scenarios.
          </p>
        </div>
      </div>
    </section>
  );
}

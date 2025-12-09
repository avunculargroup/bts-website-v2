'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage('Successfully subscribed!');
        setEmail('');
        setTimeout(() => {
          setIsSuccess(false);
          setMessage('');
        }, 3000);
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
    <section className='py-16 lg:py-24 bg-primary-50'>
      <div className='max-w-6xl mx-auto px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 font-display mb-6'>
            Resources
          </h2>
          <p className='text-xl text-primary-700 font-body leading-relaxed max-w-3xl mx-auto'>
            Access our curated list of resources to deepen your understanding of Bitcoin and investment strategies.
          </p>
        </div>

        {/* Publications Grid */}
        <div className='grid gap-8 md:grid-cols-3 mb-12'>
          {publications.map((publication, index) => (
            <div key={index} className='bg-white rounded-lg shadow-sm border border-primary-200 hover:shadow-md transition-shadow duration-300 overflow-hidden'>
              {/* Image */}
              <div className='w-full h-48 relative mb-0'>
                <Image
                  src={publication.image}
                  alt={`${publication.title} - ${publication.type} cover image from Bitcoin Treasury Solutions`}
                  fill
                  className='object-cover'
                />
              </div>

              {/* Content */}
              <div className='p-6'>
                <span className='inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full mb-3'>
                  {publication.type}
                </span>
                <h3 className='text-xl font-bold text-primary-900 font-display mb-3'>
                  {publication.link ? (
                    <a 
                      href={publication.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:text-accent-600 transition-colors duration-300'
                    >
                      {publication.title}
                    </a>
                  ) : (
                    publication.title
                  )}
                </h3>
                <p className='text-primary-700 font-body leading-relaxed mb-4'>
                  {publication.description}
                </p>
                {publication.link && (
                  <div className='mt-4'>
                    <a 
                      href={publication.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center text-accent-600 hover:text-accent-700 font-semibold text-sm transition-colors duration-300'
                    >
                      {publication.type === 'Video' ? 'Watch Video' : 'Read Report'}
                      <svg className='ml-1 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA Card */}
        <div className='mb-12'>
          <div className='bg-gradient-to-br from-accent-500 to-accent-600 p-8 md:p-12 rounded-lg shadow-lg text-center'>
            <h3 className='text-2xl md:text-3xl font-bold text-white font-display mb-3'>
              Stay Informed with Our Newsletter
            </h3>
            <p className='text-accent-50 text-lg md:text-base font-body mb-6 max-w-2xl mx-auto'>
              Get the latest Bitcoin news affecting Australians and stay informed about new events and educational resources.
            </p>
            <form onSubmit={handleNewsletterSubmit} className='max-w-md mx-auto'>
              <div className='flex flex-col sm:flex-row gap-3'>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email address'
                  required
                  disabled={isSubmitting || isSuccess}
                  className='flex-1 px-4 py-3 bg-white border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent-500 font-body text-base text-primary-900 placeholder:text-primary-400 disabled:bg-gray-100 disabled:cursor-not-allowed'
                />
                <button
                  type='submit'
                  disabled={isSubmitting || isSuccess}
                  className='px-6 py-3 bg-white text-accent-600 font-semibold rounded-lg hover:bg-accent-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-display text-base whitespace-nowrap'
                >
                  {isSubmitting ? 'Subscribing...' : isSuccess ? 'Subscribed!' : 'Subscribe'}
                </button>
              </div>
              {message && (
                <p className={`mt-3 text-base ${message.includes('Success') ? 'text-white' : 'text-red-200'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Featured Video Section */}
        <div className='mb-12'>
          <div className='bg-white p-8 rounded-lg shadow-sm border border-primary-200'>
            <div className='text-center mb-6'>
              <h3 className='text-2xl font-bold text-primary-900 font-display mb-4'>
                Featured Discussion
              </h3>
            <p className='text-primary-700 font-body leading-relaxed max-w-3xl mx-auto'>
              Watch Carri from BTS discuss Bitcoin with Sevan Tuna from Alexander Spencer, an accounting firm in Camberwell.
            </p>
            </div>
            
            {/* YouTube Video Embed */}
            <div className='aspect-video max-w-4xl mx-auto'>
            <iframe
                src='https://www.youtube.com/embed/Bphcovq_VUk'
              title='Carri from BTS discusses Bitcoin with Sevan Tuna from Alexander Spencer'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
                loading='lazy'
                className='w-full h-full rounded-lg'
              ></iframe>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='text-center'>
          <div className='bg-white p-8 rounded-lg shadow-sm border border-primary-200 max-w-2xl mx-auto'>
            <h3 className='text-2xl font-bold text-primary-900 font-display mb-4'>
              Explore More Resources
            </h3>
            <p className='text-primary-700 font-body leading-relaxed mb-6'>
              Access our complete library of guides, articles, and educational materials to support your Bitcoin journey.
            </p>
            <Link 
              href='/resources'
              className='inline-flex items-center px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors duration-300 font-display text-base'
            >
              View All Resources
              <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </Link>
          </div>
        </div>

        {/* CTA to Calculator */}
        <div className='mt-16 text-center'>
          <p className='text-primary-700 font-body mb-6'>
            Want to calculate Bitcoin&apos;s historic performance? Try our <Link href='/calculator' className='text-accent-600 hover:text-accent-700 font-semibold underline'>Bitcoin CAGR Calculator</Link> with Australian tax scenarios.
          </p>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { faqData } from '@/lib/faq';
import { Container } from '@/components/Container';
import { BookOpen, ChevronDown, ChevronUp, Heart, ArrowRight } from 'lucide-react';
import { generateBreadcrumbSchema, generateVideoSchema } from '@/lib/structured-data';

export default function Resources() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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

  const featuredResources = [
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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // FAQPage structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Breadcrumb structured data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' },
  ]);

  // VideoObject structured data for embedded videos
  const videoSchemas = [
    generateVideoSchema({
      name: "Carri from BTS discusses Bitcoin with Sevan Tuna from Alexander Spencer",
      description: "Watch Carri from BTS discuss Bitcoin with Sevan Tuna from Alexander Spencer, an accounting firm in Camberwell.",
      videoId: "Bphcovq_VUk",
    }),
    generateVideoSchema({
      name: "Bitcoin Ponzi Scheme Explained",
      description: "An explanation of why Bitcoin is not a Ponzi scheme and how it differs from fraudulent investment schemes.",
      videoId: "ebgkAdaf7d0",
    }),
    generateVideoSchema({
      name: "What Is Bitcoin Backed By?",
      description: "Understanding what gives Bitcoin its value and how it differs from traditional backed currencies.",
      videoId: "LOEpthZlps0",
    }),
    generateVideoSchema({
      name: "Adam Back - Bitcoin Expert Interview",
      description: "An interview with Adam Back, a Bitcoin expert and cryptographer.",
      videoId: "7rHreBFqS7o",
    }),
  ];

  return (
    <div className='min-h-screen bg-background'>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {videoSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <Container className='py-16 lg:py-24'>
        <div className='max-w-4xl mx-auto'>
          {/* Page Header */}
          <div className='text-center mb-16'>
            <BookOpen className='mx-auto h-16 w-16 text-accent-500 mb-4' />
            <h1 className='text-4xl sm:text-5xl font-bold text-primary-900 font-display mb-4'>
              Resources
            </h1>
            <p className=' text-primary-800 font-body max-w-2xl mx-auto'>
              Access our curated list of resources to deepen your understanding of Bitcoin and investment strategies.
            </p>
          </div>

          {/* Featured Resources */}
          <div className='mb-20'>
            <h2 className='text-3xl font-bold text-primary-900 font-display mb-8 text-center'>
              Featured Resources
            </h2>
            <div className='grid gap-8 md:grid-cols-3'>
              {featuredResources.map((resource, index) => (
                <div key={index} className='bg-white rounded-lg shadow-sm border border-primary-200 hover:shadow-md transition-shadow duration-300 overflow-hidden'>
                  {/* Image */}
                  <div className='w-full h-48 relative mb-0'>
                    <Image
                      src={resource.image}
                      alt={`${resource.title} - ${resource.type} cover image from Bitcoin Treasury Solutions resources`}
                      fill
                      className='object-cover'
                    />
                  </div>

                  {/* Content */}
                  <div className='p-6'>
                    <span className='inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full mb-3'>
                      {resource.type}
                    </span>
                    <h3 className='text-xl font-bold text-primary-900 font-display mb-3'>
                      <a 
                        href={resource.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-accent-600 transition-colors duration-300'
                      >
                        {resource.title}
                      </a>
                    </h3>
                    <p className='text-primary-700 font-body leading-relaxed mb-4'>
                      {resource.description}
                    </p>
                    <div className='mt-4'>
                      <a 
                        href={resource.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center text-accent-600 hover:text-accent-700 font-semibold text-sm transition-colors duration-300'
                      >
                        {resource.type === 'Video' ? 'Watch Video' : 'Read Report'}
                        <svg className='ml-1 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter CTA Card */}
          <div className='mb-20'>
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
          <div className='mb-20'>
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

          {/* Bitcoin Through Values Feature Card */}
          <div className='mb-20'>
            <div className='bg-gradient-to-br from-accent-500 to-accent-600 p-8 md:p-12 rounded-lg shadow-lg'>
              <div className='flex flex-col md:flex-row items-center gap-6 md:gap-8'>
                <div className='flex-shrink-0'>
                  <div className='w-16 h-16 rounded-full bg-white/20 flex items-center justify-center'>
                    <Heart className='w-8 h-8 text-white' />
                  </div>
                </div>
                <div className='flex-1 text-center md:text-left'>
                  <h3 className='text-2xl md:text-3xl font-bold text-white font-display mb-3'>
                    Bitcoin Through Values
                  </h3>
                  <p className='text-accent-50 text-lg md:text-base font-body mb-4 max-w-2xl'>
                    Create a personalised Bitcoin guide based on values that matter to your colleague, board member, friend or loved one. Select values that resonate and generate a customised explanation.
                  </p>
                  <Link
                    href='/values'
                    className='inline-flex items-center gap-2 px-6 py-3 bg-white text-accent-600 font-semibold rounded-lg hover:bg-accent-50 transition-colors font-display text-base'
                  >
                    Create Your Guide
                    <ArrowRight className='w-5 h-5' />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div id='faqs'>
            <h2 className='text-3xl font-bold text-primary-900 font-display mb-8 text-center'>
              Frequently Asked Questions
            </h2>
            <div className='space-y-4'>
              {faqData.map((faq, index) => (
                <div key={index} className='bg-white rounded-lg shadow-sm border border-primary-200'>
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-label={faq.question}
                    aria-expanded={openFaq === index}
                    className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary-50 transition-colors duration-200'
                  >
                    <h3 className=' font-semibold text-primary-900 font-display pr-4'>
                      {faq.question}
                    </h3>
                    {openFaq === index ? (
                      <ChevronUp className='h-5 w-5 text-accent-600 flex-shrink-0' />
                    ) : (
                      <ChevronDown className='h-5 w-5 text-accent-600 flex-shrink-0' />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className='px-6 pb-4'>
                      <div className='border-t border-primary-100 pt-4'>
                        <p className='text-primary-700 font-body leading-relaxed mb-4'>
                          {faq.answer}
                        </p>
                        {index === 0 && (
                          <div className='mt-6'>
                            <div className='aspect-video max-w-2xl mx-auto'>
                              <iframe
                                src='https://www.youtube.com/embed/ebgkAdaf7d0?si=RzLnEMTrXnzRGG2n'
                                title='Bitcoin Ponzi Scheme Explained'
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                referrerPolicy='strict-origin-when-cross-origin'
                                allowFullScreen
                                loading='lazy'
                                className='w-full h-full rounded-lg'
                              />
                            </div>
                          </div>
                        )}
                        {index === 1 && (
                          <div className='mt-6'>
                            <div className='aspect-video max-w-2xl mx-auto'>
                              <iframe
                                src='https://www.youtube.com/embed/LOEpthZlps0?si=HZuAMbMJU3YH1HYw'
                                title='What Is Bitcoin Backed By?'
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                referrerPolicy='strict-origin-when-cross-origin'
                                allowFullScreen
                                loading='lazy'
                                className='w-full h-full rounded-lg'
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bitcoin People Section */}
          <div className='mt-20'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-primary-900 font-display mb-4'>
                Bitcoin People
              </h2>
              <p className='text-primary-700 font-body leading-relaxed max-w-3xl mx-auto'>
                Interviews with experts
              </p>
            </div>
            
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {/* Adam Back Video */}
              <div className='bg-white rounded-lg shadow-sm border border-primary-200 overflow-hidden'>
                <div className='aspect-video'>
                  <iframe
                    src='https://www.youtube.com/embed/7rHreBFqS7o?si=XKL7V1p3dWNdLUfX'
                    title='Adam Back - Bitcoin Expert Interview'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                    loading='lazy'
                    className='w-full h-full'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-primary-900 font-display mb-2'>
                    Adam Back
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

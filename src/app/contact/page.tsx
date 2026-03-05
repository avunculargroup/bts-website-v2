import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Container } from '@/components/Container';
import { ContactForm } from '@/components/ContactForm';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Bitcoin Treasury Solutions in Melbourne, Victoria for Bitcoin education workshops, corporate training, and consultations. Book a workshop or schedule a call. Interstate services available on request.',
  openGraph: {
    title: 'Contact Us | Bitcoin Treasury Solutions',
    description: 'Contact Bitcoin Treasury Solutions in Melbourne, Victoria for Bitcoin education workshops, training, and consultations. Book a workshop or schedule a call.',
    images: [
      {
        url: '/images/og-contact.png',
        width: 1200,
        height: 630,
        alt: 'Contact Bitcoin Treasury Solutions',
      },
    ],
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function Contact() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact' },
  ]);

  return (
    <div className='min-h-screen' style={{ backgroundColor: 'var(--color-bg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Container className='py-16 lg:py-24'>
        <div className='max-w-4xl mx-auto'>
          {/* Page Header */}
          <div className='text-center mb-14'>
            <h1
              className='text-4xl sm:text-5xl font-bold mb-4'
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
            >
              Contact Us
            </h1>
            <p
              className='text-base leading-relaxed'
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
            >
              Ready to start your Bitcoin education journey? Get in touch with us.
            </p>
          </div>

          {/* Contact Form */}
          <div
            className='rounded-xl p-8 lg:p-12 mb-14'
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className='grid gap-8 md:grid-cols-2'>
            {/* Contact Details */}
            <div className='space-y-6'>
              <h2
                className='text-2xl font-bold'
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
              >
                Get in Touch
              </h2>

              <div className='space-y-4'>
                {[
                  {
                    icon: (
                      <svg fill='none' stroke='currentColor' viewBox='0 0 24 24' className='w-5 h-5'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                      </svg>
                    ),
                    label: 'Email',
                    content: (
                      <a
                        href='mailto:enquiry@btreasury.com.au'
                        className='transition-colors'
                        style={{ color: 'var(--color-text-secondary)' }}
                        onMouseOver={(e) => { e.currentTarget.style.color = 'var(--color-gold-dark)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
                      >
                        enquiry@btreasury.com.au
                      </a>
                    ),
                  },
                  {
                    icon: (
                      <svg fill='none' stroke='currentColor' viewBox='0 0 24 24' className='w-5 h-5'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                      </svg>
                    ),
                    label: 'Schedule a Call',
                    content: (
                      <Link
                        href='https://calendly.com/carri27/30min'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-1 transition-colors'
                        style={{ color: 'var(--color-text-secondary)' }}
                        onMouseOver={(e) => { e.currentTarget.style.color = 'var(--color-gold-dark)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
                      >
                        Book a time
                        <ExternalLink className='w-3.5 h-3.5' strokeWidth={1.5} />
                      </Link>
                    ),
                  },
                  {
                    icon: (
                      <svg fill='none' stroke='currentColor' viewBox='0 0 24 24' className='w-5 h-5'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                      </svg>
                    ),
                    label: 'Location',
                    content: (
                      <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
                        585 Little Collins Street, Suite 513<br />
                        Melbourne, Victoria 3000
                      </p>
                    ),
                  },
                ].map(({ icon, label, content }) => (
                  <div key={label} className='flex items-start space-x-3'>
                    <div className='mt-0.5 shrink-0' style={{ color: 'var(--color-gold)' }}>
                      {icon}
                    </div>
                    <div>
                      <p
                        className='text-sm font-semibold mb-0.5'
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)' }}
                      >
                        {label}
                      </p>
                      <div className='text-sm' style={{ fontFamily: 'var(--font-body)' }}>
                        {content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Workshop Information */}
            <div className='space-y-6'>
              <h2
                className='text-2xl font-bold'
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
              >
                Book a Workshop
              </h2>

              <p
                className='text-sm leading-relaxed'
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
              >
                Join our small-group workshops designed for curious investors aged 35 and over. Melbourne based, interstate on request. Sessions are kept small so you can ask questions and get personalised guidance.
              </p>

              <div
                className='p-6 rounded-xl'
                style={{
                  backgroundColor: 'var(--color-gold-light)',
                  border: '1px solid var(--color-border)',
                  borderLeft: '4px solid var(--color-gold)',
                }}
              >
                <h3
                  className='text-sm font-semibold mb-3'
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)' }}
                >
                  What you&apos;ll learn:
                </h3>
                <ul className='space-y-1.5'>
                  {[
                    'What Bitcoin is and why it matters',
                    'How Bitcoin fits into a diversified investment strategy',
                    'Practical steps to buy, store and safeguard Bitcoin',
                    'How to manage risk and plan for slow, steady growth',
                  ].map((item) => (
                    <li key={item} className='flex items-start gap-2 text-sm' style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>
                      <span className='mt-1.5 w-1.5 h-1.5 rounded-full shrink-0' style={{ backgroundColor: 'var(--color-gold)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Container } from '@/components/Container';

function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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
        setMessage('Successfully subscribed.');
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

  return (
    <div
      className='border-b py-8'
      style={{
        backgroundColor: 'var(--color-surface-subtle)',
        borderColor: 'var(--color-border)',
      }}
    >
      <Container>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
          <div className='flex-1 text-center lg:text-left'>
            <h3
              className='text-xl font-semibold mb-1'
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
            >
              Stay Updated
            </h3>
            <p className='text-sm' style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>
              Get the latest Bitcoin news affecting Australians and stay informed about new events.
            </p>
          </div>
          <div className='flex-1 w-full lg:max-w-md'>
            <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-2'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                required
                disabled={isSubmitting || isSuccess}
                className='flex-1 px-4 py-2.5 text-sm rounded-md disabled:opacity-60 disabled:cursor-not-allowed'
                style={{
                  fontFamily: 'var(--font-body)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-text-primary)',
                  borderRadius: 'var(--radius-md)',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.15)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              <button
                type='submit'
                disabled={isSubmitting || isSuccess}
                className='px-5 py-2.5 text-sm font-medium rounded-lg whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-100 active:scale-[0.98]'
                style={{
                  fontFamily: 'var(--font-body)',
                  backgroundColor: 'var(--color-gold)',
                  color: 'var(--color-text-primary)',
                  borderRadius: 'var(--radius-lg)',
                }}
                onMouseOver={(e) => { if (!isSubmitting && !isSuccess) e.currentTarget.style.backgroundColor = 'var(--color-gold-dark)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold)'; }}
              >
                {isSubmitting ? 'Subscribing...' : isSuccess ? 'Subscribed' : 'Subscribe'}
              </button>
            </form>
            {message && (
              <p
                className='mt-2 text-sm text-center sm:text-left'
                style={{ color: message.includes('Success') ? 'var(--color-success)' : 'var(--color-destructive)' }}
              >
                {message}
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export function Footer() {
  return (
    <footer
      role='contentinfo'
      style={{ backgroundColor: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}
    >
      <NewsletterSubscribe />
      <Container className='py-12'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          {/* Company Info */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2.5'>
              <Image
                src='/images/logo.svg'
                alt='BTS Logo'
                width={40}
                height={40}
              />
              <span
                className='text-base font-semibold'
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
              >
                Bitcoin Treasury Solutions
              </span>
            </div>
            <p className='text-sm' style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>
              Structured Bitcoin learning for Australia&apos;s professionals.
            </p>
            {/* Social Media Links */}
            <div className='flex items-center gap-4'>
              <Link
                href='https://x.com/btreasuryau'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-colors'
                style={{ color: 'var(--color-text-tertiary)' }}
                onMouseOver={(e) => { e.currentTarget.style.color = 'var(--color-gold)'; }}
                onMouseOut={(e) => { e.currentTarget.style.color = 'var(--color-text-tertiary)'; }}
                aria-label='Follow us on X (Twitter)'
              >
                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'/>
                </svg>
              </Link>
              <Link
                href='https://www.youtube.com/channel/UCfl6Ad-fNMLXRAN7rAGuTlQ'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-colors'
                style={{ color: 'var(--color-text-tertiary)' }}
                onMouseOver={(e) => { e.currentTarget.style.color = 'var(--color-gold)'; }}
                onMouseOut={(e) => { e.currentTarget.style.color = 'var(--color-text-tertiary)'; }}
                aria-label='Subscribe to our YouTube channel'
              >
                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'/>
                </svg>
              </Link>
              <Link
                href='https://www.linkedin.com/company/btreasury/'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-colors'
                style={{ color: 'var(--color-text-tertiary)' }}
                onMouseOver={(e) => { e.currentTarget.style.color = 'var(--color-gold)'; }}
                onMouseOut={(e) => { e.currentTarget.style.color = 'var(--color-text-tertiary)'; }}
                aria-label='Connect with us on LinkedIn'
              >
                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-xs font-semibold uppercase tracking-wider' style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-tertiary)' }}>
              Quick Links
            </h3>
            <nav className='flex flex-col space-y-2'>
              {[
                { href: '/#services', label: 'Services' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='text-sm transition-colors'
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                  onMouseOver={(e) => { e.currentTarget.style.color = 'var(--color-text-primary)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div className='space-y-4'>
            <h3 className='text-xs font-semibold uppercase tracking-wider' style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-tertiary)' }}>
              Resources
            </h3>
            <nav className='flex flex-col space-y-2'>
              {[
                { href: '/resources', label: 'Resources' },
                { href: '/events', label: 'Events' },
                { href: '/values', label: 'Bitcoin Through Values' },
                { href: '/resources#faqs', label: 'Bitcoin FAQs' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='text-sm transition-colors'
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                  onMouseOver={(e) => { e.currentTarget.style.color = 'var(--color-text-primary)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h3 className='text-xs font-semibold uppercase tracking-wider' style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-tertiary)' }}>
              Contact
            </h3>
            <div className='space-y-2 text-sm' style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>
              <p>enquiry@btreasury.com.au</p>
              <Link
                href='https://calendly.com/carri27/30min'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1 transition-colors'
                style={{ color: 'var(--color-gold-dark)' }}
                onMouseOver={(e) => { e.currentTarget.style.color = 'var(--color-gold)'; }}
                onMouseOut={(e) => { e.currentTarget.style.color = 'var(--color-gold-dark)'; }}
              >
                Schedule a call
                <ExternalLink className='w-3 h-3' strokeWidth={1.5} />
              </Link>
              <p>585 Little Collins Street, Suite 513<br />Melbourne, Victoria 3000</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-10 pt-8' style={{ borderTop: '1px solid var(--color-border)' }}>
          <p className='text-xs italic mb-6 text-center' style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-tertiary)' }}>
            This platform provides general educational information only and does not constitute financial, legal, or tax advice. Consult a qualified adviser for guidance specific to your circumstances.
          </p>
          <div className='flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0'>
            <p className='text-sm' style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-tertiary)' }}>
              © {new Date().getFullYear()} Bitcoin Treasury Solutions. All rights reserved.
            </p>
            <div className='flex space-x-6'>
              {[
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='text-sm transition-colors'
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-tertiary)' }}
                  onMouseOver={(e) => { e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = 'var(--color-text-tertiary)'; }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

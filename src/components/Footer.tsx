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

  return (
    <div className='bg-primary-950 border-b border-primary-200 py-6'>
      <Container>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-4'>
          <div className='flex-1 text-center lg:text-left w-full lg:w-auto'>
            <h3 className='text-xl font-bold text-secondary-50 font-display mb-1'>
              Stay Updated
            </h3>
            <p className='text-lg md:text-base text-secondary-100'>
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
                className='flex-1 px-4 py-2.5 bg-white border border-primary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body text-lg md:text-base text-primary-900 placeholder:text-primary-400 disabled:bg-gray-100 disabled:cursor-not-allowed'
              />
              <button
                type='submit'
                disabled={isSubmitting || isSuccess}
                className='px-6 py-2.5 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-display text-base md:text-sm whitespace-nowrap'
              >
                {isSubmitting ? 'Subscribing...' : isSuccess ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
            {message && (
              <p className={`mt-2 text-base text-center sm:text-left ${message.includes('Success') ? 'text-green-600' : 'text-red-600'}`}>
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
    <footer className='bg-background' role='contentinfo'>
      <NewsletterSubscribe />
      <Container className='py-12'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          {/* Company Info */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <Image
                src='/images/logo.svg'
                alt='BTS Logo'
                width={50}
                height={50}
              />
              <span className='text-xl font-semibold text-foreground font-display'>Bitcoin Treasury Solutions</span>
            </div>
            <p className='text-base md:text-sm text-muted-foreground mb-4'>
              Structured Bitcoin Learning for Australia&apos;s Professionals.
            </p>
            {/* Social Media Links */}
            <div className='flex items-center gap-4'>
              <Link
                href='https://x.com/btreasuryau'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-accent-500 transition-colors'
                aria-label='Follow us on X (Twitter)'
              >
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'/>
                </svg>
              </Link>
              <Link
                href='https://www.youtube.com/channel/UCfl6Ad-fNMLXRAN7rAGuTlQ'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-accent-500 transition-colors'
                aria-label='Subscribe to our YouTube channel'
              >
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'/>
                </svg>
              </Link>
              <Link
                href='https://www.linkedin.com/company/btreasury/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-accent-500 transition-colors'
                aria-label='Connect with us on LinkedIn'
              >
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-sm font-semibold text-foreground'>Quick Links</h3>
            <nav className='flex flex-col space-y-2'>
              <Link
                href='/#services'
                className='text-base md:text-sm text-muted-foreground transition-colors hover:text-foreground'
              >
                Services
              </Link>
              <Link
                href='/about'
                className='text-base md:text-sm text-muted-foreground transition-colors hover:text-foreground'
              >
                About Us
              </Link>
              <Link
                href='/contact'
                className='text-base md:text-sm text-muted-foreground transition-colors hover:text-foreground'
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className='space-y-4'>
            <h3 className='text-sm font-semibold text-foreground'>Resources</h3>
            <nav className='flex flex-col space-y-2'>
              <Link
                href='/resources'
                className='text-base md:text-sm text-muted-foreground transition-colors hover:text-foreground'
              >
                Resources
              </Link>
              <Link
                href='/events'
                className='text-base md:text-sm text-muted-foreground transition-colors hover:text-foreground'
              >
                Events
              </Link>
              <Link
                href='/values'
                className='text-base md:text-sm text-muted-foreground transition-colors hover:text-foreground'
              >
                Bitcoin Through Values
              </Link>
              <Link
                href='/resources#faqs'
                className='text-base md:text-sm text-muted-foreground transition-colors hover:text-foreground'
              >
                Bitcoin FAQs
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h3 className='text-sm font-semibold text-foreground'>Contact</h3>
            <div className='space-y-2 text-base md:text-sm text-muted-foreground'>
              <p>enquiry@btreasury.com.au</p>
              <Link
                href='https://calendly.com/carri27/30min'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1 transition-colors hover:text-foreground'
              >
                Schedule a call
                <ExternalLink className='w-3 h-3' />
              </Link>
              <p>585 Little Collins Street, Suite 513<br />Melbourne, Victoria 3000</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-8 border-t border-primary-200 pt-8'>
          <div className='flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0'>
            <p className='text-base md:text-sm text-muted-foreground'>
              © {new Date().getFullYear()} Bitcoin Treasury Solutions. All rights reserved.
            </p>
            <div className='flex space-x-6'>
              <Link
                href='/privacy'
                className='text-base md:text-sm text-muted-foreground transition-colors hover:text-foreground'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms'
                className='text-base md:text-sm text-muted-foreground transition-colors hover:text-foreground'
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

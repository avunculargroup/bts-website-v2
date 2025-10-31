'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
            <p className='text-base md:text-sm text-muted-foreground'>
              Structured Bitcoin Learning for Australia&apos;s Professionals.
            </p>
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
              <p>+61 422 020 000</p>
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

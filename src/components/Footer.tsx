import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/Container';

export function Footer() {
  return (
    <footer className='bg-background'>
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

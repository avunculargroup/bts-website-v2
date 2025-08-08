import Link from 'next/link';
import { Container } from '@/components/Container';

export function Footer() {
  return (
    <footer className='border-t bg-background'>
      <Container className='py-12'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          {/* Company Info */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <div className='h-8 w-8 rounded-lg bg-primary'></div>
              <span className='text-xl font-bold text-foreground'>Avuncular Group</span>
            </div>
            <p className='text-sm text-muted-foreground'>
              Building modern, accessible, and scalable web solutions for forward-thinking businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-sm font-semibold text-foreground'>Quick Links</h3>
            <nav className='flex flex-col space-y-2'>
              <Link
                href='/services'
                className='text-sm text-muted-foreground transition-colors hover:text-foreground'
              >
                Services
              </Link>
              <Link
                href='/about'
                className='text-sm text-muted-foreground transition-colors hover:text-foreground'
              >
                About Us
              </Link>
              <Link
                href='/blog'
                className='text-sm text-muted-foreground transition-colors hover:text-foreground'
              >
                Blog
              </Link>
              <Link
                href='/contact'
                className='text-sm text-muted-foreground transition-colors hover:text-foreground'
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
                className='text-sm text-muted-foreground transition-colors hover:text-foreground'
              >
                Resources
              </Link>
              <Link
                href='/events'
                className='text-sm text-muted-foreground transition-colors hover:text-foreground'
              >
                Events
              </Link>
              <Link
                href='/contact/faqs'
                className='text-sm text-muted-foreground transition-colors hover:text-foreground'
              >
                FAQs
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h3 className='text-sm font-semibold text-foreground'>Contact</h3>
            <div className='space-y-2 text-sm text-muted-foreground'>
              <p>admin@avunculargroup.com</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Business St, Suite 100<br />City, State 12345</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-8 border-t pt-8'>
          <div className='flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0'>
            <p className='text-sm text-muted-foreground'>
              © {new Date().getFullYear()} Avuncular Group. All rights reserved.
            </p>
            <div className='flex space-x-6'>
              <Link
                href='/privacy'
                className='text-sm text-muted-foreground transition-colors hover:text-foreground'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms'
                className='text-sm text-muted-foreground transition-colors hover:text-foreground'
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

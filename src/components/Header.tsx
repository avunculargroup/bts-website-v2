'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/Container';

const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
  { href: '/events', label: 'Events' },
  { href: '/calculator', label: 'Calculator' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-shadow duration-300',
        'bg-[#FAFAF8] border-b border-[#E8E6E0]',
        isScrolled && 'shadow-[0_1px_3px_rgba(26,25,21,0.06),0_1px_2px_rgba(26,25,21,0.04)]'
      )}
    >
      <Container className='flex h-14 items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center space-x-2.5'>
          <Image
            src='/images/logo.svg'
            alt='Bitcoin Treasury Solutions'
            width={32}
            height={32}
          />
          <span style={{ fontFamily: 'var(--font-display)' }} className='text-lg font-semibold text-[#1A1915]'>
            Bitcoin Treasury Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className='hidden md:flex' role='navigation' aria-label='Main navigation'>
          <NavigationMenuList className='flex items-center space-x-1 m-0'>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      'relative inline-flex items-center justify-center px-3 py-2 text-sm font-medium',
                      'text-[#6B6860] hover:text-[#1A1915] rounded-md transition-colors duration-150',
                      'after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5',
                      'after:bg-[#C9A84C] after:scale-x-0 hover:after:scale-x-100',
                      'after:transition-transform after:duration-200 after:origin-left',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2'
                    )}
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <div className='hidden md:flex items-center'>
          <Link
            href='/contact'
            className='inline-flex items-center justify-center px-5 py-2 rounded-lg text-sm font-medium transition-colors duration-100 active:scale-[0.98]'
            style={{
              fontFamily: 'var(--font-body)',
              backgroundColor: 'var(--color-gold)',
              color: 'var(--color-text-primary)',
            }}
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold-dark)'; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold)'; }}
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <button
              className='md:hidden p-2 rounded-md text-[#6B6860] hover:text-[#1A1915] hover:bg-[#F4F4F1] transition-colors'
              aria-label='Open navigation menu'
            >
              <Menu className='h-5 w-5' strokeWidth={1.5} />
            </button>
          </SheetTrigger>
          <SheetContent side='right' className='w-[300px] sm:w-[380px] bg-[#FAFAF8] border-l border-[#E8E6E0]'>
            <SheetHeader>
              <SheetTitle className='text-left'>
                <Link href='/' onClick={() => setIsMobileMenuOpen(false)} className='flex items-center space-x-2'>
                  <Image src='/images/logo.svg' alt='BTS Logo' width={28} height={28} />
                  <span style={{ fontFamily: 'var(--font-display)' }} className='text-base font-semibold text-[#1A1915]'>
                    Bitcoin Treasury Solutions
                  </span>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <nav className='flex flex-col space-y-1 mt-6 px-2'>
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='text-sm font-medium text-[#6B6860] hover:text-[#1A1915] hover:bg-[#F4F4F1] rounded-md px-3 py-2.5 transition-colors'
                  style={{ fontFamily: 'var(--font-body)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className='pt-4 mt-2 border-t border-[#E8E6E0] px-1'>
                <Link
                  href='/contact'
                  className='flex items-center justify-center w-full px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-100'
                  style={{
                    fontFamily: 'var(--font-body)',
                    backgroundColor: 'var(--color-gold)',
                    color: 'var(--color-text-primary)',
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact us
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}

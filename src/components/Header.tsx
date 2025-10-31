'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
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
    <header className={cn(
      'sticky top-0 z-50 w-full bg-primary-950 backdrop-blur supports-[backdrop-filter]:bg-primary-950 transition-shadow duration-300',
      isScrolled && 'shadow-lg shadow-black/10'
    )}>
      <Container className='flex h-12 items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center space-x-2'>
          <div className='h-8 w-8 rounded-lg bg-primary'></div>
          <span className='text-xl font-bold text-secondary-50 font-display'>
            BTS<span className='text-accent-500 text-2xl'>.</span>
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
                      'group relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-secondary-50 hover:text-secondary-50 focus:text-secondary-50 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-secondary-50 focus-visible:ring-white/50 outline-none transition-all duration-300 focus-visible:ring-[3px] focus-visible:outline-1 cursor-pointer rounded-md font-display',
                      'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent-500 after:transition-all after:duration-300 hover:after:w-full'
                    )}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <div className='hidden md:flex items-center space-x-4'>
          <Button asChild className="text-secondary-50 border border-secondary-50 bg-transparent hover:bg-secondary-50 hover:text-primary-950 transition-colors font-display">
            <Link href='/contact'>Contact us</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='md:hidden text-secondary-50 hover:bg-white/10 hover:text-secondary-50'
              aria-label='Open navigation menu'
            >
              <Menu className='h-5 w-5' />
            </Button>
          </SheetTrigger>
          <SheetContent side='right' className='w-[300px] sm:w-[400px] bg-primary-950 border-l border-primary-800'>
            <SheetHeader>
              <SheetTitle className='text-left'>
                <span className='text-xl font-bold text-secondary-50 font-display'>
                  BTS<span className='text-accent-500 text-2xl'>.</span>
                </span>
              </SheetTitle>
            </SheetHeader>
            <nav className='flex flex-col space-y-4 mt-6 px-4'>
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='text-sm font-medium text-secondary-50 transition-colors hover:text-accent-500 focus:text-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-950 rounded-md px-3 py-2 font-display'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className='pt-4 mt-4 border-t border-primary-800 px-2'>
                <Button asChild className='w-full mt-2 text-secondary-50 border border-secondary-50 bg-transparent hover:bg-secondary-50 hover:text-primary-950 transition-colors font-display'>
                  <Link href='/contact' onClick={() => setIsMobileMenuOpen(false)}>
                    Contact us
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/Container';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function Hero({ title, subtitle, imageSrc, imageAlt, ctaLabel, ctaHref }: HeroProps) {
  return (
    <section className='relative h-[60vh] min-h-[400px] w-full overflow-hidden'>
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className='object-cover'
        priority
      />
      
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/40' />
      
      {/* Content */}
      <Container className='relative z-10 flex h-full items-center'>
        <div className='max-w-2xl text-white'>
          <h1 className='mb-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl'>
            {title}
          </h1>
          {subtitle && (
            <p className='mb-8 text-lg text-white/90 sm:text-xl'>
              {subtitle}
            </p>
          )}
          {ctaLabel && ctaHref && (
            <Button asChild size='lg' className='bg-primary hover:bg-primary/90'>
              <Link href={ctaHref}>
                {ctaLabel}
              </Link>
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}

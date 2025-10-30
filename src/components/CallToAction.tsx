import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/Container';

interface CallToActionProps {
  title: string;
  description?: string;
  buttonLabel: string;
  buttonUrl: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export function CallToAction({ title, description, buttonLabel, buttonUrl, icon: Icon }: CallToActionProps) {
  return (
    <section className='bg-primary/5 py-16'>
      <Container className='text-center'>
        <div className='max-w-2xl mx-auto space-y-6'>
          {/* Icon */}
          {Icon && (
            <div className='flex justify-center'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary'>
                <Icon className='h-8 w-8' />
              </div>
            </div>
          )}
          
          {/* Title */}
          <h2 className='text-3xl font-bold text-foreground sm:text-4xl'>
            {title}
          </h2>
          
          {/* Description */}
          {description && (
            <p className=' text-muted-foreground'>
              {description}
            </p>
          )}
          
          {/* CTA Button */}
          <div className='pt-4'>
            <Button asChild className='bg-primary hover:bg-primary/90 text-base'>
              <Link href={buttonUrl}>
                {buttonLabel}
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

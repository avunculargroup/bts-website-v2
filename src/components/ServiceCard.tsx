import Link from 'next/link';
import { Card } from '@/components/Card';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

export function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  return (
    <Card className='group p-6 transition-all duration-200 hover:shadow-lg focus-within:shadow-lg'>
      <div className='flex flex-col h-full'>
        {/* Icon */}
        <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary'>
          <Icon className='h-6 w-6' />
        </div>
        
        {/* Content */}
        <div className='flex-1'>
          <h3 className='mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors'>
            {title}
          </h3>
          <p className='text-muted-foreground mb-4'>
            {description}
          </p>
        </div>
        
        {/* Learn More Link */}
        <Link
          href={href}
          className='inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md'
        >
          Learn more
          <ArrowRight className='ml-1 h-4 w-4 transition-transform group-hover:translate-x-1' />
        </Link>
      </div>
    </Card>
  );
}

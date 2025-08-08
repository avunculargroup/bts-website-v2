import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface NavigationBreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function NavigationBreadcrumbs({ items }: NavigationBreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label='breadcrumb' className='py-4'>
      <ol className='flex items-center space-x-2 text-sm text-muted-foreground'>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={item.href} className='flex items-center'>
              {index > 0 && (
                <ChevronRight className='mx-2 h-4 w-4 text-muted-foreground/50' />
              )}
              
              {isLast ? (
                <span
                  aria-current='page'
                  className='font-medium text-foreground'
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className='hover:text-foreground transition-colors'
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

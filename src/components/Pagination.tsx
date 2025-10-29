import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  generateUrl?: (page: number) => string;
  onPageChange?: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, generateUrl, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) => {
    if (generateUrl) {
      return generateUrl(page);
    }
    return `?page=${page}`;
  };

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  return (
    <nav aria-label='Pagination' className='flex items-center justify-center space-x-2'>
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Button
          variant='outline'
          size='sm'
          asChild
          aria-label={`Go to previous page, page ${currentPage - 1}`}
        >
          <Link href={getPageUrl(currentPage - 1)}>
            <ChevronLeft className='h-4 w-4' />
            <span className='sr-only'>Previous</span>
          </Link>
        </Button>
      ) : (
        <Button variant='outline' size='sm' disabled>
          <ChevronLeft className='h-4 w-4' />
          <span className='sr-only'>Previous</span>
        </Button>
      )}

      {/* Page Numbers */}
      <div className='flex items-center space-x-1'>
        {getVisiblePages().map((page, index) => {
          if (page === '...') {
            return (
              <span key={`dots-${index}`} className='px-2 py-1 text-muted-foreground'>
                ...
              </span>
            );
          }

          const pageNumber = page as number;
          const isCurrentPage = pageNumber === currentPage;

          return (
            <Button
              key={pageNumber}
              variant={isCurrentPage ? 'default' : 'outline'}
              size='sm'
              asChild={!isCurrentPage}
              aria-current={isCurrentPage ? 'page' : undefined}
              aria-label={`Go to page ${pageNumber}`}
            >
              {isCurrentPage ? (
                <span>{pageNumber}</span>
              ) : (
                <Link href={getPageUrl(pageNumber)}>{pageNumber}</Link>
              )}
            </Button>
          );
        })}
      </div>

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Button
          variant='outline'
          size='sm'
          asChild
          aria-label={`Go to next page, page ${currentPage + 1}`}
        >
          <Link href={getPageUrl(currentPage + 1)}>
            <ChevronRight className='h-4 w-4' />
            <span className='sr-only'>Next</span>
          </Link>
        </Button>
      ) : (
        <Button variant='outline' size='sm' disabled>
          <ChevronRight className='h-4 w-4' />
          <span className='sr-only'>Next</span>
        </Button>
      )}
    </nav>
  );
}

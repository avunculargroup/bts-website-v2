'use client';

import { type Value } from '@/lib/values-data';
import { cn } from '@/lib/utils';

interface ValueCardProps {
  value: Value;
  isSelected: boolean;
  onToggle: () => void;
}

export function ValueCard({ value, isSelected, onToggle }: ValueCardProps) {
  const Icon = value.icon;

  return (
    <button
      type='button'
      onClick={onToggle}
      className={cn(
        'w-full p-6 rounded-lg border-2 transition-all duration-200 text-left',
        'hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2',
        isSelected
          ? 'border-accent-500 bg-accent-50 shadow-sm'
          : 'border-primary-200 bg-white shadow-sm hover:border-primary-300'
      )}
      aria-pressed={isSelected}
      aria-label={`${isSelected ? 'Deselect' : 'Select'} ${value.title}`}
    >
      <div className='flex items-start gap-4'>
        <div
          className={cn(
            'flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors',
            isSelected ? 'bg-accent-500 text-white' : 'bg-primary-100 text-primary-700'
          )}
        >
          <Icon className='w-6 h-6' />
        </div>
        <div className='flex-1 min-w-0'>
          <h3 className='text-lg font-semibold text-primary-900 font-display mb-2'>
            {value.title}
          </h3>
          <p className='text-sm text-primary-700 font-body leading-relaxed'>
            {value.description}
          </p>
        </div>
        <div className='flex-shrink-0'>
          <div
            className={cn(
              'w-6 h-6 rounded border-2 flex items-center justify-center transition-colors',
              isSelected
                ? 'border-accent-500 bg-accent-500'
                : 'border-primary-300 bg-white'
            )}
          >
            {isSelected && (
              <svg
                className='w-4 h-4 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={3}
                  d='M5 13l4 4L19 7'
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}


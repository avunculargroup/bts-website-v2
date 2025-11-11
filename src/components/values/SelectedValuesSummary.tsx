'use client';

import { type Value } from '@/lib/values-data';

interface SelectedValuesSummaryProps {
  selectedValues: Value[];
  onGenerateGuide: () => void;
}

export function SelectedValuesSummary({
  selectedValues,
  onGenerateGuide,
}: SelectedValuesSummaryProps) {
  const count = selectedValues.length;

  return (
    <div className='sticky top-4 z-10 bg-white border-2 border-primary-200 rounded-lg shadow-lg p-6 mb-8'>
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
        <div className='flex-1'>
          <h3 className='text-lg font-semibold text-primary-900 font-display mb-2'>
            Selected Values
          </h3>
          {count > 0 ? (
            <div className='space-y-1'>
              <p className='text-sm text-primary-700 font-body'>
                {count} {count === 1 ? 'value' : 'values'} selected
              </p>
              <div className='flex flex-wrap gap-2 mt-2'>
                {selectedValues.map((value) => (
                  <span
                    key={value.id}
                    className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-100 text-accent-800 border border-accent-200'
                  >
                    {value.title}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <p className='text-sm text-primary-600 font-body'>
              Select values that matter to create your personalised guide
            </p>
          )}
        </div>
        <button
          onClick={onGenerateGuide}
          disabled={count === 0}
          className={count === 0
            ? 'px-6 py-3 bg-primary-200 text-primary-500 font-semibold rounded-lg cursor-not-allowed font-display text-base'
            : 'px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors duration-300 font-display text-base focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2'
          }
          aria-disabled={count === 0}
        >
          Generate Guide
        </button>
      </div>
    </div>
  );
}


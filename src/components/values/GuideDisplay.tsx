'use client';

import { useState } from 'react';
import { type Value } from '@/lib/values-data';
import { Copy, Mail, Check } from 'lucide-react';

interface GuideDisplayProps {
  selectedValues: Value[];
  onEmailClick: () => void;
}

export function GuideDisplay({ selectedValues, onEmailClick }: GuideDisplayProps) {
  const [copied, setCopied] = useState(false);

  const formatGuideForCopy = () => {
    let text = 'Bitcoin Through Values - Your Personalised Guide\n\n';
    text += 'This guide has been customised based on values that matter to you.\n\n';

    selectedValues.forEach((value) => {
      text += `${value.title}\n`;
      value.bulletPoints.forEach((point) => {
        text += `• ${point}\n`;
      });
      text += '\n';
    });

    return text;
  };

  const handleCopy = async () => {
    const text = formatGuideForCopy();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className='bg-white border border-primary-200 rounded-lg shadow-sm p-8 space-y-8'>
      <div className='text-center mb-8'>
        <h2 className='text-3xl font-bold text-primary-900 font-display mb-4'>
          Your Personalised Bitcoin Guide
        </h2>
        <p className='text-primary-700 font-body'>
          This guide has been customised based on the values you selected. Share it with your friend or loved one to help them understand Bitcoin from their perspective.
        </p>
      </div>

      <div className='space-y-8'>
        {selectedValues.map((value) => {
          const Icon = value.icon;
          return (
            <section key={value.id} className='border-b border-primary-100 pb-6 last:border-b-0 last:pb-0'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center'>
                  <Icon className='w-5 h-5 text-accent-600' />
                </div>
                <h3 className='text-2xl font-bold text-primary-900 font-display'>
                  {value.title}
                </h3>
              </div>
              <ul className='space-y-3 ml-13'>
                {value.bulletPoints.map((point, index) => (
                  <li key={index} className='text-primary-700 font-body leading-relaxed flex items-start gap-3'>
                    <span className='text-accent-500 font-bold mt-1 flex-shrink-0'>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <div className='flex flex-col sm:flex-row gap-4 pt-6 border-t border-primary-200'>
        <button
          onClick={handleCopy}
          className='flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-primary-300 text-primary-900 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-300 font-display text-base focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
        >
          {copied ? (
            <>
              <Check className='w-5 h-5' />
              Copied!
            </>
          ) : (
            <>
              <Copy className='w-5 h-5' />
              Copy Guide
            </>
          )}
        </button>
        <button
          onClick={onEmailClick}
          className='flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors duration-300 font-display text-base focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2'
        >
          <Mail className='w-5 h-5' />
          Email Guide
        </button>
      </div>
    </div>
  );
}


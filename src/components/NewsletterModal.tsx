'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage('Successfully subscribed.');
        setEmail('');
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          setMessage('');
        }, 2000);
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='absolute inset-0 bg-black/40 backdrop-blur-sm' onClick={onClose} />

      <div
        className='relative max-w-md w-full mx-4 p-8'
        style={{
          backgroundColor: 'var(--color-surface)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <button
          onClick={onClose}
          className='absolute top-4 right-4 p-1.5 rounded-md transition-colors'
          style={{ color: 'var(--color-text-tertiary)' }}
          onMouseOver={(e) => { e.currentTarget.style.color = 'var(--color-text-primary)'; e.currentTarget.style.backgroundColor = 'var(--color-surface-subtle)'; }}
          onMouseOut={(e) => { e.currentTarget.style.color = 'var(--color-text-tertiary)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
          aria-label='Close modal'
        >
          <X className='w-5 h-5' strokeWidth={1.5} />
        </button>

        <div className='text-center'>
          <h2
            className='text-2xl font-bold mb-3'
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
          >
            Join Our Newsletter
          </h2>
          <p
            className='text-sm mb-6'
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
          >
            Receive the latest bitcoin news affecting Australians and stay informed about new events.
          </p>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className='space-y-3'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email address'
                required
                disabled={isSubmitting}
                className='w-full'
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  padding: '0.625rem 0.875rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-text-primary)',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.15)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full py-3 text-sm font-medium rounded-lg transition-colors duration-100 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed'
                style={{
                  fontFamily: 'var(--font-body)',
                  backgroundColor: 'var(--color-gold)',
                  color: 'var(--color-text-primary)',
                  borderRadius: 'var(--radius-lg)',
                }}
                onMouseOver={(e) => { if (!isSubmitting) e.currentTarget.style.backgroundColor = 'var(--color-gold-dark)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold)'; }}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          ) : (
            <div className='text-center py-4'>
              <div
                className='w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3'
                style={{ backgroundColor: 'var(--color-gold-light)' }}
              >
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' style={{ color: 'var(--color-gold-dark)' }}>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M5 13l4 4L19 7' />
                </svg>
              </div>
              <p className='text-sm font-medium' style={{ color: 'var(--color-success)', fontFamily: 'var(--font-body)' }}>
                Subscribed successfully.
              </p>
            </div>
          )}

          {message && !isSuccess && (
            <p className='mt-3 text-sm' style={{ fontFamily: 'var(--font-body)', color: 'var(--color-destructive)' }}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

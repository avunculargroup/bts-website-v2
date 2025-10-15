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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage('Successfully subscribed to our newsletter!');
        setEmail('');
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          setMessage('');
        }, 2000);
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Backdrop */}
      <div 
        className='absolute inset-0 bg-black/50 backdrop-blur-sm'
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className='relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-8'>
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors'
          aria-label='Close modal'
        >
          <X className='w-6 h-6' />
        </button>

        {/* Content */}
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-primary-900 font-display mb-4'>
            Join Our Newsletter
          </h2>
          <p className='text-primary-700 font-body mb-6'>
            Receive the latest bitcoin news affecting Australians and stay informed about new events.
          </p>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email address'
                  required
                  className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body'
                  disabled={isSubmitting}
                />
              </div>
              
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-accent-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-accent-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-display'
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          ) : (
            <div className='text-center'>
              <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg className='w-8 h-8 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
              </div>
              <p className='text-green-600 font-semibold'>Welcome to our newsletter!</p>
            </div>
          )}

          {message && !isSuccess && (
            <p className={`mt-4 text-sm ${message.includes('Success') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

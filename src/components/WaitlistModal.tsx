'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage('Successfully added to the waitlist!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          interests: ''
        });
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
            Join the Waitlist
          </h2>
          <p className='text-primary-700 font-body mb-6'>
            Be the first to know when we announce new workshops and events.
          </p>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Full Name'
                  required
                  className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body'
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Email Address'
                  required
                  className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body'
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <input
                  type='tel'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder='Phone Number (optional)'
                  className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body'
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <textarea
                  name='interests'
                  value={formData.interests}
                  onChange={handleChange}
                  placeholder='What topics are you most interested in? (optional)'
                  rows={3}
                  className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body resize-none'
                  disabled={isSubmitting}
                />
              </div>
              
              <button
                type='submit'
                disabled={isSubmitting}
              className='w-full bg-accent-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-accent-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-display text-base'
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          ) : (
            <div className='text-center'>
              <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg className='w-8 h-8 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
              </div>
              <p className='text-green-600 font-semibold'>You&apos;re on the waitlist!</p>
              <p className='text-primary-700 text-sm mt-2'>We&apos;ll notify you when new events are announced.</p>
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

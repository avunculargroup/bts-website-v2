'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { type Value } from '@/lib/values-data';

interface EmailFormProps {
  selectedValues: Value[];
  onSuccess: () => void;
  onCancel: () => void;
}

export function EmailForm({ selectedValues, onSuccess, onCancel }: EmailFormProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const formatGuideForEmail = (firstName: string) => {
    let html = '<h2 style="color: #1a1a1a; font-family: sans-serif; margin-bottom: 20px;">Bitcoin Through Values - Your Personalised Guide</h2>';
    html += `<p style="color: #4a4a4a; font-family: sans-serif; margin-bottom: 20px;">Dear ${firstName},</p>`;
    html += '<p style="color: #4a4a4a; font-family: sans-serif; margin-bottom: 30px;">This guide has been customised based on values you\'ve chosen. We hope this helps you convey the value of bitcoin to someone.</p>';

    selectedValues.forEach((value) => {
      html += `<div style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #e5e5e5;">`;
      html += `<h3 style="color: #1a1a1a; font-family: sans-serif; font-size: 20px; margin-bottom: 15px;">${value.title}</h3>`;
      html += '<ul style="color: #4a4a4a; font-family: sans-serif; padding-left: 20px;">';
      value.bulletPoints.forEach((point) => {
        html += `<li style="margin-bottom: 10px; line-height: 1.6;">${point}</li>`;
      });
      html += '</ul></div>';
    });

    return html;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // Validate email
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    // Validate first name
    if (!firstName || firstName.trim() === '') {
      setMessage('Please enter your first name');
      setIsSubmitting(false);
      return;
    }

    try {
      const guideContent = formatGuideForEmail(firstName.trim());
      const response = await fetch('/api/send-guide', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName: firstName.trim(),
          guideContent,
          selectedValuesData: selectedValues.map((v) => ({
            title: v.title,
            bulletPoints: v.bulletPoints,
          })),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage('Guide sent successfully!');
        setTimeout(() => {
          onSuccess();
        }, 2000);
      } else {
        setMessage(data.error || 'Failed to send guide. Please try again.');
      }
    } catch {
      setMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Backdrop */}
      <div
        className='absolute inset-0 bg-black/50 backdrop-blur-sm'
        onClick={onCancel}
        aria-hidden='true'
      />

      {/* Modal */}
      <div className='relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-8'>
        {/* Close Button */}
        <button
          onClick={onCancel}
          className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors'
          aria-label='Close modal'
        >
          <X className='w-6 h-6' />
        </button>

        {/* Content */}
        <div>
          <h2 className='text-2xl font-bold text-primary-900 font-display mb-4'>
            Email Your Guide
          </h2>
          <p className='text-primary-700 font-body mb-6'>
            Enter your email address to receive your personalised Bitcoin Through Values guide.
          </p>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label htmlFor='firstName' className='block text-sm font-medium text-primary-900 mb-2'>
                  First Name <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  id='firstName'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder='Your first name'
                  required
                  className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body'
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor='email' className='block text-sm font-medium text-primary-900 mb-2'>
                  Email Address <span className='text-red-500'>*</span>
                </label>
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='your.email@example.com'
                  required
                  className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body'
                  disabled={isSubmitting}
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-accent-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-accent-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-display text-base focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2'
              >
                {isSubmitting ? 'Sending...' : 'Send Guide'}
              </button>
            </form>
          ) : (
            <div className='text-center'>
              <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg className='w-8 h-8 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
              </div>
              <p className='text-green-600 font-semibold'>Guide sent successfully!</p>
            </div>
          )}

          {message && !isSuccess && (
            <p className={`mt-4 text-sm ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}


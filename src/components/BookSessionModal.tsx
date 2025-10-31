'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface BookSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessionType?: 'Corporate & SME' | 'Accountants & Financial Advisors' | 'Individuals' | 'Workshop';
}

export function BookSessionModal({ isOpen, onClose, sessionType = 'Workshop' }: BookSessionModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    sessionType,
    preferredDate: '',
    attendees: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setFormData(prev => ({ ...prev, sessionType }));
  }, [sessionType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      const response = await fetch('/api/book-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setIsSuccess(true);
        setMessage('Thanks! We\'ll be in touch shortly.');
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
    <div className='fixed inset-0 z-50 flex items-center justify-center md:items-center md:justify-center overflow-y-auto'>
      <div className='absolute inset-0 bg-black/50 backdrop-blur-sm' onClick={onClose} />

      <div className='relative bg-white w-full h-full md:h-auto md:max-w-lg md:rounded-lg shadow-xl md:mx-4 md:my-8 p-6 md:p-8 flex flex-col'>
        <div className='flex-shrink-0 flex items-center justify-between mb-6'>
          <h2 className='text-2xl font-bold text-primary-900 font-display'>
            Book a Session
          </h2>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-gray-600 transition-colors'
            aria-label='Close modal'
          >
            <X className='w-6 h-6' />
          </button>
        </div>

        <div className='flex-1 overflow-y-auto'>
          <div className='text-center mb-6'>
            <p className='text-primary-700 font-body'>
              Tell us a bit about your needs and preferred timing.
            </p>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className='space-y-4 text-left'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Full Name *'
                  required
                  className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body'
                  disabled={isSubmitting}
                />
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Email Address *'
                  required
                  className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body'
                  disabled={isSubmitting}
                />
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <input
                  type='tel'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder='Phone Number'
                  className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body'
                  disabled={isSubmitting}
                />
                <input
                  type='text'
                  name='company'
                  value={formData.company}
                  onChange={handleChange}
                  placeholder='Company / Organisation'
                  className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body'
                  disabled={isSubmitting}
                />
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <input
                  type='text'
                  name='role'
                  value={formData.role}
                  onChange={handleChange}
                  placeholder='Role / Title'
                  className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body'
                  disabled={isSubmitting}
                />
                <select
                  name='sessionType'
                  value={formData.sessionType}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body bg-white'
                  disabled={isSubmitting}
                >
                  <option>Corporate & SME</option>
                  <option>Accountants & Financial Advisors</option>
                  <option>Individuals</option>
                  <option>Workshop</option>
                </select>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <input
                  type='date'
                  name='preferredDate'
                  value={formData.preferredDate}
                  onChange={handleChange}
                  placeholder='Preferred Date'
                  className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body'
                  disabled={isSubmitting}
                />
                <input
                  type='number'
                  name='attendees'
                  value={formData.attendees}
                  onChange={handleChange}
                  placeholder='Estimated Attendees'
                  className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body'
                  disabled={isSubmitting}
                  min={1}
                />
              </div>

              <textarea
                name='notes'
                value={formData.notes}
                onChange={handleChange}
                placeholder='Notes or goals for the session'
                rows={4}
                className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body resize-none'
                disabled={isSubmitting}
              />

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-accent-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-accent-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-display text-base'
              >
                {isSubmitting ? 'Sending...' : 'Submit Request'}
              </button>
            </form>
          ) : (
            <div className='text-center'>
              <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg className='w-8 h-8 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
              </div>
              <p className='text-green-600 font-semibold'>Request submitted!</p>
              <p className='text-primary-700 text-sm mt-2'>We&apos;ll contact you to confirm details.</p>
            </div>
          )}

          {message && !isSuccess && (
            <p className={`mt-4 text-sm ${message.includes('Thanks') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}



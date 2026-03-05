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
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
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
        setMessage('Thanks. We\'ll be in touch shortly.');
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

  const fieldStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.875rem',
    width: '100%',
    padding: '0.625rem 0.875rem',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'var(--color-surface)',
    color: 'var(--color-text-primary)',
    outline: 'none',
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'var(--color-gold)';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.15)';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'var(--color-border)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto'>
      <div className='absolute inset-0 bg-black/40 backdrop-blur-sm' onClick={onClose} />

      <div
        className='relative w-full h-full md:h-auto md:max-w-lg md:mx-4 md:my-8 p-6 md:p-8 flex flex-col'
        style={{
          backgroundColor: 'var(--color-surface)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <div className='shrink-0 flex items-center justify-between mb-6'>
          <h2
            className='text-xl font-bold'
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
          >
            Book a Session
          </h2>
          <button
            onClick={onClose}
            className='p-1.5 rounded-md transition-colors'
            style={{ color: 'var(--color-text-tertiary)' }}
            onMouseOver={(e) => { e.currentTarget.style.color = 'var(--color-text-primary)'; e.currentTarget.style.backgroundColor = 'var(--color-surface-subtle)'; }}
            onMouseOut={(e) => { e.currentTarget.style.color = 'var(--color-text-tertiary)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
            aria-label='Close modal'
          >
            <X className='w-5 h-5' strokeWidth={1.5} />
          </button>
        </div>

        <div className='flex-1 overflow-y-auto'>
          <p
            className='text-sm mb-6'
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
          >
            Tell us a bit about your needs and preferred timing.
          </p>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className='space-y-3 text-left'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <input type='text' name='name' value={formData.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder='Full name *' required style={fieldStyle} disabled={isSubmitting} />
                <input type='email' name='email' value={formData.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder='Email address *' required style={fieldStyle} disabled={isSubmitting} />
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <input type='tel' name='phone' value={formData.phone} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder='Phone number' style={fieldStyle} disabled={isSubmitting} />
                <input type='text' name='company' value={formData.company} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder='Company / organisation' style={fieldStyle} disabled={isSubmitting} />
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <input type='text' name='role' value={formData.role} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder='Role / title' style={fieldStyle} disabled={isSubmitting} />
                <select name='sessionType' value={formData.sessionType} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} style={fieldStyle} disabled={isSubmitting}>
                  <option>Corporate & SME</option>
                  <option>Accountants & Financial Advisors</option>
                  <option>Individuals</option>
                  <option>Workshop</option>
                </select>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <input type='date' name='preferredDate' value={formData.preferredDate} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder='Preferred date' style={fieldStyle} disabled={isSubmitting} />
                <input type='number' name='attendees' value={formData.attendees} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder='Estimated attendees' style={fieldStyle} disabled={isSubmitting} min={1} />
              </div>

              <textarea
                name='notes'
                value={formData.notes}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder='Notes or goals for the session'
                rows={3}
                style={{ ...fieldStyle, resize: 'vertical' }}
                disabled={isSubmitting}
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
                {isSubmitting ? 'Sending...' : 'Submit request'}
              </button>
            </form>
          ) : (
            <div className='text-center py-6'>
              <div
                className='w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4'
                style={{ backgroundColor: 'var(--color-gold-light)' }}
              >
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' style={{ color: 'var(--color-gold-dark)' }}>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M5 13l4 4L19 7' />
                </svg>
              </div>
              <p className='text-sm font-medium' style={{ color: 'var(--color-success)', fontFamily: 'var(--font-body)' }}>Request submitted</p>
              <p className='text-sm mt-1' style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>We&apos;ll contact you to confirm details.</p>
            </div>
          )}

          {message && !isSuccess && (
            <p className='mt-4 text-sm' style={{ fontFamily: 'var(--font-body)', color: 'var(--color-destructive)' }}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

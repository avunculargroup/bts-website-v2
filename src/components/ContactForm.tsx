'use client';

import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setResponseMessage('Thank you for your enquiry. We\'ll get back to you soon.');
        setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
      } else {
        setResponseMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setResponseMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: 'var(--color-text-primary)',
    display: 'block',
    marginBottom: '0.375rem',
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.875rem',
    width: '100%',
    padding: '0.625rem 0.875rem',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'var(--color-surface)',
    color: 'var(--color-text-primary)',
    outline: 'none',
    transition: 'border-color 150ms ease, box-shadow 150ms ease',
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'var(--color-gold)';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.15)';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'var(--color-border)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <div>
      <h2
        className='text-2xl font-bold mb-6'
        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
      >
        Send us a message
      </h2>

      {!isSuccess ? (
        <form onSubmit={handleSubmit} className='space-y-5'>
          <div className='grid gap-5 md:grid-cols-2'>
            <div>
              <label htmlFor='name' style={labelStyle}>Full name *</label>
              <input
                id='name'
                name='name'
                type='text'
                value={formData.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                disabled={isSubmitting}
                style={inputStyle}
              />
            </div>

            <div>
              <label htmlFor='email' style={labelStyle}>Email address *</label>
              <input
                id='email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                disabled={isSubmitting}
                style={inputStyle}
              />
            </div>
          </div>

          <div className='grid gap-5 md:grid-cols-2'>
            <div>
              <label htmlFor='phone' style={labelStyle}>Phone number</label>
              <input
                id='phone'
                name='phone'
                type='tel'
                value={formData.phone}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={isSubmitting}
                style={inputStyle}
              />
            </div>

            <div>
              <label htmlFor='company' style={labelStyle}>Company / organisation</label>
              <input
                id='company'
                name='company'
                type='text'
                value={formData.company}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={isSubmitting}
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <label htmlFor='subject' style={labelStyle}>Subject *</label>
            <input
              id='subject'
              name='subject'
              type='text'
              value={formData.subject}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              disabled={isSubmitting}
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor='message' style={labelStyle}>Message *</label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              rows={6}
              disabled={isSubmitting}
              placeholder='Tell us about your Bitcoin education needs...'
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

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
            {isSubmitting ? 'Sending...' : 'Send message'}
          </button>
        </form>
      ) : (
        <div className='text-center py-10'>
          <div
            className='w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4'
            style={{ backgroundColor: 'var(--color-gold-light)' }}
          >
            <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' style={{ color: 'var(--color-gold-dark)' }}>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M5 13l4 4L19 7' />
            </svg>
          </div>
          <h3
            className='text-xl font-semibold mb-2'
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
          >
            Message Sent
          </h3>
          <p className='text-sm' style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>
            We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      )}

      {responseMessage && !isSuccess && (
        <div
          className='mt-4 p-4 rounded-lg'
          style={{
            backgroundColor: 'rgba(176,64,64,0.08)',
            border: '1px solid rgba(176,64,64,0.25)',
          }}
        >
          <p className='text-sm' style={{ fontFamily: 'var(--font-body)', color: 'var(--color-destructive)' }}>
            {responseMessage}
          </p>
        </div>
      )}
    </div>
  );
}

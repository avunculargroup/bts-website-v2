'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage('Thank you for your enquiry! We\'ll get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className='text-2xl font-bold text-primary-900 font-display mb-6'>
        Send us a Message
      </h2>

      {!isSuccess ? (
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='grid gap-6 md:grid-cols-2'>
            <div>
              <Label htmlFor='name' className='text-primary-900 font-semibold'>
                Full Name *
              </Label>
              <Input
                id='name'
                name='name'
                type='text'
                value={formData.name}
                onChange={handleChange}
                required
                className='mt-2'
                disabled={isSubmitting}
              />
            </div>

            <div>
              <Label htmlFor='email' className='text-primary-900 font-semibold'>
                Email Address *
              </Label>
              <Input
                id='email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='mt-2'
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className='grid gap-6 md:grid-cols-2'>
            <div>
              <Label htmlFor='phone' className='text-primary-900 font-semibold'>
                Phone Number
              </Label>
              <Input
                id='phone'
                name='phone'
                type='tel'
                value={formData.phone}
                onChange={handleChange}
                className='mt-2'
                disabled={isSubmitting}
              />
            </div>

            <div>
              <Label htmlFor='company' className='text-primary-900 font-semibold'>
                Company/Organisation
              </Label>
              <Input
                id='company'
                name='company'
                type='text'
                value={formData.company}
                onChange={handleChange}
                className='mt-2'
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <Label htmlFor='subject' className='text-primary-900 font-semibold'>
              Subject *
            </Label>
            <Input
              id='subject'
              name='subject'
              type='text'
              value={formData.subject}
              onChange={handleChange}
              required
              className='mt-2'
              disabled={isSubmitting}
            />
          </div>

          <div>
            <Label htmlFor='message' className='text-primary-900 font-semibold'>
              Message *
            </Label>
            <Textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className='mt-2'
              disabled={isSubmitting}
              placeholder='Tell us about your Bitcoin education needs...'
            />
          </div>

          <Button
            type='submit'
            disabled={isSubmitting}
            className='w-full bg-accent-500 hover:bg-accent-600 text-white font-display'
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      ) : (
        <div className='text-center py-8'>
          <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
            <svg className='w-8 h-8 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
            </svg>
          </div>
          <h3 className='text-xl font-semibold text-primary-900 mb-2'>Message Sent!</h3>
          <p className='text-primary-700'>We'll get back to you within 24 hours.</p>
        </div>
      )}

      {message && !isSuccess && (
        <div className='mt-4 p-4 bg-red-50 border border-red-200 rounded-lg'>
          <p className='text-red-600 text-sm'>{message}</p>
        </div>
      )}
    </div>
  );
}
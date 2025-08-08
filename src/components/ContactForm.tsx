'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/Card';
import { Send, Loader2 } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Card className='p-6 max-w-2xl mx-auto'>
      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Name Field */}
        <div className='space-y-2'>
          <Label htmlFor='name' className='text-sm font-medium'>
            Name *
          </Label>
          <Input
            id='name'
            type='text'
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={errors.name ? 'border-destructive' : ''}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id='name-error' className='text-sm text-destructive'>
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className='space-y-2'>
          <Label htmlFor='email' className='text-sm font-medium'>
            Email *
          </Label>
          <Input
            id='email'
            type='email'
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={errors.email ? 'border-destructive' : ''}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id='email-error' className='text-sm text-destructive'>
              {errors.email}
            </p>
          )}
        </div>

        {/* Subject Field */}
        <div className='space-y-2'>
          <Label htmlFor='subject' className='text-sm font-medium'>
            Subject *
          </Label>
          <Input
            id='subject'
            type='text'
            value={formData.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            className={errors.subject ? 'border-destructive' : ''}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          />
          {errors.subject && (
            <p id='subject-error' className='text-sm text-destructive'>
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className='space-y-2'>
          <Label htmlFor='message' className='text-sm font-medium'>
            Message *
          </Label>
          <Textarea
            id='message'
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={5}
            className={errors.message ? 'border-destructive' : ''}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id='message-error' className='text-sm text-destructive'>
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type='submit'
          disabled={isSubmitting}
          className='w-full'
        >
          {isSubmitting ? (
            <>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              Sending...
            </>
          ) : (
            <>
              <Send className='mr-2 h-4 w-4' />
              Send Message
            </>
          )}
        </Button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <p className='text-sm text-green-600 text-center'>
            Thank you! Your message has been sent successfully.
          </p>
        )}
        
        {submitStatus === 'error' && (
          <p className='text-sm text-destructive text-center'>
            Sorry, there was an error sending your message. Please try again.
          </p>
        )}
      </form>
    </Card>
  );
}

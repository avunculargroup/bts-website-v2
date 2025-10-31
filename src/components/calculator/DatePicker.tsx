'use client';

import { useState, useRef, useEffect } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

interface DatePickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
  id?: string;
}

export function DatePicker({ 
  value, 
  onChange, 
  placeholder = 'Select date',
  disabled = false,
  minDate,
  maxDate,
  className = '',
  id
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  // Format date for display (DD/MM/YYYY)
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-AU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };

  // Parse input string to Date
  const parseDate = (dateStr: string): Date | null => {
    // Support DD/MM/YYYY format
    const parts = dateStr.split('/');
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed
      const year = parseInt(parts[2], 10);
      
      if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
        const date = new Date(year, month, day);
        if (date.getDate() === day && date.getMonth() === month && date.getFullYear() === year) {
          return date;
        }
      }
    }
    return null;
  };

  // Update input value when value prop changes
  useEffect(() => {
    if (value) {
      setInputValue(formatDate(value));
      setError('');
    } else {
      setInputValue('');
    }
  }, [value]);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    
    if (newValue === '') {
      onChange(null);
      setError('');
      return;
    }

    const parsedDate = parseDate(newValue);
    if (parsedDate) {
      // Validate date range
      if (minDate && parsedDate < minDate) {
        setError(`Date must be after ${formatDate(minDate)}`);
        return;
      }
      if (maxDate && parsedDate > maxDate) {
        setError(`Date must be before ${formatDate(maxDate)}`);
        return;
      }
      
      onChange(parsedDate);
      setError('');
    } else {
      setError('Invalid date format. Use DD/MM/YYYY');
    }
  };

  // Handle calendar date selection
  const handleCalendarSelect = (date: Date) => {
    onChange(date);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    if (!value) return [];
    
    const year = value.getFullYear();
    const month = value.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const currentDate = new Date(startDate);
    
    for (let i = 0; i < 42; i++) { // 6 weeks
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return days;
  };

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node) &&
          inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const calendarDays = generateCalendarDays();
  const currentMonth = value ? value.getMonth() : new Date().getMonth();
  const currentYear = value ? value.getFullYear() : new Date().getFullYear();

  return (
    <div className={`relative ${className}`}>
      <div className='relative'>
        <input
          ref={inputRef}
          id={id}
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full px-3 py-2 pr-10 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body ${
            error ? 'border-red-500' : ''
          } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
        />
        <button
          type='button'
          onClick={() => setIsOpen(!isOpen)}
          disabled={disabled}
          aria-label='Open date picker calendar'
          className='absolute right-2 top-1/2 transform -translate-y-1/2 text-primary-500 hover:text-primary-700 transition-colors'
        >
          <Calendar className='h-4 w-4' />
        </button>
      </div>

      {error && (
        <p className='mt-1 text-sm text-red-600'>{error}</p>
      )}

      {isOpen && !disabled && (
        <div
          ref={calendarRef}
          className='absolute z-50 mt-1 w-full bg-white border border-primary-200 rounded-lg shadow-lg'
        >
          <div className='p-4'>
            {/* Calendar Header */}
            <div className='flex items-center justify-between mb-4'>
              <h3 className='text-sm font-medium text-primary-900'>
                {new Intl.DateTimeFormat('en-AU', { month: 'long', year: 'numeric' }).format(new Date(currentYear, currentMonth))}
              </h3>
              <div className='flex space-x-1'>
                <button
                  onClick={() => {
                    const newDate = new Date(currentYear, currentMonth - 1, 1);
                    onChange(newDate);
                  }}
                  aria-label='Previous month'
                  className='p-1 hover:bg-primary-100 rounded'
                >
                  <ChevronDown className='h-4 w-4 rotate-90' />
                </button>
                <button
                  onClick={() => {
                    const newDate = new Date(currentYear, currentMonth + 1, 1);
                    onChange(newDate);
                  }}
                  aria-label='Next month'
                  className='p-1 hover:bg-primary-100 rounded'
                >
                  <ChevronDown className='h-4 w-4 -rotate-90' />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className='grid grid-cols-7 gap-1'>
              {/* Day headers */}
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <div key={day} className='text-center text-xs font-medium text-primary-500 py-2'>
                  {day}
                </div>
              ))}
              
              {/* Calendar days */}
              {calendarDays.map((day, index) => {
                const isCurrentMonth = day.getMonth() === currentMonth;
                const isSelected = value && day.toDateString() === value.toDateString();
                const isToday = day.toDateString() === new Date().toDateString();
                const isDisabled = (minDate && day < minDate) || (maxDate && day > maxDate);
                
                return (
                  <button
                    key={index}
                    onClick={() => !isDisabled && handleCalendarSelect(day)}
                    disabled={isDisabled}
                    className={`text-sm py-2 hover:bg-primary-100 rounded transition-colors ${
                      !isCurrentMonth ? 'text-primary-300' : 'text-primary-900'
                    } ${
                      isSelected ? 'bg-accent-500 text-white hover:bg-accent-600' : ''
                    } ${
                      isToday && !isSelected ? 'bg-primary-100 font-medium' : ''
                    } ${
                      isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                    }`}
                  >
                    {day.getDate()}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

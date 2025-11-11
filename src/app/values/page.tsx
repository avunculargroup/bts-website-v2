'use client';

import { useState, useMemo } from 'react';
import { Container } from '@/components/Container';
import { values, type Value } from '@/lib/values-data';
import { ValueCard } from '@/components/values/ValueCard';
import { SelectedValuesSummary } from '@/components/values/SelectedValuesSummary';
import { GuideDisplay } from '@/components/values/GuideDisplay';
import { EmailForm } from '@/components/values/EmailForm';
import { Heart } from 'lucide-react';

export default function ValuesPage() {
  const [selectedValueIds, setSelectedValueIds] = useState<Set<string>>(new Set());
  const [generatedGuide, setGeneratedGuide] = useState<Value[] | null>(null);
  const [showEmailForm, setShowEmailForm] = useState(false);

  const selectedValues = useMemo(() => {
    return values.filter((value) => selectedValueIds.has(value.id));
  }, [selectedValueIds]);

  const handleToggleValue = (valueId: string) => {
    setSelectedValueIds((prev) => {
      const next = new Set(prev);
      if (next.has(valueId)) {
        next.delete(valueId);
      } else {
        next.add(valueId);
      }
      return next;
    });
  };

  const handleGenerateGuide = () => {
    if (selectedValues.length > 0) {
      setGeneratedGuide(selectedValues);
      // Scroll to guide display
      setTimeout(() => {
        const guideElement = document.getElementById('guide-display');
        if (guideElement) {
          guideElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleEmailClick = () => {
    setShowEmailForm(true);
  };

  const handleEmailSuccess = () => {
    setShowEmailForm(false);
  };

  const handleEmailCancel = () => {
    setShowEmailForm(false);
  };

  // Group values by category for better organisation
  const valuesByCategory = useMemo(() => {
    const grouped: Record<string, Value[]> = {};
    values.forEach((value) => {
      const category = value.category || 'Other';
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(value);
    });
    return grouped;
  }, []);

  return (
    <div className='w-full bg-white'>
      {/* Hero Section */}
      <section className='py-16 lg:py-24 bg-primary-50'>
        <Container>
          <div className='text-center max-w-3xl mx-auto'>
            <div className='flex justify-center mb-6'>
              <div className='w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center'>
                <Heart className='w-8 h-8 text-accent-600' />
              </div>
            </div>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 font-display mb-6'>
              Bitcoin Through Values
            </h1>
            <p className='text-xl text-primary-700 font-body leading-relaxed mb-4'>
              Create a personalised Bitcoin guide based on what matters most to your colleague, board member, friend or loved one.
            </p>
            <p className='text-lg text-primary-600 font-body leading-relaxed'>
              Select the values that resonate with them, and we&apos;ll generate a customised explanation of Bitcoin tailored to their perspective.
            </p>
          </div>
        </Container>
      </section>

      {/* Value Selection Section */}
      <section className='py-16 lg:py-24 bg-white'>
        <Container>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl sm:text-4xl font-bold text-primary-900 font-display mb-8 text-center'>
              Select Values That Matter
            </h2>

            {/* Selected Values Summary */}
            <SelectedValuesSummary
              selectedValues={selectedValues}
              onGenerateGuide={handleGenerateGuide}
            />

            {/* Values Grid */}
            <div className='space-y-8'>
              {Object.entries(valuesByCategory).map(([category, categoryValues]) => (
                <div key={category}>
                  <h3 className='text-xl font-semibold text-primary-800 font-display mb-4'>
                    {category}
                  </h3>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {categoryValues.map((value) => (
                      <ValueCard
                        key={value.id}
                        value={value}
                        isSelected={selectedValueIds.has(value.id)}
                        onToggle={() => handleToggleValue(value.id)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Guide Display Section */}
      {generatedGuide && (
        <section id='guide-display' className='py-16 lg:py-24 bg-primary-50'>
          <Container>
            <div className='max-w-4xl mx-auto'>
              <GuideDisplay
                selectedValues={generatedGuide}
                onEmailClick={handleEmailClick}
              />
            </div>
          </Container>
        </section>
      )}

      {/* Email Form Modal */}
      {showEmailForm && (
        <EmailForm
          selectedValues={selectedValues}
          onSuccess={handleEmailSuccess}
          onCancel={handleEmailCancel}
        />
      )}
    </div>
  );
}


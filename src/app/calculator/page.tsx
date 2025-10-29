'use client';

import { useState } from 'react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { HistoricCAGRCalculator } from '@/components/calculator/HistoricCAGRCalculator';
import { FutureProjectionCalculator } from '@/components/calculator/FutureProjectionCalculator';

export default function CalculatorPage() {
  const [activeTab, setActiveTab] = useState<'historic' | 'future'>('historic');
  
  return (
    <CalculatorLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'historic' && <HistoricCAGRCalculator />}
      {activeTab === 'future' && <FutureProjectionCalculator />}
    </CalculatorLayout>
  );
}

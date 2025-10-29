'use client';

import { useState, useEffect } from 'react';
import { Download, FileText, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { DatePicker } from './DatePicker';
import { PriceChart } from './PriceChart';
import { ComparisonTable } from './ComparisonTable';
import { calculateCAGR, CAGRInput } from '@/lib/calculator/cagr';
import { calculateCGT, TaxScenario } from '@/lib/calculator/tax';

interface CAGRResult {
  cagr: number;
  totalReturn: number;
  years: number;
  initialValue: number;
  endingValue: number;
  volatility: number;
  maxDrawdown: number;
  priceData: Array<{date: Date; price: number; value: number}>;
}

export function HistoricCAGRCalculator() {
  // Form state
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState<string>('');
  const [investmentType, setInvestmentType] = useState<'AUD' | 'BTC'>('AUD');
  const [startBitcoinPrice, setStartBitcoinPrice] = useState<string>('');
  const [endBitcoinPrice, setEndBitcoinPrice] = useState<string>('');
  
  // Advanced options
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [corporateTaxRate, setCorporateTaxRate] = useState<string>('30');
  const [enableTaxScenario, setEnableTaxScenario] = useState(false);
  
  // Results state
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<CAGRResult | null>(null);
  const [error, setError] = useState<string>('');
  const [taxResult, setTaxResult] = useState<ReturnType<typeof calculateCGT> | null>(null);

  // Set default dates
  useEffect(() => {
    const today = new Date();
    const fiveYearsAgo = new Date();
    fiveYearsAgo.setFullYear(today.getFullYear() - 5);
    
    setStartDate(fiveYearsAgo);
    setEndDate(today);
  }, []);

  const handleCalculate = () => {
    if (!startDate || !endDate || !investmentAmount || !startBitcoinPrice || !endBitcoinPrice) {
      setError('Please fill in all required fields');
      return;
    }

    setIsCalculating(true);
    setError('');
    setResult(null);
    setTaxResult(null);

    try {
      const input: CAGRInput = {
        startDate,
        endDate,
        initialInvestment: parseFloat(investmentAmount),
        initialBTC: investmentType === 'BTC' ? parseFloat(investmentAmount) : undefined,
        startBitcoinPrice: parseFloat(startBitcoinPrice),
        endBitcoinPrice: parseFloat(endBitcoinPrice)
      };

      const cagrResult = calculateCAGR(input);
      setResult(cagrResult);

      // Calculate tax scenario if enabled
      if (enableTaxScenario && startDate && endDate) {
        const holdingsPeriodMonths = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30));
        const taxScenario: TaxScenario = {
          corporateTaxRate: parseFloat(corporateTaxRate) / 100,
          holdingsPeriodMonths: holdingsPeriodMonths
        };

        const tax = calculateCGT(cagrResult.endingValue, cagrResult.initialValue, taxScenario);
        setTaxResult(tax);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Calculation failed');
    } finally {
      setIsCalculating(false);
    }
  };

  const exportToCSV = () => {
    if (!result) return;

    const csvData = [
      ['Metric', 'Value'],
      ['CAGR', `${result.cagr.toFixed(2)}%`],
      ['Total Return (AUD)', `$${result.totalReturn.toLocaleString('en-AU')}`],
      ['Time Period (Years)', result.years.toFixed(2)],
      ['Initial Value (AUD)', `$${result.initialValue.toLocaleString('en-AU')}`],
      ['Ending Value (AUD)', `$${result.endingValue.toLocaleString('en-AU')}`],
      ['Volatility', `${result.volatility.toFixed(2)}%`],
      ['Max Drawdown', `${result.maxDrawdown.toFixed(2)}%`]
    ];

    const csvContent = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bitcoin-cagr-analysis.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportToPDF = async () => {
    if (!result) return;

    // This would require jsPDF and html2canvas
    // For now, we'll just show an alert
    alert('PDF export functionality will be implemented with jsPDF');
  };

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Input Panel */}
        <div className='space-y-6'>
          <div className='bg-white border border-primary-200 rounded-lg p-6'>
            <h2 className='text-xl font-semibold text-primary-900 font-display mb-6'>
              Historic CAGR Calculator
            </h2>
            
            <div className='space-y-4'>
              {/* Date Range */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-medium text-primary-800 mb-2'>
                    Start Date *
                  </label>
                  <DatePicker
                    value={startDate}
                    onChange={setStartDate}
                    maxDate={endDate || undefined}
                    placeholder='Select start date'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-primary-800 mb-2'>
                    End Date *
                  </label>
                  <DatePicker
                    value={endDate}
                    onChange={setEndDate}
                    minDate={startDate || undefined}
                    placeholder='Select end date'
                  />
                </div>
              </div>

              {/* Investment Amount */}
              <div>
                <label className='block text-sm font-medium text-primary-800 mb-2'>
                  Initial Investment *
                </label>
                <div className='flex rounded-lg shadow-sm'>
                  <input
                    type='number'
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                    placeholder='Enter amount'
                    className='block w-full border-primary-200 rounded-l-lg focus:ring-accent-500 focus:border-accent-500 flex-1 px-4 py-3 font-body'
                  />
                  <select
                    value={investmentType}
                    onChange={(e) => setInvestmentType(e.target.value as 'AUD' | 'BTC')}
                    className='border border-primary-200 rounded-r-lg focus:ring-accent-500 focus:border-accent-500 py-3 pl-3 pr-10 text-sm font-medium text-primary-700 bg-primary-50'
                  >
                    <option value='AUD'>AUD</option>
                    <option value='BTC'>BTC</option>
                  </select>
                </div>
              </div>

              {/* Bitcoin Prices */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-medium text-primary-800 mb-2'>
                    Bitcoin Price at Start (AUD) *
                  </label>
                  <input
                    type='number'
                    value={startBitcoinPrice}
                    onChange={(e) => setStartBitcoinPrice(e.target.value)}
                    placeholder='e.g., 50000'
                    className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body'
                  />
                  <p className='text-xs text-primary-600 mt-1'>
                    Enter Bitcoin price in AUD on the start date
                  </p>
                </div>
                <div>
                  <label className='block text-sm font-medium text-primary-800 mb-2'>
                    Bitcoin Price at End (AUD) *
                  </label>
                  <input
                    type='number'
                    value={endBitcoinPrice}
                    onChange={(e) => setEndBitcoinPrice(e.target.value)}
                    placeholder='e.g., 100000'
                    className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body'
                  />
                  <p className='text-xs text-primary-600 mt-1'>
                    Enter Bitcoin price in AUD on the end date
                  </p>
                </div>
              </div>

              {/* Advanced Options */}
              <div className='border border-primary-200 rounded-lg'>
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className='w-full flex items-center justify-between p-4 text-left hover:bg-primary-50 transition-colors'
                >
                  <span className='font-medium text-primary-900'>Advanced Options</span>
                  {showAdvanced ? (
                    <ChevronUp className='h-4 w-4 text-primary-500' />
                  ) : (
                    <ChevronDown className='h-4 w-4 text-primary-500' />
                  )}
                </button>
                {showAdvanced && (
                  <div className='px-4 pb-4 border-t border-primary-200 space-y-4 pt-4'>
                    <div className='flex items-center'>
                      <input
                        type='checkbox'
                        id='enableTaxScenario'
                        checked={enableTaxScenario}
                        onChange={(e) => setEnableTaxScenario(e.target.checked)}
                        className='form-checkbox text-accent-500'
                      />
                      <label htmlFor='enableTaxScenario' className='ml-2 text-primary-700 text-sm'>
                        Include tax scenario analysis
                      </label>
                    </div>
                    {enableTaxScenario && (
                      <div>
                        <label htmlFor='corporateTaxRate' className='block text-sm font-medium text-primary-800 mb-1'>
                          Corporate Tax Rate (%)
                        </label>
                        <input
                          type='number'
                          id='corporateTaxRate'
                          value={corporateTaxRate}
                          onChange={(e) => setCorporateTaxRate(e.target.value)}
                          min='0'
                          max='100'
                          step='0.1'
                          className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body'
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Calculate Button */}
              <button
                onClick={handleCalculate}
                disabled={isCalculating}
                className='w-full bg-accent-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-accent-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-display'
              >
                {isCalculating ? 'Calculating...' : 'Calculate CAGR'}
              </button>

              {error && (
                <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
                  <div className='flex items-center'>
                    <AlertCircle className='h-5 w-5 text-red-500 mr-2' />
                    <div>
                      <p className='text-red-700 font-body font-medium'>{error}</p>
                      <p className='text-red-600 font-body text-sm mt-1'>
                        Please check your inputs and try again.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className='space-y-6'>
          {result && (
            <>
              {/* Main Results */}
              <div className='bg-white border border-primary-200 rounded-lg p-6'>
                <div className='flex items-center justify-between mb-6'>
                  <h3 className=' font-semibold text-primary-900 font-display'>
                    Calculation Results
                  </h3>
                  <div className='flex space-x-2'>
                    <button
                      onClick={exportToCSV}
                      className='flex items-center px-3 py-2 text-sm text-primary-600 hover:text-primary-800 border border-primary-200 rounded-lg hover:bg-primary-50 transition-colors'
                    >
                      <Download className='h-4 w-4 mr-1' />
                      CSV
                    </button>
                    <button
                      onClick={exportToPDF}
                      className='flex items-center px-3 py-2 text-sm text-primary-600 hover:text-primary-800 border border-primary-200 rounded-lg hover:bg-primary-50 transition-colors'
                    >
                      <FileText className='h-4 w-4 mr-1' />
                      PDF
                    </button>
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-4 mb-6'>
                  <div className='text-center p-4 bg-accent-50 rounded-lg'>
                    <p className='text-sm text-primary-700 mb-1'>CAGR</p>
                    <p className='text-2xl font-bold text-accent-700'>{result.cagr.toFixed(2)}%</p>
                  </div>
                  <div className='text-center p-4 bg-primary-50 rounded-lg'>
                    <p className='text-sm text-primary-700 mb-1'>Total Return</p>
                    <p className='text-2xl font-bold text-primary-900'>
                      ${result.totalReturn.toLocaleString('en-AU')}
                    </p>
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-4 text-sm'>
                  <div>
                    <p className='text-primary-600'>Time Period:</p>
                    <p className='font-semibold text-primary-900'>{result.years.toFixed(2)} years</p>
                  </div>
                  <div>
                    <p className='text-primary-600'>Initial Value:</p>
                    <p className='font-semibold text-primary-900'>
                      ${result.initialValue.toLocaleString('en-AU')}
                    </p>
                  </div>
                  <div>
                    <p className='text-primary-600'>Ending Value:</p>
                    <p className='font-semibold text-primary-900'>
                      ${result.endingValue.toLocaleString('en-AU')}
                    </p>
                  </div>
                  <div>
                    <p className='text-primary-600'>Volatility:</p>
                    <p className='font-semibold text-primary-900'>{result.volatility.toFixed(2)}%</p>
                  </div>
                </div>
              </div>

              {/* Tax Scenario Results */}
              {taxResult && (
                <div className='bg-white border border-primary-200 rounded-lg p-6'>
                  <h4 className=' font-semibold text-primary-900 font-display mb-4'>
                    Tax Scenario Analysis
                  </h4>
                  <div className='grid grid-cols-2 gap-4 text-sm'>
                    <div>
                      <p className='text-primary-600'>Capital Gain:</p>
                      <p className='font-semibold text-primary-900'>
                        ${taxResult.capitalGain.toLocaleString('en-AU')}
                      </p>
                    </div>
                    <div>
                      <p className='text-primary-600'>CGT Discount:</p>
                      <p className='font-semibold text-primary-900'>
                        {taxResult.cgtDiscountApplied ? 'Yes (50%)' : 'No'}
                      </p>
                    </div>
                    <div>
                      <p className='text-primary-600'>Taxable Gain:</p>
                      <p className='font-semibold text-primary-900'>
                        ${taxResult.taxableGain.toLocaleString('en-AU')}
                      </p>
                    </div>
                    <div>
                      <p className='text-primary-600'>Tax Payable:</p>
                      <p className='font-semibold text-primary-900'>
                        ${taxResult.taxAmount.toLocaleString('en-AU')}
                      </p>
                    </div>
                  </div>
                  <div className='mt-4 p-3 bg-primary-50 rounded-lg'>
                    <p className='text-sm text-primary-700'>
                      <strong>After-Tax Value:</strong> ${taxResult.afterTaxValue.toLocaleString('en-AU')}
                    </p>
                  </div>
                </div>
              )}

              {/* Price Chart */}
              {result.priceData.length > 0 && (
                <div className='bg-white border border-primary-200 rounded-lg p-6'>
                  <h4 className=' font-semibold text-primary-900 font-display mb-4'>
                    Bitcoin Price & Investment Value
                  </h4>
                  <PriceChart data={result.priceData} />
                </div>
              )}

              {/* Comparison Table */}
              <div className='bg-white border border-primary-200 rounded-lg p-6'>
                <h4 className=' font-semibold text-primary-900 font-display mb-4'>
                  Comparison with Traditional Assets
                </h4>
                <ComparisonTable 
                  bitcoinData={{
                    cagr: result.cagr,
                    volatility: result.volatility,
                    maxDrawdown: result.maxDrawdown
                  }}
                  period='5y'
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
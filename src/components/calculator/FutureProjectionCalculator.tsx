'use client';

import { useState } from 'react';
import { Download, FileText, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { ScenarioChart } from './PriceChart';
import { SensitivityTable } from './ComparisonTable';
import { calculateProjection, addTaxScenarioToProjection, ProjectionInput } from '@/lib/calculator/projection';
import { DEFAULT_CAGR_SCENARIOS } from '@/lib/calculator/constants';

interface TaxDetails {
  capitalGain: number;
  cgtDiscountApplied: boolean;
  taxableGain: number;
  taxAmount: number;
  afterTaxValue: number;
}

interface ProjectionResult {
  futureValue: number;
  futureValueAfterTax?: number;
  scenarios: Array<{
    year: number;
    conservative: number;
    base: number;
    aggressive: number;
  }>;
  taxDetails?: TaxDetails;
}

export function FutureProjectionCalculator() {
  // Form state
  const [currentBTC, setCurrentBTC] = useState<string>('');
  const [currentPrice, setCurrentPrice] = useState<string>('');
  const [expectedCAGR, setExpectedCAGR] = useState<string>('50');
  const [projectionYears, setProjectionYears] = useState<string>('5');
  
  // Advanced options
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [enableTaxScenario, setEnableTaxScenario] = useState(false);
  const [purchaseDate, setPurchaseDate] = useState<Date | null>(null);
  const [corporateTaxRate, setCorporateTaxRate] = useState<string>('30');
  
  // Results state
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<ProjectionResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    if (!currentBTC || !currentPrice || !expectedCAGR || !projectionYears) {
      setError('Please fill in all required fields');
      return;
    }

    setIsCalculating(true);
    setError('');
    setResult(null);

    try {
      const currentValue = parseFloat(currentBTC) * parseFloat(currentPrice);
      const cagrDecimal = parseFloat(expectedCAGR) / 100;
      const years = parseFloat(projectionYears);

      const input: ProjectionInput = {
        currentValue,
        expectedCagr: cagrDecimal,
        projectionHorizonYears: years
      };

      const projection = calculateProjection(input);

      // Generate scenarios for chart
      const scenariosForChart = [];
      for (let year = 0; year <= years; year++) {
        const scenarioData: { year: number; conservative: number; base: number; aggressive: number } = {
          year,
          conservative: currentValue * Math.pow(1 + 0.30, year), // 30% CAGR
          base: currentValue * Math.pow(1 + 0.50, year), // 50% CAGR
          aggressive: currentValue * Math.pow(1 + 0.70, year), // 70% CAGR
        };
        scenariosForChart.push(scenarioData);
      }

      let finalResult: ProjectionResult = {
        futureValue: projection.futureValue,
        scenarios: scenariosForChart,
      };

      // Add tax scenario if enabled
      if (enableTaxScenario && purchaseDate) {
        const holdingsPeriodMonths = Math.ceil((new Date().getTime() - purchaseDate.getTime()) / (1000 * 60 * 60 * 24 * 30)) + (years * 12);
        const taxScenario = {
          corporateTaxRate: parseFloat(corporateTaxRate) / 100,
          holdingsPeriodMonths: holdingsPeriodMonths
        };

        const projectionWithTax = addTaxScenarioToProjection(projection, currentValue, taxScenario);
        finalResult = {
          ...finalResult,
          futureValueAfterTax: projectionWithTax.futureValueAfterTax,
          taxDetails: projectionWithTax.taxDetails,
        };
      }

      setResult(finalResult);
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
      ['Current BTC Holdings', currentBTC],
      ['Current Bitcoin Price (AUD)', `$${parseFloat(currentPrice).toLocaleString('en-AU')}`],
      ['Expected CAGR', `${expectedCAGR}%`],
      ['Projection Horizon (Years)', projectionYears],
      ['Projected Future Value (AUD)', `$${result.futureValue.toLocaleString('en-AU')}`],
    ];

    if (result.futureValueAfterTax) {
      csvData.push(['After-Tax Value (AUD)', `$${result.futureValueAfterTax.toLocaleString('en-AU')}`]);
    }

    const csvContent = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bitcoin-projection-analysis.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportToPDF = async () => {
    if (!result) return;
    alert('PDF export functionality will be implemented with jsPDF');
  };

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Input Panel */}
        <div className='space-y-6'>
          <div className='bg-white border border-primary-200 rounded-lg p-6'>
            <h2 className='text-xl font-semibold text-primary-900 font-display mb-6'>
              Future Value Projection
            </h2>
            
            <div className='space-y-4'>
              {/* Current Holdings */}
              <div>
                <label htmlFor='currentBTC' className='block text-base md:text-lg font-medium text-primary-800 mb-2'>
                  Current Bitcoin Holdings (BTC) *
                </label>
                <input
                  id='currentBTC'
                  type='number'
                  value={currentBTC}
                  onChange={(e) => setCurrentBTC(e.target.value)}
                  placeholder='e.g., 0.5'
                  step='any'
                  className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body'
                />
              </div>

              {/* Current Price */}
              <div>
                <label htmlFor='currentPrice' className='block text-base md:text-lg font-medium text-primary-800 mb-2'>
                  Current Bitcoin Price (AUD) *
                </label>
                <input
                  id='currentPrice'
                  type='number'
                  value={currentPrice}
                  onChange={(e) => setCurrentPrice(e.target.value)}
                  placeholder='e.g., 100000'
                  className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body'
                />
                <p className='text-xs text-primary-600 mt-1'>
                  Enter current Bitcoin price in AUD
                </p>
              </div>

              {/* Expected CAGR */}
              <div>
                <label className='block text-base md:text-lg font-medium text-primary-800 mb-2'>
                  Expected CAGR (%)
                </label>
                <select
                  value={expectedCAGR}
                  onChange={(e) => setExpectedCAGR(e.target.value)}
                  className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body bg-white'
                >
                  {DEFAULT_CAGR_SCENARIOS.map(scenario => (
                    <option key={scenario.label} value={scenario.value * 100}>
                      {scenario.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Projection Years */}
              <div>
                <label htmlFor='projectionYears' className='block text-base md:text-lg font-medium text-primary-800 mb-2'>
                  Projection Horizon (Years) *
                </label>
                <input
                  id='projectionYears'
                  type='number'
                  value={projectionYears}
                  onChange={(e) => setProjectionYears(e.target.value)}
                  placeholder='e.g., 5'
                  min='1'
                  step='any'
                  className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body'
                />
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
                      <label htmlFor='enableTaxScenario' className='ml-2 text-primary-700 text-base md:text-lg'>
                        Include tax scenario analysis
                      </label>
                    </div>
                    {enableTaxScenario && (
                      <>
                        <div>
                          <label className='block text-base md:text-lg font-medium text-primary-800 mb-2'>
                            Purchase Date
                          </label>
                          <input
                            type='date'
                            value={purchaseDate ? purchaseDate.toISOString().split('T')[0] : ''}
                            onChange={(e) => setPurchaseDate(e.target.value ? new Date(e.target.value) : null)}
                            className='w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent font-body'
                          />
                        </div>
                        <div>
                          <label htmlFor='corporateTaxRate' className='block text-base md:text-lg font-medium text-primary-800 mb-1'>
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
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Calculate Button */}
              <button
                onClick={handleCalculate}
                disabled={isCalculating}
                className='w-full bg-accent-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-accent-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-display text-base'
              >
                {isCalculating ? 'Calculating...' : 'Calculate Projection'}
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
                    Projection Results
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
                    <p className='text-sm text-primary-700 mb-1'>Projected Value</p>
                    <p className='text-2xl font-bold text-accent-700'>
                      ${result.futureValue.toLocaleString('en-AU')}
                    </p>
                  </div>
                  <div className='text-center p-4 bg-primary-50 rounded-lg'>
                    <p className='text-sm text-primary-700 mb-1'>Current Value</p>
                    <p className='text-2xl font-bold text-primary-900'>
                      ${(parseFloat(currentBTC) * parseFloat(currentPrice)).toLocaleString('en-AU')}
                    </p>
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-4 text-sm'>
                  <div>
                    <p className='text-primary-600'>Bitcoin Holdings:</p>
                    <p className='font-semibold text-primary-900'>{currentBTC} BTC</p>
                  </div>
                  <div>
                    <p className='text-primary-600'>Expected CAGR:</p>
                    <p className='font-semibold text-primary-900'>{expectedCAGR}%</p>
                  </div>
                  <div>
                    <p className='text-primary-600'>Projection Horizon:</p>
                    <p className='font-semibold text-primary-900'>{projectionYears} years</p>
                  </div>
                  <div>
                    <p className='text-primary-600'>Current Price:</p>
                    <p className='font-semibold text-primary-900'>
                      ${parseFloat(currentPrice).toLocaleString('en-AU')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tax Scenario Results */}
              {result.futureValueAfterTax && result.taxDetails && (
                <div className='bg-white border border-primary-200 rounded-lg p-6'>
                  <h4 className=' font-semibold text-primary-900 font-display mb-4'>
                    Tax Scenario Analysis
                  </h4>
                  <div className='grid grid-cols-2 gap-4 text-sm'>
                    <div>
                      <p className='text-primary-600'>Capital Gain:</p>
                      <p className='font-semibold text-primary-900'>
                        ${result.taxDetails.capitalGain.toLocaleString('en-AU')}
                      </p>
                    </div>
                    <div>
                      <p className='text-primary-600'>CGT Discount:</p>
                      <p className='font-semibold text-primary-900'>
                        {result.taxDetails.cgtDiscountApplied ? 'Yes (50%)' : 'No'}
                      </p>
                    </div>
                    <div>
                      <p className='text-primary-600'>Taxable Gain:</p>
                      <p className='font-semibold text-primary-900'>
                        ${result.taxDetails.taxableGain.toLocaleString('en-AU')}
                      </p>
                    </div>
                    <div>
                      <p className='text-primary-600'>Tax Payable:</p>
                      <p className='font-semibold text-primary-900'>
                        ${result.taxDetails.taxAmount.toLocaleString('en-AU')}
                      </p>
                    </div>
                  </div>
                  <div className='mt-4 p-3 bg-primary-50 rounded-lg'>
                    <p className='text-sm text-primary-700'>
                      <strong>After-Tax Value:</strong> ${result.futureValueAfterTax.toLocaleString('en-AU')}
                    </p>
                  </div>
                </div>
              )}

              {/* Scenario Chart */}
              {result.scenarios.length > 0 && (
                <div className='bg-white border border-primary-200 rounded-lg p-6'>
                  <h4 className=' font-semibold text-primary-900 font-display mb-4'>
                    Scenario Comparison
                  </h4>
                  <ScenarioChart data={result.scenarios} />
                </div>
              )}

              {/* Sensitivity Analysis */}
              <div className='bg-white border border-primary-200 rounded-lg p-6'>
                <h4 className=' font-semibold text-primary-900 font-display mb-4'>
                  Sensitivity Analysis
                </h4>
                <SensitivityTable 
                  data={[
                    { cagr: 30, value: calculateProjection({ currentValue: parseFloat(currentBTC) * parseFloat(currentPrice), expectedCagr: 0.30, projectionHorizonYears: parseFloat(projectionYears) }).futureValue },
                    { cagr: 50, value: calculateProjection({ currentValue: parseFloat(currentBTC) * parseFloat(currentPrice), expectedCagr: 0.50, projectionHorizonYears: parseFloat(projectionYears) }).futureValue },
                    { cagr: 70, value: calculateProjection({ currentValue: parseFloat(currentBTC) * parseFloat(currentPrice), expectedCagr: 0.70, projectionHorizonYears: parseFloat(projectionYears) }).futureValue },
                  ]} 
                  baseCAGR={parseFloat(expectedCAGR)}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
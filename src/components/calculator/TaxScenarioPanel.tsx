'use client';

import { TaxResult } from '@/lib/calculator/tax';
import { getCGTDiscountMessage } from '@/lib/calculator/tax';

interface TaxScenarioPanelProps {
  taxResult: TaxResult;
  beforeTaxCAGR: number;
  className?: string;
}

export function TaxScenarioPanel({ taxResult, beforeTaxCAGR, className = '' }: TaxScenarioPanelProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(2)}%`;
  };

  const taxImpact = beforeTaxCAGR - taxResult.afterTaxCAGR;

  return (
    <div className={`bg-white border border-primary-200 rounded-lg overflow-hidden ${className}`}>
      <div className='px-6 py-4 border-b border-primary-200 bg-primary-50'>
        <h3 className=' font-semibold text-primary-900 font-display'>
          Tax Scenario Analysis
        </h3>
        <p className='text-sm text-primary-600 font-body mt-1'>
          Australian Capital Gains Tax calculation
        </p>
      </div>
      
      <div className='p-6 space-y-6'>
        {/* CGT Discount Status */}
        <div className='bg-accent-50 border border-accent-200 rounded-lg p-4'>
          <div className='flex items-center'>
            <div className={`w-3 h-3 rounded-full mr-3 ${
              taxResult.cgtDiscount > 0 ? 'bg-green-500' : 'bg-yellow-500'
            }`} />
            <div>
              <p className='text-sm font-medium text-primary-900'>
                {getCGTDiscountMessage(taxResult.holdingPeriodMonths)}
              </p>
              <p className='text-xs text-primary-600 mt-1'>
                Holding period: {taxResult.holdingPeriodMonths} months
              </p>
            </div>
          </div>
        </div>

        {/* Tax Calculation Breakdown */}
        <div className='space-y-4'>
          <h4 className='text-md font-semibold text-primary-900 font-display'>
            Tax Calculation Breakdown
          </h4>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='space-y-3'>
              <div className='flex justify-between items-center py-2 border-b border-primary-100'>
                <span className='text-sm text-primary-700'>Capital Gain:</span>
                <span className={`text-sm font-medium ${
                  taxResult.capitalGain >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {formatCurrency(taxResult.capitalGain)}
                </span>
              </div>
              
              <div className='flex justify-between items-center py-2 border-b border-primary-100'>
                <span className='text-sm text-primary-700'>CGT Discount:</span>
                <span className='text-sm font-medium text-primary-900'>
                  {taxResult.cgtDiscount > 0 ? '50%' : '0%'}
                </span>
              </div>
              
              <div className='flex justify-between items-center py-2 border-b border-primary-100'>
                <span className='text-sm text-primary-700'>Taxable Gain:</span>
                <span className={`text-sm font-medium ${
                  taxResult.taxableGain >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {formatCurrency(taxResult.taxableGain)}
                </span>
              </div>
            </div>
            
            <div className='space-y-3'>
              <div className='flex justify-between items-center py-2 border-b border-primary-100'>
                <span className='text-sm text-primary-700'>Tax Payable:</span>
                <span className='text-sm font-medium text-red-600'>
                  {formatCurrency(taxResult.taxPayable)}
                </span>
              </div>
              
              <div className='flex justify-between items-center py-2 border-b border-primary-100'>
                <span className='text-sm text-primary-700'>After-Tax Proceeds:</span>
                <span className='text-sm font-medium text-green-600'>
                  {formatCurrency(taxResult.afterTaxProceeds)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CAGR Impact */}
        <div className='bg-primary-50 border border-primary-200 rounded-lg p-4'>
          <h4 className='text-md font-semibold text-primary-900 font-display mb-3'>
            CAGR Impact
          </h4>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='text-center'>
              <p className='text-sm text-primary-600 mb-1'>Before Tax</p>
              <p className=' font-semibold text-primary-900'>
                {formatPercentage(beforeTaxCAGR)}
              </p>
            </div>
            
            <div className='text-center'>
              <p className='text-sm text-primary-600 mb-1'>After Tax</p>
              <p className=' font-semibold text-green-600'>
                {formatPercentage(taxResult.afterTaxCAGR)}
              </p>
            </div>
            
            <div className='text-center'>
              <p className='text-sm text-primary-600 mb-1'>Tax Impact</p>
              <p className=' font-semibold text-red-600'>
                -{formatPercentage(taxImpact)}
              </p>
            </div>
          </div>
        </div>

        {/* Effective Tax Rate */}
        <div className='text-center'>
          <p className='text-sm text-primary-600'>
            <strong>Effective Tax Rate:</strong> {formatPercentage(taxResult.taxPayable / taxResult.capitalGain * 100)}
          </p>
          <p className='text-xs text-primary-500 mt-1'>
            (Tax payable ÷ Capital gain)
          </p>
        </div>
      </div>
      
      <div className='px-6 py-4 bg-primary-50 border-t border-primary-200'>
        <div className='text-xs text-primary-600 font-body'>
          <p className='mb-2'>
            <strong>Important:</strong> This calculation is based on current Australian tax law and assumes 
            corporate tax rates. Individual circumstances may vary.
          </p>
          <p>
            <strong>Disclaimer:</strong> This is general information only and does not constitute tax advice. 
            Consult a qualified tax professional for advice specific to your situation.
          </p>
        </div>
      </div>
    </div>
  );
}

// Multiple tax scenarios comparison
interface MultipleTaxScenariosProps {
  scenarios: Array<{
    name: string;
    result: TaxResult;
    beforeTaxCAGR: number;
  }>;
  className?: string;
}

export function MultipleTaxScenarios({ scenarios, className = '' }: MultipleTaxScenariosProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(2)}%`;
  };

  return (
    <div className={`bg-white border border-primary-200 rounded-lg overflow-hidden ${className}`}>
      <div className='px-6 py-4 border-b border-primary-200 bg-primary-50'>
        <h3 className=' font-semibold text-primary-900 font-display'>
          Multiple Tax Scenarios
        </h3>
        <p className='text-sm text-primary-600 font-body mt-1'>
          Compare different disposal timing scenarios
        </p>
      </div>
      
      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead className='bg-primary-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider'>
                Scenario
              </th>
              <th className='px-6 py-3 text-right text-xs font-medium text-primary-500 uppercase tracking-wider'>
                Tax Payable
              </th>
              <th className='px-6 py-3 text-right text-xs font-medium text-primary-500 uppercase tracking-wider'>
                After-Tax CAGR
              </th>
              <th className='px-6 py-3 text-center text-xs font-medium text-primary-500 uppercase tracking-wider'>
                CGT Discount
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-primary-200'>
            {scenarios.map((scenario, index) => (
              <tr key={index} className='hover:bg-primary-50 transition-colors'>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm font-medium text-primary-900'>
                    {scenario.name}
                  </div>
                  <div className='text-xs text-primary-600'>
                    {scenario.result.holdingPeriodMonths} months held
                  </div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-red-600'>
                  {formatCurrency(scenario.result.taxPayable)}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-green-600'>
                  {formatPercentage(scenario.result.afterTaxCAGR)}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-center text-sm'>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    scenario.result.cgtDiscount > 0 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {scenario.result.cgtDiscount > 0 ? '50%' : '0%'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

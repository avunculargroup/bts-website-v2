'use client';

import { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

interface HelpDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HelpDrawer({ isOpen, onClose }: HelpDrawerProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 overflow-hidden'>
      <div className='absolute inset-0 bg-black bg-opacity-50' onClick={onClose} />
      
      <div className='absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl'>
        <div className='flex h-full flex-col'>
          {/* Header */}
          <div className='flex items-center justify-between border-b border-primary-200 px-6 py-4'>
            <h2 className=' font-semibold text-primary-900 font-display'>
              Help & Information
            </h2>
            <button
              onClick={onClose}
              className='text-primary-500 hover:text-primary-700 transition-colors'
            >
              <X className='h-5 w-5' />
            </button>
          </div>

          {/* Content */}
          <div className='flex-1 overflow-y-auto px-6 py-4'>
            <div className='space-y-4'>
              {/* CAGR Formula */}
              <div className='border border-primary-200 rounded-lg'>
                <button
                  onClick={() => toggleSection('cagr')}
                  className='w-full flex items-center justify-between p-4 text-left hover:bg-primary-50 transition-colors'
                >
                  <span className='font-medium text-primary-900'>CAGR Formula</span>
                  {expandedSection === 'cagr' ? (
                    <ChevronUp className='h-4 w-4 text-primary-500' />
                  ) : (
                    <ChevronDown className='h-4 w-4 text-primary-500' />
                  )}
                </button>
                {expandedSection === 'cagr' && (
                  <div className='px-4 pb-4 border-t border-primary-200'>
                    <div className='pt-4 space-y-3'>
                      <p className='text-sm text-primary-700 font-body'>
                        CAGR = ((Ending Value / Beginning Value)^(1/n)) - 1
                      </p>
                      <p className='text-sm text-primary-600 font-body'>
                        Where n is the number of years. CAGR smooths volatile returns but doesn&apos;t capture intra-period volatility.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* CGT Rules */}
              <div className='border border-primary-200 rounded-lg'>
                <button
                  onClick={() => toggleSection('cgt')}
                  className='w-full flex items-center justify-between p-4 text-left hover:bg-primary-50 transition-colors'
                >
                  <span className='font-medium text-primary-900'>Australian CGT Rules</span>
                  {expandedSection === 'cgt' ? (
                    <ChevronUp className='h-4 w-4 text-primary-500' />
                  ) : (
                    <ChevronDown className='h-4 w-4 text-primary-500' />
                  )}
                </button>
                {expandedSection === 'cgt' && (
                  <div className='px-4 pb-4 border-t border-primary-200'>
                    <div className='pt-4 space-y-3'>
                      <p className='text-sm text-primary-700 font-body'>
                        Bitcoin disposals trigger Capital Gains Tax events in Australia.
                      </p>
                      <ul className='text-sm text-primary-600 font-body space-y-1 ml-4'>
                        <li>• 50% CGT discount for holdings &gt;12 months</li>
                        <li>• Convert all transactions to AUD using RBA rates</li>
                        <li>• Maintain detailed transaction records</li>
                        <li>• Corporate tax rates apply to capital gains</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* IFRS Guidance */}
              <div className='border border-primary-200 rounded-lg'>
                <button
                  onClick={() => toggleSection('ifrs')}
                  className='w-full flex items-center justify-between p-4 text-left hover:bg-primary-50 transition-colors'
                >
                  <span className='font-medium text-primary-900'>IFRS Accounting</span>
                  {expandedSection === 'ifrs' ? (
                    <ChevronUp className='h-4 w-4 text-primary-500' />
                  ) : (
                    <ChevronDown className='h-4 w-4 text-primary-500' />
                  )}
                </button>
                {expandedSection === 'ifrs' && (
                  <div className='px-4 pb-4 border-t border-primary-200'>
                    <div className='pt-4 space-y-3'>
                      <p className='text-sm text-primary-700 font-body'>
                        Bitcoin is typically classified as an intangible asset under IAS 38.
                      </p>
                      <ul className='text-sm text-primary-600 font-body space-y-1 ml-4'>
                        <li>• Not considered cash or cash equivalents</li>
                        <li>• Accounted for at cost or revaluation</li>
                        <li>• Impairment testing required</li>
                        <li>• Consult auditors for specific guidance</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Risk Warnings */}
              <div className='border border-primary-200 rounded-lg'>
                <button
                  onClick={() => toggleSection('risks')}
                  className='w-full flex items-center justify-between p-4 text-left hover:bg-primary-50 transition-colors'
                >
                  <span className='font-medium text-primary-900'>Risk Warnings</span>
                  {expandedSection === 'risks' ? (
                    <ChevronUp className='h-4 w-4 text-primary-500' />
                  ) : (
                    <ChevronDown className='h-4 w-4 text-primary-500' />
                  )}
                </button>
                {expandedSection === 'risks' && (
                  <div className='px-4 pb-4 border-t border-primary-200'>
                    <div className='pt-4 space-y-3'>
                      <ul className='text-sm text-primary-600 font-body space-y-2'>
                        <li>• Bitcoin is highly volatile and speculative</li>
                        <li>• Past performance doesn&apos;t guarantee future results</li>
                        <li>• Regulatory changes may affect taxation</li>
                        <li>• Maintain adequate cash reserves for operations</li>
                        <li>• Consider professional advice before investing</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Data Sources */}
              <div className='border border-primary-200 rounded-lg'>
                <button
                  onClick={() => toggleSection('sources')}
                  className='w-full flex items-center justify-between p-4 text-left hover:bg-primary-50 transition-colors'
                >
                  <span className='font-medium text-primary-900'>Data Sources & Price Input</span>
                  {expandedSection === 'sources' ? (
                    <ChevronUp className='h-4 w-4 text-primary-500' />
                  ) : (
                    <ChevronDown className='h-4 w-4 text-primary-500' />
                  )}
                </button>
                {expandedSection === 'sources' && (
                  <div className='px-4 pb-4 border-t border-primary-200'>
                    <div className='pt-4 space-y-3'>
                      <h4 className='font-medium text-primary-900'>Where to Find Bitcoin Prices:</h4>
                      <ul className='text-sm text-primary-600 font-body space-y-2'>
                        <li>• <strong>CoinGecko:</strong> coingecko.com (free historical data)</li>
                        <li>• <strong>CoinMarketCap:</strong> coinmarketcap.com</li>
                        <li>• <strong>Kraken:</strong> kraken.com (AUD trading pairs)</li>
                        <li>• <strong>Binance:</strong> binance.com (convert USD to AUD)</li>
                        <li>• <strong>Exchange rates:</strong> Reserve Bank of Australia</li>
                      </ul>
                      
                      <h4 className='font-medium text-primary-900 mt-4'>Other Data Sources:</h4>
                      <ul className='text-sm text-primary-600 font-body space-y-2'>
                        <li>• Tax rules: Australian Taxation Office</li>
                        <li>• Accounting standards: IFRS Foundation</li>
                        <li>• Asset comparison data: Public market indices</li>
                      </ul>
                      
                      <div className='bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4'>
                        <p className='text-sm text-blue-800 font-medium'>
                          <strong>✓ User Control:</strong> Manual price input ensures accuracy and eliminates API dependencies.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

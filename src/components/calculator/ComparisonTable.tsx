'use client';

import { ASSET_COMPARISON_DATA } from '@/lib/calculator/constants';

interface ComparisonTableProps {
  bitcoinData: {
    cagr: number;
    volatility: number;
    maxDrawdown: number;
  };
  period: '5y' | '10y';
  className?: string;
}

export function ComparisonTable({ bitcoinData, period, className = '' }: ComparisonTableProps) {
  const assets = [
    {
      name: 'Bitcoin',
      cagr: bitcoinData.cagr,
      volatility: bitcoinData.volatility,
      maxDrawdown: bitcoinData.maxDrawdown,
      isBitcoin: true
    },
    {
      name: 'ASX 200',
      cagr: ASSET_COMPARISON_DATA.asx200[`cagr${period}` as keyof typeof ASSET_COMPARISON_DATA.asx200],
      volatility: ASSET_COMPARISON_DATA.asx200.volatility,
      maxDrawdown: ASSET_COMPARISON_DATA.asx200.maxDrawdown,
      isBitcoin: false
    },
    {
      name: 'Gold',
      cagr: ASSET_COMPARISON_DATA.gold[`cagr${period}` as keyof typeof ASSET_COMPARISON_DATA.gold],
      volatility: ASSET_COMPARISON_DATA.gold.volatility,
      maxDrawdown: ASSET_COMPARISON_DATA.gold.maxDrawdown,
      isBitcoin: false
    },
    {
      name: 'AUD Bonds',
      cagr: ASSET_COMPARISON_DATA.bonds[`cagr${period}` as keyof typeof ASSET_COMPARISON_DATA.bonds],
      volatility: ASSET_COMPARISON_DATA.bonds.volatility,
      maxDrawdown: ASSET_COMPARISON_DATA.bonds.maxDrawdown,
      isBitcoin: false
    }
  ];

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <div className={`bg-white border border-primary-200 rounded-lg overflow-hidden ${className}`}>
      <div className='px-6 py-4 border-b border-primary-200 bg-primary-50'>
        <h3 className=' font-semibold text-primary-900 font-display'>
          Asset Comparison ({period === '5y' ? '5-Year' : '10-Year'} Performance)
        </h3>
        <p className='text-sm text-primary-600 font-body mt-1'>
          Compare Bitcoin performance against traditional assets
        </p>
      </div>
      
      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead className='bg-primary-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider'>
                Asset
              </th>
              <th className='px-6 py-3 text-right text-xs font-medium text-primary-500 uppercase tracking-wider'>
                CAGR
              </th>
              <th className='px-6 py-3 text-right text-xs font-medium text-primary-500 uppercase tracking-wider'>
                Volatility
              </th>
              <th className='px-6 py-3 text-right text-xs font-medium text-primary-500 uppercase tracking-wider'>
                Max Drawdown
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-primary-200'>
            {assets.map((asset) => (
              <tr 
                key={asset.name}
                className={`${
                  asset.isBitcoin 
                    ? 'bg-accent-50 border-l-4 border-accent-500' 
                    : 'hover:bg-primary-50'
                } transition-colors`}
              >
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      asset.isBitcoin ? 'bg-accent-500' : 'bg-primary-300'
                    }`} />
                    <span className={`text-sm font-medium ${
                      asset.isBitcoin ? 'text-accent-700' : 'text-primary-900'
                    }`}>
                      {asset.name}
                    </span>
                    {asset.isBitcoin && (
                      <span className='ml-2 px-2 py-1 text-xs font-medium bg-accent-100 text-accent-700 rounded-full'>
                        Your Investment
                      </span>
                    )}
                  </div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                  <span className={`${
                    asset.isBitcoin ? 'text-accent-700' : 'text-primary-900'
                  }`}>
                    {formatPercentage(asset.cagr)}
                  </span>
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-right text-sm text-primary-700'>
                  {formatPercentage(asset.volatility)}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-right text-sm text-primary-700'>
                  {formatPercentage(asset.maxDrawdown)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className='px-6 py-4 bg-primary-50 border-t border-primary-200'>
        <div className='text-xs text-primary-600 font-body'>
          <p className='mb-2'>
            <strong>Note:</strong> Past performance does not guarantee future results. 
            Bitcoin is highly volatile and speculative.
          </p>
          <p>
            <strong>Data Sources:</strong> ASX 200 (S&P/ASX 200 Index), Gold (LBMA Gold Price), 
            AUD Bonds (Bloomberg AusBond Composite Index)
          </p>
        </div>
      </div>
    </div>
  );
}

// Sensitivity table for future projections
interface SensitivityTableProps {
  data: Array<{
    cagr: number;
    value: number;
  }>;
  baseCAGR: number;
  className?: string;
}

export function SensitivityTable({ data, baseCAGR, className = '' }: SensitivityTableProps) {
  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`;
    } else {
      return `$${value.toFixed(0)}`;
    }
  };

  return (
    <div className={`bg-white border border-primary-200 rounded-lg overflow-hidden ${className}`}>
      <div className='px-6 py-4 border-b border-primary-200 bg-primary-50'>
        <h3 className=' font-semibold text-primary-900 font-display'>
          Sensitivity Analysis
        </h3>
        <p className='text-sm text-primary-600 font-body mt-1'>
          How changes in expected CAGR affect projected value
        </p>
      </div>
      
      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead className='bg-primary-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider'>
                Expected CAGR
              </th>
              <th className='px-6 py-3 text-right text-xs font-medium text-primary-500 uppercase tracking-wider'>
                Projected Value
              </th>
              <th className='px-6 py-3 text-center text-xs font-medium text-primary-500 uppercase tracking-wider'>
                vs Base Case
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-primary-200'>
            {data.map((row, index) => {
              const isBaseCase = row.cagr === baseCAGR;
              const baseValue = data.find(d => d.cagr === baseCAGR)?.value || 0;
              const difference = row.value - baseValue;
              const differencePercent = baseValue > 0 ? (difference / baseValue) * 100 : 0;
              
              return (
                <tr 
                  key={index}
                  className={`${
                    isBaseCase 
                      ? 'bg-accent-50 border-l-4 border-accent-500' 
                      : 'hover:bg-primary-50'
                  } transition-colors`}
                >
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='flex items-center'>
                      <span className={`text-sm font-medium ${
                        isBaseCase ? 'text-accent-700' : 'text-primary-900'
                      }`}>
                        {row.cagr.toFixed(1)}%
                      </span>
                      {isBaseCase && (
                        <span className='ml-2 px-2 py-1 text-xs font-medium bg-accent-100 text-accent-700 rounded-full'>
                          Base Case
                        </span>
                      )}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                    <span className={`${
                      isBaseCase ? 'text-accent-700' : 'text-primary-900'
                    }`}>
                      {formatCurrency(row.value)}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-center text-sm'>
                    {!isBaseCase && (
                      <span className={`${
                        difference >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {difference >= 0 ? '+' : ''}{formatCurrency(difference)}
                        <br />
                        <span className='text-xs'>
                          ({differencePercent >= 0 ? '+' : ''}{differencePercent.toFixed(1)}%)
                        </span>
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

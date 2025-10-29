'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CHART_COLORS } from '@/lib/calculator/constants';

interface PriceChartProps {
  data: Array<{
    date: Date;
    price: number;
    value?: number;
  }>;
  showInvestmentValue?: boolean;
  className?: string;
}

export function PriceChart({ data, showInvestmentValue = false, className = '' }: PriceChartProps) {
  // Format data for Recharts
  const chartData = data.map(point => ({
    date: point.date.toISOString().split('T')[0],
    price: point.price,
    value: point.value || 0,
    displayDate: new Intl.DateTimeFormat('en-AU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(point.date)
  }));

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: { 
    active?: boolean; 
    payload?: Array<{payload: {date: string; price: number; value: number; displayDate: string}}> 
  }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className='bg-white p-3 border border-primary-200 rounded-lg shadow-lg'>
          <p className='text-sm font-medium text-primary-900 mb-1'>
            {data.displayDate}
          </p>
          <div className='space-y-1'>
            <p className='text-sm text-primary-700'>
              <span className='font-medium'>Bitcoin Price:</span> ${data.price.toLocaleString('en-AU', { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 
              })}
            </p>
            {showInvestmentValue && data.value > 0 && (
              <p className='text-sm text-primary-700'>
                <span className='font-medium'>Investment Value:</span> ${data.value.toLocaleString('en-AU', { 
                  minimumFractionDigits: 2, 
                  maximumFractionDigits: 2 
                })}
              </p>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  // Format Y-axis values
  const formatYAxis = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`;
    } else {
      return `$${value.toFixed(0)}`;
    }
  };

  // Format X-axis values
  const formatXAxis = (value: string) => {
    const date = new Date(value);
    return new Intl.DateTimeFormat('en-AU', {
      day: '2-digit',
      month: '2-digit'
    }).format(date);
  };

  if (chartData.length === 0) {
    return (
      <div className={`flex items-center justify-center h-64 bg-primary-50 rounded-lg ${className}`}>
        <p className='text-primary-500 font-body'>No data available for the selected period</p>
      </div>
    );
  }

  return (
    <div className={`w-full h-64 ${className}`}>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray='3 3' stroke={CHART_COLORS.grid} />
          <XAxis 
            dataKey='date' 
            tickFormatter={formatXAxis}
            stroke={CHART_COLORS.text}
            fontSize={12}
          />
          <YAxis 
            tickFormatter={formatYAxis}
            stroke={CHART_COLORS.text}
            fontSize={12}
          />
          <Tooltip content={<CustomTooltip />} />
          
          {/* Bitcoin Price Line */}
          <Line
            type='monotone'
            dataKey='price'
            stroke={CHART_COLORS.bitcoin}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: CHART_COLORS.bitcoin }}
          />
          
          {/* Investment Value Line (if enabled) */}
          {showInvestmentValue && (
            <Line
              type='monotone'
              dataKey='value'
              stroke={CHART_COLORS.investment}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: CHART_COLORS.investment }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// Scenario comparison chart for future projections
interface ScenarioChartProps {
  data: Array<{
    year: number;
    conservative: number;
    base: number;
    aggressive: number;
  }>;
  className?: string;
}

export function ScenarioChart({ data, className = '' }: ScenarioChartProps) {
  const CustomTooltip = ({ active, payload, label }: { 
    active?: boolean; 
    payload?: Array<{dataKey: string; value: number; color: string}>;
    label?: string;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className='bg-white p-3 border border-primary-200 rounded-lg shadow-lg'>
          <p className='text-sm font-medium text-primary-900 mb-2'>
            Year {label}
          </p>
          <div className='space-y-1'>
            {payload.map((entry: {dataKey: string; value: number; color: string}, index: number) => (
              <p key={index} className='text-sm' style={{ color: entry.color }}>
                <span className='font-medium'>{entry.dataKey}:</span> ${entry.value.toLocaleString('en-AU', { 
                  minimumFractionDigits: 0, 
                  maximumFractionDigits: 0 
                })}
              </p>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  const formatYAxis = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`;
    } else {
      return `$${value.toFixed(0)}`;
    }
  };

  return (
    <div className={`w-full h-64 ${className}`}>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray='3 3' stroke={CHART_COLORS.grid} />
          <XAxis 
            dataKey='year' 
            stroke={CHART_COLORS.text}
            fontSize={12}
          />
          <YAxis 
            tickFormatter={formatYAxis}
            stroke={CHART_COLORS.text}
            fontSize={12}
          />
          <Tooltip content={<CustomTooltip />} />
          
          <Line
            type='monotone'
            dataKey='conservative'
            stroke={CHART_COLORS.conservative}
            strokeWidth={2}
            dot={false}
            name='Conservative (30%)'
          />
          <Line
            type='monotone'
            dataKey='base'
            stroke={CHART_COLORS.base}
            strokeWidth={2}
            dot={false}
            name='Base (50%)'
          />
          <Line
            type='monotone'
            dataKey='aggressive'
            stroke={CHART_COLORS.aggressive}
            strokeWidth={2}
            dot={false}
            name='Aggressive (70%)'
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

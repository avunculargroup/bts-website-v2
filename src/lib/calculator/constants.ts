export const DEFAULT_CAGR_SCENARIOS = [
  { label: 'Conservative (30% CAGR)', value: 0.30, color: '#f97316' }, // accent-500
  { label: 'Base (50% CAGR)', value: 0.50, color: '#10b981' }, // green-500
  { label: 'Aggressive (70% CAGR)', value: 0.70, color: '#ef4444' }, // red-500
];

export const ASSET_COMPARISON_DATA = {
  asx200: { 
    cagr5y: 8.2, 
    cagr10y: 9.1, 
    volatility: 12.5,
    maxDrawdown: 35.2
  },
  gold: { 
    cagr5y: 11.3, 
    cagr10y: 7.8, 
    volatility: 15.2,
    maxDrawdown: 28.4
  },
  bonds: { 
    cagr5y: 3.5, 
    cagr10y: 4.1, 
    volatility: 5.8,
    maxDrawdown: 12.1
  }
} as const;

export const CGT_DISCOUNT_THRESHOLD_MONTHS = 12;
export const CGT_DISCOUNT_RATE = 0.5;

export const AUSTRALIAN_CORPORATE_TAX_RATES = {
  smallBusiness: 25, // Companies with turnover < $50M
  standard: 30, // Standard corporate tax rate
  large: 30 // Companies with turnover > $50M
} as const;

export const CALCULATOR_DEFAULTS = {
  defaultYears: 5,
  minYears: 0.1,
  maxYears: 50,
  minCAGR: -100,
  maxCAGR: 1000,
  defaultCorporateTaxRate: 30
} as const;

export const DISCLAIMERS = {
  general: 'This tool provides general information only and does not constitute financial, tax, or accounting advice.',
  professional: 'You should consult with qualified professional advisers before making any financial decisions.',
  tax: 'Tax calculations are based on current Australian Taxation Office rules and may change.',
  ifrs: 'IFRS accounting guidance is subject to change and should be verified with auditors.',
  volatility: 'Past performance does not guarantee future results. Bitcoin is highly volatile.',
  data: 'Price data is sourced from third-party APIs and may not be real-time or accurate.'
} as const;

export const HELP_CONTENT = {
  cagrFormula: 'CAGR = ((Ending Value / Beginning Value)^(1/n)) - 1, where n is the number of years',
  cgtRules: 'Australian CGT applies to Bitcoin disposals. 50% discount available for holdings >12 months.',
  ifrsGuidance: 'Bitcoin is typically classified as an intangible asset under IAS 38, not cash equivalents.',
  recordKeeping: 'Maintain records of all Bitcoin transactions in AUD using RBA exchange rates.',
  volatility: 'Volatility measures price fluctuations. Higher volatility means greater price swings.',
  drawdown: 'Maximum drawdown is the largest peak-to-trough decline during the period.'
} as const;

export const API_ENDPOINTS = {
  kraken: 'https://api.kraken.com/0/public/Ticker?pair=XBTAUD',
  coingecko: 'https://api.coingecko.com/api/v3/coins/bitcoin/history',
  rba: 'https://www.rba.gov.au/statistics/frequency/exchange-rates.html'
} as const;

export const CHART_COLORS = {
  bitcoin: '#f97316', // Orange
  investment: '#1e40af', // Blue
  conservative: '#10b981', // Green
  base: '#f59e0b', // Amber
  aggressive: '#ef4444', // Red
  grid: '#e5e7eb', // Light gray
  text: '#374151' // Dark gray
} as const;

export const RESPONSIVE_BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280
} as const;

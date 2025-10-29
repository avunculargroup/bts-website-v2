export interface CAGRInput {
  startDate: Date;
  endDate: Date;
  initialInvestment: number; // AUD
  initialBTC?: number;
  startBitcoinPrice: number; // AUD - user provided
  endBitcoinPrice: number; // AUD - user provided
}

export interface CAGRResult {
  cagr: number; // percentage
  totalReturn: number; // AUD
  years: number;
  initialValue: number;
  endingValue: number;
  volatility: number;
  maxDrawdown: number;
  priceData: Array<{date: Date; price: number; value: number}>;
}

/**
 * Calculate CAGR using user-provided Bitcoin prices
 */
export function calculateCAGR(input: CAGRInput): CAGRResult {
  const { startDate, endDate, initialInvestment, initialBTC, startBitcoinPrice, endBitcoinPrice } = input;

  // Validate inputs
  if (startBitcoinPrice <= 0 || endBitcoinPrice <= 0) {
    throw new Error('Bitcoin prices must be positive.');
  }
  if (startDate >= endDate) {
    throw new Error('Start date must be before end date.');
  }
  if (initialInvestment <= 0 && (!initialBTC || initialBTC <= 0)) {
    throw new Error('Initial investment or BTC amount must be positive.');
  }

  // Calculate time period
  const timeDiff = endDate.getTime() - startDate.getTime();
  const years = timeDiff / (1000 * 60 * 60 * 24 * 365.25); // Account for leap years

  if (years <= 0) {
    throw new Error('Time period must be greater than zero.');
  }

  // Determine initial and ending values
  let initialValue: number;
  let endingValue: number;
  let btcAmount: number;

  if (initialBTC && initialBTC > 0) {
    // User provided BTC amount
    btcAmount = initialBTC;
    initialValue = btcAmount * startBitcoinPrice;
    endingValue = btcAmount * endBitcoinPrice;
  } else {
    // User provided AUD investment
    btcAmount = initialInvestment / startBitcoinPrice;
    initialValue = initialInvestment;
    endingValue = btcAmount * endBitcoinPrice;
  }

  // Calculate CAGR
  const cagr = ((endingValue / initialValue) ** (1 / years)) - 1;
  const totalReturn = endingValue - initialValue;

  // Generate price data for chart (simplified linear interpolation)
  const priceData = generatePriceData(startDate, endDate, startBitcoinPrice, endBitcoinPrice, btcAmount);

  // Calculate volatility and max drawdown (simplified)
  const prices = priceData.map(p => p.price);
  const volatility = calculateVolatility(prices);
  const maxDrawdown = calculateMaxDrawdown(prices);

  return {
    cagr: cagr * 100, // Convert to percentage
    totalReturn,
    years,
    initialValue,
    endingValue,
    volatility: volatility * 100, // Convert to percentage
    maxDrawdown: maxDrawdown * 100, // Convert to percentage
    priceData
  };
}

/**
 * Generate simplified price data for charting
 */
function generatePriceData(startDate: Date, endDate: Date, startPrice: number, endPrice: number, btcAmount: number) {
  const data = [];
  const daysDiff = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const priceChange = endPrice - startPrice;
  
  // Generate monthly data points
  const monthsDiff = Math.ceil(daysDiff / 30);
  const monthlyPriceChange = priceChange / monthsDiff;
  
  for (let i = 0; i <= monthsDiff; i++) {
    const date = new Date(startDate);
    date.setMonth(date.getMonth() + i);
    
    const price = startPrice + (monthlyPriceChange * i);
    const value = btcAmount * price;
    
    data.push({ date, price, value });
  }
  
  return data;
}

/**
 * Calculate annualized volatility (simplified)
 */
function calculateVolatility(prices: number[]): number {
  if (prices.length < 2) return 0;
  
  const returns = [];
  for (let i = 1; i < prices.length; i++) {
    returns.push((prices[i] - prices[i-1]) / prices[i-1]);
  }
  
  const mean = returns.reduce((sum, r) => sum + r, 0) / returns.length;
  const variance = returns.reduce((sum, r) => sum + Math.pow(r - mean, 2), 0) / returns.length;
  
  return Math.sqrt(variance) * Math.sqrt(12); // Annualized (monthly data)
}

/**
 * Calculate maximum drawdown (simplified)
 */
function calculateMaxDrawdown(prices: number[]): number {
  if (prices.length < 2) return 0;
  
  let maxPrice = prices[0];
  let maxDrawdown = 0;
  
  for (const price of prices) {
    if (price > maxPrice) {
      maxPrice = price;
    }
    const drawdown = (maxPrice - price) / maxPrice;
    if (drawdown > maxDrawdown) {
      maxDrawdown = drawdown;
    }
  }
  
  return maxDrawdown;
}

/**
 * Calculate simple CAGR for given values and time period
 */
export function calculateSimpleCAGR(initialValue: number, finalValue: number, years: number): number {
  if (years <= 0 || initialValue <= 0) {
    throw new Error('Invalid input values for CAGR calculation');
  }
  
  return (Math.pow(finalValue / initialValue, 1 / years) - 1) * 100;
}

/**
 * Calculate future value using CAGR
 */
export function calculateFutureValue(currentValue: number, cagr: number, years: number): number {
  const cagrDecimal = cagr / 100; // Convert percentage to decimal
  return currentValue * Math.pow(1 + cagrDecimal, years);
}

/**
 * Calculate present value using CAGR
 */
export function calculatePresentValue(futureValue: number, cagr: number, years: number): number {
  const cagrDecimal = cagr / 100; // Convert percentage to decimal
  return futureValue / Math.pow(1 + cagrDecimal, years);
}
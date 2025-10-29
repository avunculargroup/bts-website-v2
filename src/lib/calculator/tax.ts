export interface TaxScenario {
  purchaseDate: Date;
  saleDate: Date;
  costBase: number; // AUD
  proceeds: number; // AUD
  corporateTaxRate: number; // percentage (e.g., 30 for 30%)
}

export interface TaxResult {
  capitalGain: number;
  cgtDiscount: number; // 0 or 0.5
  taxableGain: number;
  taxPayable: number;
  afterTaxProceeds: number;
  afterTaxCAGR: number;
  holdingPeriodMonths: number;
}

/**
 * Calculate Australian Capital Gains Tax for Bitcoin disposal
 * Based on ATO rules as of 2025
 */
export function calculateCGT(scenario: TaxScenario): TaxResult {
  const { purchaseDate, saleDate, costBase, proceeds, corporateTaxRate } = scenario;
  
  // Calculate holding period in months
  const timeDiffMs = saleDate.getTime() - purchaseDate.getTime();
  const holdingPeriodMonths = Math.floor(timeDiffMs / (1000 * 60 * 60 * 24 * 30.44)); // Average month length
  
  // Calculate capital gain
  const capitalGain = proceeds - costBase;
  
  // Determine CGT discount eligibility (>12 months)
  const cgtDiscount = holdingPeriodMonths >= 12 ? 0.5 : 0;
  
  // Calculate taxable gain (after CGT discount)
  const taxableGain = capitalGain * (1 - cgtDiscount);
  
  // Calculate tax payable
  const taxPayable = taxableGain * (corporateTaxRate / 100);
  
  // Calculate after-tax proceeds
  const afterTaxProceeds = proceeds - taxPayable;
  
  // Calculate after-tax CAGR
  const years = timeDiffMs / (1000 * 60 * 60 * 24 * 365.25);
  const afterTaxCAGR = years > 0 ? (Math.pow(afterTaxProceeds / costBase, 1 / years) - 1) * 100 : 0;
  
  return {
    capitalGain,
    cgtDiscount,
    taxableGain,
    taxPayable,
    afterTaxProceeds,
    afterTaxCAGR,
    holdingPeriodMonths
  };
}

/**
 * Calculate multiple tax scenarios for comparison
 */
export function calculateMultipleTaxScenarios(
  scenarios: TaxScenario[]
): TaxResult[] {
  return scenarios.map(scenario => calculateCGT(scenario));
}

/**
 * Calculate tax impact on CAGR
 */
export function calculateTaxImpactOnCAGR(
  beforeTaxCAGR: number,
  taxScenario: TaxScenario
): { beforeTaxCAGR: number; afterTaxCAGR: number; taxImpact: number } {
  const taxResult = calculateCGT(taxScenario);
  
  return {
    beforeTaxCAGR,
    afterTaxCAGR: taxResult.afterTaxCAGR,
    taxImpact: beforeTaxCAGR - taxResult.afterTaxCAGR
  };
}

/**
 * Get CGT discount eligibility message
 */
export function getCGTDiscountMessage(holdingPeriodMonths: number): string {
  if (holdingPeriodMonths >= 12) {
    return `Eligible for 50% CGT discount (held for ${holdingPeriodMonths} months)`;
  } else {
    const monthsToEligibility = 12 - holdingPeriodMonths;
    return `Not eligible for CGT discount. Need ${monthsToEligibility} more months for 50% discount.`;
  }
}

/**
 * Calculate effective tax rate including CGT discount
 */
export function calculateEffectiveTaxRate(
  corporateTaxRate: number,
  holdingPeriodMonths: number
): number {
  const cgtDiscount = holdingPeriodMonths >= 12 ? 0.5 : 0;
  return corporateTaxRate * (1 - cgtDiscount);
}

/**
 * Validate tax scenario inputs
 */
export function validateTaxScenario(scenario: TaxScenario): string[] {
  const errors: string[] = [];
  
  if (scenario.saleDate <= scenario.purchaseDate) {
    errors.push('Sale date must be after purchase date');
  }
  
  if (scenario.costBase <= 0) {
    errors.push('Cost base must be greater than zero');
  }
  
  if (scenario.proceeds <= 0) {
    errors.push('Proceeds must be greater than zero');
  }
  
  if (scenario.corporateTaxRate < 0 || scenario.corporateTaxRate > 100) {
    errors.push('Corporate tax rate must be between 0% and 100%');
  }
  
  return errors;
}

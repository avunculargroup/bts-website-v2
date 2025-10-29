export interface ProjectionInput {
  currentValue: number; // AUD
  expectedCagr: number; // decimal (e.g., 0.50 for 50%)
  projectionHorizonYears: number;
}

export interface ProjectionResult {
  futureValue: number; // AUD
  scenarios: Array<{
    year: number;
    value: number;
  }>;
}

/**
 * Calculate future value projection using CAGR
 */
export function calculateProjection(input: ProjectionInput): ProjectionResult {
  const { currentValue, expectedCagr, projectionHorizonYears } = input;
  
  // Calculate future value with expected CAGR
  const futureValue = currentValue * Math.pow(1 + expectedCagr, projectionHorizonYears);
  
  // Generate year-by-year scenarios
  const scenarios = [];
  for (let year = 0; year <= projectionHorizonYears; year++) {
    scenarios.push({
      year,
      value: currentValue * Math.pow(1 + expectedCagr, year)
    });
  }
  
  return {
    futureValue,
    scenarios
  };
}

/**
 * Add tax scenario to projection result
 */
export function addTaxScenarioToProjection(
  projectionResult: ProjectionResult,
  initialCostBase: number, // The initial AUD cost of the investment
  taxScenario: {
    corporateTaxRate: number; // e.g., 0.30 for 30%
    holdingsPeriodMonths: number; // derived from start and end dates
  }
) {
  const finalProjectedValue = projectionResult.futureValue;
  const capitalGain = finalProjectedValue - initialCostBase;
  
  // Calculate CGT with discount
  let taxableGain = capitalGain;
  let cgtDiscountApplied = false;
  
  if (capitalGain > 0 && taxScenario.holdingsPeriodMonths > 12) {
    // Apply 50% CGT discount for assets held over 12 months
    taxableGain = capitalGain * 0.5;
    cgtDiscountApplied = true;
  }
  
  const taxAmount = taxableGain * taxScenario.corporateTaxRate;
  const afterTaxValue = finalProjectedValue - taxAmount;
  
  return {
    ...projectionResult,
    futureValueAfterTax: afterTaxValue,
    taxDetails: {
      capitalGain,
      cgtDiscountApplied,
      taxableGain,
      taxAmount,
      afterTaxValue
    }
  };
}

/**
 * Calculate future value using CAGR formula
 */
export function calculateFutureValue(currentValue: number, cagr: number, years: number): number {
  const cagrDecimal = cagr / 100; // Convert percentage to decimal
  return currentValue * Math.pow(1 + cagrDecimal, years);
}

/**
 * Calculate required CAGR to reach target value
 */
export function calculateRequiredCAGR(
  currentValue: number,
  targetValue: number,
  years: number
): number {
  if (years <= 0 || currentValue <= 0) {
    throw new Error('Invalid input values for CAGR calculation');
  }
  
  return (Math.pow(targetValue / currentValue, 1 / years) - 1) * 100;
}

/**
 * Calculate time to reach target value with given CAGR
 */
export function calculateTimeToTarget(
  currentValue: number,
  targetValue: number,
  cagr: number
): number {
  if (cagr <= 0 || currentValue <= 0) {
    throw new Error('Invalid input values for time calculation');
  }
  
  const cagrDecimal = cagr / 100;
  return Math.log(targetValue / currentValue) / Math.log(1 + cagrDecimal);
}

/**
 * Validate projection inputs
 */
export function validateProjectionInput(input: ProjectionInput): string[] {
  const errors: string[] = [];
  
  if (input.currentValue <= 0) {
    errors.push('Current value must be greater than zero');
  }
  
  if (input.expectedCagr < -1) {
    errors.push('Expected CAGR cannot be less than -100%');
  }
  
  if (input.projectionHorizonYears <= 0) {
    errors.push('Projection period must be greater than zero years');
  }
  
  if (input.projectionHorizonYears > 50) {
    errors.push('Projection period cannot exceed 50 years');
  }
  
  return errors;
}
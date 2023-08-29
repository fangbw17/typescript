import * as Loans from './loans'

/**
 * 利息贷款
 * @param principle 贷款本金
 * @param interestRate 贷款年利率 %5=5
 */
export function calculateInterestOnlyLoanPayment(loanTerms: Loans.Loan): string {
  let payment: number
  payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate)
  return 'The interest only loan payment is ' + payment.toFixed(2)
}

/**
 * 常规贷款
 * @param principle 贷款本金
 * @param interestRate 贷款年利率 %5=5
 * @param months 贷款期限（以月为单位）
 */
export function calculateConventionalLoanPayment(loanTerms: Loans.ConventionalLoan): string {
  let interest: number = calculateInterestRate(loanTerms.interestRate)
  let payment: number
  payment = loanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)))
  return 'The conventional loan payment is ' + payment.toFixed(2)
}

// 贷款每月利率
function calculateInterestRate(interestRate: number) {
  let interest: number = interestRate / 1200;
  return interest
}
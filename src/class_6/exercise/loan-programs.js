"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateConventionalLoanPayment = exports.calculateInterestOnlyLoanPayment = void 0;
/**
 * 利息贷款
 * @param principle 贷款本金
 * @param interestRate 贷款年利率 %5=5
 */
function calculateInterestOnlyLoanPayment(loanTerms) {
    var payment;
    payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
exports.calculateInterestOnlyLoanPayment = calculateInterestOnlyLoanPayment;
/**
 * 常规贷款
 * @param principle 贷款本金
 * @param interestRate 贷款年利率 %5=5
 * @param months 贷款期限（以月为单位）
 */
function calculateConventionalLoanPayment(loanTerms) {
    var interest = calculateInterestRate(loanTerms.interestRate);
    var payment;
    payment = loanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
exports.calculateConventionalLoanPayment = calculateConventionalLoanPayment;
// 贷款每月利率
function calculateInterestRate(interestRate) {
    var interest = interestRate / 1200;
    return interest;
}

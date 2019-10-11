export interface FixedIncome {
  initialSubscriptionValue: number;
  totalAvailableBalance: number;
  totalInterestEarned: number;
  lastSubscriptionValue: number;
  lastSubscriptionDate: string;
  lastWithdrawalValue: number;
  lastWithdrawalDate: string;
  ledgerBalance: number;
}

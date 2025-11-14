
export interface LeaseData {
  rentAmount: number | null;
  rentCurrency: string;
  securityDeposit: number | null;
  leaseStartDate: string;
  leaseEndDate: string;
  noticePeriodDays: number | null;
  lateFee: string;
  terminationRules: string[];
}

// Fiscal Year data for Settings module

export interface FiscalYearItem {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
}

const fiscalYearsData: FiscalYearItem[] = [
  { id: '1', name: '2025', startDate: '01/01/2025', endDate: '31/12/2025' },
  { id: '2', name: '2026', startDate: '01/01/2026', endDate: '31/12/2026' },
  { id: '3', name: '2027', startDate: '01/01/2027', endDate: '31/12/2027' },
];

export const getFiscalYearsSampleData = (): FiscalYearItem[] => [...fiscalYearsData];

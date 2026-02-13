// Currencies data for Settings module

export interface Currency {
  id: string;
  baseCurrency: string;
  targetCurrency: string;
  exchangeRate: number;
  date: string;
  isActive: boolean;
}

const currenciesData: Currency[] = [
  { id: '1', baseCurrency: 'USD', targetCurrency: 'SAR', exchangeRate: 3.75, date: '2026-07-03', isActive: true },
  { id: '2', baseCurrency: 'EUR', targetCurrency: 'SAR', exchangeRate: 4.4, date: '2026-07-10', isActive: true },
  { id: '3', baseCurrency: 'GBP', targetCurrency: 'SAR', exchangeRate: 4.7, date: '2026-07-17', isActive: false },
];

export const getCurrenciesSampleData = (): Currency[] => [...currenciesData];

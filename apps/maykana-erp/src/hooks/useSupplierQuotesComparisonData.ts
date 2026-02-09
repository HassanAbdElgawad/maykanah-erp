import { useState } from 'react';
import {
  SupplierQuoteComparison,
  supplierQuotesComparisonData,
} from '../data/supplier-quotes-comparison.data';

export const useSupplierQuotesComparisonData = () => {
  const [quotesComparison, setQuotesComparison] = useState<SupplierQuoteComparison[]>(
    supplierQuotesComparisonData
  );

  return { quotesComparison, setQuotesComparison };
};

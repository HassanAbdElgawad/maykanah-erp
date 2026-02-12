import { useState } from 'react';
import { priceQuotesData, type PriceQuote } from '@/data/purchases/price-quotes.data';

export const usePriceQuotesData = () => {
  const [priceQuotes, setPriceQuotes] = useState<PriceQuote[]>(priceQuotesData);

  return {
    priceQuotes,
    setPriceQuotes,
  };
};

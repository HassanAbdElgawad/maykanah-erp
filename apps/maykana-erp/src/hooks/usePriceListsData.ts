import { useState } from 'react';
import { priceListsData, type PriceList } from '../data/price-lists.data';

export const usePriceListsData = () => {
  const [priceLists, setPriceLists] = useState<PriceList[]>(priceListsData);

  return {
    priceLists,
    setPriceLists,
  };
};

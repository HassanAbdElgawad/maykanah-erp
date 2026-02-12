import { useState } from 'react';
import {
  PurchasePriceByCategory,
  purchasePricesByCategoryData,
} from '@/data/reports/purchases/purchase-prices-by-category.data';

export const usePurchasePricesByCategoryData = () => {
  const [purchasePrices, setPurchasePrices] = useState<PurchasePriceByCategory[]>(
    purchasePricesByCategoryData
  );

  return { purchasePrices, setPurchasePrices };
};

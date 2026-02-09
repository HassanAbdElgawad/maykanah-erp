import { useState } from 'react';
import {
  PurchasePriceByItem,
  purchasesPricesByItemData,
} from '../data/purchases-prices-by-item.data';

export const usePurchasesPricesByItemData = () => {
  const [purchasesPricesByItem, setPurchasesPricesByItem] =
    useState<PurchasePriceByItem[]>(purchasesPricesByItemData);

  return { purchasesPricesByItem, setPurchasesPricesByItem };
};

import { useState } from 'react';
import {
  ItemsRequiredOrderReceipt,
  itemsRequiredOrderReceiptData,
} from '../data/items-required-order-receipt.data';

export const useItemsRequiredOrderReceiptData = () => {
  const [itemsRequired, setItemsRequired] = useState<ItemsRequiredOrderReceipt[]>(
    itemsRequiredOrderReceiptData
  );

  return { itemsRequired, setItemsRequired };
};

// useInventoryCountData Hook - Manages inventory count data state
import { useState } from 'react';
import { SAMPLE_INVENTORY_COUNT, type InventoryCountItem } from '../data/inventory-count.data';

export const useInventoryCountData = () => {
  const [inventoryCountItems, setInventoryCountItems] = useState<InventoryCountItem[]>(SAMPLE_INVENTORY_COUNT);

  return {
    inventoryCountItems,
    setInventoryCountItems,
  };
};

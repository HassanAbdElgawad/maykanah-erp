// useInventoryMaterialsData Hook - Manages inventory materials state
import { useState } from 'react';
import { SAMPLE_MATERIALS, type InventoryMaterial } from '@/data/warehouses/inventory-materials.data';

export const useInventoryMaterialsData = () => {
  const [materials, setMaterials] = useState<InventoryMaterial[]>(SAMPLE_MATERIALS);

  return {
    materials,
    setMaterials,
  };
};

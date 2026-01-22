import { useState } from 'react';
import { MOCK_SUPPLIERS, type Supplier } from '../data/suppliers.data';

/**
 * Custom Hook for managing suppliers data
 * 
 * @returns {Object} Object containing suppliers data and state setter
 */
export const useSuppliersData = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>(MOCK_SUPPLIERS);

  return {
    suppliers,
    setSuppliers,
  };
};

// useVendorQualificationData Hook - Manages vendor qualification data state
import { useState } from 'react';
import { MOCK_VENDORS, type Vendor } from '../data/vendor-qualification.data';

export const useVendorQualificationData = () => {
  const [vendors, setVendors] = useState<Vendor[]>(MOCK_VENDORS);

  return {
    vendors,
    setVendors,
  };
};

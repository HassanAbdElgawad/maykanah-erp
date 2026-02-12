import { useState } from 'react';
import { salesRepresentativesData, type SalesRepresentative } from '@/data/sales/sales-representatives.data';

export const useSalesRepresentativesData = () => {
  const [representatives, setRepresentatives] = useState<SalesRepresentative[]>(salesRepresentativesData);

  return { representatives, setRepresentatives };
};

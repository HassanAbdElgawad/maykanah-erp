import { useState } from 'react';
import { taxTemplatesData, type TaxTemplate } from '../data/tax-templates.data';

/**
 * Custom Hook for managing Tax Templates data
 */
export const useTaxTemplatesData = () => {
  const [taxTemplates, setTaxTemplates] = useState<TaxTemplate[]>(taxTemplatesData);

  return {
    taxTemplates,
    setTaxTemplates,
  };
};

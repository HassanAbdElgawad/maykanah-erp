import { useState } from 'react';
import {
  termsConditionsTemplatesData,
  type TermsConditionsTemplate,
} from '../data/terms-conditions-templates.data';

/**
 * Custom Hook for managing Terms and Conditions Templates data
 */
export const useTermsConditionsTemplatesData = () => {
  const [templates, setTemplates] = useState<TermsConditionsTemplate[]>(
    termsConditionsTemplatesData
  );

  return {
    templates,
    setTemplates,
  };
};

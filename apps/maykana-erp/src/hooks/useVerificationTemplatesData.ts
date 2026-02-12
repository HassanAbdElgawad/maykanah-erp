// useVerificationTemplatesData Hook - Manages verification templates state
import { useState } from 'react';
import { SAMPLE_TEMPLATES, type VerificationTemplate } from '@/data/templates/verification-templates.data';

export const useVerificationTemplatesData = () => {
  const [templates, setTemplates] = useState<VerificationTemplate[]>(SAMPLE_TEMPLATES);

  return {
    templates,
    setTemplates,
  };
};

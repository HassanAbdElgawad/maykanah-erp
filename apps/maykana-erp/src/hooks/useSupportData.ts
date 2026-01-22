// useSupportData Hook - Provides support page data
import { SUPPORT_CONTACT_METHODS, SUPPORT_WORKING_HOURS, SUPPORT_QUICK_LINKS } from '../data/support.data';

export const useSupportData = () => {
  return {
    contactMethods: SUPPORT_CONTACT_METHODS,
    workingHours: SUPPORT_WORKING_HOURS,
    quickLinks: SUPPORT_QUICK_LINKS,
  };
};

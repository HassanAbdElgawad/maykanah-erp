// useMyRequestsData Hook - Manages HR requests state
import { useState } from 'react';
import { SAMPLE_HR_REQUESTS, type HRRequest } from '@/data/hr/my-requests.data';

export const useMyRequestsData = () => {
  const [requests, setRequests] = useState<HRRequest[]>(SAMPLE_HR_REQUESTS);

  return {
    requests,
    setRequests,
  };
};

// useMaintenanceData Hook - Manages maintenance records state
import { useState } from 'react';
import { MOCK_MAINTENANCE_DATA, type MaintenanceRecord } from '../data/maintenance.data';

export const useMaintenanceData = () => {
  const [maintenanceData, setMaintenanceData] = useState<MaintenanceRecord[]>(MOCK_MAINTENANCE_DATA);

  return {
    maintenanceData,
    setMaintenanceData,
  };
};

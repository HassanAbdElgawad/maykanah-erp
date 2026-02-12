import { useState } from 'react';
import { workOrdersData, type WorkOrder } from '@/data/competitions/work-orders.data';

export const useWorkOrdersData = () => {
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>(workOrdersData);

  return {
    workOrders,
    setWorkOrders,
  };
};

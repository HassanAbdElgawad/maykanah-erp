import { useState } from 'react';
import {
  PurchaseOrderAnalysis,
  purchaseOrdersAnalysisData,
} from '@/data/reports/purchases/purchase-orders-analysis.data';

export const usePurchaseOrdersAnalysisData = () => {
  const [purchaseOrders, setPurchaseOrders] = useState<PurchaseOrderAnalysis[]>(
    purchaseOrdersAnalysisData
  );

  return { purchaseOrders, setPurchaseOrders };
};

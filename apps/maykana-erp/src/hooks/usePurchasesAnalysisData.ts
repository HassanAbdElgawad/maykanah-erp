import { useState } from 'react';
import { PurchasesAnalysis, purchasesAnalysisData } from '../data/purchases-analysis.data';

export const usePurchasesAnalysisData = () => {
  const [purchasesAnalysis, setPurchasesAnalysis] =
    useState<PurchasesAnalysis[]>(purchasesAnalysisData);

  return { purchasesAnalysis, setPurchasesAnalysis };
};

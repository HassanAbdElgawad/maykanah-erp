// Financial Claim data for Competitions module

export interface FinancialClaim {
  id: number;
  supplier: string;
  claimNumber: string;
  supplierType: string;
  project: string;
  confirmationDate: string;
  competitionNumber: string;
}

export const financialClaimData: FinancialClaim[] = [
  {
    id: 1,
    supplier: 'أحمد عبد السلام',
    claimNumber: '15123222121',
    supplierType: 'جهة حكومية',
    project: 'مشروع معين',
    confirmationDate: '2023-12-9',
    competitionNumber: '252111373734',
  },
  {
    id: 2,
    supplier: 'عمر السعيد',
    claimNumber: '15123222121',
    supplierType: 'جهة حكومية',
    project: 'مشروع معين',
    confirmationDate: '2023-2-20',
    competitionNumber: '25211737311',
  },
  {
    id: 3,
    supplier: 'يوسف الحجار',
    claimNumber: '15123222121',
    supplierType: 'جهة حكومية',
    project: 'مشروع معين',
    confirmationDate: '2023-2-15',
    competitionNumber: '252113634611',
  },
  {
    id: 4,
    supplier: 'خالد فؤاد',
    claimNumber: '15123222121',
    supplierType: 'جهة حكومية',
    project: 'مشروع معين',
    confirmationDate: '2020-2-10',
    competitionNumber: '25211163463',
  },
];

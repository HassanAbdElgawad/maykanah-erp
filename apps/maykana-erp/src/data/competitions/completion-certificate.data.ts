// Completion Certificate data for Competitions module

export interface CompletionCertificate {
  id: number;
  supplier: string;
  certificateNumber: string;
  supplierType: string;
  project: string;
  confirmationDate: string;
  competitionNumber: string;
}

export const completionCertificateData: CompletionCertificate[] = [
  {
    id: 1,
    supplier: 'أحمد عبد السلام',
    certificateNumber: '15123222121',
    supplierType: 'جهة حكومية',
    project: 'مشروع معين',
    confirmationDate: '2023-12-9',
    competitionNumber: '252111373734',
  },
  {
    id: 2,
    supplier: 'عمر السعيد',
    certificateNumber: '15123222121',
    supplierType: 'جهة حكومية',
    project: 'مشروع معين',
    confirmationDate: '2023-2-20',
    competitionNumber: '25211737311',
  },
  {
    id: 3,
    supplier: 'يوسف الحجار',
    certificateNumber: '15123222121',
    supplierType: 'جهة حكومية',
    project: 'مشروع معين',
    confirmationDate: '2023-2-15',
    competitionNumber: '252113634611',
  },
  {
    id: 4,
    supplier: 'خالد فؤاد',
    certificateNumber: '15123222121',
    supplierType: 'جهة حكومية',
    project: 'مشروع معين',
    confirmationDate: '2020-2-10',
    competitionNumber: '25211163463',
  },
];

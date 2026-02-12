// Award Confirmation data for Competitions module

export interface AwardConfirmation {
  id: number;
  supplierName: string;
  description: string;
  supplierType: string;
  project: string;
  confirmationDate: string;
  confirmationNumber: string;
}

export const awardConfirmationData: AwardConfirmation[] = [
  {
    id: 1,
    supplierName: 'أحمد عبد السلام',
    description: 'اسم وصف العقار هنا',
    supplierType: 'جهة حكومية',
    project: 'مشروع معين',
    confirmationDate: '2023-12-09',
    confirmationNumber: '252111373734',
  },
  {
    id: 2,
    supplierName: 'عمر السعيد',
    description: 'اسم وصف العقار هنا',
    supplierType: 'جهة حكومية',
    project: 'مشروع معين',
    confirmationDate: '2023-02-20',
    confirmationNumber: '25211737311',
  },
  {
    id: 3,
    supplierName: 'يوسف التجار',
    description: 'اسم وصف العقار هنا',
    supplierType: 'جهة حكومية',
    project: 'مشروع معين',
    confirmationDate: '2023-02-15',
    confirmationNumber: '252113634611',
  },
  {
    id: 4,
    supplierName: 'خالد فؤاد',
    description: 'اسم وصف العقار هنا',
    supplierType: 'جهة حكومية',
    project: 'مشروع معين',
    confirmationDate: '2020-02-10',
    confirmationNumber: '25211163463',
  },
];

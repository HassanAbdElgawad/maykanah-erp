// Award data for Competitions module

export interface AwardData {
  id: string;
  competitionTitle: string;
  competitionNumber: string;
  supplierType: string;
  project: string;
  supplierName: string;
  awardNumber: string;
}

export const awardData: AwardData[] = [
  {
    id: '1',
    competitionTitle: 'أحمد عبد السلام',
    competitionNumber: '252111373734',
    supplierType: 'جهة حكومية',
    project: 'مشروع معين',
    supplierName: 'اسم المورد الفائز هنا',
    awardNumber: '2023-12-9',
  },
  {
    id: '2',
    competitionTitle: 'عمر السعيد',
    competitionNumber: '25211737311',
    supplierType: 'جهة حكومية',
    project: 'مشروع معين',
    supplierName: 'اسم المورد الفائز هنا',
    awardNumber: '2023-2-20',
  },
  {
    id: '3',
    competitionTitle: 'يوسف الحجار',
    competitionNumber: '252113634611',
    supplierType: 'جهة حكومية',
    project: 'مشروع معين',
    supplierName: 'اسم المورد الفائز هنا',
    awardNumber: '2023-2-15',
  },
  {
    id: '4',
    competitionTitle: 'خالد فؤاد',
    competitionNumber: '25211163463',
    supplierType: 'جهة حكومية',
    project: 'مشروع معين',
    supplierName: 'اسم المورد الفائز هنا',
    awardNumber: '2020-2-10',
  },
];

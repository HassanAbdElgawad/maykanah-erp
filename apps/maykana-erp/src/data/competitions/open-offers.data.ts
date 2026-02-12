// Open Offers data for Competitions module

export interface OpenOffer {
  id: string;
  competitionTitle: string;
  supplierNumber: string;
  supplierType: string;
  project: string;
  supplierNumber2: string;
  competitionNumber: string;
}

export const openOffersData: OpenOffer[] = [
  {
    id: '1',
    competitionTitle: 'أحمد عبد السلام',
    supplierNumber: '2522169654126',
    supplierType: 'جهة حكومية',
    project: 'مشروع معين',
    supplierNumber2: '2023-12-9',
    competitionNumber: '25211137373734',
  },
  {
    id: '2',
    competitionTitle: 'عمر السعيد',
    supplierNumber: '2511685255556',
    supplierType: 'جهة حكومية',
    project: 'مشروع معين',
    supplierNumber2: '2023-2-20',
    competitionNumber: '25211737311',
  },
  {
    id: '3',
    competitionTitle: 'يوسف الحجار',
    supplierNumber: '251165552256',
    supplierType: 'جهة حكومية',
    project: 'مشروع معين',
    supplierNumber2: '2023-2-15',
    competitionNumber: '25211363463411',
  },
  {
    id: '4',
    competitionTitle: 'خالد فؤاد',
    supplierNumber: '2511636985216',
    supplierType: 'جهة حكومية',
    project: 'مشروع معين',
    supplierNumber2: '2020-2-10',
    competitionNumber: '25211163463',
  },
];

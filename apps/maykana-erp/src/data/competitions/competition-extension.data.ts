// Competition Extension data for Competitions module

export interface CompetitionExtension {
  id: string;
  name: string;
  recordNumber: string;
  entityType: string;
  source: string;
  recordDate: string;
  accountNumber: string;
}

export const competitionExtensionData: CompetitionExtension[] = [
  {
    id: '1',
    name: 'أحمد عبد السلام',
    recordNumber: '2522169654126',
    entityType: 'جهة حكومية',
    source: 'جهة حكومية',
    recordDate: '2023-12-9',
    accountNumber: '25211137373734',
  },
  {
    id: '2',
    name: 'عمر السعيد',
    recordNumber: '2511685255556',
    entityType: 'جهة حكومية',
    source: 'جهة حكومية',
    recordDate: '2023-2-20',
    accountNumber: '25211737311',
  },
  {
    id: '3',
    name: 'يوسف الحجار',
    recordNumber: '251165552256',
    entityType: 'جهة حكومية',
    source: 'جهة حكومية',
    recordDate: '2023-2-15',
    accountNumber: '25211363463411',
  },
  {
    id: '4',
    name: 'خالد فؤاد',
    recordNumber: '2511636985216',
    entityType: 'جهة حكومية',
    source: 'جهة حكومية',
    recordDate: '2020-2-10',
    accountNumber: '25211163463',
  },
];

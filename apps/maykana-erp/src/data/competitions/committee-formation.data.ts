// Committee Formation data for Competitions module

export interface CommitteeFormation {
  id: string;
  name: string;
  registrationNumber: string;
  vendorType: string;
  nationality: string;
  commercialRegister: string;
  accountNumber: string;
}

export const committeeFormationData: CommitteeFormation[] = [
  {
    id: '1',
    name: 'أحمد عبد السلام',
    registrationNumber: '2522169654126',
    vendorType: 'حرية حكومية',
    nationality: 'حرية حكومية',
    commercialRegister: '2023-12-9',
    accountNumber: '25211137373734',
  },
  {
    id: '2',
    name: 'عمر السعيد',
    registrationNumber: '2511685255556',
    vendorType: 'حرية حكومية',
    nationality: 'حرية حكومية',
    commercialRegister: '2023-2-20',
    accountNumber: '25211737311',
  },
  {
    id: '3',
    name: 'يوسف الحجار',
    registrationNumber: '251165552256',
    vendorType: 'حرية حكومية',
    nationality: 'حرية حكومية',
    commercialRegister: '2023-2-15',
    accountNumber: '25211363463411',
  },
  {
    id: '4',
    name: 'خالد فؤاد',
    registrationNumber: '2511636985216',
    vendorType: 'حرية حكومية',
    nationality: 'حرية حكومية',
    commercialRegister: '2020-2-10',
    accountNumber: '25211163463',
  },
];

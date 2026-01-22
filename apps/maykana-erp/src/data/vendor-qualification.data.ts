// Vendor Qualification Data - Sample vendors for vendor qualification
export interface Vendor {
  id: string;
  name: string;
  registrationNumber: string;
  vendorType: string;
  nationality: string;
  commercialRegister: string;
  accountNumber: string;
}

export const MOCK_VENDORS: Vendor[] = [
  {
    id: '1',
    name: 'أحمد عبد السلام',
    registrationNumber: '2522169654126',
    vendorType: 'جهه حكومية',
    nationality: 'جنسية معين',
    commercialRegister: '9 - 12 - 2023',
    accountNumber: '252111373734',
  },
  {
    id: '2',
    name: 'عمر السعيد',
    registrationNumber: '2511685255556',
    vendorType: 'جهه حكومية',
    nationality: 'جنسية معين',
    commercialRegister: '20 - 2 - 2023',
    accountNumber: '25211737311',
  },
  {
    id: '3',
    name: 'يوسف النجار',
    registrationNumber: '251165552256',
    vendorType: 'جهه حكومية',
    nationality: 'جنسية معين',
    commercialRegister: '15 - 2 - 2023',
    accountNumber: '252113634611',
  },
  {
    id: '4',
    name: 'خالد فؤاد',
    registrationNumber: '2511636985216',
    vendorType: 'جهه حكومية',
    nationality: 'جنسية معين',
    commercialRegister: '10 - 2 - 2020',
    accountNumber: '25211163463',
  },
];

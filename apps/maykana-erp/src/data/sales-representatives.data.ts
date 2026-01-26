export interface SalesRepresentativeItem {
  id: number;
  jobName: string;
  itemCode: string;
  date: string;
  percentage: number;
}

export interface SalesRepresentative {
  id: number;
  name: string;
  nameEn?: string;
  nationality: string;
  mobileNumber: string;
  email: string;
  invoiceCommission: boolean;
  invoiceCommissionPercentage: number;
  itemCommission: boolean;
  itemGroup?: string;
  items: SalesRepresentativeItem[];
}

export const salesRepresentativesData: SalesRepresentative[] = [
  {
    id: 1,
    name: 'ناكي',
    nameEn: 'Naki',
    nationality: 'جمهورية مصر العربية',
    mobileNumber: '547812300015',
    email: 'jamal.almaliki@example.com',
    invoiceCommission: true,
    invoiceCommissionPercentage: 15,
    itemCommission: true,
    itemGroup: 'أيفون',
    items: [
      {
        id: 1,
        jobName: 'أحمد الخالدي',
        itemCode: 'هاتف أيفون',
        date: '2025-01-15',
        percentage: 15,
      },
    ],
  },
  {
    id: 2,
    name: 'التمويل العربية',
    nameEn: 'Arab Finance',
    nationality: 'المملكة العربية السعودية',
    mobileNumber: '592341876022',
    email: 'ahmed.altamimi@example.com',
    invoiceCommission: true,
    invoiceCommissionPercentage: 15,
    itemCommission: false,
    items: [],
  },
  {
    id: 3,
    name: 'مرعي العربية',
    nameEn: 'Marai Arabia',
    nationality: 'دولة الإمارات العربية المتحدة',
    mobileNumber: '509876543037',
    email: 'layla.almansouri@example.com',
    invoiceCommission: true,
    invoiceCommissionPercentage: 15,
    itemCommission: false,
    items: [],
  },
  {
    id: 4,
    name: 'الرياض',
    nameEn: 'Riyadh',
    nationality: 'دولة قطر',
    mobileNumber: '577722200044',
    email: 'nasser.alotaibi@example.com',
    invoiceCommission: true,
    invoiceCommissionPercentage: 15,
    itemCommission: false,
    items: [],
  },
  {
    id: 5,
    name: 'الوديد',
    nameEn: 'Al Wadid',
    nationality: 'دولة الكويت',
    mobileNumber: '511223344059',
    email: 'salwa.alyousef@example.com',
    invoiceCommission: true,
    invoiceCommissionPercentage: 15,
    itemCommission: false,
    items: [],
  },
  {
    id: 6,
    name: 'التوحيد والنور',
    nameEn: 'Al Tawheed Wal Noor',
    nationality: 'مملكة البحرين',
    mobileNumber: '563452910063',
    email: 'omar.alghamdi@example.com',
    invoiceCommission: true,
    invoiceCommissionPercentage: 15,
    itemCommission: false,
    items: [],
  },
  {
    id: 7,
    name: 'عقطان',
    nameEn: 'Aqtan',
    nationality: 'سلطنة عمان',
    mobileNumber: '533388899082',
    email: 'ziyad.alqahtani@example.com',
    invoiceCommission: true,
    invoiceCommissionPercentage: 15,
    itemCommission: false,
    items: [],
  },
  {
    id: 8,
    name: 'الجدة',
    nameEn: 'Jeddah',
    nationality: 'المملكة الأردنية الهاشمية',
    mobileNumber: '528739461078',
    email: 'rana.alharbi@example.com',
    invoiceCommission: true,
    invoiceCommissionPercentage: 15,
    itemCommission: false,
    items: [],
  },
];

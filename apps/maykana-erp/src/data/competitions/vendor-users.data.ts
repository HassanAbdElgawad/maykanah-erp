// Vendor Users data for Competitions module

export interface VendorUser {
  id: string;
  establishment: string;
  branch: string;
  vendorName: string;
  userName: string;
  vendorNumber: string;
  status: 'active' | 'inactive';
}

export const vendorUsersData: VendorUser[] = [
  {
    id: '1',
    establishment: 'اسم المنشأة',
    branch: 'اسم الفرع هنا',
    vendorName: 'اسم المورد هنا',
    userName: 'اسم المستخدم هنا',
    vendorNumber: '9 - 12 - 2023',
    status: 'active',
  },
  {
    id: '2',
    establishment: 'اسم المنشأة',
    branch: 'اسم الفرع هنا',
    vendorName: 'اسم المورد هنا',
    userName: 'اسم المستخدم هنا',
    vendorNumber: '20 - 2 - 2023',
    status: 'active',
  },
  {
    id: '3',
    establishment: 'اسم المنشأة',
    branch: 'اسم الفرع هنا',
    vendorName: 'اسم المورد هنا',
    userName: 'اسم المستخدم هنا',
    vendorNumber: '15 - 2 - 2023',
    status: 'active',
  },
  {
    id: '4',
    establishment: 'اسم المنشأة',
    branch: 'اسم الفرع هنا',
    vendorName: 'اسم المورد هنا',
    userName: 'اسم المستخدم هنا',
    vendorNumber: '10 - 2 - 2020',
    status: 'active',
  },
];

// Vendor Notifications data for Competitions module

export interface VendorNotification {
  id: string;
  supplierName: string;
  notificationTitle: string;
  notificationNumber: string;
  notificationDate: string;
  notificationDetails: string;
  notificationType: string;
}

export const vendorNotificationsData: VendorNotification[] = [
  {
    id: '1',
    supplierName: 'أحمد عبد السلام',
    notificationTitle: 'عنوان الإشعار',
    notificationNumber: '2522169654126',
    notificationDate: '2023-12-9',
    notificationDetails: 'رقم الإشعار',
    notificationType: 'حرية حكومية',
  },
  {
    id: '2',
    supplierName: 'عمر السعيد',
    notificationTitle: 'عنوان الإشعار',
    notificationNumber: '2511685255556',
    notificationDate: '2023-2-20',
    notificationDetails: 'رقم الإشعار',
    notificationType: 'حرية حكومية',
  },
  {
    id: '3',
    supplierName: 'يوسف الحجار',
    notificationTitle: 'عنوان الإشعار',
    notificationNumber: '251165552256',
    notificationDate: '2023-2-15',
    notificationDetails: 'رقم الإشعار',
    notificationType: 'حرية حكومية',
  },
  {
    id: '4',
    supplierName: 'خالد فؤاد',
    notificationTitle: 'عنوان الإشعار',
    notificationNumber: '2511636985216',
    notificationDate: '2020-2-10',
    notificationDetails: 'رقم الإشعار',
    notificationType: 'حرية حكومية',
  },
];

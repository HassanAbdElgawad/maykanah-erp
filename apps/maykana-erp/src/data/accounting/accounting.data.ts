// Accounting feature cards data
export const accountingFeatureCards = [
  {
    id: 'accounting-entries',
    title: 'القيود المحاسبية',
    description: 'تسجيل العمليات المالية في الدفاتر.',
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-receipt-item.svg',
    bgColor: 'bg-[#07b6641a]',
    borderColor: 'border-[#f0f4f7]',
    route: '/accounting4',
  },
  {
    id: 'cash-custody',
    title: 'العهد النقدية',
    description: 'المبالغ التي تصرف مؤقتا وتسوى لاحقا.',
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-money-recive.svg',
    bgColor: 'bg-[#97c8091a]',
    borderColor: '',
    route: '/accounting5',
  },
  {
    id: 'receipt-documents',
    title: 'مستندات القبض',
    description: 'توثيق المبالغ المالية الواردة.',
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-receipt.svg',
    bgColor: 'bg-[#0b72211a]',
    borderColor: '',
    route: '/accounting6',
  },
  {
    id: 'payment-documents',
    title: 'مستندات الدفع',
    description: 'توثيق المبالغ المالية الصادرة.',
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-receipt-2.svg',
    bgColor: 'bg-[#11383f1a]',
    borderColor: '',
    route: '/accounting7',
  },
];

// Sidebar menu items
export const sidebarMenuItems = [
  {
    id: 'home',
    title: 'الرئيسية',
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-15.png',
    isActive: false,
    hasDropdown: true,
  },
  {
    id: 'inbox',
    title: 'صندوق الوارد',
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-directbox-receive.svg',
    isActive: false,
    hasDropdown: true,
    badge: '10',
  },
  {
    id: 'accounting-management',
    title: 'إدارة الحسابات',
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-17.svg',
    isActive: true,
    hasDropdown: true,
    route: '/accounting',
  },
  {
    id: 'purchases-management',
    title: 'إدارة المشتريات',
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-9.svg',
    isActive: false,
    hasDropdown: true,
  },
  {
    id: 'sales-management',
    title: 'إدارة المبيعات',
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-16.svg',
    isActive: false,
    hasDropdown: true,
  },
  {
    id: 'tenders-management',
    title: 'إدارة المنافسات',
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-receipt-edit.svg',
    isActive: false,
    hasDropdown: true,
  },
  {
    id: 'assets-management',
    title: 'إدارة الأصول',
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2.svg',
    isActive: false,
    hasDropdown: true,
  },
  {
    id: 'hr-management',
    title: 'إدارة الموارد البشرية',
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-1.svg',
    isActive: false,
    hasDropdown: true,
  },
  {
    id: 'projects-management',
    title: 'إدارة المشاريع',
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-3.png',
    isActive: false,
    hasDropdown: true,
  },
  {
    id: 'strategy-management',
    title: 'إدارة الإستراتيجية',
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-2.svg',
    isActive: false,
    hasDropdown: true,
  },
  {
    id: 'warehouses-management',
    title: 'إدارة المستودعات',
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-10.png',
    isActive: false,
    hasDropdown: true,
  },
];

// Bottom menu items
export const bottomMenuItems = [
  {
    id: 'reports',
    title: 'التقارير',
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/status-up-3.png',
    hasDropdown: true,
  },
  {
    id: 'settings',
    title: 'الإعدادات',
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/home-2-7.png',
    hasDropdown: true,
  },
  {
    id: 'support',
    title: 'الدعم الفني',
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-home-2-7.svg',
    hasDropdown: true,
    status: 'متصل',
  },
];

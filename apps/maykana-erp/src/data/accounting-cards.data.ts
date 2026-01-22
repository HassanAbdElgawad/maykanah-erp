// Accounting Feature Cards Data
export interface AccountingCard {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  iconColor: string;
  path: string;
}

export const getAccountingCards = (t: (key: string) => string): AccountingCard[] => [
  {
    title: t('accounting.accounting_entries'),
    description: t('accounting.accounting_entries_desc'),
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-receipt-item.svg',
    bgColor: '#f5faf5',
    iconColor: '#388e3c',
    path: '/accounting/entries',
  },
  {
    title: t('accounting.cash_custody'),
    description: t('accounting.cash_custody_desc'),
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-money-recive.svg',
    bgColor: '#fffef5',
    iconColor: '#f9a825',
    path: '',
  },
  {
    title: t('accounting.receipt_documents'),
    description: t('accounting.receipt_documents_desc'),
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-receipt.svg',
    bgColor: '#f0faf9',
    iconColor: '#00897b',
    path: '',
  },
  {
    title: t('accounting.payment_documents'),
    description: t('accounting.payment_documents_desc'),
    icon: 'https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-receipt-2.svg',
    bgColor: '#f0f7ff',
    iconColor: '#1976d2',
    path: '',
  },
];

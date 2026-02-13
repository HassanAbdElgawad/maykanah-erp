// Payment Methods data for Settings module

export interface PaymentMethod {
  id: string;
  name: string;
  type: string;
  linkedAccount: string;
  isActive: boolean;
}

const paymentMethodsData: PaymentMethod[] = [
  { id: '1', name: 'نقدي من الصندوق', type: 'نقدي', linkedAccount: '2300- حساب المبيعات', isActive: true },
  { id: '2', name: 'بنك الراجحي', type: 'بنك', linkedAccount: '2300- حساب المشتريات', isActive: true },
];

export const getPaymentMethodsSampleData = (): PaymentMethod[] => [...paymentMethodsData];

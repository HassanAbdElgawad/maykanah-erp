// Price Quotes Data - Sales price quotes management
export type PriceQuoteStatus = 'active' | 'expired' | 'pending';

export interface PriceQuoteItem {
  id: number;
  itemName: string;
  quantity: number;
  unitPrice: number;
  discount: number;
  tax: number;
  total: number;
}

export interface PriceQuote {
  id: number;
  quoteNumber: string;
  customer: string;
  quoteDate: string;
  salesRep: string;
  status: PriceQuoteStatus;
  items: PriceQuoteItem[];
  subtotal: number;
  taxAmount: number;
  discount: number;
  total: number;
  validUntil?: string;
  terms?: string;
  notes?: string;
}

export const priceQuotesData: PriceQuote[] = [
  {
    id: 1,
    quoteNumber: 'RFQ-001',
    customer: 'اللكنز',
    quoteDate: '13/11/2025',
    salesRep: 'سالم',
    status: 'active',
    items: [
      {
        id: 1,
        itemName: 'تجهيز حاسب آلي من نوع ديل اوبرا فور كري...',
        quantity: 1,
        unitPrice: 2000.0,
        discount: 0,
        tax: 10.5,
        total: 2010.5
      }
    ],
    subtotal: 2000,
    taxAmount: 20,
    discount: 10.5,
    total: 2010.5,
    validUntil: '10/12/2025',
    terms: 'الدفع عند التسليم، 15% خصم',
  },
  {
    id: 2,
    quoteNumber: 'RFQ-002',
    customer: 'شركة التمويل العربية',
    quoteDate: '01/11/2025',
    salesRep: 'عبد الرحمن المجيدة',
    status: 'active',
    items: [],
    subtotal: 0,
    taxAmount: 0,
    discount: 0,
    total: 0,
  },
  {
    id: 3,
    quoteNumber: 'RFQ-003',
    customer: 'شركة مركز العربية',
    quoteDate: '10/04/2025',
    salesRep: 'العبدي وجودكاراج',
    status: 'expired',
    items: [],
    subtotal: 0,
    taxAmount: 0,
    discount: 0,
    total: 0,
  },
  {
    id: 4,
    quoteNumber: 'RFQ-004',
    customer: 'شركة الرياض',
    quoteDate: '10/05/2025',
    salesRep: 'الباشم',
    status: 'pending',
    items: [],
    subtotal: 0,
    taxAmount: 0,
    discount: 0,
    total: 0,
  },
  {
    id: 5,
    quoteNumber: 'RFQ-005',
    customer: 'شركة التوريد',
    quoteDate: '11/03/2025',
    salesRep: 'العبد الكريم',
    status: 'pending',
    items: [],
    subtotal: 0,
    taxAmount: 0,
    discount: 0,
    total: 0,
  },
  {
    id: 6,
    quoteNumber: 'RFQ-006',
    customer: 'شركة التوحيد والنور',
    quoteDate: '10/01/2025',
    salesRep: 'السام وراشد',
    status: 'pending',
    items: [],
    subtotal: 0,
    taxAmount: 0,
    discount: 0,
    total: 0,
  },
  {
    id: 7,
    quoteNumber: 'RFQ-007',
    customer: 'شركة عفافان',
    quoteDate: '10/03/2025',
    salesRep: 'العدل',
    status: 'pending',
    items: [],
    subtotal: 0,
    taxAmount: 0,
    discount: 0,
    total: 0,
  },
  {
    id: 8,
    quoteNumber: 'RFQ-008',
    customer: 'شركة المتحدة',
    quoteDate: '10/05/2025',
    salesRep: 'العدلان',
    status: 'pending',
    items: [],
    subtotal: 0,
    taxAmount: 0,
    discount: 0,
    total: 0,
  },
];

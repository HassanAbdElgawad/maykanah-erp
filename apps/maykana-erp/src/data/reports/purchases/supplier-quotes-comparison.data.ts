export interface SupplierQuoteComparison {
  id: string;
  supplier: string;
  categoryName: string;
  rfqNumber: string;
  attribute: string;
  quantity: number;
  price: number;
  total: number;
  unit: string;
  currency: string;
  supplierQuoteNumber: string;
  validUntilDate: string;
}

export const supplierQuotesComparisonData: SupplierQuoteComparison[] = [
  {
    id: '1',
    supplier: 'شركة أفاق بحد الجدية',
    categoryName: 'أبيكو 717 ومانكس 512 حريتا',
    rfqNumber: 'RFQ-00001',
    attribute: 'وحدة',
    quantity: 3,
    price: 4500,
    total: 13500,
    unit: 'وحدة',
    currency: 'SAR',
    supplierQuoteNumber: 'SQ-00001',
    validUntilDate: '11/15/2025',
  },
  {
    id: '2',
    supplier: 'شركة اماوار الخليج',
    categoryName: '',
    rfqNumber: 'RFQ-00001',
    attribute: 'وحدة',
    quantity: 3,
    price: 4500,
    total: 13800,
    unit: 'وحدة',
    currency: 'SAR',
    supplierQuoteNumber: 'SQ-00002',
    validUntilDate: '11/15/2025',
  },
];

export interface ItemsRequiredOrderReceipt {
  id: string;
  materialRequest: string;
  date: string;
  requiredDate: string;
  itemCode: string;
  itemName: string;
  description: string;
  majorUnit: string;
  itemUnit: string;
  quantity: number;
  quantityMinorUnit: number;
  quantityReceived: number;
}

export const itemsRequiredOrderReceiptData: ItemsRequiredOrderReceipt[] = [
  {
    id: '1',
    materialRequest: 'MR-00002',
    date: '2/9/2025',
    requiredDate: '2/9/2025',
    itemCode: 'A-10222',
    itemName: 'ايفون 17 برو ماكس',
    description: 'كرتون',
    majorUnit: 'PO-00001',
    itemUnit: 'وحدة',
    quantity: 2,
    quantityMinorUnit: 48,
    quantityReceived: 24,
  },
  {
    id: '2',
    materialRequest: 'MR-00002',
    date: '2/9/2025',
    requiredDate: '2/9/2025',
    itemCode: 'A-10222',
    itemName: 'ايفون 17 برو ماكس',
    description: 'وحدة',
    majorUnit: 'PO-00001',
    itemUnit: 'وحدة',
    quantity: 3,
    quantityMinorUnit: 3,
    quantityReceived: 1,
  },
];

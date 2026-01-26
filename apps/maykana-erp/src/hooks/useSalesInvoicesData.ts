import { useState } from 'react';
import { salesInvoicesData, type SalesInvoice } from '../data/sales-invoices.data';

export function useSalesInvoicesData() {
  const [salesInvoices, setSalesInvoices] = useState<SalesInvoice[]>(salesInvoicesData);

  return { salesInvoices, setSalesInvoices };
}

import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Layout } from '../../components/Layout';
import { AdvancedTable } from '../../components/ui/Table';
import { usePurchasesAnalysisData } from '../../hooks';
import { DownloadIcon, ColumnsIcon } from 'lucide-react';

export function PurchasesAnalysis() {
  const { t } = useLanguage();
  const { purchasesAnalysis } = usePurchasesAnalysisData();
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedSupplier, setSelectedSupplier] = useState('');
  const [selectedInvoice, setSelectedInvoice] = useState('');

  const columns = [
    {
      key: 'invoiceNumber',
      label: t('purchases_analysis.invoice_number'),
      sortable: true,
    },
    {
      key: 'date',
      label: t('purchases_analysis.date'),
      sortable: true,
    },
    {
      key: 'supplier',
      label: t('purchases_analysis.supplier'),
      sortable: true,
    },
    {
      key: 'purchaseOrder',
      label: t('purchases_analysis.purchase_order'),
      sortable: true,
    },
    {
      key: 'project',
      label: t('purchases_analysis.project'),
      sortable: true,
    },
    {
      key: 'totalBeforeTax',
      label: t('purchases_analysis.total_before_tax'),
      sortable: true,
      render: (row: any) => row.totalBeforeTax.toLocaleString(),
    },
    {
      key: 'taxAmount',
      label: t('purchases_analysis.tax_amount'),
      sortable: true,
      render: (row: any) => row.taxAmount.toLocaleString(),
    },
    {
      key: 'totalWithTax',
      label: t('purchases_analysis.total_with_tax'),
      sortable: true,
      render: (row: any) => row.totalWithTax.toLocaleString(),
    },
    {
      key: 'status',
      label: t('purchases_analysis.status'),
      sortable: true,
    },
  ];

  return (
    <Layout>
      <div className="p-6" style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}>
        {/* Header */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-[#0c4749]">{t('purchases_analysis.title')}</h1>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            >
              <ColumnsIcon className="w-4 h-4" />
              {t('common.show_hide_columns')}
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            >
              <DownloadIcon className="w-4 h-4" />
              {t('common.download')}
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Date From */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            >
              {t('purchases_analysis.date_from')}
            </label>
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>

          {/* Date To */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            >
              {t('purchases_analysis.date_to')}
            </label>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>

          {/* Supplier */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            >
              {t('purchases_analysis.supplier_filter')}
            </label>
            <input
              type="text"
              value={selectedSupplier}
              onChange={(e) => setSelectedSupplier(e.target.value)}
              placeholder={t('purchases_analysis.supplier_placeholder')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>

          {/* Invoice Number */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            >
              {t('purchases_analysis.invoice_filter')}
            </label>
            <input
              type="text"
              value={selectedInvoice}
              onChange={(e) => setSelectedInvoice(e.target.value)}
              placeholder={t('purchases_analysis.invoice_placeholder')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow">
          <AdvancedTable data={purchasesAnalysis} columns={columns} />
        </div>
      </div>
    </Layout>
  );
}

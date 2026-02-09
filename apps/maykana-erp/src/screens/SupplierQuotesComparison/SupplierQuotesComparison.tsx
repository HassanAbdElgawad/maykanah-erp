import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Layout } from '../../components/Layout';
import { AdvancedTable } from '../../components/ui/Table';
import { useSupplierQuotesComparisonData } from '../../hooks';
import { DownloadIcon, ColumnsIcon } from 'lucide-react';

export function SupplierQuotesComparison() {
  const { t } = useLanguage();
  const { quotesComparison } = useSupplierQuotesComparisonData();
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedSupplier, setSelectedSupplier] = useState('');
  const [selectedRFQ, setSelectedRFQ] = useState('');

  const columns = [
    {
      key: 'categoryName',
      label: t('supplier_quotes.category_name'),
      sortable: true,
    },
    {
      key: 'supplier',
      label: t('supplier_quotes.supplier'),
      sortable: true,
    },
    {
      key: 'rfqNumber',
      label: t('supplier_quotes.rfq_number'),
      sortable: true,
    },
    {
      key: 'attribute',
      label: t('supplier_quotes.attribute'),
      sortable: true,
    },
    {
      key: 'quantity',
      label: t('supplier_quotes.quantity'),
      sortable: true,
    },
    {
      key: 'price',
      label: t('supplier_quotes.price'),
      sortable: true,
      render: (row: any) => row.price.toLocaleString(),
    },
    {
      key: 'total',
      label: t('supplier_quotes.total'),
      sortable: true,
      render: (row: any) => row.total.toLocaleString(),
    },
    {
      key: 'unit',
      label: t('supplier_quotes.unit'),
      sortable: true,
    },
    {
      key: 'currency',
      label: t('supplier_quotes.currency'),
      sortable: true,
    },
    {
      key: 'supplierQuoteNumber',
      label: t('supplier_quotes.supplier_quote_number'),
      sortable: true,
    },
    {
      key: 'validUntilDate',
      label: t('supplier_quotes.valid_until_date'),
      sortable: true,
    },
  ];

  return (
    <Layout>
      <div className="p-6" style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}>
        {/* Header */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-[#0c4749]">{t('supplier_quotes.title')}</h1>

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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('supplier_quotes.date_from')}
            </label>
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('supplier_quotes.date_to')}
            </label>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('supplier_quotes.rfq_number')}
            </label>
            <input
              type="text"
              value={selectedRFQ}
              onChange={(e) => setSelectedRFQ(e.target.value)}
              placeholder={t('supplier_quotes.rfq_placeholder')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('supplier_quotes.supplier')}
            </label>
            <input
              type="text"
              value={selectedSupplier}
              onChange={(e) => setSelectedSupplier(e.target.value)}
              placeholder={t('supplier_quotes.supplier_placeholder')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('supplier_quotes.category')}
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t('supplier_quotes.category_placeholder')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c4749] focus:border-transparent"
              style={{ fontFamily: 'IBM_Plex_Sans_Arabic,Helvetica' }}
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow">
          <AdvancedTable columns={columns} data={quotesComparison} />
        </div>
      </div>
    </Layout>
  );
}

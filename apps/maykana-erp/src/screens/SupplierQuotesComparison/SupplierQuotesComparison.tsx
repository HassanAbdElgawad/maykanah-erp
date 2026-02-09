import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/ui/button';
import { buttonClasses } from '../../styles';
import { AdvancedTable } from '../../components/ui/Table';
import { useSupplierQuotesComparisonData } from '../../hooks';
import { Download, ChevronDown, ArrowRight } from 'lucide-react';
import InitialFilters from '../../components/InitialFilters';

export function SupplierQuotesComparison() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { quotesComparison } = useSupplierQuotesComparisonData();
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedSupplier, setSelectedSupplier] = useState('');
  const [selectedRFQ, setSelectedRFQ] = useState('');
  const [showExportOptions, setShowExportOptions] = useState(false);

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
      <div className="[direction:rtl] space-y-4">
        {/* Header with InitialFilters */}
        <InitialFilters>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/reports?selected=purchases')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
            <span className="text-lg font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              {t('supplier_quotes.title')}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button className={`${buttonClasses.secondary} gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}>
              {t('common.download')}
              <Download className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => setShowExportOptions(!showExportOptions)}
              className={`${buttonClasses.secondary} gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
            >
              {t('common.show_hide_columns')}
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </InitialFilters>

        {/* Filters Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-4" dir="rtl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('supplier_quotes.date_from')}
              </label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('supplier_quotes.date_to')}
              </label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('supplier_quotes.rfq_number')}
              </label>
              <input
                type="text"
                value={selectedRFQ}
                onChange={(e) => setSelectedRFQ(e.target.value)}
                placeholder={t('supplier_quotes.rfq_placeholder')}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('supplier_quotes.supplier')}
              </label>
              <input
                type="text"
                value={selectedSupplier}
                onChange={(e) => setSelectedSupplier(e.target.value)}
                placeholder={t('supplier_quotes.supplier_placeholder')}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('supplier_quotes.category')}
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t('supplier_quotes.category_placeholder')}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e4a3f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <AdvancedTable columns={columns} data={quotesComparison} />
        </div>
      </div>
    </Layout>
  );
}
